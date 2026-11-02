"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, ChevronDown, Check } from "lucide-react";

export default function LanguageSwitcher({ isTransparent = false, isMobile = false }) {
  const { lang, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "ar", label: "AR", name: "العربية" }
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  // If used inside mobile drawer, provide an inline toggle
  if (isMobile) {
    return (
      <div className="flex items-center justify-between p-2 rounded-xl bg-surface border border-border">
        <div className="flex items-center gap-2 text-xs font-heading font-medium text-charcoal">
          <Globe className="w-4 h-4 text-ocean" />
          <span>Language / اللغة</span>
        </div>
        <div className="flex items-center bg-white rounded-lg p-0.5 border border-border shadow-2xs">
          {languages.map((item) => {
            const active = lang === item.code;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  active
                    ? "bg-navy text-white shadow-xs"
                    : "text-muted hover:text-navy"
                }`}
              >
                {item.label} | {item.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop dropdown / toggle
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-heading font-semibold transition-all border ${
          isTransparent
            ? "border-white/30 text-white hover:border-white/60 bg-white/10 backdrop-blur-xs"
            : "border-border text-navy hover:border-ocean/40 bg-surface/80 hover:bg-white"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Change Language / تغيير اللغة"
      >
        <Globe className="w-3.5 h-3.5 text-ocean shrink-0" />
        <span className="tracking-wide">{currentLang.label} | {currentLang.name}</span>
        <ChevronDown
          className={`w-3 h-3 opacity-70 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 w-44 rounded-xl bg-white shadow-xl border border-border py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 ${
            lang === "ar" ? "left-0" : "right-0"
          }`}
          role="menu"
        >
          <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted font-bold border-b border-border/50">
            Select Language / اختر اللغة
          </div>
          {languages.map((item) => {
            const active = lang === item.code;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLanguage(item.code);
                  setIsOpen(false);
                }}
                className={`w-full text-start px-3 py-2 text-xs font-heading font-medium flex items-center justify-between transition-colors ${
                  active
                    ? "bg-ocean/10 text-ocean font-bold"
                    : "text-charcoal hover:bg-surface hover:text-navy"
                }`}
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs">{item.label}</span>
                  <span className="text-muted text-xs">|</span>
                  <span>{item.name}</span>
                </div>
                {active && <Check className="w-3.5 h-3.5 text-ocean" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
