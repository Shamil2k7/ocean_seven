"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { translations } from "@/i18n/translations";

const LanguageContext = createContext({
  lang: "en",
  setLanguage: () => {},
  dir: "ltr",
  isRTL: false,
  t: translations.en,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      // Check query parameter first, then localStorage
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      const storedLang = localStorage.getItem("ocean_seven_lang");
      
      const initialLang = (urlLang === "ar" || urlLang === "en")
        ? urlLang
        : (storedLang === "ar" || storedLang === "en")
          ? storedLang
          : "en";

      setLangState(initialLang);
      applyLanguage(initialLang);
    } catch (e) {
      console.error("Error reading language preference:", e);
    }
    setMounted(true);
  }, []);

  const applyLanguage = (newLang) => {
    const isArabic = newLang === "ar";
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
      document.documentElement.dir = isArabic ? "rtl" : "ltr";
      
      if (isArabic) {
        document.documentElement.classList.add("rtl");
        document.documentElement.classList.remove("ltr");
      } else {
        document.documentElement.classList.add("ltr");
        document.documentElement.classList.remove("rtl");
      }
    }
  };

  const setLanguage = useCallback((newLang) => {
    if (newLang !== "en" && newLang !== "ar") return;
    setLangState(newLang);
    try {
      localStorage.setItem("ocean_seven_lang", newLang);
      document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    } catch (e) {
      console.error("Error persisting language preference:", e);
    }
    applyLanguage(newLang);
  }, []);

  const isRTL = lang === "ar";
  const dir = isRTL ? "rtl" : "ltr";
  const currentTranslations = translations[lang] || translations.en;

  const contextValue = useMemo(() => ({
    lang,
    setLanguage,
    dir,
    isRTL,
    t: currentTranslations,
    mounted
  }), [lang, dir, isRTL, currentTranslations, mounted, setLanguage]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
