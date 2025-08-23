'use client';

import React, { useState } from 'react';
import { CatalogFilter, FilterOption, TextureType, CeilingType, RoomType, Manufacturer, ServiceType } from '../../types/catalog';
import './catalogFilters.scss';

interface CatalogFiltersProps {
  filters: {
    textures: FilterOption[];
    types: FilterOption[];
    rooms: FilterOption[];
    manufacturers: FilterOption[];
    services: FilterOption[];
  };
  currentFilter: CatalogFilter;
  onFilterChange: (filter: CatalogFilter) => void;
}

export default function CatalogFilters({ 
  filters, 
  currentFilter, 
  onFilterChange 
}: CatalogFiltersProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    textures: true,
    types: true,
    rooms: false,
    manufacturers: false,
    services: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterChange = (filterType: string, value: string | number) => {
    const newFilter = { ...currentFilter };
    
    if (filterType === 'textures' && typeof value === 'string') {
      if (newFilter.textures.includes(value as TextureType)) {
        newFilter.textures = newFilter.textures.filter(item => item !== value);
      } else {
        newFilter.textures = [...newFilter.textures, value as TextureType];
      }
    } else if (filterType === 'types' && typeof value === 'string') {
      if (newFilter.types.includes(value as CeilingType)) {
        newFilter.types = newFilter.types.filter(item => item !== value);
      } else {
        newFilter.types = [...newFilter.types, value as CeilingType];
      }
    } else if (filterType === 'rooms' && typeof value === 'string') {
      if (newFilter.rooms.includes(value as RoomType)) {
        newFilter.rooms = newFilter.rooms.filter(item => item !== value);
      } else {
        newFilter.rooms = [...newFilter.rooms, value as RoomType];
      }
    } else if (filterType === 'manufacturers' && typeof value === 'string') {
      if (newFilter.manufacturers.includes(value as Manufacturer)) {
        newFilter.manufacturers = newFilter.manufacturers.filter(item => item !== value);
      } else {
        newFilter.manufacturers = [...newFilter.manufacturers, value as Manufacturer];
      }
    } else if (filterType === 'services' && typeof value === 'string') {
      if (newFilter.services.includes(value as ServiceType)) {
        newFilter.services = newFilter.services.filter(item => item !== value);
      } else {
        newFilter.services = [...newFilter.services, value as ServiceType];
      }
    }
    
    onFilterChange(newFilter);
  };

  const isOptionChecked = (filterType: string, value: string): boolean => {
    switch (filterType) {
      case 'textures':
        return currentFilter.textures.includes(value as TextureType);
      case 'types':
        return currentFilter.types.includes(value as CeilingType);
      case 'rooms':
        return currentFilter.rooms.includes(value as RoomType);
      case 'manufacturers':
        return currentFilter.manufacturers.includes(value as Manufacturer);
      case 'services':
        return currentFilter.services.includes(value as ServiceType);
      default:
        return false;
    }
  };



  const clearAllFilters = () => {
    onFilterChange({
      textures: [],
      types: [],
      rooms: [],
      manufacturers: [],
      services: [],
      priceRange: [0, 10000]
    });
  };

  const hasActiveFilters = Object.values(currentFilter).some(
    filter => Array.isArray(filter) && filter.length > 0
  );

  const renderFilterSection = (
    title: string,
    sectionKey: string,
    options: FilterOption[],
    filterType: keyof Omit<CatalogFilter, 'priceRange'>
  ) => {
    const isExpanded = expandedSections[sectionKey];
    const activeCount = currentFilter[filterType].length;

    return (
      <div className="filter-section">
        <button
          className="filter-section-header"
          onClick={() => toggleSection(sectionKey)}
        >
          <span className="filter-section-title">{title}</span>
          {activeCount > 0 && (
            <span className="filter-active-count">{activeCount}</span>
          )}
          <span className={`filter-section-arrow ${isExpanded ? 'expanded' : ''}`}>
            ▼
          </span>
        </button>
        
        {isExpanded && (
          <div className="filter-options">
            {options.map(option => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={isOptionChecked(filterType, option.value)}
                  onChange={() => handleFilterChange(filterType, option.value)}
                />
                <span className="filter-option-label">{option.label}</span>
                <span className="filter-option-count">({option.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="catalog-filters">
      <div className="filters-header">
        <h3 className="filters-title">Фильтры</h3>
        {hasActiveFilters && (
          <button 
            className="clear-filters-btn"
            onClick={clearAllFilters}
          >
            Очистить все
          </button>
        )}
      </div>

      <div className="filters-content">
        {renderFilterSection('По фактуре', 'textures', filters.textures, 'textures')}
        {renderFilterSection('Виды потолков', 'types', filters.types, 'types')}
        {renderFilterSection('Помещение', 'rooms', filters.rooms, 'rooms')}
        {renderFilterSection('Производители', 'manufacturers', filters.manufacturers, 'manufacturers')}
        {renderFilterSection('Услуги', 'services', filters.services, 'services')}
      </div>

      {hasActiveFilters && (
        <div className="active-filters">
          <h4>Активные фильтры:</h4>
          <div className="active-filters-tags">
            {currentFilter.textures.map(texture => (
              <span key={texture} className="active-filter-tag">
                {filters.textures.find(f => f.value === texture)?.label}
                <button
                  onClick={() => handleFilterChange('textures', texture)}
                  className="remove-filter-btn"
                >
                  ×
                </button>
              </span>
            ))}
            {currentFilter.types.map(type => (
              <span key={type} className="active-filter-tag">
                {filters.types.find(f => f.value === type)?.label}
                <button
                  onClick={() => handleFilterChange('types', type)}
                  className="remove-filter-btn"
                >
                  ×
                </button>
              </span>
            ))}
            {currentFilter.rooms.map(room => (
              <span key={room} className="active-filter-tag">
                {filters.rooms.find(f => f.value === room)?.label}
                <button
                  onClick={() => handleFilterChange('rooms', room)}
                  className="remove-filter-btn"
                >
                  ×
                </button>
              </span>
            ))}
            {currentFilter.manufacturers.map(manufacturer => (
              <span key={manufacturer} className="active-filter-tag">
                {filters.manufacturers.find(f => f.value === manufacturer)?.label}
                <button
                  onClick={() => handleFilterChange('manufacturers', manufacturer)}
                  className="remove-filter-btn"
                >
                  ×
                </button>
              </span>
            ))}
            {currentFilter.services.map(service => (
              <span key={service} className="active-filter-tag">
                {filters.services.find(f => f.value === service)?.label}
                <button
                  onClick={() => handleFilterChange('services', service)}
                  className="remove-filter-btn"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
