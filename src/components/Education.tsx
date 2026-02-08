'use client';

import SectionWrapper from './SectionWrapper';
import Card from './Card';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-slate-50 dark:bg-slate-800/50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {education.map((edu) => (
          <Card key={edu.id} elevation={2} hover>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                  {edu.gpa && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        GPA: {edu.gpa}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  {edu.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
