"use client";

import React from 'react';
import Link from 'next/link';
import './breadcrumbs.scss';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      <div className="container">
        <ol className="breadcrumbs__list">
          {items.map((item, index) => (
            <li key={index} className="breadcrumbs__item">
              {index === items.length - 1 ? (
                <span className="breadcrumbs__current" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="breadcrumbs__link">
                    {item.name}
                  </Link>
                  <span className="breadcrumbs__separator" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
