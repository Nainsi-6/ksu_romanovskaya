import { Instagram, Heart, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function InstagramShowcase() {
  const posts = [
    {
      id: "ig-1",
      topic: "METABOLISM",
      title: "Cortisol Signaling & Gut Motility",
      tagline: "Why caloric restriction crashes endocrine pacing",
      likes: "4.2k",
      comments: "182",
    },
    {
      id: "ig-2",
      topic: "SKIN PHYSIOLOGY",
      title: "Barrier Restoration Mechanics",
      tagline: "Physician Assistant approved moisture lipid layers",
      likes: "3.8k",
      comments: "209",
    },
    {
      id: "ig-3",
      topic: "NUTRITION",
      title: "Gut Distension Causes Decoded",
      tagline: "Is it high fermentable fiber or slow motility?",
      likes: "5.1k",
      comments: "348",
    },
    {
      id: "ig-4",
      topic: "THERAPEUTICS",
      title: "Anti-Inflammatory Prep Formulas",
      tagline: "Optimizing vascular nutrients in real life",
      likes: "4.9k",
      comments: "220",
    },
    {
      id: "ig-5",
      topic: "DERMATOLOGY",
      title: "Chronic Acne Under Microscope",
      tagline: "Calming hyperkeratosis with mineral solutions",
      likes: "3.5k",
      comments: "144",
    },
    {
      id: "ig-6",
      topic: "CLINICAL HABITS",
      title: "Executive Vacation Dining Guides",
      tagline: "Enjoying cuisine without prompting inflammatory waves",
      likes: "4.6k",
      comments: "191",
    },
  ];

  return (
    <section
      id="education"
      className="py-12 md:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-clinical-crimson font-bold uppercase block">
            CLINICAL EDUCATION MODULES
          </span>
          <h2 className="font-serif text-fluid-h2 text-slate-900 font-bold tracking-tight leading-[1.2]">
            Clinical Research, <span className="italic text-clinical-crimson font-normal">Made Simple.</span>
          </h2>
          <div className="w-12 h-[2.5px] bg-clinical-crimson mx-auto" />
          <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
            Interact with research-backed diagnostics, dermatology secrets, and physiologic wellness tips directly on social feeds.
          </p>
        </div>

        {/* 3-column Grid display */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 items-stretch">
          {posts.map((post, index) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              key={post.id}
              href="https://instagram.com/ksu_romanovskaya"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 flex flex-col justify-between p-3.5 xs:p-4 md:p-6 text-left select-none cursor-pointer duration-300 shadow-md h-full min-h-[210px] xs:min-h-[235px] sm:min-h-[250px] md:min-h-[280px]"
            >
              {/* Crimson border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-clinical-crimson/30 rounded-2xl transition-all duration-300 pointer-events-none" />

              {/* Tag header */}
              <div className="flex justify-between items-center relative z-10 gap-1.5">
                <span className="text-[7.5px] xs:text-[9px] tracking-wider xs:tracking-widest font-sans font-bold text-clinical-crimson uppercase bg-slate-50 border border-slate-200 px-2 xs:px-2.5 py-0.5 rounded-full truncate max-w-[80%]">
                  {post.topic}
                </span>
                <span className="text-slate-400 group-hover:text-clinical-crimson transition-colors duration-300 shrink-0">
                  <Instagram className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-clinical-crimson" />
                </span>
              </div>

              {/* Title Copy */}
              <div className="space-y-1.5 relative z-10 my-3">
                <h3 className="font-serif text-[11px] xs:text-xs sm:text-sm md:text-lg lg:text-xl text-slate-900 font-bold leading-snug group-hover:text-clinical-crimson transition-colors duration-300 line-clamp-2 md:line-clamp-3">
                  {post.title}
                </h3>
                <p className="font-sans text-[9px] xs:text-[10px] sm:text-xs text-slate-600 tracking-wide font-normal line-clamp-2 leading-relaxed">
                  {post.tagline}
                </p>
              </div>

              {/* Engagement details */}
              <div className="flex items-center justify-between border-t border-slate-150 pt-2 relative z-10 mt-auto">
                <span className="text-[8px] xs:text-[9px] font-mono text-slate-500 font-medium truncate max-w-[50%]">
                  @ksu_romanovskaya
                </span>
                
                <div className="flex items-center gap-1.5 xs:gap-2.5 text-slate-600 text-[8px] xs:text-[10px] font-sans font-semibold shrink-0">
                  <span className="flex items-center gap-0.5 xs:gap-1">
                    <Heart className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-clinical-crimson fill-clinical-crimson" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-0.5 xs:gap-1">
                    <MessageCircle className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-slate-500" /> {post.comments}
                  </span>
                </div>
              </div>

              {/* Full overlay with arrow key */}
              <div className="absolute inset-0 bg-slate-50/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-20">
                <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-white flex items-center justify-center border border-clinical-crimson text-clinical-crimson group-hover:bg-clinical-crimson group-hover:text-white transition-all shadow-md">
                  <ArrowUpRight className="w-4 h-4 xs:w-5 xs:h-5 pointer-events-none" />
                </div>
                <span className="text-slate-900 text-[8px] xs:text-[10px] tracking-widest uppercase font-sans font-bold mt-1 text-center px-2">
                  Read Sourced Entry
                </span>
              </div>

            </motion.a>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 md:mt-16 text-center select-none">
          <a
            href="https://instagram.com/ksu_romanovskaya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-sans text-xs tracking-widest uppercase font-bold text-clinical-crimson hover:text-white border-2 border-clinical-crimson hover:bg-clinical-crimson px-8 py-4 rounded-full transition-all duration-300 shadow-md shadow-clinical-crimson/10 cursor-pointer"
          >
            <Instagram className="w-4 h-4 shrink-0" /> Synchronize With @ksu_romanovskaya
          </a>
        </div>

      </div>
    </section>
  );
}
