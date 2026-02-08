'use client';

import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import Card from './Card';
import { Mail, Phone, Linkedin, Copy, Check } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { copyToClipboard } from '@/lib/utils';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await copyToClipboard(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await copyToClipboard(personalInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone:', err);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-slate-50 dark:bg-slate-800/50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          I'm currently seeking internship or junior analyst opportunities in Finance, FP&A, or Corporate Finance. Feel free to reach out!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Email */}
        <Card elevation={2} hover>
          <div className="text-center">
            <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Email
            </h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary-600 dark:text-primary-400 hover:underline block mb-3 text-sm"
            >
              {personalInfo.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
        </Card>

        {/* Phone */}
        <Card elevation={2} hover>
          <div className="text-center">
            <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <Phone className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Phone
            </h3>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-primary-600 dark:text-primary-400 hover:underline block mb-3 text-sm"
            >
              {personalInfo.phone}
            </a>
            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
        </Card>

        {/* LinkedIn */}
        <Card elevation={2} hover>
          <div className="text-center">
            <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <Linkedin className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              LinkedIn
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm">
              {personalInfo.linkedin}
            </p>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Visit Profile
            </a>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
