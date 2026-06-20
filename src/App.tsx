import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MeetKsu from "./components/MeetKsu";
import NutritionServices from "./components/NutritionServices";
import SkinWellness from "./components/SkinWellness";
import Trust from "./components/Trust";
import SuccessStories from "./components/SuccessStories";
import InstagramShowcase from "./components/InstagramShowcase";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scroll anchor navigation clicks
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  // Setup rich SEO Title, Meta details & JSON-LD programmatically
  useEffect(() => {
    // 1. Title & Meta descriptions
    document.title = "Ksu Romanovskaya | Physician Assistant & Nutrition Consultant, Toronto";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Empowering women in Toronto with clinically supported, sustainable nutrition consulting, dermatology tips, and holistic hormone balance. No extreme restrictions."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Empowering women in Toronto with clinically supported, sustainable nutrition consulting, dermatology tips, and holistic hormone balance. No extreme restrictions.";
      document.head.appendChild(meta);
    }

    // 2. Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const ogt = document.createElement("meta");
      ogt.setAttribute("property", "og:title");
      ogt.setAttribute("content", "Ksu Romanovskaya | Premium Educational Wellness & Consulting");
      document.head.appendChild(ogt);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      const ogd = document.createElement("meta");
      ogd.setAttribute("property", "og:description");
      ogd.setAttribute("content", "Sustainable nutrition and skincare adaptations rooted in medicine, designed beautifully for real life.");
      document.head.appendChild(ogd);
    }

    // 3. Schema.org JSON-LD Structured Data
    const schemaId = "ksu-romanovskaya-structured-data";
    let schemaScript = document.getElementById(schemaId);
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = schemaId;
      schemaScript.setAttribute("type", "application/ld+json");
      schemaScript.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": "https://ksuromanovskaya.com/#person",
            "name": "Ksu Romanovskaya",
            "jobTitle": "Physician Assistant, Nutrition Consultant, Dermatology Assistant",
            "image": "https://ksuromanovskaya.com/images/hero-portrait.jpg",
            "description": "Evidence-backed nutrition, skin, and wellness consultation rooted in medicine for women in Toronto.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toronto",
              "addressRegion": "Ontario",
              "addressCountry": "Canada"
            }
          },
          {
            "@type": "LocalBusiness",
            "name": "Ksu Romanovskaya Wellness & Consulting",
            "image": "https://ksuromanovskaya.com/images/hero-portrait.jpg",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toronto",
              "addressRegion": "ON",
              "addressCountry": "CA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "hello@ksuromanovskaya.com",
              "availableLanguage": ["English", "Ukrainian"]
            }
          }
        ]
      });
      document.head.appendChild(schemaScript);
    }

    return () => {
      // Clean up dynamic schema markup on unmount
      const existingSchema = document.getElementById(schemaId);
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  // Set active section highlight state in response to scroll positions
  useEffect(() => {
    const handleScrollTracking = () => {
      const sections = [
        "home",
        "about",
        "nutrition",
        "skin-wellness",
        "why-trust",
        "testimonials",
        "education",
        "faq",
        "contact",
      ];
      
      const scrollPosition = window.scrollY + 200; // 200px buffer to highlight active section on entry

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollTracking);
    return () => window.removeEventListener("scroll", handleScrollTracking);
  }, []);

  return (
    <div className="bg-white min-h-screen relative flex flex-col font-sans text-slate-900">
      
      {/* 1. Header Sticky Nav wrapper */}
      <Header
        activeSection={activeSection}
        onNavClick={handleScrollToSection}
      />

      {/* 2. Scrolling Content Container */}
      <main className="w-full">
        {/* Hero Area */}
        <Hero
          onExploreClick={() => handleScrollToSection("nutrition")}
          onBookClick={() => handleScrollToSection("contact")}
        />

        {/* Meet Ksu About Narrative */}
        <MeetKsu
          onLearnMoreClick={() => handleScrollToSection("why-trust")}
        />

        {/* Nutrition Packages Service Offerings */}
        <NutritionServices
          onPlanClick={() => handleScrollToSection("contact")}
        />

        {/* Skincare & Holistic Wellness Pillars */}
        <SkinWellness
          onBookClick={() => handleScrollToSection("contact")}
        />

        {/* Trust elements with large numerals */}
        <Trust />

        {/* Staggered transformations list */}
        <SuccessStories />

        {/* Simulated elegant education feed */}
        <InstagramShowcase />

        {/* Expandable accordion FAQs */}
        <FAQ />

        {/* Fully interactive scheduling and contact segment */}
        <Contact />
      </main>

      {/* 3. Footer disclaimer and locations bar */}
      <Footer onNavClick={handleScrollToSection} />

    </div>
  );
}
