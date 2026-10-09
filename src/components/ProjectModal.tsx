import React, { useEffect } from 'react';
import { ProjectItem } from '../types.ts';
import { X, ExternalLink, Calendar, Check, Award, Clock, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E0E0E] border border-neutral-800 rounded-3xl shadow-2xl p-6 sm:p-10 space-y-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#D4AF37] transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Project Meta Strip (Unboxed metadata with typographic separators) */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 border-b border-neutral-900 pb-4">
          <span>Client: {project.client}</span>
          <span className="text-neutral-700">/</span>
          <span>Year: {project.year}</span>
          {project.duration && (
            <>
              <span className="text-neutral-700">/</span>
              <span>Format: {project.duration}</span>
            </>
          )}
        </div>

        {/* Description & Overview */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[#D4AF37]">
            Project Overview & Vision
          </h3>
          <p className="text-base text-neutral-300 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Deliverables List */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[#D4AF37]">
            Key Production Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/80 border border-neutral-850 text-xs font-medium text-neutral-200"
              >
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance & Impact Metrics */}
        {project.metrics && (
          <div className="p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center gap-3">
            <Award className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div className="text-xs sm:text-sm text-neutral-200">
              <span className="font-semibold text-[#F3E5AB]">Performance Highlight: </span>
              {project.metrics}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-4 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-medium text-neutral-400 hover:text-white"
          >
            Close Window
          </button>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-xl transition-all shadow-md cursor-pointer"
            >
              <span>View Live Case / Asset</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
