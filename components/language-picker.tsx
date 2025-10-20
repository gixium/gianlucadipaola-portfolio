"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const LANGS = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
] as const

export type LanguageCode = (typeof LANGS)[number]["code"]

interface LanguagePickerProps {
  value?: LanguageCode
  onChange?: (code: LanguageCode) => void
  showLabel?: boolean
  className?: string
  onLanguageChange?: (code: LanguageCode) => void
}

export function LanguagePicker({
  value,
  onChange,
  showLabel = false,
  className,
  onLanguageChange,
}: LanguagePickerProps) {
  const [internal, setInternal] = React.useState<LanguageCode>(value ?? "en")
  const [expandedLang, setExpandedLang] = React.useState<LanguageCode | null>("en")

  React.useEffect(() => {
    if (value && value !== internal) setInternal(value)
  }, [value, internal])

  const setLang = (code: LanguageCode) => {
    setInternal(code)
    setExpandedLang(code)
    onChange?.(code)
    onLanguageChange?.(code)
  }

  const activeIndex = LANGS.findIndex((l) => l.code === internal)

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const max = LANGS.length - 1
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      e.preventDefault()
    }
    if (e.key === "ArrowRight") {
      const newCode = LANGS[Math.min(max, activeIndex + 1)].code
      setLang(newCode)
    }
    if (e.key === "ArrowLeft") {
      const newCode = LANGS[Math.max(0, activeIndex - 1)].code
      setLang(newCode)
    }
    if (e.key === "Home") setLang(LANGS[0].code)
    if (e.key === "End") setLang(LANGS[max].code)
  }

  const getTextWidth = (text: string) => {
    // Approximate width calculation: base width + character width
    const baseWidth = 60 // flag + padding + gap
    const charWidth = 7.5 // approximate width per character
    return Math.max(90, baseWidth + text.length * charWidth)
  }

  const getButtonWidth = (langCode: LanguageCode) => {
    if (expandedLang === langCode) {
      const lang = LANGS.find((l) => l.code === langCode)
      return lang ? getTextWidth(lang.label) : 120
    }
    return 40
  }

  // Fixed position calculation to use expandedLang instead of internal to match animation state
  const getIndicatorPosition = () => {
    let position = 0
    for (let i = 0; i < activeIndex; i++) {
      const currentWidth = expandedLang === LANGS[i].code ? getButtonWidth(LANGS[i].code) : 40
      position += currentWidth + 4
    }
    return position
  }

  const getIndicatorWidth = () => {
    return internal === expandedLang ? getButtonWidth(internal) : 40
  }

  const smoothTransition = {
    type: "spring" as const,
    stiffness: 200,
    damping: 35,
    mass: 0.6,
  }

  const textTransition = {
    type: "spring" as const,
    stiffness: 200,
    damping: 35,
    mass: 0.6,
  }

  return (
    <div className={cn("flex items-center", className)}>
      <div
        className={cn(
          "inline-flex gap-1 p-1.5 rounded-2xl border border-border/30 min-w-[180px]",
          "bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-md supports-[backdrop-filter]:bg-gray-50/40 dark:supports-[backdrop-filter]:bg-gray-900/20",
          "shadow-sm shadow-black/5 relative",
          "transition-shadow duration-300",
        )}
        role="radiogroup"
        aria-label="Select language"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <motion.div className="absolute inset-1.5 pointer-events-none" aria-hidden>
          <motion.div
            className="h-10 rounded-xl shadow-sm bg-gray-300 dark:bg-gray-700"
            animate={{
              x: getIndicatorPosition(),
              width: getIndicatorWidth(),
            }}
            transition={smoothTransition}
          />
        </motion.div>

        {LANGS.map((lang) => {
          const isActive = lang.code === internal
          const isExpanded = expandedLang === lang.code
          const buttonWidth = getButtonWidth(lang.code)

          return (
            <motion.button
              key={lang.code}
              role="radio"
              aria-checked={isActive}
              title={lang.label}
              onClick={() => setLang(lang.code)}
              whileTap={{ scale: 0.95 }}
              animate={{ width: buttonWidth }}
              transition={smoothTransition}
              className={cn(
                "relative z-10 h-10 rounded-xl flex items-center overflow-hidden",
                "transition-colors duration-200 ease-out",
                isActive ? "text-gray-700 dark:text-gray-300" : "text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2",
              )}
            >
              {isExpanded ? (
                <div className="flex items-center justify-center w-full h-full px-2 gap-2">
                  <span className="text-lg leading-none flex-shrink-0">{lang.flag}</span>
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={textTransition}
                      className="text-sm font-medium whitespace-nowrap"
                    >
                      {lang.label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-lg leading-none">{lang.flag}</span>
                </div>
              )}
            </motion.button>
          )
        })}
      </div>

      {showLabel && !expandedLang && (
        <div className="ml-3 inline-flex items-center text-muted-foreground text-sm">
          <Globe className="mr-1.5 h-4 w-4 opacity-70" />
          <span className="opacity-80 font-medium">{LANGS.find((l) => l.code === internal)?.label}</span>
        </div>
      )}
    </div>
  )
}
