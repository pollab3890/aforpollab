import React, { useEffect } from 'react';
import { ProfileData } from '../types.ts';
import { X, Printer, Mail, MapPin, Award, CheckCircle } from 'lucide-react';

interface BioModalProps {
  isOpen: boolean;
  profile: ProfileData;
  onClose: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({ isOpen, profile, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C0C0C] border border-neutral-800 rounded-3xl shadow-2xl p-6 sm:p-10 space-y-8 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#D4AF37] transition-colors cursor-pointer"
          aria-label="Close bio modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Lockup */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 border-b border-neutral-850">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border border-[#D4AF37]/50 bg-neutral-900 shrink-0">
            <img
              src={profile.avatarUrl}
              alt={profile.fullName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              {profile.brandName} · Executive Dossier
            </span>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
              {profile.fullName}
            </h2>
            <p className="text-sm text-neutral-300 font-light">
              {profile.headline}
            </p>
          </div>
        </div>

        {/* Quick Contact & Details Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-neutral-300 bg-neutral-950 p-4 rounded-xl border border-neutral-900">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#D4AF37]" />
            <span>{profile.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Bio Copy */}
        <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            Official Biography
          </h3>
          <p>{profile.bioParagraph1}</p>
          <p>{profile.bioParagraph2}</p>
          <p>{profile.bioParagraph3}</p>
        </div>

        {/* Career Metrics */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            Core Stats & Track Record
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="p-3 bg-neutral-950 rounded-xl border border-neutral-900">
                <p className="text-lg font-cinzel font-bold text-white text-[#D4AF37]">
                  {stat.value}
                </p>
                <p className="text-xs text-neutral-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-neutral-850 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white hover:border-[#D4AF37] transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-xl transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
