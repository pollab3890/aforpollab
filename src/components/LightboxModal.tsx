import React, { useEffect } from 'react';
import { GalleryItem } from '../types.ts';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag, Calendar } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
            Photo {currentIndex + 1} of {items.length}
          </span>
          <span className="text-neutral-600">·</span>
          <span className="text-xs text-neutral-400 font-medium">{item.category}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#D4AF37] transition-colors cursor-pointer"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-[#D4AF37] text-white transition-all cursor-pointer z-10 active:scale-95"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-[#D4AF37] text-white transition-all cursor-pointer z-10 active:scale-95"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl max-h-[68vh] flex items-center justify-center bg-black">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[68vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption & Metadata Strip */}
        <div className="mt-4 w-full max-w-2xl text-center space-y-2">
          <h3 className="text-lg sm:text-xl font-cinzel font-bold text-white tracking-wide">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-400 font-normal leading-relaxed">
            {item.description}
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 font-mono pt-1">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{item.year}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{item.category}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
