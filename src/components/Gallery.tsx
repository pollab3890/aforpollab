import React, { useState } from 'react';
import { GalleryItem } from '../types.ts';
import { LightboxModal } from './LightboxModal.tsx';
import { Plus, Eye, Image as ImageIcon, Sparkles, X } from 'lucide-react';

interface GalleryProps {
  galleryItems: GalleryItem[];
  onAddPhoto: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ galleryItems, onAddPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // New photo form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Portraits' | 'Creative' | 'Lifestyle'>('Portraits');
  const [newUrl, setNewUrl] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const categories = ['All', 'Portraits', 'Creative', 'Lifestyle'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleCreatePhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    const newItem: GalleryItem = {
      id: `photo-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      imageUrl: newUrl.trim(),
      aspectRatio: '4:3',
      description: newDescription.trim() || 'Custom gallery photograph for A For Pollab collection.',
      year: new Date().getFullYear().toString(),
    };

    onAddPhoto(newItem);
    setNewTitle('');
    setNewUrl('');
    setNewDescription('');
    setIsAddModalOpen(false);
  };

  return (
    <section id="gallery" className="py-24 relative bg-[#070707] border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              <span>02</span>
              <span>·</span>
              <span>Visual Archive</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              Personal Photo Gallery
            </h2>
            <p className="text-neutral-400 text-base max-w-xl">
              Curated editorial stills, behind-the-scenes cinematography optics, and personal portraits.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-lg transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Photo</span>
            </button>
          </div>
        </div>

        {/* Filter Category Controls (Functional buttons with active/inactive state) */}
        <div className="flex items-center gap-2 p-1.5 bg-neutral-950/80 rounded-xl border border-neutral-900 w-fit mb-10 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-[#D4AF37]/60 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)]"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* View Icon Badge */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/80 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                  <Eye className="w-4 h-4 text-[#D4AF37]" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-5 left-5 right-5 space-y-1.5 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                    <span>{item.category}</span>
                    <span>·</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-xl font-cinzel font-bold text-white tracking-wide group-hover:text-[#F3E5AB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Zero state if filtered out */}
        {filteredItems.length === 0 && (
          <div className="p-12 text-center rounded-2xl border border-neutral-900 bg-neutral-950/50">
            <ImageIcon className="w-8 h-8 text-neutral-600 mx-auto mb-3" />
            <p className="text-neutral-300 font-medium">No photographs in this category yet</p>
            <p className="text-xs text-neutral-500 mt-1">Try another filter or click "Add Custom Photo" above.</p>
          </div>
        )}
      </div>

      {/* Lightbox Viewer */}
      <LightboxModal
        item={selectedPhoto}
        items={filteredItems}
        onClose={() => setSelectedPhoto(null)}
        onSelect={(item) => setSelectedPhoto(item)}
      />

      {/* Add Photo Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-[#101010] border border-neutral-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-lg font-cinzel font-bold text-white">Add Photo to Gallery</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePhoto} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  Photo Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cinematic Sunset Shoot"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                >
                  <option value="Portraits">Portraits</option>
                  <option value="Creative">Creative</option>
                  <option value="Lifestyle">Lifestyle</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  Image URL
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                />
                <p className="text-[11px] text-neutral-500 mt-1">
                  Enter an image URL or cloud link to showcase in the gallery.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  Description / Caption
                </label>
                <textarea
                  rows={3}
                  placeholder="Behind the scenes details, lighting setup, or context..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 text-xs text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-xl cursor-pointer"
                >
                  Add to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
