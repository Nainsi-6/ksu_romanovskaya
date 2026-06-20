import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavClick: (refId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Nutrition", id: "nutrition" },
    { name: "Skin & Wellness", id: "skin-wellness" },
    { name: "Why Trust", id: "why-trust" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-md py-4 shadow-md border-b border-slate-200"
            : "bg-white/80 backdrop-blur-sm py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Name block */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("home");
            }}
            className="flex flex-col group select-none"
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-slate-950 transition-colors group-hover:text-clinical-crimson">
              Ksu Romanovskaya
            </span>
            <span className="font-sans text-[8px] md:text-[9.5px] tracking-[0.22em] text-clinical-crimson font-bold uppercase mt-0.5">
              PA · Clinical Nutrition · Dermal Physiology
            </span>
          </a>

          {/* Desktop Nav Actions */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`font-sans text-[11px] tracking-widest uppercase transition-colors relative py-1.5 font-bold ${
                  activeSection === item.id
                    ? "text-clinical-crimson"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-clinical-crimson"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick("contact")}
              className="hidden sm:flex items-center justify-center gap-2 font-sans text-[10px] tracking-widest uppercase font-bold text-white bg-clinical-crimson hover:bg-[#A3182D] border border-clinical-crimson px-5 py-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-clinical-crimson/15 cursor-pointer"
            >
              Consult <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Mobile Nav Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-clinical-crimson transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop Drawer (Light Theme matching) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-[#FAF9F6] z-35 lg:hidden flex flex-col justify-between pt-24 pb-12 px-8"
          >
            <div className="flex flex-col items-center justify-center gap-6 my-auto">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`font-serif text-2.5xl tracking-wide transition-colors ${
                    activeSection === item.id
                      ? "text-clinical-crimson font-bold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 border-t border-slate-200 pt-6">
              <p className="font-serif italic text-xs text-slate-500 text-center">
                Sustainable metabolic wellness & skin therapy built on medicine.
              </p>
              <button
                onClick={() => handleLinkClick("contact")}
                className="w-full flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase font-bold text-white bg-clinical-crimson hover:bg-[#A3182D] py-4 rounded-full transition-colors duration-300 shadow-md cursor-pointer"
              >
                Book Consultation <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
