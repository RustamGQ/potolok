import { NextRequest, NextResponse } from 'next/server';
import { sendMeasurementEmail } from '../../../lib/email';

interface MeasurementOrderData {
  id: string;
  name: string;
  phone: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  area: number;
  createdAt: string;
  status?: string;
  type?: string;
  roomType: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Получен запрос на замер:', body);
    }
    
    // Валидация данных
    if (!body.name || !body.phone || !body.address || !body.preferredDate || !body.preferredTime) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Ошибка валидации: не все поля заполнены');
      }
      return NextResponse.json(
        { error: 'Не все обязательные поля заполнены' },
        { status: 400 }
      );
    }

    // Генерация уникального номера заявки
    const orderData: MeasurementOrderData = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      ...body,
      createdAt: new Date().toISOString(),
      status: 'new',
      type: 'measurement'
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('Новая заявка на замер:', orderData);
    }

    // Отправка уведомления на телефон (здесь будет интеграция с SMS сервисом)
    await sendSMSNotification(orderData);
    
    // Отправка уведомления на email (временно отключено)
    try {
      const emailSent = await sendMeasurementEmail(orderData);
      if (!emailSent) {
        if (process.env.NODE_ENV === 'development') {
          console.log('⚠️ Email не отправлен, но заявка сохранена');
        }
      }
    } catch (emailError) {
      if (process.env.NODE_ENV === 'development') {
        console.log('⚠️ Email отправка временно отключена:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      orderId: orderData.id,
      message: 'Заявка на замер успешно создана'
    });

  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Ошибка при создании заявки на замер:', error);
    }
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}

async function sendSMSNotification(orderData: MeasurementOrderData) {
  // Здесь будет интеграция с SMS сервисом (например, SMS.ru, Twilio)
  if (process.env.NODE_ENV === 'development') {
    console.log('📱 SMS уведомление отправлено:', {
    to: '+79895234952', // Ваш номер телефона
    message: `Новая заявка на замер #${orderData.id}
Имя: ${orderData.name}
Телефон: ${orderData.phone}
Адрес: ${orderData.address}
Дата: ${orderData.preferredDate} ${orderData.preferredTime}
Тип потолка: ${orderData.service}
Площадь: ${orderData.area} м²`
    });
  }
}


