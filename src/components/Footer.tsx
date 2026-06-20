import React, { useState } from "react";
import { Instagram, Mail, MessageSquare, MapPin, Sparkles, Check } from "lucide-react";

interface FooterProps {
  onNavClick: (refId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const [emailValue, setEmailValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue.trim()) return;
    setIsSubscribed(true);
    setEmailValue("");
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Ksu", id: "about" },
    { name: "Nutrition Services", id: "nutrition" },
    { name: "Skin & Wellness", id: "skin-wellness" },
    { name: "Why Trust", id: "why-trust" },
    { name: "Success Stories", id: "testimonials" },
    { name: "Instagram Education", id: "education" },
    { name: "Frequently Asked Questions", id: "faq" },
    { name: "Consultation Request", id: "contact" },
  ];

  return (
    <footer className="bg-[#FAF9F6] py-16 md:py-24 relative overflow-hidden border-t border-slate-200">
      
      {/* Soft overlay gradient */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-clinical-crimson/5 rounded-full blur-3xl opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Horizontal main columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-200">
          
          {/* Col 1: Wordmark & Bio description */}
          <div className="md:col-span-5 text-left space-y-6">
            <div className="flex flex-col select-none">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-slate-900 animate-fade-in">
                Ksu Romanovskaya
              </span>
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.25em] text-clinical-crimson font-bold uppercase mt-1">
                PHYSICIAN ASSISTANT · NUTRITION · DERM INTEGRITY
              </span>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed max-w-sm">
              Establishing a premium space where clinical diagnostic education crosses paths with sustainable metabolic wellness. Reclaim internal control, quiet the noise, and stabilize your hormone wellness.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-755 font-sans font-bold">
              <MapPin className="w-4 h-4 text-clinical-crimson" />
              <span>Toronto, Canada &mdash; Globally Available</span>
            </div>
          </div>

          {/* Col 2: Site map */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="font-serif text-sm font-bold text-slate-900 tracking-wider uppercase">
              Sitemap & Navigation
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(link.id);
                  }}
                  className="font-sans text-xs text-slate-600 hover:text-clinical-crimson transition-colors text-left font-bold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Secure channels */}
          <div className="md:col-span-3 text-left space-y-6">
            <h4 className="font-serif text-sm font-bold text-slate-900 tracking-wider uppercase">
              Secure Communications
            </h4>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/ksu_romanovskaya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-clinical-crimson hover:text-white hover:bg-[#A3182D] transition-all duration-350 shadow-sm border border-slate-200"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="mailto:hello@ksuromanovskaya.com"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-clinical-crimson hover:text-white hover:bg-[#A3182D] transition-all duration-350 shadow-sm border border-slate-200"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/14165550199"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-clinical-crimson hover:text-white hover:bg-[#A3182D] transition-all duration-350 shadow-sm border border-slate-200"
                aria-label="WhatsApp Desk"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            {/* Newsletter widget */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <span className="text-[9px] tracking-widest font-sans font-bold text-clinical-crimson uppercase flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-clinical-crimson animate-pulse" /> METABOLIC RECORD
              </span>
              <p className="text-[10px] text-slate-600 leading-snug">
                Join our private newsletter registry for therapeutic recipes and clinical skincare hacks.
              </p>
              
              <div className="pt-1">
                {isSubscribed ? (
                  <div className="flex items-center gap-1.5 text-[9px] font-sans font-bold text-clinical-crimson uppercase bg-clinical-crimson/10 py-2 px-3 rounded-md border border-clinical-crimson/30 animate-fade-in">
                    <Check className="w-3.5 h-3.5 text-clinical-crimson" /> Registry Recorded!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribeSubmit} className="flex">
                    <input
                      required
                      type="email"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      placeholder="name@example.com"
                      className="px-2.5 py-1.5 rounded-l-md border border-r-0 border-slate-200 text-[10px] w-full focus:outline-none focus:ring-1 focus:ring-clinical-crimson font-sans placeholder-slate-400 text-slate-800 bg-slate-50"
                    />
                    <button
                      type="submit"
                      className="bg-clinical-crimson hover:bg-[#A3182D] border border-clinical-crimson px-3.5 py-1 text-[9px] uppercase tracking-wider font-bold text-white rounded-r-md transition-colors font-sans cursor-pointer whitespace-nowrap"
                    >
                      Join
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer row */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left selection-text">
          <p className="font-sans text-[10px] text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Ksu Romanovskaya. All Rights Reserved. Toronto, Ontario.
          </p>

          <p className="font-sans text-[9px] text-slate-500 italic leading-normal max-w-xl md:text-right mt-1 md:mt-0 font-medium">
            <strong className="text-clinical-crimson">Clinical Disclaimer:</strong> Content displayed on this consultation page is for educational, cosmetic,
            and nutritional advice purposes only. It is not intended to represent clinical diagnostics, hospital prescriptions, or absolute medical care.
          </p>
        </div>

      </div>
    </footer>
  );
}
