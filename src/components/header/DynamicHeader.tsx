"use client";

import { usePathname } from 'next/navigation';
import HeaderWrapper from './HeaderWrapper';
import SimpleHeader from './SimpleHeader';

export default function DynamicHeader() {
  const pathname = usePathname();
  
  // Для страниц ошибок используем SimpleHeader
  const isErrorPage = pathname === '/_not-found' || pathname === '/500';
  
  if (isErrorPage) {
    return <SimpleHeader />;
  }
  
  return <HeaderWrapper />;
}

