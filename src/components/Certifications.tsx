'use client';

import SectionWrapper from './SectionWrapper';
import Card from './Card';
import * as Icons from 'lucide-react';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-slate-50 dark:bg-slate-800/50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => {
          const IconComponent = Icons[cert.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
          
          return (
            <Card key={cert.id} elevation={2} hover>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex-shrink-0">
                  {IconComponent && <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
