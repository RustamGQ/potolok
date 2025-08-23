import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Страница не найдена - Натяжные потолки',
  description: 'Запрашиваемая страница не существует',
};

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#3b82f6' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Страница не найдена</h2>
      <p style={{ marginBottom: '2rem', color: '#64748b' }}>
        Запрашиваемая страница не существует или была перемещена.
      </p>
      <Link 
        href="/" 
        style={{
          padding: '12px 24px',
          backgroundColor: '#3b82f6',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '500'
        }}
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
