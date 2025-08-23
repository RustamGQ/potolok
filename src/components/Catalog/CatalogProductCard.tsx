'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CeilingProduct } from '../../types/catalog';
import './catalogProductCard.scss';

interface CatalogProductCardProps {
  product: CeilingProduct;
  citySlug?: string;
}

export default function CatalogProductCard({ product, citySlug }: CatalogProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const getPriceText = () => {
    if (product.price.min === product.price.max) {
      return `от ${formatPrice(product.price.min)} ${product.price.unit}`;
    }
    return `${formatPrice(product.price.min)} - ${formatPrice(product.price.max)} ${product.price.unit}`;
  };

  const getFeaturesText = () => {
    return product.features.slice(0, 3).join(' • ');
  };

  return (
    <div className="catalog-product-card">
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="product-image"
          priority={false}
        />
        <div className="product-overlay">
          <Link 
            href={`/${citySlug || ''}/catalog/${product.id}`}
            className="view-details-btn"
          >
            Подробнее
          </Link>
        </div>
      </div>

      <div className="product-content">
        <h3 className="product-title">
          <Link href={`/${citySlug || ''}/catalog/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-features">
          <span className="features-text">{getFeaturesText()}</span>
        </div>

        <div className="product-footer">
          <div className="product-price">
            <span className="price-label">Цена:</span>
            <span className="price-value">{getPriceText()}</span>
          </div>

          <div className="product-actions">
            <Link 
              href={`/${citySlug || ''}/calculator`}
              className="calculate-btn"
            >
              Рассчитать
            </Link>
            <button className="order-btn">
              Заказать
            </button>
          </div>
        </div>
      </div>

      <div className="product-badges">
        {product.textures.includes('matovye') && (
          <span className="badge badge-matte">Матовые</span>
        )}
        {product.textures.includes('glyantsevye') && (
          <span className="badge badge-glossy">Глянцевые</span>
        )}
        {product.types.includes('s-podsvetkoy') && (
          <span className="badge badge-lighting">С подсветкой</span>
        )}
        {product.types.includes('zvezdnoe-nebo') && (
          <span className="badge badge-starry">Звездное небо</span>
        )}
      </div>
    </div>
  );
}
