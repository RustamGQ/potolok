"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCity } from '../../contexts/CityContext';
import { cities, getMainCities } from '../../lib/cities';
import './citySelector.scss';

export default function CitySelector() {
  const { currentCity } = useCity();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mainCities = getMainCities();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCitySelect = (city: typeof cities[0]) => {
    // Для основных городов и окрестностей используем прямые ссылки
    if (city.isMain || !city.isMain) {
      // Просто закрываем dropdown, переход будет через Link
      setIsOpen(false);
    }
  };

  return (
    <div className="city-selector" ref={dropdownRef}>
      <button
        className="city-selector__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="city-selector__icon">📍</span>
        <span className="city-selector__current">{currentCity.name}</span>
        <span className={`city-selector__arrow ${isOpen ? 'is-open' : ''}`}>▾</span>
      </button>
      
      {isOpen && (
        <div className="city-selector__dropdown">
          <div className="city-selector__section">
            <h4 className="city-selector__section-title">Основные города</h4>
            <ul className="city-selector__list">
              {mainCities.map((city) => (
                <li key={city.id}>
                  <Link
                    href={`/${city.slug}`}
                    className={`city-selector__option ${currentCity.id === city.id ? 'is-active' : ''}`}
                    onClick={() => handleCitySelect(city)}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="city-selector__section">
            <h4 className="city-selector__section-title">Окрестности Батайска</h4>
            <ul className="city-selector__list">
              {cities.filter(city => !city.isMain).map((city) => (
                <li key={city.id}>
                  <Link
                    href={`/${city.slug}`}
                    className={`city-selector__option ${currentCity.id === city.id ? 'is-active' : ''}`}
                    onClick={() => handleCitySelect(city)}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="city-selector__section">
            <h4 className="city-selector__section-title">Дальние города</h4>
            <p className="city-selector__note">
              Работаем при заказах от 100,000₽<br/>
              Замер 2000₽ (возврат при заказе)
            </p>
            <ul className="city-selector__list">
              <li>
                <Link 
                  href="/distant-cities" 
                  className="city-selector__option city-selector__option--link"
                >
                  Таганрог, Шахты, Азов и др.
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
