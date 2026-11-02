"use client";

import { useId } from "react";
import Image from "next/image";

// Lightweight Vector Fish Silhouette (Pelagic finfish profile)
function FishSvg({ className, width = 28, height = 12 }) {
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
      <path
        d="M6,20 C18,8 46,5 72,13 C84,17 90,15 97,7 C95,16 95,24 97,33 C90,25 84,23 72,27 C46,35 18,32 6,20 Z"
        fill="currentColor"
      />
      <path
        d="M48,8 C55,3 62,5 66,13 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M34,22 C42,26 46,30 42,32 C38,32 35,28 34,22 Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  );
}

export default function UnderwaterAmbient({
  theme = "dark",
  showFish = true,
  fishCount = 2,
  showBubbles = true,
  bubbleCount = 5,
  showRays = true,
  showParticles = true,
  slidingImage,
  className = "",
}) {
  const baseId = useId();
  const isDark = theme === "dark";

  // Micro-bubbles with 8s–14s durations per requirements
  const bubbles = [
    { left: "12%", size: 5, delay: "0s", duration: "10s", opacity: isDark ? 0.28 : 0.22 },
    { left: "26%", size: 4, delay: "2.8s", duration: "12s", opacity: isDark ? 0.22 : 0.18 },
    { left: "48%", size: 6, delay: "6.5s", duration: "11s", opacity: isDark ? 0.30 : 0.24 },
    { left: "67%", size: 4, delay: "1.4s", duration: "13s", opacity: isDark ? 0.20 : 0.16 },
    { left: "84%", size: 5, delay: "8.2s", duration: "10s", opacity: isDark ? 0.26 : 0.20 },
    { left: "38%", size: 4, delay: "4.5s", duration: "14s", opacity: isDark ? 0.18 : 0.15 },
    { left: "92%", size: 5, delay: "9.8s", duration: "11s", opacity: isDark ? 0.24 : 0.18 },
  ].slice(0, bubbleCount);

  // Floating marine particles (2-3px)
  const particles = [
    { left: "18%", top: "35%", size: 3, delay: "0s", duration: "11s" },
    { left: "52%", top: "65%", size: 2, delay: "3s", duration: "13s" },
    { left: "76%", top: "28%", size: 3, delay: "6s", duration: "10s" },
    { left: "88%", top: "72%", size: 2, delay: "8s", duration: "12s" },
  ];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Sliding Ocean Photography (Slides smoothly from right on scroll reveal, then settles) */}
      {slidingImage && (
        <div
          className={`absolute inset-y-0 ${
            slidingImage.position === "left" ? "left-0" : "right-0"
          } w-full sm:w-2/3 md:w-1/2 lg:w-5/12 overflow-hidden pointer-events-none z-0 reveal-on-scroll ocean-slide-${
            slidingImage.position === "left" ? "left" : "right"
          }`}
          style={{ "--slide-opacity": slidingImage.opacity || 0.10 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={slidingImage.src}
              alt={slidingImage.alt || "Subtle ocean background"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* Soft gradient edge fade so text remains pristine and readable */}
            <div
              className={`absolute inset-0 ${
                isDark
                  ? slidingImage.position === "left"
                    ? "bg-gradient-to-r from-transparent via-[#041926]/50 to-[#041926]"
                    : "bg-gradient-to-l from-transparent via-[#041926]/50 to-[#041926]"
                  : slidingImage.position === "left"
                    ? "bg-gradient-to-r from-transparent via-white/60 to-white"
                    : "bg-gradient-to-l from-transparent via-white/60 to-white"
              }`}
            />
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-b from-[#041926]/40 via-transparent to-[#041926]/60"
                  : "bg-gradient-to-b from-white/40 via-transparent to-white/70"
              }`}
            />
          </div>
        </div>
      )}

      {/* 2. Subtle Moving Light Texture / Caustics */}
      {showRays && (
        <div className={isDark ? "ocean-caustics" : "ocean-caustics-light"} />
      )}

      {/* 3. Subtle Underwater Sunbeams / God Rays */}
      {showRays && (
        <div className={isDark ? "ocean-light-rays" : "ocean-light-rays-light"} />
      )}

      {/* 4. Floating Underwater Micro-Bubbles (8s–14s duration) */}
      {showBubbles &&
        bubbles.map((b, idx) => (
          <div
            key={`${baseId}-bubble-${idx}`}
            className={isDark ? "ocean-bubble" : "ocean-bubble-light"}
            style={{
              left: b.left,
              bottom: "-20px",
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: b.delay,
              animationDuration: b.duration,
              "--bubble-opacity": b.opacity,
            }}
          />
        ))}

      {/* 5. Subtle Floating Marine Particles */}
      {showParticles &&
        particles.map((p, idx) => (
          <div
            key={`${baseId}-particle-${idx}`}
            className="ocean-particle hidden sm:block"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: isDark ? "rgba(22, 132, 198, 0.45)" : "rgba(22, 132, 198, 0.28)",
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}

      {/* 6. Swimming Fish Silhouettes (15–25 seconds cycle, 2–3 fish max) */}
      {showFish && (
        <>
          {/* Fish 1: Swimming Left to Right (Mid Depth, 19s) */}
          <div
            className={`ocean-fish-ltr ${isDark ? "text-ocean-light" : "text-[#1684C6]"}`}
            style={{
              top: "34%",
              left: "0",
              animationDuration: "19s",
              animationDelay: "0s",
              "--fish-opacity": isDark ? 0.35 : 0.18,
            }}
          >
            <FishSvg width={28} height={11} className="w-[22px] sm:w-[28px]" />
          </div>

          {/* Fish 2: Swimming Right to Left (Upper/Lower Depth, 23s) */}
          <div
            className={`ocean-fish-rtl ${isDark ? "text-ocean" : "text-[#1684C6]"}`}
            style={{
              top: "62%",
              right: "0",
              animationDuration: "23s",
              animationDelay: "7s",
              "--fish-opacity": isDark ? 0.30 : 0.15,
            }}
          >
            <FishSvg width={22} height={9} className="w-[18px] sm:w-[22px]" />
          </div>

          {/* Fish 3: Only when fishCount >= 3 (e.g. Hero Section, 21s) */}
          {fishCount >= 3 && (
            <div
              className={`ocean-fish-ltr ${isDark ? "text-ocean-light" : "text-[#1684C6]"} hidden sm:block`}
              style={{
                top: "20%",
                left: "0",
                animationDuration: "21s",
                animationDelay: "13s",
                "--fish-opacity": isDark ? 0.25 : 0.12,
              }}
            >
              <FishSvg width={18} height={7} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
