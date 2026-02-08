'use client';

import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          A selection of finance and data analytics projects demonstrating practical application of financial modeling, data analysis, and machine learning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tools={project.tools}
            outcomes={project.outcomes}
            category={project.category}
            link={project.link}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
