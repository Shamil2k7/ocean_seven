"use client";

import { useId } from "react";
import Image from "next/image";

export default function UnderwaterAmbient({
  theme = "dark",
  showBubbles = true,
  bubbleCount = 5,
  showRays = true,
  slidingImage,
  className = "",
}) {
  const baseId = useId();
  const isDark = theme === "dark";

  // Micro-bubbles with 8s–14s durations
  const bubbles = [
    { left: "12%", size: 5, delay: "0s", duration: "10s", opacity: isDark ? 0.28 : 0.22 },
    { left: "26%", size: 4, delay: "2.8s", duration: "12s", opacity: isDark ? 0.22 : 0.18 },
    { left: "48%", size: 6, delay: "6.5s", duration: "11s", opacity: isDark ? 0.30 : 0.24 },
    { left: "67%", size: 4, delay: "1.4s", duration: "13s", opacity: isDark ? 0.20 : 0.16 },
    { left: "84%", size: 5, delay: "8.2s", duration: "10s", opacity: isDark ? 0.26 : 0.20 },
    { left: "38%", size: 4, delay: "4.5s", duration: "14s", opacity: isDark ? 0.18 : 0.15 },
    { left: "92%", size: 5, delay: "9.8s", duration: "11s", opacity: isDark ? 0.24 : 0.18 },
  ].slice(0, bubbleCount);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Sliding Ocean Photography (Slides smoothly from right/left on scroll reveal, then settles) */}
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

      {/* 3. Subtle Underwater Sunbeams / Light Rays */}
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
    </div>
  );
}
