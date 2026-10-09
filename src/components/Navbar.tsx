import React, { useState, useEffect } from 'react';
import { Menu, X, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  brandName: string;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ brandName, onOpenCustomizer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070707]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl sm:text-2xl font-cinzel font-bold tracking-wider text-white whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span className="text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">A</span>
            <span className="text-neutral-400 font-light tracking-widest text-xs uppercase px-1">FOR</span>
            <span className="gold-text-gradient font-bold">{brandName.replace(/^A\s+FOR\s+/i, '') || 'POLLAB'}</span>
          </a>

          {/* Zone 2: 4–5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="relative py-1 hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCustomizer}
              title="Personalize & edit portfolio details"
              className="p-2.5 rounded-lg border border-neutral-800 text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-neutral-900 transition-all duration-200 cursor-pointer"
              aria-label="Customize profile details"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleLinkClick('#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCustomizer}
              className="p-2.5 rounded-lg border border-neutral-800 text-neutral-400 hover:text-[#D4AF37]"
              aria-label="Customize details"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#D4AF37]/50 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#070707]/98 backdrop-blur-xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="w-full text-left py-3 px-3 text-base font-medium text-neutral-200 hover:text-[#D4AF37] hover:bg-neutral-900/60 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-500 font-mono">0{navLinks.indexOf(link) + 1}</span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800/80 space-y-3">
            <button
              onClick={() => handleLinkClick('#contact')}
              className="w-full py-3.5 px-4 text-center text-xs font-semibold uppercase tracking-widest text-black bg-[#D4AF37] rounded-lg hover:bg-[#F3E5AB] transition-colors flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenCustomizer();
              }}
              className="w-full py-2.5 text-xs text-neutral-400 hover:text-[#D4AF37] flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Edit My Bio & Links</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
