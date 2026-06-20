import { Clipboard, ShieldCheck, Heart, Sparkles, Activity, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface MeetKsuProps {
  onLearnMoreClick: () => void;
}

export default function MeetKsu({ onLearnMoreClick }: MeetKsuProps) {
  const credentials = [
    {
      icon: <Clipboard className="w-5 h-5 text-clinical-crimson" />,
      title: "Physician Assistant",
      desc: "Ontario registered clinical professional with medical-grade training, working in dermatology and emergency practice.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-clinical-crimson" />,
      title: "Nutrition Consultant",
      desc: "Providing cellular-level metabolics and therapeutic dietary strategies designed for organ vitality.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-clinical-crimson" />,
      title: "Dermato-Physiology Adaptations",
      desc: "Addressing skin barrier collapse, persistent acne vulgaris, and accelerated cellular repair workflows.",
    },
    {
      icon: <Heart className="w-5 h-5 text-clinical-crimson" />,
      title: "Endocrine & Gut Calibration",
      desc: "Clinically targeted plans for persistent bloating, thyroid regulation, and hormonal rhythm recovery.",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-16 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(190,29,53,0.03)_0%,_transparent_60%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Scientific Clinical Vector - Replacing Doctor Photo entirely!) */}
          <div className="lg:col-span-4 select-none relative">
            <div className="absolute -inset-2 sm:-inset-4 rounded-3xl border border-slate-200 bg-slate-50/50 -z-10" />
            
            {/* Clinical Infographic Body Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-150 shadow-md sm:shadow-xl space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-clinical-crimson animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest font-sans font-bold text-slate-800 uppercase">
                    BIOMETRIC INTERDEPENDENCE
                  </span>
                </div>
                <span className="text-[8px] sm:text-[9px] font-sans text-clinical-crimson font-bold bg-clinical-crimson/5 px-2 py-0.5 rounded-full uppercase border border-clinical-crimson/10">
                  CLINICAL MODEL
                </span>
              </div>

              {/* Majestic pure-SVG medical vector showing Gut-Skin-Hormone Axis */}
              <div className="bg-slate-50 rounded-xl p-2.5 sm:p-4 flex flex-col items-center justify-center border border-slate-100">
                <svg viewBox="0 0 160 160" className="w-full max-w-[125px] xs:max-w-[145px] sm:max-w-[180px] md:max-w-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Concentric rings of systemic medicine */}
                  <circle cx="80" cy="80" r="70" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3"/>
                  <circle cx="80" cy="80" r="45" stroke="#E2E8F0" strokeWidth="1"/>
                  
                  {/* Glowing Connection Nodes */}
                  {/* Node 1: Gastrointestinal Core (Top left) */}
                  <circle cx="50" cy="50" r="14" fill="#FFFFFF" stroke="#BE1D35" strokeWidth="1.5" className="shadow-sm"/>
                  <text x="50" y="53" fontFamily="var(--font-sans)" fontSize="6" fontWeight="bold" fill="#0F172A" textAnchor="middle">GUT</text>
                  
                  {/* Node 2: Endocrine System (Hormones - Top right) */}
                  <circle cx="110" cy="50" r="14" fill="#FFFFFF" stroke="#BE1D35" strokeWidth="1.5"/>
                  <text x="110" y="53" fontFamily="var(--font-sans)" fontSize="6" fontWeight="bold" fill="#0F172A" textAnchor="middle">ENDO</text>
                  
                  {/* Node 3: Dermal Barrier (Skin - Bottom Center) */}
                  <circle cx="80" cy="110" r="14" fill="#FFFFFF" stroke="#BE1D35" strokeWidth="1.5"/>
                  <text x="80" y="113" fontFamily="var(--font-sans)" fontSize="6" fontWeight="bold" fill="#0F172A" textAnchor="middle">SKIN</text>
                  
                  {/* Interactive biochemical flow paths */}
                  <path d="M64 50 L96 50" stroke="#BE1D35" strokeWidth="1" strokeDasharray="2 1" />
                  <path d="M57 62 L73 98" stroke="#BE1D35" strokeWidth="1" strokeDasharray="2 1" />
                  <path d="M103 62 L87 98" stroke="#BE1D35" strokeWidth="1" strokeDasharray="2 1" />
                  
                  {/* Central Restoration Nucleus */}
                  <circle cx="80" cy="80" r="6" fill="#BE1D35"/>
                  <circle cx="80" cy="80" r="12" stroke="#BE1D35" strokeWidth="0.5" opacity="0.4" />
                </svg>
              </div>

              {/* Infographic metadata list */}
              <div className="space-y-2.5 sm:space-y-3 pt-1.5 sm:pt-2">
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-clinical-crimson shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Root-Cause Restoration</h4>
                    <p className="text-[10px] text-slate-500 leading-normal">Targeting gut microflora & insulin kinetics to calm acne flareups.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-clinical-crimson shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Physiological Adaptation</h4>
                    <p className="text-[10px] text-slate-500 leading-normal">Stabilizing hormone conversions instead of applying cosmetic masks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Refined Clinical Narrative - side-by-side) */}
          <div className="lg:col-span-6 text-left select-text space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-clinical-crimson font-bold uppercase block">
                CLINICAL SPECIALIST · KSU ROMANOVSKAYA
              </span>
              <h2 className="font-serif text-fluid-h2 text-slate-900 font-bold tracking-tight leading-[1.2]">
                Bridging Medical Physiology <br />
                <span className="italic text-clinical-crimson">and Sustainable Therapeutics</span>
              </h2>
              <div className="w-16 h-[2.5px] bg-clinical-crimson" />
            </div>

            <div className="space-y-6 text-slate-700 text-sm md:text-base leading-relaxed font-sans">
              <p>
                In clinical practice as a registered <strong>Physician Assistant</strong> in Toronto, I noticed a deep gap: 
                women are forced to choose between highly clinical, clinical-sterile advice, or vague, overly restrictive, 
                blush-themed beauty internet diets. I committed to offering a superior route.
              </p>
              <p>
                My consultation programs fuse robust biochemical therapeutics with livable, tailored lifestyle interventions. 
                Rather than prescribing superficial cosmetic covers, I analyze and optimize gut health, restore endocrine rhythms, 
                and strengthen the cellular skin barrier from the inside out.
              </p>
              <p className="italic font-serif text-slate-800 font-semibold border-l-4 border-clinical-crimson pl-4 py-1.5 text-base md:text-lg bg-slate-50 rounded-r-xl">
                &ldquo;Your metabolic systems require medical clarity, not extreme starvation or wellness trends. Real healings are root-cause achievements.&rdquo;
              </p>
            </div>

            {/* Credentials Layout Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex gap-3 items-start p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-clinical-crimson/40 transition-all duration-300 shadow-sm">
                  <div className="p-2 rounded-lg bg-white flex items-center justify-center shrink-0 border border-slate-200">
                    {cred.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-slate-900 tracking-wide">
                      {cred.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                      {cred.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Underline Action trigger */}
            <div className="pt-2">
              <button
                onClick={onLearnMoreClick}
                className="group inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-bold text-slate-800 hover:text-clinical-crimson transition-colors py-2 relative"
              >
                Examine Clinical Standards
                <span className="block h-[2px] bg-clinical-crimson absolute bottom-0 left-0 right-0 transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
