"use client";

import { useState } from 'react';
import OrderForm from './OrderForm';

interface OrderFormTriggerProps {
  className?: string;
  children: React.ReactNode;
  initialService?: string;
}

export default function OrderFormTrigger({ className, children, initialService }: OrderFormTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open && (
        <div className="orderForm-overlay" style={{ zIndex: 2000 }}>
          <OrderForm initialService={initialService} onClose={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}

























