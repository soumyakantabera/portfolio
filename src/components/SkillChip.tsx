'use client';

interface SkillChipProps {
  skill: string;
  className?: string;
}

export default function SkillChip({ skill, className = '' }: SkillChipProps) {
  return (
    <span
      className={`inline-block px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary-100 dark:hover:bg-primary-900/30 ${className}`}
    >
      {skill}
    </span>
  );
}
