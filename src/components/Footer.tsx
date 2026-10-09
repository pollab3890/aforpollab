import React from 'react';
import { ProfileData } from '../types.ts';
import { ArrowUp, Heart } from 'lucide-react';
import { SocialButtons } from './SocialButtons.tsx';

interface FooterProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenCustomizer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-neutral-900 py-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-900">
          {/* Brand lockup */}
          <div className="space-y-2">
            <a
              href="#"
              className="text-2xl font-cinzel font-bold text-white tracking-wider flex items-center gap-2"
            >
              <span className="text-[#D4AF37]">A</span>
              <span className="text-xs uppercase font-light text-neutral-500 tracking-widest px-1">FOR</span>
              <span className="gold-text-gradient">{profile.fullName.toUpperCase()}</span>
            </a>
            <p className="text-xs text-neutral-400 max-w-sm">
              Official personal portfolio and creative visual production showcase.
            </p>
          </div>

          {/* Social buttons in footer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-mono uppercase text-neutral-500">Connect:</span>
            <SocialButtons socials={profile.socials} variant="compact" />
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-850 hover:border-[#D4AF37]/50 text-xs font-semibold text-neutral-300 hover:text-white transition-all cursor-pointer group"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#D4AF37] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>© {new Date().getFullYear()} {profile.brandName} · {profile.fullName}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenCustomizer}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Customizer
            </button>
            <span>·</span>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <span>·</span>
            <a href="#gallery" className="hover:text-white transition-colors">
              Gallery
            </a>
            <span>·</span>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <span>·</span>
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
