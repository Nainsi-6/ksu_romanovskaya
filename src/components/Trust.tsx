import { motion } from "motion/react";
import PlaceholderImage from "./PlaceholderImage";

export default function Trust() {
  const pillars = [
    {
      num: "01",
      title: "Physician Assistant Expertise",
      desc: "Ontario registered clinical professional with medical training, ensuring your therapies are grounded in strict internal medicine science.",
    },
    {
      num: "02",
      title: "Evidence-Based Therapeutics",
      desc: "Strictly avoiding web trends, extreme calorie restriction, or biological detox fads. Every habit is derived from peer-reviewed metadata.",
    },
    {
      num: "03",
      title: "Restorative Abundance Planning",
      desc: "Designed to encourage food abundance rather than starve your cells or isolate your life. Maintain gut and hormone health while dining out.",
    },
    {
      num: "04",
      title: "Adaptive Biomarker Alignment",
      desc: "Each protocol and dietary layer is custom-tailored to your blood panels, liver/thyroid functions, gut biome index, and cellular skins.",
    },
  ];

  return (
    <section
      id="why-trust"
      className="py-12 md:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-clinical-crimson font-bold uppercase block">
            CLINICAL EXCELLENCE IN TORONTO
          </span>
          <h2 className="font-serif text-fluid-h2 text-slate-900 font-bold tracking-tight leading-[1.2]">
            Evidence-Based Diagnostics. <br />
            <span className="italic text-clinical-crimson font-normal">Rigorous Science-Backed Health.</span>
          </h2>
          <div className="w-12 h-[2.5px] bg-clinical-crimson mx-auto" />
          <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
            Experience premium clinical consultation built to repair endocrine markers, digestive lining, and dermis vitality correctly.
          </p>
        </div>

        {/* Dynamic Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Diagnostic trust elements */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="space-y-4 select-text">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-4xl md:text-5xl font-light text-clinical-crimson select-none">
                    {pillar.num}
                  </span>
                  <h3 className="font-serif text-base md:text-lg font-bold text-slate-900 tracking-wide">
                    {pillar.title}
                  </h3>
                </div>

                {/* Horizontal divider animated line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: index * 0.15 }}
                  className="h-[1.5px] bg-clinical-crimson/30"
                />

                {/* Paragraph copy */}
                <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Supportive Photographic Panel */}
          <div className="lg:col-span-4 select-none relative">
            {/* Outline backing box to ground elements */}
            <div className="absolute -inset-4 rounded-t-full rounded-b-2xl bg-clinical-crimson/5 transform rotate-2 -z-10 blur-xl" />
            
            <div className="rounded-t-[8rem] rounded-b-3xl overflow-hidden p-3 bg-white shadow-xl border border-slate-200">
              <PlaceholderImage
                src="/images/consultation-session.jpg"
                alt="Licensed consultation session analysis"
                label="Registered Clinical Consulting"
                aspectClass="aspect-[3/4]"
                className="rounded-t-[7.5rem] rounded-b-xl bg-white"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
