import React from 'react';
import { ProfileData } from '../types.ts';
import { ArrowDown, Sparkles, Camera, ArrowUpRight, FileText } from 'lucide-react';
import { SocialButtons } from './SocialButtons.tsx';

interface HeroProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
  onOpenBioModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenCustomizer, onOpenBioModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden border-b border-neutral-900">
      {/* Subtle luxury ambient gold glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-[300px] h-[300px] bg-[#D4AF37]/8 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-xs text-[#F3E5AB]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-widest uppercase font-medium">Official Creative Portfolio</span>
              <span className="text-[#D4AF37]/40">·</span>
              <span className="text-neutral-400">{profile.brandName}</span>
            </div>

            {/* Display Headline with balance */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-cinzel font-bold text-white tracking-tight leading-[1.08] text-balance">
                {profile.fullName.toUpperCase()}
              </h1>
              <p className="text-lg sm:text-xl font-light gold-text-gradient tracking-wide">
                {profile.headline}
              </p>
            </div>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl">
              {profile.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('work')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-xl transition-all duration-200 hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] cursor-pointer active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-neutral-900 border border-neutral-800 hover:border-[#D4AF37]/60 hover:bg-neutral-850 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenBioModal}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-medium text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="underline underline-offset-4">Executive Bio Summary</span>
              </button>
            </div>

            {/* Social channels preview buttons */}
            <div className="pt-4 border-t border-neutral-900">
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                Official Channels & Media
              </p>
              <SocialButtons socials={profile.socials} variant="hero" />
            </div>
          </div>

          {/* Right Column: Visual Container with Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[420px]">
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/40 via-neutral-800 to-[#F3E5AB]/30 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl bg-neutral-950 p-2 border border-[#D4AF37]/30 shadow-2xl overflow-hidden">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-900">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.fullName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* On-image caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                        A For Pollab
                      </p>
                      <p className="text-sm font-bold text-white tracking-wide">
                        {profile.fullName}
                      </p>
                    </div>

                    <button
                      onClick={onOpenCustomizer}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-neutral-200 hover:text-white text-[11px] font-medium transition-colors cursor-pointer hover:bg-black"
                      title="Replace or update photo"
                    >
                      <Camera className="w-3 h-3 text-[#D4AF37]" />
                      <span>Change Photo</span>
                    </button>
                  </div>
                </div>

                {/* Sub-bar detail */}
                <div className="px-3 pt-3 pb-2 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono text-neutral-500">PORTFOLIO EDITION · 2026</span>
                  <span className="text-[#D4AF37] font-medium flex items-center gap-1">
                    <span>Active Production</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width editorial stat strip below hero split */}
        <div className="mt-16 pt-10 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-900/80 hover:border-[#D4AF37]/40 transition-all duration-300 group"
            >
              <p className="text-3xl sm:text-4xl font-cinzel font-bold text-white tabular-nums group-hover:text-[#D4AF37] transition-colors">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-neutral-200 mt-1">{stat.label}</p>
              <p className="text-xs text-neutral-500 mt-0.5">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Scroll down prompt */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="p-2 text-neutral-500 hover:text-[#D4AF37] transition-colors animate-bounce cursor-pointer"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
