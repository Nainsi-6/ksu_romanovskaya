import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const faqs = [
    {
      q: "What does an initial clinical intake consultation include?",
      a: "Our virtual consultation runs for 60 minutes. We conduct an expansive biochemical review: investigating daily diet habits, food triggers, microbiome health, sleeping cycles, stress neurotransmitter loads, and skin barrier metrics. You will receive a personalized skin, gut and metabolic therapeutic roadmap loaded with actionable guidelines based on medicine.",
    },
    {
      q: "Do I need a doctor's referral to consult with Ksu?",
      a: "No referral is required. While Ksu Romanovskaya is an active clinical Physician Assistant, this firm provides private wellness, dermo-cosmetic skin, and biological nutrition consulting. If during our consult we identify indications of major organic pathology, we will coordinate or advise you to follow up with your primary care provider.",
    },
    {
      q: "Is this a strict calorie-oriented weight loss cycle?",
      a: "No. We do not support starvation, caloric restrictions, or toxic diets. We study nutrient density, endocrine support, and metabolic rates to recover digestive and thyroid systems. Physical transformation occurs dynamically when systemic inflammation drops.",
    },
    {
      q: "Do you offer virtual consults for clients outside Toronto?",
      a: "Yes! While Ksu is licensed in Ontario and based in Toronto, Canada, we offer fully secure, high-utility digital consultation worldwide. Our online client systems optimize checkins and roadmap tracking beautifully.",
    },
    {
      q: "How are the nutritional therapeutic plans customized?",
      a: "Zero templates. Every segment is designed from deep analysis. We map your specific intestinal capability, stress triggers, work routine, and any blood laboratories you provide. This ensures your customized guidelines are highly sustainable for life.",
    },
    {
      q: "Can you help if I am suffering from active acne vulgaris or eczema?",
      a: "Yes. Given Ksu's clinical dermatology credentials, we optimize cellular nutrition, barrier lipid repairs, and gut-to-skin axis pathways. This therapeutic alignment limits flare-ups and addresses the hyperkeratosis triggers internally.",
    },
    {
      q: "How long until I see systemic improvements?",
      a: "Bodies are unique biological units, but most clients note major bloating reduction, stable energy curves, and calmer skin barrier responses within 4 to 8 weeks of consistent adherence to their roadmaps.",
    },
    {
      q: "How do I secure my first intake slot?",
      a: "Scroll down to our scheduler, fill in your primary details and metabolic history, and click submit. Our client success team will coordinate with your portal link within 24–48 hours.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 md:py-16 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-clinical-crimson/5 rounded-full blur-3xl opacity-30 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Title headers */}
        <div className="text-center space-y-4 mb-16 md:mb-24">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-clinical-crimson font-bold uppercase block">
            CLINICAL CLARITY PORTAL
          </span>
          <h2 className="font-serif text-fluid-h2 text-slate-900 font-bold tracking-tight leading-[1.2]">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[2.5px] bg-clinical-crimson mx-auto" />
          <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Review detailed parameters on bio-nutrition, dermal barrier consulting, or scheduling virtual checkins.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4 divide-y divide-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`pt-5 pb-2 transition-colors duration-300 rounded-lg px-2 md:px-4 ${
                  isOpen ? "bg-slate-50" : ""
                }`}
              >
                {/* Trigger Row */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none py-3 cursor-pointer group"
                >
                  <span className="font-serif text-base md:text-lg font-bold text-slate-800 group-hover:text-clinical-crimson transition-colors tracking-wide pr-4">
                    {faq.q}
                  </span>
                  
                  {/* Expand icon indicator */}
                  <span className="shrink-0 p-1.5 rounded-full bg-white border border-slate-200 text-clinical-crimson group-hover:bg-clinical-crimson group-hover:text-white transition-colors duration-300 shadow-sm">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-clinical-crimson group-hover:text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-clinical-crimson group-hover:text-white" />
                    )}
                  </span>
                </button>

                {/* Answer panel with clean reveal transitions */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="py-2.5 font-sans text-xs md:text-sm text-slate-755 leading-relaxed pr-8 font-normal text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Visual Call-Out Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-full bg-white border border-slate-200 text-clinical-crimson shrink-0 shadow-sm">
              <HelpCircle className="w-5 h-5 text-clinical-crimson" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-slate-900">
                Have a different question or specific clinical issue?
              </h4>
              <p className="text-[11px] font-sans text-slate-500">
                Send an intake message in the scheduler module below and we will analyze your case.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-sans text-xs tracking-widest uppercase font-bold text-clinical-crimson hover:text-[#A3182D] transition-colors shrink-0 cursor-pointer"
          >
            Submit Message Directly &mdash;
          </button>
        </div>

      </div>
    </section>
  );
}
