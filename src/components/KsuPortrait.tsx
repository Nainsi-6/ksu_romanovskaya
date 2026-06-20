import React, { useState, useEffect } from "react";

interface KsuPortraitProps {
  className?: string;
  type?: "hero" | "about" | "testimonial" | "booking";
  aspectClass?: string;
}

export default function KsuPortrait({ className = "", type = "hero", aspectClass = "aspect-square" }: KsuPortraitProps) {
  const [portraitSrc, setPortraitSrc] = useState<string | null>(null);

  useEffect(() => {
    // Dynamically fetch the uploaded image from localStorage if available
    const saved = localStorage.getItem("ksu_portrait_real");
    if (saved) {
      setPortraitSrc(saved);
    }

    const handlePortraitUpdate = () => {
      const updated = localStorage.getItem("ksu_portrait_real");
      setPortraitSrc(updated);
    };

    window.addEventListener("ksu_portrait_updated", handlePortraitUpdate);
    return () => {
      window.removeEventListener("ksu_portrait_updated", handlePortraitUpdate);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden group rounded-full ${aspectClass} ${className} bg-white shadow-xl flex items-center justify-center border-4 border-white`}>
      {portraitSrc ? (
        // Displays Ksu's actual photo inside a perfect circle
        <img
          src={portraitSrc}
          alt="Ksu Romanovskaya clinical headshot"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        // Exquisite bespoke vector fashion-illustration representing her actual uploaded image:
        // A circular red backplate, beautiful dark hair silhouette, off-shoulder black top, and elegant white fluffy collar/feather boa.
        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#BE1D35] flex items-center justify-center select-none">
          {/* Subtle light/glow overlay within the red backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_75%)]" />
          
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Elegant shoulder silhouette (off-shoulder black top) */}
            <path
              d="M15 88 C20 75, 30 70, 50 70 C70 70, 80 75, 85 88"
              fill="#11161D"
              stroke="#090C10"
              strokeWidth="0.5"
            />
            
            {/* Elegant neck */}
            <path
              d="M42 50 L42 70 L58 70 L58 50 Z"
              fill="#F9DEC9"
              opacity="0.9"
            />
            
            {/* Beautiful face/head shape */}
            <path
              d="M40 32 C40 22, 60 22, 60 32 C60 42, 60 52, 50 52 C40 52, 40 42, 40 32 Z"
              fill="#FCD4B8"
            />
            
            {/* Glamorous dark wet-look hairstyle shape */}
            <path
              d="M36 30 C36 12, 64 12, 64 30 C64 34, 60 32, 58 35 C56 38, 58 42, 52 40 C48 38, 46 42, 42 38 C38 34, 38 32, 36 30 Z"
              fill="#090C10"
            />
            
            {/* Extra sleek wet-look strand details */}
            <path d="M42 18 Q35 25 38 35" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M58 18 Q65 25 62 35" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M50 14 Q52 26 44 32" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" />

            {/* Gorgeous fluffy white feather boa / shoulder collar draping elegantly */}
            <path
              d="M20 72 C12 76, 10 82, 18 85 C28 88, 72 88, 82 85 C90 82, 88 76, 80 72 C74 70, 68 75, 50 73 C32 71, 26 70, 20 72 Z"
              fill="#F8FAFC"
              stroke="#E2E8F0"
              strokeWidth="0.5"
            />
            
            {/* Feather texture circles to mimic fluffy fur look */}
            <circle cx="20" cy="76" r="5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="30" cy="73" r="6" fill="#FFFFFF" opacity="0.95" />
            <circle cx="45" cy="72" r="7" fill="#FFFFFF" />
            <circle cx="55" cy="72" r="7" fill="#FFFFFF" />
            <circle cx="70" cy="74" r="6" fill="#FFFFFF" opacity="0.95" />
            <circle cx="80" cy="77" r="5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="25" cy="81" r="5.5" fill="#F1F5F9" />
            <circle cx="38" cy="80" r="7" fill="#F1F5F9" />
            <circle cx="50" cy="81" r="8" fill="#FFFFFF" />
            <circle cx="62" cy="80" r="7" fill="#F1F5F9" />
            <circle cx="75" cy="81" r="5.5" fill="#F1F5F9" />
          </svg>
        </div>
      )}
    </div>
  );
}
