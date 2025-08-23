import React from 'react';
import Link from 'next/link';

export default function PersonalDataConsent() {
  return (
    <main style={{maxWidth: 800, margin: '0 auto', padding: '40px 16px', color: '#0a0e1e', fontSize: '20px'}}>
      <h1 style={{color: '#0a0e1e', fontWeight: 900, fontSize: 32, marginBottom: 24}}>Согласие на обработку персональных данных</h1>
      <p>Я, заполняя форму на сайте <b>potolkivip-rnd.ru</b>, подтверждаю своё согласие на обработку моих персональных данных (имя, телефон, email, адрес, параметры заказа) владельцем сайта для целей связи, оформления заявки и оказания услуг.</p>
      <p>Я ознакомлен(а) с <Link href="/privacy-policy" style={{color:'#2563eb'}}>Политикой конфиденциальности</Link> и даю согласие на обработку моих данных в соответствии с ней.</p>
      <p>Согласие действует с момента отправки формы и может быть отозвано по email: <a href="mailto:potolokrostov1@gmail.com">potolokrostov1@gmail.com</a>.</p>
      <p>Дата публикации: {new Date().toLocaleDateString('ru-RU')}</p>
    </main>
  );
}
