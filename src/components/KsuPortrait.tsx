import React, { useState, useEffect, useRef } from "react";
import { Camera, AlertCircle } from "lucide-react";
import ksuPortrait from "./ksu_portrait_real.jpg";

interface KsuPortraitProps {
  className?: string;
  type?: "hero" | "about" | "testimonial" | "booking";
  aspectClass?: string;
}

export default function KsuPortrait({ className = "", type = "hero", aspectClass = "aspect-square" }: KsuPortraitProps) {
  const FALLBACKS = [
    ksuPortrait, // Tier 1: Hashed local webpack import
    "/ksu_portrait_real.jpg", // Tier 2: Static build path route
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=600" // Tier 3: High-availability premium fallback
  ];

  const [portraitSrc, setPortraitSrc] = useState<string>(ksuPortrait);
  const [fallbackIndex, setFallbackIndex] = useState<number>(0);
  const [loadError, setLoadError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-sync local storage image to server disk during development/preview on load
  useEffect(() => {
    let saved = localStorage.getItem("ksu_portrait_real");
    
    // Auto-clean 1x1 transparent dummy and any small/corrupted base64 placeholders
    if (saved && saved.length < 5000) {
      console.log("[KsuPortrait] Cleaning up corrupt/dummy portrait from localStorage");
      localStorage.removeItem("ksu_portrait_real");
      saved = null;
    }
    
    if (saved) {
      setPortraitSrc(saved);
      setFallbackIndex(-1);
      
      // In dev mode, if the user had a custom uploaded photo in localStorage,
      // sync it immediately to the local server disk so it is saved in ksu_portrait_real.jpg
      if (import.meta.env.DEV) {
        console.log("[DEV] Found saved portrait in localStorage, syncing to server disk...");
        fetch("/api/save-portrait", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: saved }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              console.log("[DEV] Successfully synced ksu_portrait_real.jpg to server disk!");
            }
          })
          .catch((err) => {
            console.error("[DEV] Failed to sync portrait to disk:", err);
          });
      }
    } else {
      setPortraitSrc(ksuPortrait);
      setFallbackIndex(0);
    }

    const handlePortraitUpdate = () => {
      const updated = localStorage.getItem("ksu_portrait_real");
      if (updated) {
        setPortraitSrc(updated);
        setFallbackIndex(-1);
        setLoadError(false);
      }
    };

    window.addEventListener("ksu_portrait_updated", handlePortraitUpdate);
    return () => {
      window.removeEventListener("ksu_portrait_updated", handlePortraitUpdate);
    };
  }, []);

  // Handle uploading and writing a new file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result as string;
      
      // Save locally to localStorage so it is available across sessions on the device
      localStorage.setItem("ksu_portrait_real", base64Data);
      setPortraitSrc(base64Data);
      setFallbackIndex(-1);
      setLoadError(false);

      // Instantly dispatch event
      window.dispatchEvent(new Event("ksu_portrait_updated"));

      // Sync to the workspace disk back-end server if we are running in dev mode
      if (import.meta.env.DEV) {
        console.log("[DEV] Syncing newly chosen portrait to server disk...");
        fetch("/api/save-portrait", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: base64Data }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              console.log("[DEV] Successfully wrote new portrait to ksu_portrait_real.jpg!");
            }
          })
          .catch((err) => {
            console.error("[DEV] Server upload failed:", err);
          });
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative overflow-hidden group rounded-full ${aspectClass} ${className} bg-slate-50 shadow-xl flex items-center justify-center border-4 border-white`}>
      {/* Hidden Native File Upload Control */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Actual Portrait Image */}
      {!loadError ? (
        <img
          src={portraitSrc}
          alt="Ksu Romanovskaya clinical headshot"
          referrerPolicy="no-referrer"
          onError={() => {
            console.warn("Failed to load portrait image source:", portraitSrc);
            
            // If the failure was a custom uploaded image from localStorage, clean it and try local import
            if (fallbackIndex === -1) {
              console.log("Custom localStorage image failed to load. Cleaning storage and falling back to default compiled portrait...");
              localStorage.removeItem("ksu_portrait_real");
              setPortraitSrc(FALLBACKS[0]);
              setFallbackIndex(0);
              return;
            }

            // Otherwise, try the next fallback in sequence
            const nextIndex = fallbackIndex + 1;
            if (nextIndex < FALLBACKS.length) {
              console.log(`Fallback index ${fallbackIndex} failed. Trying fallback index ${nextIndex}:`, FALLBACKS[nextIndex]);
              setFallbackIndex(nextIndex);
              setPortraitSrc(FALLBACKS[nextIndex]);
            } else {
              console.error("All fallback portrait image sources failed to load.");
              setLoadError(true);
            }
          }}
          className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        /* High-contrast clinical error interface if image fails to load (Requirement 6) */
        <div className="absolute inset-0 bg-red-50 flex flex-col items-center justify-center p-6 text-center select-text z-50">
          <AlertCircle className="w-8 h-8 text-red-600 mb-1.5" />
          <span className="font-sans font-extrabold text-[#BE1D35] text-[10px] uppercase tracking-widest">
            Portrait Load Error
          </span>
          <p className="font-sans text-[9px] text-slate-700 mt-1 max-w-[180px] leading-normal font-semibold">
            Unable to render local build portrait.
          </p>
          <div className="flex gap-1.5 mt-2.5">
            <button
              onClick={triggerUpload}
              className="px-2 py-1 bg-clinical-crimson text-white text-[8px] hover:bg-[#A3182D] transition-colors rounded font-sans tracking-wider font-bold uppercase cursor-pointer"
            >
              Upload
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                localStorage.removeItem("ksu_portrait_real");
                setPortraitSrc(ksuPortrait);
                setLoadError(false);
              }}
              className="px-2 py-1 bg-white text-slate-700 text-[8px] hover:bg-slate-100 transition-colors border border-slate-200 rounded font-sans tracking-wider font-bold uppercase cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Elegant Hover Overlay & Upload Indicator */}
      <button
        onClick={triggerUpload}
        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white z-20 cursor-pointer"
        title="Upload fresh clinical portrait"
      >
        <Camera className="w-8 h-8 text-white mb-1.5 drop-shadow" />
        <span className="font-sans text-[9px] tracking-widest font-bold uppercase text-white drop-shadow">
          Change Photo
        </span>
      </button>

      {/* Persistent mini camera pill on mobile (no hover required) */}
      <button
        onClick={triggerUpload}
        className="absolute bottom-3 right-3 p-2 bg-clinical-crimson text-white rounded-full sm:hidden z-30 shadow-md hover:bg-[#A3182D] transition-colors border border-white cursor-pointer"
        title="Upload photo"
      >
        <Camera className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
