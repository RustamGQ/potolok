"use client";

import React, { useState } from 'react';
import './orderForm.scss';
import { useGoogleAnalytics } from '../../hooks/useGoogleAnalytics';

interface OrderFormProps {
  initialService?: string;
  initialArea?: number;
  onClose?: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  area: number;
  roomType: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  comments: string;
}

// Кастомный компонент выпадающего списка
interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ 
  value, 
  onChange, 
  options, 
  placeholder = "Выберите опцию",
  label,
  required = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      {label && (
        <label className="custom-select__label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <div className="custom-select__container">
        <button
          type="button"
          className={`custom-select__trigger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        >
          <span className="custom-select__value">
            {value || placeholder}
          </span>
          <svg 
            className={`custom-select__arrow ${isOpen ? 'rotated' : ''}`}
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            <path 
              d="M6 8L10 12L14 8" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {isOpen && (
          <div className="custom-select__dropdown">
            {options.map((option, index) => (
              <button
                key={index}
                type="button"
                className={`custom-select__option ${value === option ? 'selected' : ''}`}
                onClick={() => handleSelect(option)}
              >
                <span className="custom-select__option-text">{option}</span>
                {value === option && (
                  <svg 
                    className="custom-select__check" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path 
                      d="M13.5 4.5L6 12L2.5 8.5" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const services = [
  { id: 'matte', name: 'Матовые потолки', price: 405 },
  { id: 'glossy', name: 'Глянцевые потолки', price: 415 },
  { id: 'colored', name: 'Цветные потолки', price: 450 },
  { id: 'premium', name: 'Премиум потолки', price: 545 },
  { id: 'floating', name: 'Парящий профиль', price: 950 },
  { id: 'photoprint', name: 'Фото печать любой сложности', price: 3900 },
  { id: 'track-surface', name: 'Трек накладной', price: 2100 },
  { id: 'track-recessed', name: 'Трек встроенный', price: 4900 },
  { id: 'track-magnetic', name: 'Магнитные треки', price: 12500 },
  { id: 'light-lines', name: 'Световые линии', price: 3800 },
  { id: 'baget-pvh', name: 'Багет ПВХ', price: 120 },
  { id: 'baget-aluminum', name: 'Багет алюминиевый перфорированный', price: 250 },
  { id: 'cornice-am1', name: 'Карниз Ам 1', price: 3000 },
  { id: 'cornice-pk15', name: 'Карниз Пк15', price: 2500 },
  { id: 'cornice-pk14', name: 'Карниз Пк 14', price: 3500 }
];

const roomTypes = [
  'Гостиная',
  'Спальня',
  'Кухня',
  'Ванная',
  'Детская',
  'Прихожая',
  'Кабинет',
  'Другое'
];

const timeSlots = [
  '09:00 - 11:00',
  '11:00 - 13:00',
  '13:00 - 15:00',
  '15:00 - 17:00',
  '17:00 - 19:00',
  '19:00 - 21:00'
];

export default function OrderForm({ initialService, initialArea, onClose }: OrderFormProps) {
  const { trackFormSubmission, trackServiceSelection } = useGoogleAnalytics();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'matte',
    area: initialArea || 20,
    roomType: 'Гостиная',
    address: '',
    preferredDate: '',
    preferredTime: '11:00 - 13:00',
    comments: ''
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState<string>('');

  const selectedService = services.find(s => s.id === formData.service);

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Отслеживаем выбор услуги
    if (field === 'service') {
      const service = services.find(s => s.id === value);
      if (service) {
        trackServiceSelection(service.name);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/measurement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'measurement'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Ошибка при отправке заявки');
      }

      console.log('Заявка на замер успешно отправлена:', result);
      setOrderId(result.orderId);
      setIsSubmitted(true);
      
      // Отслеживаем успешную отправку формы
      trackFormSubmission('measurement_form');
      
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error);
      alert('Произошла ошибка при отправке заявки. Попробуйте еще раз или позвоните нам.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <div className="orderForm-overlay">
        <div className="orderForm orderForm--success">
          <div className="orderForm__success">
            <div className="orderForm__success-icon">✅</div>
            <h2>Заявка на замер отправлена!</h2>
            <p>Мы свяжемся с вами в течение 15 минут для подтверждения времени замера.</p>
            <div className="orderForm__success-details">
              <p><strong>Номер заявки:</strong> #{orderId}</p>
              <p><strong>Выбранная дата:</strong> {formData.preferredDate}</p>
              <p><strong>Время:</strong> {formData.preferredTime}</p>
            </div>
            <button onClick={onClose} className="orderForm__btn orderForm__btn--primary">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="orderForm-overlay" onClick={onClose} style={{ background: 'rgba(30, 64, 175, 0.10)', backdropFilter: 'blur(8px)' }}>
      <div className="orderForm" onClick={e => e.stopPropagation()} style={{ background: 'rgba(84, 144, 255, 0.08)', borderRadius: 28, boxShadow: '0 8px 48px #2563eb22', padding: 0 }}>
        <button className="orderForm__close" onClick={onClose}>×</button>
        <div className="orderForm__header" style={{ background: 'rgba(30, 64, 175, 0.10)', borderRadius: '28px 28px 0 0', padding: '40px 40px 20px', borderBottom: '1px solid #dbeafe' }}>
          <h2 style={{ color: '#2563eb', fontWeight: 900, fontSize: 32, marginBottom: 8 }}>Заказать бесплатный замер</h2>
          <p style={{ color: '#3b82f6', fontSize: 17, margin: 0 }}>Замерщик приедет в удобное время и рассчитает точную стоимость</p>
        </div>

        <div className="orderForm__progress" style={{ background: 'rgba(30, 64, 175, 0.06)', borderBottom: '1px solid #dbeafe', padding: '20px 40px' }}>
          {[1,2,3].map(n => (
            <div key={n} className={`orderForm__progress-step${step >= n ? ' active' : ''}`} style={{ flex: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span className="orderForm__progress-number" style={{ fontSize: 28, color: step === n ? '#2563eb' : '#a5b4fc', fontWeight: 700 }}>{n}</span>
              <span className="orderForm__progress-text" style={{ color: step === n ? '#2563eb' : '#a5b4fc', fontWeight: 600, fontSize: 15 }}>{n === 1 ? 'Параметры' : n === 2 ? 'Контакты' : 'Подтверждение'}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="orderForm__form" style={{ padding: 32 }}>
          {step === 1 && (
            <div className="orderForm__step">
              
              <div className="orderForm__field">
                <label>Интересующий тип потолка</label>
                <div className="orderForm__services">
                  {services.map(service => (
                    <label key={service.id} className={`orderForm__service ${formData.service === service.id ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={formData.service === service.id}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                      />
                      <div className="orderForm__service-content">
                        <div className="orderForm__service-name">{service.name}</div>
                        <div className="orderForm__service-price">от {service.price} ₽/м²</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="orderForm__field">
                <label>Примерная площадь помещения (м²)</label>
                <div className="number-input-wrapper">
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={formData.area}
                    onChange={(e) => handleInputChange('area', Number(e.target.value))}
                    className="orderForm__input"
                    placeholder="Например: 25"
                  />
                  <div className="number-input-buttons">
                    <button
                      type="button"
                      className="number-input-btn number-input-btn-up"
                      onClick={() => handleInputChange('area', Math.min(formData.area + 1, 1000))}
                      aria-label="Увеличить площадь"
                    />
                    <button
                      type="button"
                      className="number-input-btn number-input-btn-down"
                      onClick={() => handleInputChange('area', Math.max(formData.area - 1, 1))}
                      aria-label="Уменьшить площадь"
                    />
                  </div>
                </div>
              </div>

              <div className="orderForm__field">
                <CustomSelect
                  label="Тип помещения"
                  value={formData.roomType}
                  onChange={(value) => handleInputChange('roomType', value)}
                  options={roomTypes}
                  placeholder="Выберите тип помещения"
                />
              </div>

              <div className="orderForm__benefits" style={{ borderRadius: 16, padding: 18, margin: '24px 0 12px 0', boxShadow: '0 2px 12px #2563eb11' }}>
                <h4 style={{ color: '#2563eb', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>Что входит в бесплатный замер:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, color: '#1e40af', marginBottom: 6 }}><span style={{ fontSize: 22 }}>🔹</span>Выезд специалиста в удобное время</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, color: '#1e40af', marginBottom: 6 }}><span style={{ fontSize: 22 }}>🔹</span>Точный расчет площади и стоимости</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, color: '#1e40af', marginBottom: 6 }}><span style={{ fontSize: 22 }}>🔹</span>Консультация по выбору материалов</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, color: '#1e40af', marginBottom: 6 }}><span style={{ fontSize: 22 }}>🔹</span>Замер сложных участков</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, color: '#1e40af', marginBottom: 0 }}><span style={{ fontSize: 22 }}>🔹</span>Письменная смета на месте</li>
                </ul>
              </div>

              <button type="button" onClick={nextStep} className="orderForm__btn orderForm__btn--primary">
                Продолжить
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="orderForm__step">
              <h3>Ваши контактные данные</h3>
              
              <div className="orderForm__field">
                <label>Имя *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="orderForm__input"
                  placeholder="Ваше имя"
                />
              </div>

              <div className="orderForm__field">
                <label>Телефон *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="orderForm__input"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div className="orderForm__field">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="orderForm__input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="orderForm__field">
                <label>Адрес для замера *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="orderForm__input"
                  placeholder="Город, улица, дом, квартира"
                />
              </div>

              <div className="orderForm__field">
                <label>Желаемая дата замера *</label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  className="orderForm__input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="orderForm__field">
                <CustomSelect
                  label="Удобное время"
                  value={formData.preferredTime}
                  onChange={(value) => handleInputChange('preferredTime', value)}
                  options={timeSlots}
                  placeholder="Выберите время"
                  required={true}
                />
              </div>

              <div className="orderForm__field">
                <label>Дополнительная информация</label>
                <textarea
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                  className="orderForm__textarea"
                  placeholder="Особенности помещения, пожелания по дизайну, срочность..."
                  rows={3}
                />
              </div>

              <div className="orderForm__actions">
                <button type="button" onClick={prevStep} className="orderForm__btn orderForm__btn--secondary">
                  Назад
                </button>
                <button type="button" onClick={nextStep} className="orderForm__btn orderForm__btn--primary">
                  Продолжить
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="orderForm__step">
              <h3>Подтверждение заявки на замер</h3>
              
              <div className="orderForm__confirmation">
                <div className="orderForm__confirmation-section">
                  <h4>Параметры проекта:</h4>
                  <p><strong>Тип потолка:</strong> {selectedService?.name}</p>
                  <p><strong>Примерная площадь:</strong> {formData.area} м²</p>
                  <p><strong>Помещение:</strong> {formData.roomType}</p>
                </div>

                <div className="orderForm__confirmation-section">
                  <h4>Контактные данные:</h4>
                  <p><strong>Имя:</strong> {formData.name}</p>
                  <p><strong>Телефон:</strong> {formData.phone}</p>
                  {formData.email && <p><strong>Email:</strong> {formData.email}</p>}
                  <p><strong>Адрес:</strong> {formData.address}</p>
                </div>

                <div className="orderForm__confirmation-section">
                  <h4>Время замера:</h4>
                  <p><strong>Дата:</strong> {formData.preferredDate}</p>
                  <p><strong>Время:</strong> {formData.preferredTime}</p>
                </div>

                {formData.comments && (
                  <div className="orderForm__confirmation-section">
                    <h4>Дополнительная информация:</h4>
                    <p>{formData.comments}</p>
                  </div>
                )}
              </div>

              <div className="orderForm__actions">
                <button type="button" onClick={prevStep} className="orderForm__btn orderForm__btn--secondary">
                  Назад
                </button>
                <button 
                  type="submit" 
                  className="orderForm__btn orderForm__btn--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправляем заявку...' : 'Отправить заявку'}
                </button>
              </div>
            </div>
          )}
          {/* Согласие и ссылки на документы */}
          <div style={{fontSize: 13, color: '#8faeea', margin: '18px 0 0 0', textAlign: 'center'}}>
            Отправляя заявку, вы соглашаетесь с
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{color:'#2563eb', marginLeft: 4, marginRight: 4}}>политикой конфиденциальности</a>,
            <a href="/terms" target="_blank" rel="noopener noreferrer" style={{color:'#2563eb', marginLeft: 4, marginRight: 4}}>пользовательским соглашением</a>
            и
            <a href="/personal-data-consent" target="_blank" rel="noopener noreferrer" style={{color:'#2563eb', marginLeft: 4}}>согласием на обработку персональных данных</a>.
          </div>
        </form>
      </div>
    </div>
  );
}
