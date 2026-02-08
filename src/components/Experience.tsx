'use client';

import SectionWrapper from './SectionWrapper';
import Timeline from './Timeline';
import { experience } from '@/data/portfolio';

export default function Experience() {
  const timelineItems = experience.map(exp => ({
    id: exp.id,
    title: exp.role,
    subtitle: exp.company,
    period: exp.period,
    location: exp.location,
    details: exp.responsibilities,
  }));

  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Experience
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        <Timeline items={timelineItems} />
      </div>
    </SectionWrapper>
  );
}
