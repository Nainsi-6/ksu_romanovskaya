import React, { useState } from "react";
import { Mail, Instagram, MessageSquare, Check, Sparkles, Send, Loader2, Award, Calendar, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Both - Not Sure",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Please share a bit about your goals";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "Both - Not Sure",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-clinical-crimson/5 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Intake details (using stunning clinical vector bento instead of KsuPortrait) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 select-text">
            
            <div className="text-left space-y-4">
              <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-clinical-crimson font-bold uppercase block">
                BEGIN THERAPEUTIC RECORD
              </span>
              <h2 className="font-serif text-fluid-h2 text-slate-900 font-bold tracking-tight leading-[1.2]">
                Book Your Intake Check
              </h2>
              <div className="w-16 h-[2px] bg-clinical-crimson" />
              <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                Outline your metabolic, gut, or skin-cellular difficulties. Ksu Romanovskaya will personally examine your history and send an encrypted booking link within 24–48 hours.
              </p>
            </div>

            {/* Stunning clinical vector cell instead of doctor photo to match user's explicit photo preference */}
            <div className="select-none relative w-full max-w-sm rounded-2xl bg-slate-50 border border-slate-200 p-6 shadow-md text-left space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-clinical-crimson/10 flex items-center justify-center text-clinical-crimson shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-slate-900">Ontario Registered PA</h4>
                  <p className="font-sans text-[11px] text-slate-500">Continuous clinical standard oversight</p>
                </div>
              </div>

              <div className="space-y-3.5 border-t border-slate-200/80 pt-4">
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-clinical-crimson shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-slate-700">Dermal Physiology & Therapeutic Nutrition Specialty</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-clinical-crimson shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-slate-700">60-Min Comprehensive Virtual Intake Assessment</span>
                </div>
              </div>

              {/* Minimal clinical vector line art drawing */}
              <div className="h-28 bg-[#FFFDFB] border border-slate-200/60 rounded-xl relative overflow-hidden flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full text-slate-100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 60 Q 80 40, 160 80 T 320 40 T 480 70" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                  <path d="M 0 80 Q 90 20, 180 90 T 360 20 T 480 50" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="relative z-10 text-center px-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-clinical-crimson font-extrabold uppercase">METABOLIC HOMEOSTASIS INDEX</span>
                  <div className="font-serif text-sm font-bold text-slate-800">Biochemical Equilibrium Path</div>
                </div>
              </div>
            </div>

            {/* Communication Rails */}
            <div className="space-y-4 text-left">
              <p className="font-serif text-xs font-bold text-slate-900 tracking-wide uppercase">
                Secure Communication Rails:
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="mailto:hello@ksuromanovskaya.com"
                  className="flex items-center gap-2 font-sans text-[10px] tracking-wider uppercase font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 px-5 py-3 rounded-full border border-slate-200 shadow-sm transition-all duration-300"
                >
                  <Mail className="w-3.5 h-3.5 text-clinical-crimson" /> Mail Direct
                </a>
                
                <a
                  href="https://instagram.com/ksu_romanovskaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-[10px] tracking-wider uppercase font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 px-5 py-3 rounded-full border border-slate-200 shadow-sm transition-all duration-300"
                >
                  <Instagram className="w-3.5 h-3.5 text-clinical-crimson" /> Instagram DM
                </a>

                <a
                  href="https://wa.me/14165550199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-[10px] tracking-wider uppercase font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 px-5 py-3 rounded-full border border-slate-200 shadow-sm transition-all duration-300"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-clinical-crimson" /> WhatsApp Secure
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Intake Form */}
          <div className="lg:col-span-7">
            <div className="w-full bg-slate-50 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden select-text text-left">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6 flex flex-col items-center justify-center max-w-md mx-auto"
                  >
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-clinical-crimson/50 animate-bounce shadow-md">
                      <Check className="w-8 h-8 text-clinical-crimson" />
                    </div>
                    
                    <div className="space-y-2">
                      <span className="font-sans text-[9px] font-bold text-clinical-crimson uppercase tracking-widest block">
                        CLINICAL PRE-SCREENING LOGGED
                      </span>
                      <h3 className="font-serif text-3xl text-slate-900 font-bold tracking-tight">
                        Intake Saved
                      </h3>
                      <p className="font-sans text-sm text-slate-700 leading-relaxed">
                        I am excited to support your systemic health journey. I will personally analyze your 
                        history and dispatch your consultation link within 24–48 hours.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="font-sans text-xs font-bold tracking-widest text-clinical-crimson hover:text-[#A3182D] uppercase transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry &mdash;
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="space-y-1.5 border-b border-slate-200 pb-4 mb-4">
                      <p className="font-serif text-slate-900 font-bold text-lg flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-clinical-crimson animate-pulse" /> Describe Metabolic Status:
                      </p>
                    </div>

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] tracking-widest font-sans font-bold text-slate-800 uppercase block">
                        Full Name <span className="text-clinical-crimson">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Jessica Lawrence"
                        className={`w-full px-5 py-4 font-sans text-sm rounded-xl border transition-all bg-white focus:outline-none focus:ring-1 focus:ring-clinical-crimson text-slate-900 placeholder-slate-400 ${
                          errors.name ? "border-clinical-crimson bg-clinical-crimson/5" : "border-slate-200 focus:border-clinical-crimson"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-clinical-crimson font-sans font-bold text-left">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[10px] tracking-widest font-sans font-bold text-slate-800 uppercase block">
                          Email Address <span className="text-clinical-crimson">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jessica@example.com"
                          className={`w-full px-5 py-4 font-sans text-sm rounded-xl border transition-all bg-white focus:outline-none focus:ring-1 focus:ring-clinical-crimson text-slate-900 placeholder-slate-400 ${
                            errors.email ? "border-clinical-crimson bg-clinical-crimson/5" : "border-slate-200 focus:border-clinical-crimson"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[10px] text-clinical-crimson font-sans font-bold text-left">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-[10px] tracking-widest font-sans font-bold text-slate-700 uppercase block">
                          Phone Number <span className="text-slate-500">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (416) 555-0199"
                          className="w-full px-5 py-4 font-sans text-sm rounded-xl border border-slate-200 transition-all bg-white focus:outline-none focus:ring-1 focus:ring-clinical-crimson text-slate-900 placeholder-slate-400"
                        />
                      </div>
                    </div>

                    {/* Service field */}
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-[10px] tracking-widest font-sans font-bold text-slate-800 uppercase block">
                        Intake Category Interest <span className="text-clinical-crimson">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 font-sans text-sm rounded-xl border border-slate-200 transition-all bg-white focus:outline-none focus:ring-1 focus:ring-clinical-crimson text-slate-800 cursor-pointer"
                      >
                        <option value="Nutrition consulting">Clinical Nutrition & Gut Optimization</option>
                        <option value="Skin and Wellness">Dermis Physiology & Skincare Consultation</option>
                        <option value="Both - Not Sure">Comprehensive Endocrine & Skin Barrier Plan (Combined)</option>
                      </select>
                    </div>

                    {/* Messages */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[10px] tracking-widest font-sans font-bold text-slate-800 uppercase block">
                        Metabolic Concerns & Skincare Goals <span className="text-clinical-crimson">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Detail bloating, chronic barrier irritation, hormonal trends, food-intolerance cycles, or specific targets here."
                        className={`w-full px-5 py-4 font-sans text-sm rounded-xl border transition-all bg-white focus:outline-none focus:ring-1 focus:ring-clinical-crimson text-slate-900 placeholder-slate-400 resize-none ${
                          errors.message ? "border-clinical-crimson bg-clinical-crimson/5" : "border-slate-200 focus:border-clinical-crimson"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[10px] text-clinical-crimson font-sans font-bold text-left">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit action */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase font-bold text-white bg-clinical-crimson hover:bg-[#A3182D] disabled:bg-clinical-crimson/60 py-4 px-6 rounded-xl transition-all duration-300 shadow-md shadow-clinical-crimson/15 border border-clinical-crimson focus:outline-none cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Transmitting Record...
                          </>
                        ) : (
                          <>
                            Transmit Clinical Record <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
