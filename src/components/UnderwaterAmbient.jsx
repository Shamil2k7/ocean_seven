"use client";

import { useId } from "react";

// Lightweight SVG Fish Silhouette
function FishSvg({ className, width = 32, height = 14 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sleek Pelagic Fish Silhouette */}
      <path
        d="M6,20 C18,8 46,5 72,13 C84,17 90,15 97,7 C95,16 95,24 97,33 C90,25 84,23 72,27 C46,35 18,32 6,20 Z"
        fill="currentColor"
      />
      {/* Dorsal Fin */}
      <path
        d="M48,8 C55,3 62,5 66,13 Z"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Pectoral Fin */}
      <path
        d="M34,22 C42,26 46,30 42,32 C38,32 35,28 34,22 Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  );
}

export default function UnderwaterAmbient({
  showFish = true,
  showBubbles = true,
  showCaustics = true,
  bubbleCount = 7,
  className = "",
}) {
  const baseId = useId();

  // Controlled, natural bubble configs (sizes 4-9px, staggered delays, low opacity)
  const bubbles = [
    { left: "14%", size: 6, delay: "0s", duration: "16s", opacity: 0.28 },
    { left: "28%", size: 4, delay: "3.5s", duration: "19s", opacity: 0.22 },
    { left: "46%", size: 8, delay: "7.2s", duration: "17s", opacity: 0.32 },
    { left: "63%", size: 5, delay: "1.8s", duration: "21s", opacity: 0.24 },
    { left: "79%", size: 7, delay: "9.4s", duration: "18s", opacity: 0.30 },
    { left: "91%", size: 4, delay: "5.1s", duration: "22s", opacity: 0.20 },
    { left: "37%", size: 5, delay: "12.3s", duration: "20s", opacity: 0.26 },
  ].slice(0, bubbleCount);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-[1] ${className}`}
      aria-hidden="true"
    >
      {/* 1. Subtle Moving Light Caustics Texture */}
      {showCaustics && <div className="ocean-caustics" />}

      {/* 2. Floating Underwater Bubbles */}
      {showBubbles &&
        bubbles.map((b, idx) => (
          <div
            key={`${baseId}-b-${idx}`}
            className="ocean-bubble"
            style={{
              left: b.left,
              bottom: "-20px",
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: b.delay,
              animationDuration: b.duration,
              opacity: b.opacity,
            }}
          />
        ))}

      {/* 3. Subtle Swimming Fish Silhouettes (Only 2-3, very low opacity) */}
      {showFish && (
        <>
          {/* Fish 1: Swimming Left to Right (Mid Depth) */}
          <div
            className="ocean-fish-ltr text-white"
            style={{
              top: "38%",
              left: "0",
              animationDuration: "36s",
              animationDelay: "0s",
            }}
          >
            <FishSvg width={30} height={12} className="opacity-70 text-ocean-light" />
          </div>

          {/* Fish 2: Swimming Right to Left (Upper Depth, smaller) */}
          <div
            className="ocean-fish-rtl text-white"
            style={{
              top: "22%",
              right: "0",
              animationDuration: "44s",
              animationDelay: "14s",
            }}
          >
            <FishSvg width={22} height={9} className="opacity-60 text-ocean" />
          </div>

          {/* Fish 3: Deep Distance Silhouette (Slow, gentle) */}
          <div
            className="ocean-fish-ltr text-white"
            style={{
              top: "54%",
              left: "0",
              animationDuration: "40s",
              animationDelay: "22s",
            }}
          >
            <FishSvg width={18} height={7} className="opacity-40 text-ocean-light" />
          </div>
        </>
      )}
    </div>
  );
}
