import React, { useState } from 'react';
import { ProfileData } from '../types.ts';
import { SocialButtons } from './SocialButtons.tsx';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

interface ContactProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
}

export const Contact: React.FC<ContactProps> = ({ profile, onOpenCustomizer }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Commercial Film & Direction',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    setFormSubmitted(true);
    setStatusMessage(
      `Thank you, ${formData.name}! Your message regarding "${formData.service}" has been prepared.`
    );
  };

  const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.service} from ${formData.name || 'Website Visitor'}`
  )}&body=${encodeURIComponent(
    `Hello Pollab,\n\nMy Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.service}\n\nMessage:\n${formData.message}\n`
  )}`;

  return (
    <section id="contact" className="py-24 relative bg-[#070707] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            <span>05</span>
            <span>·</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
            Contact & Collaborations
          </h2>
          <p className="text-neutral-400 text-base max-w-2xl">
            Have a project, commercial inquiry, or creative direction opportunity? Send a message or connect across official platforms.
          </p>
        </div>

        {/* 2-Column Split: Contact Information & Functional Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Social Buttons */}
          <div className="lg:col-span-5 space-y-8">
            {/* Status card */}
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-900 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                  Production Inquiries
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#F3E5AB] text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Active 2026 Season
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                Direct booking for cinematography, digital campaigns, and editorial creative direction.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-850 hover:border-[#D4AF37]/50 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-neutral-500">Official Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(profile.email, 'email')}
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`mailto:${profile.email}`}
                    className="p-2 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] transition-colors"
                    title="Open Mail App"
                    aria-label="Send Email"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Phone Card with Copy button */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-850 hover:border-[#D4AF37]/50 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[#D4AF37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-neutral-500">Phone / WhatsApp</p>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-850 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[#D4AF37]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase text-neutral-500">Location Base</p>
                  <p className="text-sm font-semibold text-white">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Official Social Media Buttons */}
            <div className="pt-4 border-t border-neutral-900 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  Social Media Channels
                </p>
                <button
                  onClick={onOpenCustomizer}
                  className="text-xs text-neutral-500 hover:text-[#D4AF37] transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Edit Handles
                </button>
              </div>
              <SocialButtons socials={profile.socials} variant="bar" />
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-neutral-950/90 border border-neutral-850 shadow-2xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-neutral-400">
                  Every inquiry receives a personal response within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 space-y-4 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black mx-auto flex items-center justify-center font-bold">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-cinzel font-bold text-white">Message Prepared!</h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">{statusMessage}</p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-xl transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Direct via Email App</span>
                    </a>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          service: 'Commercial Film & Direction',
                          message: '',
                        });
                      }}
                      className="px-4 py-2.5 text-xs text-neutral-400 hover:text-white"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Henderson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none transition-colors"
                    >
                      <option value="Commercial Film & Direction">Commercial Film & Direction</option>
                      <option value="Editorial Photography & Portrait">Editorial Photography & Portrait</option>
                      <option value="Social Media Content Strategy">Social Media Content Strategy</option>
                      <option value="Color Grading & Post-Production">Color Grading & Post-Production</option>
                      <option value="Brand Sponsorship & Partnership">Brand Sponsorship & Partnership</option>
                      <option value="Other Creative Collaboration">Other Creative Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Message & Project Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell me about your project, timeline, deliverables, or creative goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] rounded-xl text-white text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  {statusMessage && (
                    <p className="text-xs text-amber-400 font-medium">{statusMessage}</p>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-neutral-500 font-mono">
                      Target inbox: {profile.email}
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-xl transition-all shadow-md cursor-pointer active:scale-95"
                    >
                      <span>Send Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
