'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  elevation?: 1 | 2 | 3 | 4;
  hover?: boolean;
}

export default function Card({ children, className = '', elevation = 2, hover = false }: CardProps) {
  const elevationClass = {
    1: 'shadow-material-1',
    2: 'shadow-material-2',
    3: 'shadow-material-3',
    4: 'shadow-material-4',
  }[elevation];

  const hoverClass = hover ? 'hover:shadow-material-3 hover:-translate-y-1' : '';

  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-lg p-6 transition-all duration-300 ${elevationClass} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
