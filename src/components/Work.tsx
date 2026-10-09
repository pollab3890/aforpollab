import React, { useState } from 'react';
import { ProjectItem } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';
import { ArrowUpRight, Film, ExternalLink } from 'lucide-react';

interface WorkProps {
  projects: ProjectItem[];
}

export const Work: React.FC<WorkProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = ['All', 'Cinematic Film', 'Commercial Brand', 'Social Series', 'Creative Direction'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 relative bg-[#070707] border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              <span>04</span>
              <span>·</span>
              <span>Featured Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              My Selected Work
            </h2>
            <p className="text-neutral-400 text-base max-w-xl">
              Commercial campaigns, narrative films, episodic content series, and editorial creative direction.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-neutral-950/80 rounded-xl border border-neutral-900 w-fit mb-12 overflow-x-auto max-w-full">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl bg-neutral-950/90 border border-neutral-900 hover:border-[#D4AF37]/60 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)] flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/80 text-white group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-110" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  {/* Unboxed Metadata Line with typographic separators */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                    <span>{project.category}</span>
                    <span className="text-neutral-600">/</span>
                    <span>{project.client}</span>
                    <span className="text-neutral-600">/</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-400 font-normal leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Footer strip on card */}
                <div className="pt-4 border-t border-neutral-900/80 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-mono">
                    {project.deliverables.slice(0, 2).join(' · ')}
                  </span>
                  <span className="text-[#D4AF37] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
