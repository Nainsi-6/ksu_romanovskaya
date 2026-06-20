import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SuccessStories() {
  const testimonials = [
    {
      text: "Ksu helped me finally understand my internal biochemistry instead of fighting it. No crazy diet fads, no chronic deprivation—just persistent cellular energy, systemic gut balance, and highly sustainable habits.",
      author: "Anna T.",
      title: "Toronto, ON",
      result: "Calmed Systemic Intestinal Bloating",
      avatarLetter: "A",
    },
    {
      text: "My skin barrier has never looked clearer and more resilient. Her PA knowledge is clear, realistic, and completely backed by medical literature. Absolute life-saver for acne.",
      author: "Priya M.",
      title: "Vaughan, ON",
      result: "Restored Dermal Cellular Health",
      avatarLetter: "P",
    },
    {
      text: "I have tried every restrictive internet weight-loss program out there. Ksu's metabolic strategy is the very first plan that felt authentic—and it resolved my fatigue issues in weeks.",
      author: "Jessica L.",
      title: "Toronto, Canada",
      result: "Regulated Thyroid & Glucose Rhythm",
      avatarLetter: "J",
    },
    {
      text: "As a health consultant, I am deeply analytical. Ksu's clinical skin integrity protocols did more for my chronic breakouts than any expensive beauty salon topical serums.",
      author: "Sarah K.",
      title: "Mississauga, ON",
      result: "Stabilized Chronic Skin Outbreaks",
      avatarLetter: "S",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(190,29,53,0.02)_0%,_transparent_50%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header and navigation controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="text-left space-y-4 max-w-2xl">
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-clinical-crimson font-bold uppercase block">
              PATIENT & CLIENT LOGS
            </span>
            <h2 className="font-serif text-fluid-h2 text-slate-900 font-bold tracking-tight leading-[1.2]">
              Therapeutic Transitions. <span className="italic text-clinical-crimson font-normal">Sustained Results.</span>
            </h2>
            <div className="w-16 h-[2.5px] bg-clinical-crimson" />
            <p className="font-sans text-xs md:text-sm text-slate-600 max-w-lg leading-relaxed">
              Examine the clinical progress sheets and reviews from women who reclaimed their digestions, skin barrier confidence, and metabolic energy level.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-clinical-crimson bg-white hover:bg-slate-50 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700 hover:text-clinical-crimson" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-clinical-crimson bg-white hover:bg-slate-50 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-slate-700 hover:text-clinical-crimson" />
            </button>
          </div>
        </div>

        {/* Testimonials Frame */}
        <div className="relative">
          
          {/* Slider showing 3 items alongside each other */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((test, index) => {
              const isAccent = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`flex flex-col justify-between p-8 rounded-2xl shadow-md border transition-all duration-500 hover:-translate-y-1 ${
                    isAccent
                      ? "bg-slate-50 border-clinical-crimson/20"
                      : "bg-white border-slate-200/80"
                  }`}
                >
                  <div className="space-y-6 text-left">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-full bg-slate-100 border border-slate-200 text-clinical-crimson">
                        <Quote className="w-4 h-4 text-clinical-crimson" />
                      </div>
                      <div className="flex gap-0.5 select-none">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                        ))}
                      </div>
                    </div>

                    <p className="font-serif italic text-slate-800 text-sm md:text-base leading-relaxed font-medium">
                      &ldquo;{test.text}&rdquo;
                    </p>
                  </div>

                  {/* Testimonial author footer */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-clinical-crimson flex items-center justify-center font-serif italic text-sm select-none shrink-0 font-bold shadow-sm">
                      {test.avatarLetter}
                    </div>
                    <div>
                      <p className="font-serif text-sm font-bold text-slate-900 tracking-wide">
                        {test.author}
                      </p>
                      <p className="text-[10px] font-sans text-clinical-crimson tracking-wider uppercase font-bold mt-0.5">
                        {test.result}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile responsive single card focus slider view */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-full bg-slate-100 border border-slate-200 text-clinical-crimson">
                      <Quote className="w-4 h-4 text-clinical-crimson" />
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-500 stroke-none" />
                      ))}
                    </div>
                  </div>

                  <p className="font-serif italic text-slate-800 text-sm leading-relaxed">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </p>
                  
                  <div className="pt-4 border-t border-slate-150 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-clinical-crimson flex items-center justify-center font-serif italic text-sm font-bold shadow-sm">
                      {testimonials[currentIndex].avatarLetter}
                    </div>
                    <div>
                      <p className="font-serif text-xs font-bold text-slate-900 tracking-wide">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-[9px] font-sans text-clinical-crimson tracking-wider uppercase font-bold mt-0.5">
                        {testimonials[currentIndex].result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-2 mt-6 select-none">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === index ? "w-6 bg-clinical-crimson" : "w-1.5 bg-slate-200"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
