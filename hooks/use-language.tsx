"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"

type Language = "en" | "it"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Detect browser language on initial load
    const browserLang = navigator.language.split("-")[0]
    const initialLang = browserLang === "it" ? "it" : "en"

    // Check if there's a saved preference
    const savedLang = localStorage.getItem("language") as Language

    setLanguage(savedLang || initialLang)
  }, [])

  useEffect(() => {
    // Save language preference
    localStorage.setItem("language", language)

    // Update html lang attribute
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "it" : "en")
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
