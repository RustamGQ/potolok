import { NextRequest, NextResponse } from 'next/server';

interface OrderData {
  id: string;
  name: string;
  phone: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  service?: string;
  area?: number;
  createdAt?: string;
  status?: string;
  type?: string;
  email?: string;
  roomType?: string;
  additionalServices?: string[];
  comments?: string;
  totalPrice?: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Валидация данных
    if (!body.name || !body.phone || !body.service || !body.area) {
      return NextResponse.json(
        { error: 'Не все обязательные поля заполнены' },
        { status: 400 }
      );
    }

    // Здесь будет логика сохранения заказа в базу данных
    // Пока что просто логируем и возвращаем успех
    
    const orderData: OrderData = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      ...body,
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    console.log('Новый заказ получен:', orderData);

    // Здесь можно добавить:
    // 1. Сохранение в базу данных
    // 2. Отправку уведомления на email
    // 3. Отправку SMS
    // 4. Интеграцию с CRM системой

    // Имитация отправки уведомления
    await sendNotification(orderData);

    return NextResponse.json({
      success: true,
      orderId: orderData.id,
      message: 'Заказ успешно создан'
    });

  } catch (error) {
    console.error('Ошибка при создании заказа:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}

async function sendNotification(orderData: OrderData) {
  // Имитация отправки уведомления
  console.log('Отправка уведомления о новом заказе:', {
    to: 'admin@potolkivip-rnd.ru',
    subject: `Новый заказ #${orderData.id}`,
    body: `
      Новый заказ потолка:
      
      Номер заказа: ${orderData.id}
      Имя: ${orderData.name}
      Телефон: ${orderData.phone}
      Email: ${orderData.email || 'Не указан'}
      
      Тип потолка: ${orderData.service}
      Площадь: ${orderData.area} м²
      Тип помещения: ${orderData.roomType}
      
      Дополнительные услуги: ${orderData.additionalServices ? orderData.additionalServices.join(', ') : 'Нет'}
      
      Адрес: ${orderData.address || 'Не указан'}
      Желаемая дата: ${orderData.preferredDate || 'Не указана'}
      
      Комментарии: ${orderData.comments || 'Нет'}
      
      Стоимость: ${orderData.totalPrice} ₽
    `
  });
}


