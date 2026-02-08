'use client';

import { Mail, Linkedin, Download, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated greeting */}
        <div className="animate-slideDown">
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-6">
            {personalInfo.headline}
          </h2>
        </div>

        {/* Objective */}
        <div className="animate-slideUp">
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            {personalInfo.objective}
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
            <span>•</span>
            <span>{personalInfo.availability}</span>
            <span>•</span>
            <span>Focus: {personalInfo.focusLocation}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-material-2 hover:shadow-material-3"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-medium transition-colors shadow-material-2 hover:shadow-material-3"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-medium transition-colors shadow-material-2 hover:shadow-material-3"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
