import React from 'react';
import { ProfileData } from '../types.ts';
import { Edit3, Film, Lightbulb, Target, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

interface AboutProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, onOpenCustomizer }) => {
  const pillars = [
    {
      icon: Film,
      title: 'Cinematic Visuals',
      description:
        'Crafting every frame with deliberate lighting, intentional optics, and cinematic color theory to elevate raw footage into evocative art.',
    },
    {
      icon: Target,
      title: 'Audience Connection',
      description:
        'Blending short-form platform rhythm with long-form emotional depth, ensuring stories cut through digital noise and retain attention.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Direction',
      description:
        'From high-concept storyboards and scripting to production design and post-finishing, guiding every creative decision with clarity.',
    },
    {
      icon: Compass,
      title: 'Technical Rigor',
      description:
        'Mastering industry-standard cinema cameras, DaVinci Resolve color pipelines, and non-linear editing suites for flawless delivery.',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#070707] border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              <span>01</span>
              <span>·</span>
              <span>Biography & Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              About Pollab Mia
            </h2>
            <p className="text-neutral-400 text-base max-w-xl">
              The creative mind, visual direction, and digital artistry behind the brand A For Pollab.
            </p>
          </div>

          <button
            onClick={onOpenCustomizer}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] bg-neutral-900 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-neutral-850 rounded-lg transition-colors cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Biography & Bio Text</span>
          </button>
        </div>

        {/* 2-Column Split: Detailed Biography & Quote Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Biography Text Column */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
            <p className="first-letter:text-5xl first-letter:font-cinzel first-letter:font-bold first-letter:text-[#D4AF37] first-letter:mr-3 first-letter:float-left">
              {profile.bioParagraph1}
            </p>
            <p>
              {profile.bioParagraph2}
            </p>
            <p>
              {profile.bioParagraph3}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Verified Independent Creator</span>
              </div>
              <span className="text-neutral-700">|</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span>Open for Worldwide Collaborations</span>
              </div>
            </div>
          </div>

          {/* Luxury Monograph Quote & Highlights Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-neutral-950 p-8 border border-neutral-800 hover:border-[#D4AF37]/40 transition-colors shadow-xl space-y-6">
              <div className="text-5xl font-cinzel text-[#D4AF37]/40 leading-none">“</div>
              <blockquote className="text-lg sm:text-xl font-cinzel font-normal text-white leading-relaxed italic">
                A story is not just seen through the lens; it is felt in the rhythm of light, the honesty of expression, and the soul of the frame.
              </blockquote>
              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                <div>
                  <p className="text-base font-bold text-white tracking-wide">Pollab Mia</p>
                  <p className="text-xs text-[#D4AF37] uppercase tracking-wider">Founder, A For Pollab</p>
                </div>
                <div className="text-right text-xs font-mono text-neutral-500">
                  EST. 2020
                </div>
              </div>

              {/* Quick Contact & Working CTA */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-xl transition-all duration-200"
                >
                  <span>Discuss a Creative Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="pt-6">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
            Core Foundations & Capabilities
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-neutral-950/70 border border-neutral-900 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                  Pillar 0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight mt-1 mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
