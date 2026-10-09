import React, { useState } from 'react';
import { ProfileData } from '../types.ts';
import { X, Save, RotateCcw, Image, Check, Sparkles, User, Globe, Mail, Phone, Share2 } from 'lucide-react';
import {
  HERO_PORTRAIT,
  GALLERY_PORTRAIT,
  GALLERY_CREATIVE,
  GALLERY_LIFESTYLE,
} from '../data/defaultData.ts';

interface EditProfileModalProps {
  isOpen: boolean;
  profile: ProfileData;
  onClose: () => void;
  onSave: (updated: ProfileData) => void;
  onReset: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  profile,
  onClose,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [activeTab, setActiveTab] = useState<'profile' | 'bio' | 'contact' | 'socials'>('profile');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const presetPhotos = [
    { label: 'Studio Rim Light (Signature)', url: HERO_PORTRAIT },
    { label: 'Concept Review Studio', url: GALLERY_PORTRAIT },
    { label: 'Cinema Optics Gear', url: GALLERY_CREATIVE },
    { label: 'Architectural Lifestyle', url: GALLERY_LIFESTYLE },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0D0D0D] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800 bg-neutral-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-cinzel font-bold text-white">
                Customize "A For Pollab" Profile
              </h2>
              <p className="text-xs text-neutral-400">
                Update your biography, contact information, photos, and social handles.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white cursor-pointer"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-neutral-850 overflow-x-auto">
          {[
            { id: 'profile', label: 'Identity & Photo', icon: User },
            { id: 'bio', label: 'Biography', icon: Globe },
            { id: 'contact', label: 'Contact Info', icon: Mail },
            { id: 'socials', label: 'Social Channels', icon: Share2 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#D4AF37] text-[#D4AF37] bg-neutral-900/50'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* TAB 1: Profile & Photo */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Professional Headline
                </label>
                <input
                  type="text"
                  required
                  value={formData.headline}
                  onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Hero Subtitle / Mission Statement
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none resize-none"
                />
              </div>

              {/* Photo Selector */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-mono uppercase text-neutral-300">
                  Profile Photo URL
                </label>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-700 shrink-0">
                    <img
                      src={formData.avatarUrl}
                      alt="Avatar preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.avatarUrl}
                    onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                    className="flex-1 px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                    placeholder="Paste image URL..."
                  />
                </div>

                <div className="pt-2">
                  <p className="text-[11px] font-mono uppercase text-neutral-400 mb-2">
                    Quick Preset Studio Photos:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {presetPhotos.map((preset) => (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => setFormData({ ...formData, avatarUrl: preset.url })}
                        className={`text-left p-2.5 rounded-lg border text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          formData.avatarUrl === preset.url
                            ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <span className="truncate">{preset.label}</span>
                        {formData.avatarUrl === preset.url && (
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Biography */}
          {activeTab === 'bio' && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Biography Paragraph 1 (Introduction & Origins)
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.bioParagraph1}
                  onChange={(e) => setFormData({ ...formData, bioParagraph1: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none resize-none leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Biography Paragraph 2 (Approach, Production & Craft)
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.bioParagraph2}
                  onChange={(e) => setFormData({ ...formData, bioParagraph2: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none resize-none leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Biography Paragraph 3 (Vision & Future Collaborations)
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.bioParagraph3}
                  onChange={(e) => setFormData({ ...formData, bioParagraph3: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none resize-none leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* TAB 3: Contact */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Contact Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Location Base
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                />
              </div>
            </div>
          )}

          {/* TAB 4: Social Channels */}
          {activeTab === 'socials' && (
            <div className="space-y-4">
              <p className="text-xs text-neutral-400">
                Configure your official channel URLs for Facebook, YouTube, TikTok, and Instagram:
              </p>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Facebook URL
                </label>
                <input
                  type="url"
                  required
                  value={formData.socials.facebook}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socials: { ...formData.socials, facebook: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                  placeholder="https://facebook.com/yourhandle"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  YouTube Channel URL
                </label>
                <input
                  type="url"
                  required
                  value={formData.socials.youtube}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socials: { ...formData.socials, youtube: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                  placeholder="https://youtube.com/@yourhandle"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  TikTok Profile URL
                </label>
                <input
                  type="url"
                  required
                  value={formData.socials.tiktok}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socials: { ...formData.socials, tiktok: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                  placeholder="https://tiktok.com/@yourhandle"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Instagram Profile URL
                </label>
                <input
                  type="url"
                  required
                  value={formData.socials.instagram}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socials: { ...formData.socials, instagram: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none"
                  placeholder="https://instagram.com/yourhandle"
                />
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-rose-400 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All to Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-xl transition-all shadow-md cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
