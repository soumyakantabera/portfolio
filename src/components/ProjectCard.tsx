'use client';

import Card from './Card';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  outcomes: string[];
  category: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tools,
  outcomes,
  category,
  link,
}: ProjectCardProps) {
  return (
    <Card elevation={2} hover className="h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold">
          {category}
        </span>
        {link && link !== '#' && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            aria-label="View project"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h3>

      <p className="text-slate-700 dark:text-slate-300 mb-4 flex-grow">
        {description}
      </p>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
            Tools & Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
            Key Outcomes
          </h4>
          <ul className="space-y-1">
            {outcomes.map((outcome, idx) => (
              <li
                key={idx}
                className="text-sm text-slate-700 dark:text-slate-300 flex items-start"
              >
                <span className="text-primary-500 mr-2">•</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
