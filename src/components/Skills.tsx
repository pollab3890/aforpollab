import React, { useState } from 'react';
import { SkillCategory } from '../types.ts';
import { Cpu, Film, Video, Share2, Layers, CheckCircle2 } from 'lucide-react';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const toolsAndEquipments = [
    { name: 'Sony Cinema Line (FX6 / FX3)', role: 'Primary Camera Rig' },
    { name: 'DaVinci Resolve Studio', role: 'Color Grading & ACES' },
    { name: 'Adobe Premiere Pro', role: 'Editorial & Multicam' },
    { name: 'Aputure & Nanlite Lighting', role: 'Studio & Location Setup' },
    { name: 'DJI RS3 Pro & Drone', role: 'Stabilization & Aerial' },
    { name: 'Adobe After Effects & Photoshop', role: 'VFX & Key Art' },
    { name: 'Røde & Sennheiser Audio', role: 'Broadcast Sound Capture' },
    { name: 'TikTok & YouTube Analytics', role: 'Channel Strategy Engine' },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#070707] border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            <span>03</span>
            <span>·</span>
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
            My Skills & Expertise
          </h2>
          <p className="text-neutral-400 text-base max-w-2xl">
            A comprehensive overview of production craft, non-linear post-production, and modern digital platform mastery.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategoryIndex(index)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategoryIndex === index
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                  : 'bg-neutral-950 border border-neutral-800 text-neutral-300 hover:border-[#D4AF37]/50 hover:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Skill Progress Bars */}
          <div className="lg:col-span-8 bg-neutral-950/80 rounded-2xl p-6 sm:p-8 border border-neutral-800/90 space-y-7 shadow-xl">
            <div className="border-b border-neutral-900 pb-4">
              <h3 className="text-xl font-cinzel font-bold text-white">
                {categories[selectedCategoryIndex].title}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                {categories[selectedCategoryIndex].description}
              </p>
            </div>

            <div className="space-y-6">
              {categories[selectedCategoryIndex].skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-white tracking-wide">{skill.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                        {skill.highlight}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#D4AF37] tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Progress bar container */}
                  <div className="h-2.5 w-full bg-neutral-900 rounded-full overflow-hidden p-0.5 border border-neutral-800">
                    <div
                      className="h-full bg-gradient-to-r from-[#AA820A] via-[#D4AF37] to-[#F3E5AB] rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-neutral-500 font-mono sm:hidden">
                    {skill.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Hardware Stack */}
          <div className="lg:col-span-4 bg-neutral-950/60 rounded-2xl p-6 sm:p-7 border border-neutral-900 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
              <Layers className="w-4 h-4" />
              <span>Production Equipment & Software</span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Industry-standard toolsets calibrated for consistent 4K high-bitrate deliverables and broadcast specifications.
            </p>

            <div className="space-y-3 pt-2">
              {toolsAndEquipments.map((tool) => (
                <div
                  key={tool.name}
                  className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-850 hover:border-[#D4AF37]/30 transition-colors flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white">{tool.name}</p>
                    <p className="text-[11px] text-neutral-400 font-mono mt-0.5">{tool.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
