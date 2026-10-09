/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ProfileData, GalleryItem, ProjectItem, SkillCategory } from './types.ts';
import {
  defaultProfileData,
  defaultGalleryItems,
  defaultSkillCategories,
  defaultProjects,
} from './data/defaultData.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Skills } from './components/Skills.tsx';
import { Work } from './components/Work.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { EditProfileModal } from './components/EditProfileModal.tsx';
import { BioModal } from './components/BioModal.tsx';
import { SlidersHorizontal } from 'lucide-react';

const STORAGE_KEY_PROFILE = 'a_for_pollab_profile_v1';
const STORAGE_KEY_GALLERY = 'a_for_pollab_gallery_v1';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load profile from localStorage:', e);
    }
    return defaultProfileData;
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_GALLERY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load gallery from localStorage:', e);
    }
    return defaultGalleryItems;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  // Sync to localStorage
  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to persist profile:', e);
    }
  };

  const handleResetProfile = () => {
    setProfile(defaultProfileData);
    setGalleryItems(defaultGalleryItems);
    try {
      localStorage.removeItem(STORAGE_KEY_PROFILE);
      localStorage.removeItem(STORAGE_KEY_GALLERY);
    } catch (e) {
      console.error('Failed to reset storage:', e);
    }
    setIsCustomizerOpen(false);
  };

  const handleAddGalleryItem = (newItem: GalleryItem) => {
    const updated = [newItem, ...galleryItems];
    setGalleryItems(updated);
    try {
      localStorage.setItem(STORAGE_KEY_GALLERY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to persist gallery:', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F3F4F6] selection:bg-[#D4AF37]/30 selection:text-white relative">
      {/* Top Bar Navigation */}
      <Navbar
        brandName={profile.brandName}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Home / Hero Page */}
        <Hero
          profile={profile}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
          onOpenBioModal={() => setIsBioModalOpen(true)}
        />

        {/* 2. About Me Section with Biography */}
        <About
          profile={profile}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 3. Personal Photo Gallery */}
        <Gallery
          galleryItems={galleryItems}
          onAddPhoto={handleAddGalleryItem}
        />

        {/* 4. My Skills Section */}
        <Skills categories={defaultSkillCategories} />

        {/* 5. My Work Section */}
        <Work projects={defaultProjects} />

        {/* 6. Contact Section with Facebook, YouTube, TikTok, Instagram */}
        <Contact
          profile={profile}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Floating Personalize/Edit Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsCustomizerOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-[#D4AF37]/50 text-xs font-semibold text-[#F3E5AB] hover:text-white shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-200 hover:scale-105 cursor-pointer active:scale-95"
          title="Edit Profile, Bio, & Social Handles"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Edit Portfolio Info</span>
        </button>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isCustomizerOpen}
        profile={profile}
        onClose={() => setIsCustomizerOpen(false)}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />

      {/* Executive Bio Modal */}
      <BioModal
        isOpen={isBioModalOpen}
        profile={profile}
        onClose={() => setIsBioModalOpen(false)}
      />
    </div>
  );
}
