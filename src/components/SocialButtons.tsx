import React from 'react';
import { SocialLinks } from '../types.ts';
import { ExternalLink } from 'lucide-react';

interface SocialButtonsProps {
  socials: SocialLinks;
  variant?: 'hero' | 'bar' | 'compact' | 'footer';
  onEditClick?: () => void;
}

export const TikTokIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.08a8.16 8.16 0 0 0 4.77 1.53V7.16c-.4 0-.8-.16-1.05-.47z" />
  </svg>
);

export const FacebookIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
  </svg>
);

export const YouTubeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M21.58 7.19a2.76 2.76 0 0 0-1.95-1.96C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.63.48A2.76 2.76 0 0 0 2.42 7.2 28.98 28.98 0 0 0 2 12c0 1.63.14 3.2.42 4.81.24.9.95 1.6 1.95 1.84 1.73.47 7.63.47 7.63.47s5.9 0 7.63-.47c.9-.24 1.6-.94 1.95-1.84.28-1.61.42-3.18.42-4.81 0-1.63-.14-3.2-.42-4.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
);

export const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const SocialButtons: React.FC<SocialButtonsProps> = ({ socials, variant = 'bar', onEditClick }) => {
  const items = [
    {
      name: 'Facebook',
      url: socials.facebook,
      icon: FacebookIcon,
      hoverColor: 'hover:text-[#1877F2] hover:border-[#1877F2]/40',
      label: 'Follow on Facebook',
    },
    {
      name: 'YouTube',
      url: socials.youtube,
      icon: YouTubeIcon,
      hoverColor: 'hover:text-[#FF0000] hover:border-[#FF0000]/40',
      label: 'Subscribe on YouTube',
    },
    {
      name: 'TikTok',
      url: socials.tiktok,
      icon: TikTokIcon,
      hoverColor: 'hover:text-[#FE2C55] hover:border-[#FE2C55]/40',
      label: 'Watch on TikTok',
    },
    {
      name: 'Instagram',
      url: socials.instagram,
      icon: InstagramIcon,
      hoverColor: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
      label: 'Connect on Instagram',
    },
  ];

  if (variant === 'hero') {
    return (
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`group inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-neutral-300 bg-neutral-900/90 border border-neutral-800 hover:border-[#D4AF37]/50 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:text-white shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] ${item.hoverColor}`}
          >
            <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="whitespace-nowrap">{item.name}</span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-200 hover:-translate-y-0.5 ${item.hoverColor}`}
          >
            <item.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-4 bg-neutral-950/80 rounded-xl border border-neutral-800/80 hover:border-[#D4AF37]/60 text-neutral-300 transition-all duration-300 hover:-translate-y-1 group hover:shadow-[0_4px_20px_rgba(212,175,55,0.12)] ${item.hoverColor}`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-[#D4AF37]/30 transition-colors">
                <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="text-left">
                <p className="text-xs text-neutral-400 font-normal">Official</p>
                <p className="text-sm font-semibold text-white tracking-wide">{item.name}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-[#D4AF37] transition-colors" />
          </a>
        ))}
      </div>
      {onEditClick && (
        <div className="mt-3 text-right">
          <button
            onClick={onEditClick}
            className="text-xs text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors underline underline-offset-4 cursor-pointer"
          >
            Configure social handles & links
          </button>
        </div>
      )}
    </div>
  );
};
