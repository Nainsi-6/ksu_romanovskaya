import { ArrowRight, Instagram } from "lucide-react";
import { motion } from "motion/react";
import KsuPortrait from "./KsuPortrait";

interface HeroProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export default function Hero({ onExploreClick, onBookClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white pt-[120px] pb-12 md:pb-16 flex items-center overflow-hidden border-b border-slate-100"
    >
      {/* Delicate background clinical grid aesthetics or subtle highlights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Authoritative Editorial Medical Text & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 select-text">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 text-left"
          >
            {/* Clinical Professional Eyebrow Label */}
            <div className="inline-block space-y-2">
              <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-clinical-crimson font-bold uppercase block">
                TORONTO · REGISTERED PHYSICIAN ASSISTANT & CLINICAL CONSULTANT
              </span>
              <div className="h-[2px] w-14 bg-clinical-crimson animate-pulse" />
            </div>

            {/* Structured Medical/Metabolic Impact Headline */}
            <h1 className="font-serif text-fluid-h1 text-slate-900 font-bold tracking-tight leading-[1.1]">
              Sustainable Health, <br />
              <span className="text-clinical-crimson italic font-medium">Built on Medical Science</span>
            </h1>

            {/* Authoritative clinical scope description */}
            <p className="font-serif italic text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-xl">
              Evidence-based clinical medicine & metabolic nutrition consulting. Restoring hormone balance & skin health programmatically, without extreme restrictions.
            </p>

            <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed max-w-lg">
              We specialize in gut biome recovery, hormone stabilization, and dermal barrier repair utilizing scientific diagnostics rather than internet trends.
            </p>

            {/* Elite clinical buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onBookClick}
                className="flex items-center justify-center gap-2.5 font-sans text-xs tracking-widest uppercase font-bold text-white bg-clinical-crimson hover:bg-[#A3182D] py-4 px-8 rounded-full shadow-lg shadow-clinical-crimson/15 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Book Intake Consultation <ArrowRight className="w-4 h-4 text-white" />
              </button>
              
              <button
                onClick={onExploreClick}
                className="group font-sans text-xs tracking-widest uppercase font-bold text-slate-600 hover:text-clinical-crimson py-4 px-2 transition-all duration-300 relative"
              >
                Analyze Services
                <span className="absolute bottom-3 left-2 right-2 h-[2px] bg-clinical-crimson transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>

            {/* High-end Social Trust strip */}
            <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-4 pb-6 mt-6">
              <div className="flex -space-x-2 select-none shrink-0">
                <div className="w-8 h-8 rounded-full bg-clinical-crimson border-2 border-white flex items-center justify-center text-[9px] font-sans font-bold text-white shadow-md">PA</div>
                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-[9px] font-sans font-bold text-white shadow-md">MD</div>
                <div className="w-8 h-8 rounded-full bg-amber-600 border-2 border-white flex items-center justify-center text-[9px] font-sans font-bold text-white shadow-md">RD</div>
              </div>
              <div className="text-left font-sans shrink-0">
                <p className="text-xs font-bold text-slate-800">
                  Clinically supported programs trusted in Ontario.
                </p>
                <a
                  href="https://instagram.com/ksu_romanovskaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-semibold text-slate-500 hover:text-clinical-crimson flex items-center gap-1.5 mt-0.5 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-clinical-crimson" /> @ksu_romanovskaya
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Editorial Portrait Frame (Uses KsuPortrait in a perfect circle!) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2 select-none relative pb-6 lg:pb-0 w-full">
          
          {/* Subtle rose backdrop illumination designed for her custom red backdrop headshot */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-clinical-crimson/10 -z-10 blur-3xl rounded-full" />
          
          {/* Beautiful circular image frame container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative p-2 rounded-full border-2 border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-xl flex items-center justify-center"
          >
            <KsuPortrait
              type="hero"
              aspectClass="w-full h-full"
              className="w-full h-full rounded-full ring-4 ring-white shadow-2xl"
            />
          </motion.div>
          
          <div className="mt-4 text-center">
            <span className="font-serif text-slate-400 italic text-xs block">Ksu Romanovskaya</span>
            <span className="font-sans text-[9px] tracking-widest text-slate-500 font-bold uppercase mt-0.5 block">Physician Assistant</span>
          </div>
        </div>

      </div>
    </section>
  );
}
