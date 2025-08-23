"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { City, CityData } from '../types/city';
import { cities, getCityBySlug, getNearbyCities, getBatayskAreaCities } from '../lib/cities';

interface CityContextType {
  currentCity: City;
  cityData: CityData;
  setCurrentCity: (city: City) => void;
  setCurrentCityBySlug: (slug: string) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export default function CityProvider({ children }: { 
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [currentCity, setCurrentCity] = useState<City>(() => {
    // Определяем начальный город из URL
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const citySlug = pathSegments[0];
      const city = getCityBySlug(citySlug);
      if (city) {
        return city;
      }
    }
    
    // Дефолт - Ростов
    return cities.find(city => city.slug === 'rostov') || cities[0];
  });

  const cityData: CityData = {
    currentCity,
    allCities: cities,
    nearbyCities: getNearbyCities(),
    distantCities: getBatayskAreaCities()
  };

  const setCurrentCityBySlug = (slug: string) => {
    const city = getCityBySlug(slug);
    if (city) {
      setCurrentCity(city);
    }
  };

  // Восстанавливаем город из localStorage после гидратации
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCity = localStorage.getItem('currentCity');
      if (savedCity) {
        const city = getCityBySlug(savedCity);
        if (city && city.id !== currentCity.id) {
          setCurrentCity(city);
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Убираем зависимость currentCity.id

  // Автоматическая синхронизация с URL
  useEffect(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const citySlug = pathSegments[0];
      const city = getCityBySlug(citySlug);
      if (city && city.id !== currentCity.id) {
        setCurrentCity(city);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Убираем зависимость currentCity.id

  // Сохраняем текущий город в localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentCity', currentCity.slug);
    }
  }, [currentCity]);

  return (
    <CityContext.Provider value={{
      currentCity,
      cityData,
      setCurrentCity,
      setCurrentCityBySlug
    }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
}
