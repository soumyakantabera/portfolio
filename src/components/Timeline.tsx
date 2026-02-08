'use client';

import { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface TimelineItem {
  id: number;
  title?: string;
  subtitle?: string;
  period?: string;
  location?: string;
  description?: string;
  details?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  renderItem?: (item: TimelineItem) => ReactNode;
}

export default function Timeline({ items, renderItem }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />

      {/* Timeline items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative pl-8 md:pl-20">
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-6 top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900" />

            {/* Content */}
            {renderItem ? (
              renderItem(item)
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-material-2 transition-all duration-300 hover:shadow-material-3">
                {item.title && (
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                )}
                {item.subtitle && (
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {item.subtitle}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {item.period && <span>{item.period}</span>}
                  {item.location && (
                    <>
                      <span>•</span>
                      <span>{item.location}</span>
                    </>
                  )}
                </div>
                {item.description && (
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    {item.description}
                  </p>
                )}
                {item.details && item.details.length > 0 && (
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
