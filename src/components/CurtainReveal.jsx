import { useEffect, useState } from "react";

export default function CurtainReveal({ children, className = "" }) {
  const [open, setOpen] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      setShowCurtain(false);
      return;
    }

    const openTimer = setTimeout(() => setOpen(true), 500);
    const hideTimer = setTimeout(() => setShowCurtain(false), 2100);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}

      {showCurtain && (
        <div className="absolute inset-0 z-40" aria-hidden="true">
          <div
            className={`velvet-curtain absolute inset-y-0 left-0 w-1/2 transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] duration-[1400ms] ${
              open ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_20px_2px_rgba(201,162,39,0.55)]" />
          </div>
          <div
            className={`velvet-curtain absolute inset-y-0 right-0 w-1/2 scale-x-[-1] transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] duration-[1400ms] ${
              open ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_20px_2px_rgba(201,162,39,0.55)]" />
          </div>
        </div>
      )}
    </div>
  );
}
