import React from "react";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  label: string;
  aspectClass: string; // e.g. "aspect-[4/5]" or "aspect-[3/4]" or "aspect-square"
  className?: string;
  customOverlay?: React.ReactNode;
}

export default function PlaceholderImage({
  src,
  alt,
  label,
  aspectClass,
  className = "",
  customOverlay,
}: PlaceholderImageProps) {
  
  const isNutrition = src.includes("kitchen") || src.includes("nutrition") || src.includes("meal");
  const isSkin = src.includes("skin") || src.includes("wellness") || src.includes("dermal");

  if (isNutrition) {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-white border border-slate-200 ${aspectClass} ${className} flex flex-col justify-between p-6 select-none shadow-md`}>
        {/* Soft elegant background glow */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-clinical-crimson/5 rounded-full blur-2xl pointer-events-none" />
        
        {/* Tech grid overlay in background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

        <div className="flex justify-between items-start z-10 w-full">
          <span className="text-[9px] tracking-[0.25em] font-sans font-bold text-clinical-crimson bg-clinical-crimson/5 border border-clinical-crimson/20 px-3 py-1 rounded-full uppercase">
            CELLULAR NUTRITION BIO-INDEX
          </span>
          <span className="font-mono text-[8px] text-slate-400 font-bold bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded">
            SYS: STABLE
          </span>
        </div>

        {/* Rich cellular metabolism chemical path diagram */}
        <div className="w-full h-1/2 flex items-center justify-center my-auto z-10 relative">
          <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background alignment grid */}
            <circle cx="100" cy="100" r="85" stroke="#F1F5F9" strokeWidth="1" />
            <circle cx="100" cy="100" r="55" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="#F1F5F9" strokeWidth="0.75" />
            <line x1="10" y1="100" x2="190" y2="100" stroke="#F1F5F9" strokeWidth="0.75" />

            {/* Elegant botanical nutrient stalk */}
            <path d="M100 175 C100 175 100 100 100 45" stroke="#BE1D35" strokeWidth="3" strokeLinecap="round" />
            
            {/* Detailed leaves with biochemical energy fields */}
            <path d="M100 140 C120 135, 135 120, 130 100 C115 100, 105 120, 100 140" fill="#BE1D35" fillOpacity="0.08" stroke="#BE1D35" strokeWidth="1.5" />
            <path d="M100 110 C75 105, 60 90, 65 70 C80 70, 92 90, 100 110" fill="#B45309" fillOpacity="0.08" stroke="#B45309" strokeWidth="1.5" />
            <path d="M100 80 C125 75, 135 60, 130 40 C115 40, 105 60, 100 80" fill="#BE1D35" fillOpacity="0.05" stroke="#BE1D35" strokeWidth="1" />
            
            {/* Molecular rings wrapping around the organic stalk representing clinical bio-chemistry */}
            <path d="M75 115 A 35 12 40 0 0 125 105" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 2" />
            <path d="M75 115 A 35 12 40 0 1 125 105" stroke="#64748B" strokeWidth="1.5" />
            
            {/* Molecular hex ring representing energy molecules (Glucose/Nutrient) */}
            <g transform="translate(130, 110) scale(0.65)" stroke="#B45309" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="30,5 55,20 55,50 30,65 5,50 5,20" fill="#B45309" fillOpacity="0.05" />
              <line x1="30" y1="5" x2="30" y2="15" />
              <line x1="55" y1="50" x2="63" y2="55" />
              <circle cx="63" cy="55" r="2.5" fill="#B45309" stroke="none" />
              <line x1="5" y1="20" x2="-2" y2="15" stroke="#BE1D35" />
            </g>

            {/* Glowing hormone peptide signals (circles with concentric halos) */}
            <circle cx="50" cy="85" r="4" fill="#BE1D35" />
            <circle cx="50" cy="85" r="9" stroke="#BE1D35" strokeWidth="0.75" strokeDasharray="2 2" />
            
            <circle cx="150" cy="65" r="5" fill="#B45309" />
            <circle cx="150" cy="65" r="11" stroke="#B45309" strokeWidth="0.5" />

            <circle cx="70" cy="155" r="3.5" fill="#64748B" />

            {/* Small data curve overlay */}
            <path d="M40 180 Q 70 170, 100 175 T 160 160" stroke="#64748B" strokeWidth="1" opacity="0.3" strokeLinecap="round" />

            {/* Micro Annotation Labels */}
            <text x="35" y="75" fontFamily="monospace" fontSize="6px" fontWeight="bold" fill="#BE1D35">PEPTIDE T3</text>
            <text x="145" y="52" fontFamily="monospace" fontSize="6px" fontWeight="bold" fill="#B45309">LIPID H2</text>
            <text x="94" y="185" fontFamily="monospace" fontSize="5.5px" fontWeight="bold" fill="#64748B">METABOLIC STALKS</text>
          </svg>
        </div>

        <div className="border-t border-slate-100 pt-3.5 z-10 mt-auto text-left w-full flex justify-between items-end bg-white">
          <div>
            <p className="text-[11px] font-serif font-black text-slate-900 tracking-wide line-clamp-1">
              {label || "Whole-Food Metabolic Nutrition"}
            </p>
            <p className="text-[9px] font-sans text-slate-500 tracking-wider font-semibold uppercase">
              Clinical Gut & Hormone Optimization
            </p>
          </div>
          <span className="font-mono text-[8px] text-clinical-crimson font-bold uppercase tracking-widest border border-clinical-crimson/20 bg-clinical-crimson/5 px-2 py-0.5 rounded shrink-0">
            MET-04
          </span>
        </div>
      </div>
    );
  }

  if (isSkin) {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-white border border-slate-200 ${aspectClass} ${className} flex flex-col justify-between p-6 select-none shadow-md`}>
        {/* Soft elegant background glow */}
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-clinical-crimson/5 rounded-full blur-2xl pointer-events-none" />
        
        {/* Scientific grid backdrop */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

        <div className="flex justify-between items-start z-10 w-full">
          <span className="text-[9px] tracking-[0.25em] font-sans font-bold text-clinical-crimson bg-clinical-crimson/5 border border-clinical-crimson/20 px-3 py-1 rounded-full uppercase">
            DERMAL EPIDERMIS MEMBRANE
          </span>
          <span className="font-mono text-[8px] text-slate-400 font-bold bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded">
            BARRIER: 94% SECURE
          </span>
        </div>

        {/* Highly detailed skin cross-section cell wall diagram */}
        <div className="w-full h-1/2 flex items-center justify-center my-auto z-10 relative">
          <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background compass alignment element */}
            <circle cx="100" cy="100" r="85" stroke="#F1F5F9" strokeWidth="1" />
            <path d="M15 100 H185" stroke="#F8FAFC" strokeWidth="1.5" />
            
            {/* Stratum Corneum (Skin barrier layer) representing healing and recovery */}
            <g id="skin-layers" strokeWidth="1.5">
              {/* Outer epidermal layer curved line */}
              <path d="M 15 50 Q 100 35, 185 50" stroke="#BE1D35" strokeWidth="2.5" strokeLinecap="round" />
              {/* Second sub-epidermal layer */}
              <path d="M 15 70 Q 100 55, 185 70" stroke="#B45309" strokeDasharray="3 3" />
              {/* Deeper dermis layer */}
              <path d="M 15 90 Q 100 75, 185 90" stroke="#64748B" />
            </g>

            {/* Cellular lipid building block cells (glowing hexagon cells linking skin layer) */}
            <g transform="translate(45, 95) scale(0.55)" stroke="#64748B" strokeWidth="1.5">
              <polygon points="30,5 55,20 55,50 30,65 5,50 5,20" fill="#FFFFFF" />
              <circle cx="30" cy="35" r="4" fill="#BE1D35" stroke="none" />
            </g>
            <g transform="translate(85, 85) scale(0.65)" stroke="#BE1D35" strokeWidth="2">
              <polygon points="30,5 55,20 55,50 30,65 5,50 5,20" fill="#BE1D35" fillOpacity="0.05" />
              <circle cx="30" cy="35" r="5" fill="#B45309" stroke="none" />
              <text x="30" y="38" fill="#FFFFFF" fontSize="8px" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">H2O</text>
            </g>
            <g transform="translate(125, 95) scale(0.55)" stroke="#64748B" strokeWidth="1.5">
              <polygon points="30,5 55,20 55,50 30,65 5,50 5,20" fill="#FFFFFF" />
              <circle cx="30" cy="35" r="4" fill="#64748B" stroke="none" />
            </g>

            {/* Sparkles / moisture nourishment arrows penetrating dermal barrier */}
            <path d="M 70 12 L 80 26 M 80 26 L 74 24 M 80 26 L 82 20" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 125 10 L 115 25 M 115 25 L 121 23 M 115 25 L 113 19" stroke="#BE1D35" strokeWidth="1.5" strokeLinecap="round" />

            {/* Glowing stars representing dermal restoration (shimmery cross sparkles) */}
            <g transform="translate(155, 20)">
              <path d="M0 -7 L0 7 M-7 0 L7 0" stroke="#B45309" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
            </g>
            <g transform="translate(30, 25)">
              <path d="M0 -5 L0 5 M-5 0 L5 0" stroke="#BE1D35" strokeWidth="1.25" />
            </g>

            {/* Medical lotion bottle asset in background representing barrier topical recovery */}
            <g transform="translate(88, 115) scale(0.85)" opacity="0.95">
              {/* Glass dropper bottle container */}
              <rect x="2" y="15" width="20" height="30" rx="3.5" stroke="#BE1D35" strokeWidth="2" fill="#FFFFFF" />
              <path d="M8 15 V7 H16 V15" stroke="#BE1D35" strokeWidth="2" />
              {/* Squeeze bulb */}
              <path d="M7 7 C7 2, 17 2, 17 7 Z" fill="#64748B" stroke="#64748B" strokeWidth="1" />
              {/* Plus indicator on medical bottle */}
              <path d="M12 25 V31 M9 28 H15" stroke="#BE1D35" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* Explanatory annotation markers */}
            <text x="25" y="44" fontFamily="monospace" fontSize="6px" fontWeight="bold" fill="#BE1D35">STRATUM CORNEUM PROTECT</text>
            <text x="110" y="80" fontFamily="monospace" fontSize="6px" fontWeight="bold" fill="#64748B">LIPID LAYER RESYNTHESIS</text>
            <text x="50" y="155" fontFamily="monospace" fontSize="5.5px" fontWeight="bold" fill="#B45309">ACTIVE CELL RECOVERY PATH</text>
          </svg>
        </div>

        <div className="border-t border-slate-100 pt-3.5 z-10 mt-auto text-left w-full flex justify-between items-end bg-white">
          <div>
            <p className="text-[11px] font-serif font-black text-slate-900 tracking-wide line-clamp-1">
              {label || "Holistic Skin Care & Barrier Recovery"}
            </p>
            <p className="text-[9px] font-sans text-slate-500 tracking-wider font-semibold uppercase">
              Evidence-Based Dermal Medicine
            </p>
          </div>
          <span className="font-mono text-[8px] text-clinical-crimson font-bold uppercase tracking-widest border border-clinical-crimson/20 bg-clinical-crimson/5 px-2 py-0.5 rounded shrink-0">
            DERM-09
          </span>
        </div>
      </div>
    );
  }

  // Fallback / Defaults representing professional clinical consultations (e.g. Trust section)
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-white border border-slate-200 ${aspectClass} ${className} flex flex-col justify-between p-6 select-none shadow-md`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-clinical-crimson/5 to-transparent pointer-events-none" />
      
      {/* Soft abstract pattern lines overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

      <div className="flex justify-between items-start z-10 w-full">
        <span className="text-[9px] tracking-[0.25em] font-sans font-bold text-clinical-crimson bg-clinical-crimson/5 border border-clinical-crimson/20 px-3 py-1 rounded-full uppercase">
          CLINICAL DIAGNOSTIC METHODOLOGY
        </span>
        <span className="font-mono text-[8px] text-slate-400 font-bold bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded">
          MTR: ACTIVE
        </span>
      </div>

      {/* Highly beautiful science data-dashboard representing clinical diagnostics */}
      <div className="w-full h-1/2 flex items-center justify-center my-auto z-10 relative">
        <svg viewBox="0 0 200 200" className="w-40 h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Circular diagnostic gauge background */}
          <circle cx="100" cy="100" r="85" stroke="#F1F5F9" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="72" stroke="#FAF1F2" strokeWidth="8" />
          <circle cx="100" cy="100" r="72" stroke="#BE1D35" strokeWidth="2.5" strokeDasharray="320" strokeDashoffset="100" strokeLinecap="round" />
          
          {/* Inner details */}
          <circle cx="100" cy="100" r="45" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="2 2" />

          {/* Core medical clipboard vector inside representing documentation */}
          <g transform="translate(85, 78)" strokeLinecap="round" strokeLinejoin="round">
            {/* Clipboard backing */}
            <rect x="0" y="5" width="30" height="42" rx="3" stroke="#BE1D35" strokeWidth="2.2" fill="#FFFFFF" />
            <path d="M9 5 V2 H21 V5" stroke="#B45309" strokeWidth="2" />
            
            {/* Structured medical record entry lines */}
            <line x1="6" y1="14" x2="24" y2="14" stroke="#BE1D35" strokeWidth="2" />
            <line x1="6" y1="22" x2="24" y2="22" stroke="#BE1D35" strokeWidth="2" />
            <line x1="6" y1="30" x2="18" y2="30" stroke="#B45309" strokeWidth="2" />
          </g>

          {/* Cortisol hormone rhythm curve wave representing dynamic biology */}
          <path d="M 28 142 Q 62 108, 100 135 T 172 128" stroke="#B45309" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="136" cy="136" r="3.5" fill="#BE1D35" />
          <circle cx="136" cy="136" r="8" stroke="#BE1D35" strokeWidth="0.5" strokeDasharray="2 2" />

          {/* Shimmer sparkle shapes representing restoration */}
          <g transform="translate(150, 48)">
            <path d="M0 -5 L0 5 M-5 0 L5 0" stroke="#BE1D35" strokeWidth="1.5" />
          </g>
          <g transform="translate(50, 60)">
            <path d="M0 -4 L0 4 M-4 0 L4 0" stroke="#B45309" strokeWidth="1" />
          </g>

          {/* High-end diagnostic labels */}
          <text x="100" y="165" fontFamily="monospace" fontSize="6px" fontWeight="bold" fill="#64748B" textAnchor="middle">BIOMARKER EQUILIBRIUM SCALE</text>
          <text x="142" y="118" fontFamily="monospace" fontSize="6.5px" fontWeight="bold" fill="#BE1D35">EST: PEAK</text>
          <text x="32" y="112" fontFamily="monospace" fontSize="6.5px" fontWeight="bold" fill="#B45309">AM CORTISOL</text>
        </svg>
      </div>

      <div className="border-t border-slate-100 pt-3.5 z-10 mt-auto text-left w-full flex justify-between items-end bg-white">
        <div>
          <p className="text-[11px] font-serif font-black text-slate-900 tracking-wide line-clamp-1">
            {label || "Registered Professional Consultation"}
          </p>
          <p className="text-[9px] font-sans text-slate-500 tracking-wider font-semibold uppercase">
            Clinically Informed Diagnostics
          </p>
        </div>
        <span className="font-mono text-[8px] text-clinical-crimson font-bold uppercase tracking-widest border border-clinical-crimson/20 bg-clinical-crimson/5 px-2 py-0.5 rounded shrink-0">
          DX-11
        </span>
      </div>

      {customOverlay}
    </div>
  );
}
