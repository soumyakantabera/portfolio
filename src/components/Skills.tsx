'use client';

import SectionWrapper from './SectionWrapper';
import SkillChip from './SkillChip';
import Card from './Card';
import { Sparkles } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
      </div>

      <div className="space-y-8">
        {skillCategories.map((category, idx) => (
          <Card key={idx} elevation={2}>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillChip key={skillIdx} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
