import { Apple, HeartHandshake, Compass, ClipboardList, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import PlaceholderImage from "./PlaceholderImage";

interface NutritionServicesProps {
  onPlanClick: () => void;
}

export default function NutritionServices({ onPlanClick }: NutritionServicesProps) {
  const services = [
    {
      icon: <Apple className="w-5 h-5 text-clinical-crimson" />,
      title: "Weight Optimization & Metabolic Harmony",
      desc: "Reignite your body's innate metabolic rhythm and optimize thyroid markers without punitive starvation steps, restrictive rules, or energy crashes.",
      points: ["Hormone-supportive clinical profiles", "No punitive macro or calorie counting", "Muscle mass & body comp calibration"],
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-clinical-crimson" />,
      title: "Intestinal Integrity & Gut Repair",
      desc: "Diagnose and resolve persistent bloating, dyspepsia, and chronic stomach flatulence. We craft science-backed microbiome restorative protocols.",
      points: ["Integrative microbiome recovery stages", "Pinpointing digestive inflammatory triggers", "Stomach-acid & digestive enzyme reviews"],
    },
    {
      icon: <Compass className="w-5 h-5 text-clinical-crimson" />,
      title: "Active Lifestyle & Business Integration",
      desc: "High-grade therapeutic nutrition strategies that fit seamlessly into busy executive lifestyles, international travel times, and clinical pipelines.",
      points: ["Stress-adaptive hormone food plans", "Deep cellular energy recovery keys", "Anxiety-free social dining methodologies"],
    },
    {
      icon: <ClipboardList className="w-5 h-5 text-clinical-crimson" />,
      title: "Targeted Clinical Bio-Consultation",
      desc: "Personalized dietary design driven wholly by your physiological markers, physician diagnostics, clinical labs, and system inflammation levels.",
      points: ["Biomarker & lab diagnostics reviews", "Physician Assistant-led custom planning", "Optimizing skin-cellular renewal speeds"],
    },
  ];

  return (
    <section
      id="nutrition"
      className="py-12 md:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(190,29,53,0.02)_0%,_transparent_55%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Authoritative Header in light theme */}
        <div className="max-w-3xl text-left space-y-4 mb-10 md:mb-14">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-clinical-crimson font-bold uppercase block">
            CLINICAL METABOLICS & NUTRITION
          </span>
          <h2 className="font-serif text-fluid-h2 text-slate-900 font-bold tracking-tight">
            Evidence-Based Eating. <span className="italic text-clinical-crimson font-medium">Zero Punitive Restrictions.</span>
          </h2>
          <div className="w-20 h-[2.5px] bg-clinical-crimson" />
          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed mt-4 max-w-2xl">
            A precise, medical-grade framework centering your body's markers and endocrine system. 
            Reclaim your health, confidence, and appetite without the pain.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Diagnostic Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                key={index}
                className="group flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white hover:bg-slate-100/50 transition-all duration-300 border border-slate-200/80 hover:border-clinical-crimson/55 relative shadow-md"
              >
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:bg-clinical-crimson group-hover:border-transparent transition-all duration-300 shadow-sm">
                    <span className="group-hover:text-white text-clinical-crimson transition-colors duration-300">
                      {service.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base md:text-lg font-bold text-slate-900 tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                {/* Custom list bullets */}
                <ul className="mt-6 border-t border-slate-100 pt-4 space-y-2">
                  {service.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-[11px] font-sans text-slate-500 flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinical-crimson shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Consolidated Visual & CTA Card */}
          <div className="lg:col-span-4 select-none">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md h-full flex flex-col justify-between text-left space-y-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-3 -translate-y-3 text-slate-100">
                <HelpCircle className="w-16 h-16 stroke-[0.5]" />
              </div>

              <div className="space-y-4">
                <span className="text-[9px] tracking-widest font-sans font-bold text-clinical-crimson uppercase block">
                  THERAPEUTIC METABOLICS
                </span>

                {/* Beautiful custom illustration directly integrated */}
                <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                  <PlaceholderImage
                    src="/images/lifestyle-kitchen.jpg"
                    alt="Clinical food optimization biology"
                    label="Therapeutic Kitchen Biology"
                    aspectClass="aspect-[16/10] w-full"
                    className="border-0 shadow-none"
                  />
                </div>

                <p className="font-serif text-sm md:text-md text-slate-900 font-bold tracking-wide leading-snug pt-1">
                  Curious which medical pathway fits your current endocrine balance or digestive diagnostic status?
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onPlanClick}
                  className="w-full text-center bg-clinical-crimson hover:bg-[#A3182D] text-white font-sans font-bold text-[10px] tracking-widest uppercase py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-clinical-crimson/10 border border-clinical-crimson cursor-pointer"
                >
                  Request Diagnostic Screening
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
