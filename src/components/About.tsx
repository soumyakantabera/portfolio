'use client';

import SectionWrapper from './SectionWrapper';
import Card from './Card';
import { User, MapPin, Briefcase, Target } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function About() {
  const quickFacts = [
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Target, label: 'Focus', value: personalInfo.focusLocation },
    { icon: Briefcase, label: 'Availability', value: personalInfo.availability },
  ];

  return (
    <SectionWrapper id="about" className="bg-slate-50 dark:bg-slate-800/50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* About text */}
        <div className="md:col-span-2">
          <Card elevation={2}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Professional Summary
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {personalInfo.about}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick facts */}
        <div className="space-y-4">
          {quickFacts.map((fact, idx) => (
            <Card key={idx} elevation={2} hover>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <fact.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {fact.label}
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {fact.value}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
