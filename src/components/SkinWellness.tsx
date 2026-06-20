import { Sparkles, Sun, Droplet, Check } from "lucide-react";
import { motion } from "motion/react";
import PlaceholderImage from "./PlaceholderImage";

interface SkinWellnessProps {
  onBookClick: () => void;
}

export default function SkinWellness({ onBookClick }: SkinWellnessProps) {
  const pillars = [
    {
      icon: <Sparkles className="w-5 h-5 text-clinical-crimson" />,
      title: "Cellular Epidermal Rehabilitation",
      desc: "Clinical science addressing skin barrier collapse, persistent dermal irritation, and chronic acne symptoms from the roots.",
    },
    {
      icon: <Droplet className="w-5 h-5 text-clinical-crimson" />,
      title: "Endocrine & Gut Synthesis for Radiance",
      desc: "Synchronizing gut membrane health, essential lipid intakes, and stress neurotransmitters to prompt intrinsic glow.",
    },
    {
      icon: <Sun className="w-5 h-5 text-clinical-crimson" />,
      title: "Systemic Antioxidant & Aging Defense",
      desc: "Long-term metabolic protocols using powerful nutritional shields to limit systemic inflammation and guard collagen.",
    },
  ];

  return (
    <section
      id="skin-wellness"
      className="py-12 md:py-16 bg-white relative overflow-hidden border-t border-slate-100"
    >
      {/* Soft crimson ambient lighting glow behind components */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-clinical-crimson/5 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title view for tablet or mobile sizes */}
        <div className="lg:hidden text-left space-y-4 mb-12">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-clinical-crimson font-bold uppercase block">
            SKIN BARRIER INTEGRITY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-bold tracking-tight">
            Integrated Dermal Recovery
          </h2>
          <div className="w-16 h-[2px] bg-clinical-crimson" />
        </div>

        {/* Side-by-side Non-Overlapping Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
          
          {/* Left Column: Visual Clinical Sourced Image (6 columns wide) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 select-none">
            
            {/* Outline editorial backing line for structural balance */}
            <div className="hidden lg:block absolute inset-y-6 -left-6 right-6 rounded-3xl border border-slate-200 -z-10" />
            
            {/* The photo frame */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white p-2 border border-slate-200">
              <PlaceholderImage
                src="/images/skin-wellness.jpg"
                alt="Detailed clinical skincare biology"
                label="Physiologic Skin Barrier Science"
                aspectClass="aspect-[4/3] md:aspect-[16/10]"
                className="rounded-2xl"
              />
            </div>

            {/* Micro Floating Quote Badge Overlay */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 right-4 p-5 rounded-2xl bg-white border border-slate-200 text-slate-950 shadow-2xl max-w-xs text-left text-xs space-y-2 z-15"
            >
              <p className="font-serif italic text-slate-800 text-[11px] md:text-xs leading-snug">
                "Clinical skin health and gastrointestinal chemistry are deeply bound. Root healing displays on the surface."
              </p>
              <p className="font-sans text-[8px] tracking-wider text-clinical-crimson uppercase font-bold pt-1">
                — KSU ROMANOVSKAYA
              </p>
            </motion.div>
          </div>

          {/* Right Column: Narrative Card (6 columns wide - no overlapping congestion) */}
          <div className="lg:col-span-6 z-20 order-1 lg:order-2 select-text">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200 space-y-8"
            >
              {/* Card headers (shown on large screens) */}
              <div className="hidden lg:block space-y-3">
                <span className="font-sans text-[10px] tracking-[0.25em] text-clinical-crimson font-bold uppercase block">
                  SKIN & WELLNESS PILLARS
                </span>
                <h2 className="font-serif text-3xl xl:text-4xl text-slate-900 font-bold tracking-tight">
                  Dermal Recovery Programs
                </h2>
                <div className="w-16 h-[2px] bg-clinical-crimson" />
              </div>

              {/* Description */}
              <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                Clinical dermatology assistant knowledge blended with cellular metabolism planning. We soothe surface outbreaks of acne, rosacea, and sensitivity by addressing root causes.
              </p>

              {/* Pillars listing */}
              <div className="space-y-6 text-left">
                {pillars.map((pillar, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {pillar.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-bold text-slate-900 tracking-wide">
                        {pillar.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={onBookClick}
                  className="w-full flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase font-bold text-white bg-clinical-crimson hover:bg-[#A3182D] border border-clinical-crimson py-4 rounded-xl transition-all duration-300 cursor-pointer shadow-lg shadow-clinical-crimson/15"
                >
                  Book Barrier Intake <Check className="w-4 h-4 ml-1 text-white animate-pulse" />
                </button>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
