
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export interface EmailData {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  area: number;
  roomType: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  comments?: string;
  createdAt: string;
}

// Функция для отправки заявки в Airtable
async function sendToAirtable(orderData: EmailData) {
  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID;

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`;
  const fields = {
    'Имя': orderData.name,
    'Телефон': orderData.phone,
    'Email': orderData.email || '',
    'Тип потолка': orderData.service,
    'Площадь': orderData.area,
    'Тип помещения': orderData.roomType,
    'Адрес': orderData.address,
    'Дата': orderData.preferredDate,
    'Время': orderData.preferredTime,
    'Комментарий': orderData.comments || '',
    'Дата создания': orderData.createdAt,
    'ID заявки': orderData.id
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ records: [{ fields }] }),
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Airtable API error: ${response.status} ${text}`);
    }
    if (process.env.NODE_ENV === 'development') {
      console.log('🟦 Заявка успешно записана в Airtable');
    }
    return true;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('❌ Ошибка записи в Airtable:', error);
    }
    return false;
  }
}

export async function sendMeasurementEmail(orderData: EmailData) {
  // Сначала отправляем заявку в Airtable
  await sendToAirtable(orderData);
  const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">🎯 Новая заявка на бесплатный замер потолка</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">📋 Информация о заявке</h3>
          <p><strong>Номер заявки:</strong> #${orderData.id}</p>
          <p><strong>Дата создания:</strong> ${new Date(orderData.createdAt).toLocaleString('ru-RU')}</p>
        </div>
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">👤 Контактные данные</h3>
          <p><strong>Имя:</strong> ${orderData.name}</p>
          <p><strong>Телефон:</strong> <a href="tel:${orderData.phone}">${orderData.phone}</a></p>
          ${orderData.email ? `<p><strong>Email:</strong> <a href="mailto:${orderData.email}">${orderData.email}</a></p>` : ''}
        </div>
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">🏠 Параметры проекта</h3>
          <p><strong>Тип потолка:</strong> ${orderData.service}</p>
          <p><strong>Примерная площадь:</strong> ${orderData.area} м²</p>
          <p><strong>Тип помещения:</strong> ${orderData.roomType}</p>
        </div>
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">📅 Время замера</h3>
          <p><strong>Адрес:</strong> ${orderData.address}</p>
          <p><strong>Дата:</strong> ${orderData.preferredDate}</p>
          <p><strong>Время:</strong> ${orderData.preferredTime}</p>
        </div>
        ${orderData.comments ? `
        <div style="background: #f3e8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">💬 Дополнительная информация</h3>
          <p>${orderData.comments}</p>
        </div>
        ` : ''}
        <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <h3 style="color: #dc2626; margin-top: 0;">🚨 СРОЧНО!</h3>
          <p style="font-size: 18px; font-weight: bold;">Перезвоните клиенту в течение 15 минут для подтверждения времени замера!</p>
        </div>
        <div style="text-align: center; margin-top: 30px; color: #6b7280;">
          <p>Это автоматическое уведомление с сайта potolkivip-rnd.ru</p>
        </div>
      </div>
    `;

  const url = 'https://api.sendgrid.com/v3/mail/send';
  const data = {
    personalizations: [
      {
        to: [{ email: ADMIN_EMAIL || 'admin@potolkivip-rnd.ru' }],
        subject: `Новая заявка на замер #${orderData.id}`,
      },
    ],
    from: { email: ADMIN_EMAIL || 'admin@potolkivip-rnd.ru', name: 'Заявки с сайта' },
    content: [
      {
        type: 'text/html',
        value: html,
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`SendGrid API error: ${response.status} ${text}`);
    }
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 Email уведомление успешно отправлено через SendGrid API на:', ADMIN_EMAIL);
    }
    return true;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('❌ Ошибка отправки email через SendGrid API:', error);
    }
    return false;
  }
}

