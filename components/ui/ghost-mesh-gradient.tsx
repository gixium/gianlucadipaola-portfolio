"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const EYE_MAX_OFFSET = 14;      // ampiezza massima dello sguardo in px
const FOLLOW_SMOOTHNESS = 0.5; // 0..1 (più grande = più reattivo, più piccolo = più morbido)
const TOUCH_WOBBLE_MS = 2200;   // intervallo “respiro” su touch (ms)

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0)

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

interface GhostMeshGradientProps {
  isDarkMode: boolean
}

export function GhostMeshGradient({ isDarkMode }: GhostMeshGradientProps) {
  const colors = [
    "#A5F3FC", // Light Teal
    "#60A5FA", // Soft Blue
    "#A78BFA", // Lavender
    "#7C3AED", // Deep Violet
    "#0F172A", // Midnight Slate
  ]

  // Path del fantasma + SVG per la mask (serve a Safari)
  const ghostPath = "M230.809 115.385V249.411C230.809 269.923 214.985 287.282 194.495 288.411C184.544 288.949 175.364 285.718 168.26 280C159.746 273.154 147.769 273.461 139.178 280.23C132.638 285.384 124.381 288.462 115.379 288.462C106.377 288.462 98.1451 285.384 91.6055 280.23C82.912 273.385 70.9353 273.385 62.2415 280.23C55.7532 285.334 47.598 288.411 38.7246 288.462C17.4132 288.615 0 270.667 0 249.359V115.385C0 51.6667 51.6756 0 115.404 0C179.134 0 230.809 51.6667 230.809 115.385Z";

  // DataURL dell'SVG usato come mask (bianco = visibile)
  const maskSvgDataUrl = `data:image/svg+xml;utf8,` +
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 289">
      <path fill="white" d="${ghostPath}"/>
    </svg>`);


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isSmiling, setIsSmiling] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showGhost, setShowGhost] = useState(false)
  // E  ye movement
  const eyeTarget = useRef({ x: 0, y: 0 }) // Posizione “desiderata” degli occhi (usata per la rincorsa smooth)
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 }) // Stato che guida il rendering
  const containerRef = useRef<HTMLDivElement | null>(null) // Ref al contenitore di Spooky (serve per calcolare il centro)
  
  useEffect(() => {
    setMounted(true)
    // Delay ghost appearance by 3 seconds
    const timer = setTimeout(() => {
      setShowGhost(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const eyeColor = isDarkMode ? "#111827" : "#F9FAFB"

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const ghostElement = document.querySelector(".ghost-container")
    const rect = ghostElement?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (mousePosition.x - centerX) * 0.2
      const deltaY = (mousePosition.y - centerY) * 0.2

      const maxOffset = 25
      setEyeOffset({
        x: Math.max(-maxOffset, Math.min(maxOffset, deltaX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, deltaY)),
      })
    }
  }, [mousePosition])

  // Desktop: segui il mouse con inerzia (lerp) + rAF
  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) return

    const onPointerMove = (e: PointerEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy

      // normalizza e limita l’ampiezza
      const scale = EYE_MAX_OFFSET / Math.min(rect.width, rect.height)
      eyeTarget.current.x = Math.max(-EYE_MAX_OFFSET, Math.min(EYE_MAX_OFFSET, dx * scale))
      eyeTarget.current.y = Math.max(-EYE_MAX_OFFSET, Math.min(EYE_MAX_OFFSET, dy * scale))
    }

    let rafId: number | null = null
    const tick = () => {
      setEyeOffset(prev => {
        const nx = prev.x + (eyeTarget.current.x - prev.x) * FOLLOW_SMOOTHNESS
        const ny = prev.y + (eyeTarget.current.y - prev.y) * FOLLOW_SMOOTHNESS
        return { x: nx, y: ny }
      })
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // Touch: oscilla piano (“respiro”) e guarda il tap per ~1s
  useEffect(() => {
    if (!isTouchDevice() || prefersReducedMotion()) return

    let timer: number | null = null

    const wobble = () => {
      const angle = Math.random() * Math.PI * 2
      const radius = EYE_MAX_OFFSET * 0.5  // ampiezza del respiro
      const jitter = 2 + Math.random() * 4 // piccolo tremolio naturale
      setEyeOffset({
        x: Math.cos(angle) * radius + (Math.random() - 0.5) * jitter,
        y: Math.sin(angle) * radius + (Math.random() - 0.5) * jitter,
      })
      timer = window.setTimeout(wobble, TOUCH_WOBBLE_MS + Math.random() * 800)
    }

    wobble()

    // Al tocco guarda il punto per 1.2s, poi torna al respiro
    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = touch.clientX - cx
      const dy = touch.clientY - cy
      const scale = EYE_MAX_OFFSET / Math.min(rect.width, rect.height)
      setEyeOffset({
        x: Math.max(-EYE_MAX_OFFSET, Math.min(EYE_MAX_OFFSET, dx * scale)),
        y: Math.max(-EYE_MAX_OFFSET, Math.min(EYE_MAX_OFFSET, dy * scale)),
      })
      if (timer) clearTimeout(timer)
      timer = window.setTimeout(wobble, 1200)
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true })

    return () => {
      if (timer) clearTimeout(timer)
      window.removeEventListener("touchstart", onTouchStart)
    }
  }, [])


  const handleClick = () => {
    setIsSmiling(true)
    setTimeout(() => setIsSmiling(false), 1500)
  }

  if (!mounted || !showGhost) return null

  return (
    <motion.div
      className="ghost-container fixed bottom-8 left-8 w-8 cursor-pointer z-40"
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.3, y: 40 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -4, 0],
      }}
      exit={{ opacity: 0, scale: 0.6, y: 20, transition: { duration: 0.15 } }}
      transition={{
        opacity: { duration: 0.6, ease: "easeOut" },
        scale: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
        y: {
          duration: 2.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }}
      style={{
        filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))",
      }}
    >
      {/* Safari/iOS friendly: niente foreignObject, mask CSS + overlay SVG */}
      <div ref={containerRef} className="relative w-full" style={{ aspectRatio: "231 / 289" }}>
        {/* Riempimento colorato: MeshGradient ritagliato dalla mask del fantasma */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: `url("${maskSvgDataUrl}")`,
            maskImage: `url("${maskSvgDataUrl}")`,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        >
          <MeshGradient colors={colors} className="w-full h-full" speed={0.3} />
        </div>

        {/* Overlay vettoriale per occhi / “smile” (nessun foreignObject) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 231 289"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <AnimatePresence mode="wait">
            {isSmiling ? (
              <motion.g
                key="smiling"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15, ease: "anticipate" }}
              >
                {/* occhi “chiusi” a sorriso */}
                <path
                  d="M 60 120 Q 80 100 100 120"
                  stroke={eyeColor}
                  strokeWidth="16"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 130 120 Q 150 100 170 120"
                  stroke={eyeColor}
                  strokeWidth="16"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.g>
            ) : (
              <motion.g
                key="normal"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15, ease: "anticipate" }}
              >
                {/* occhi “aperti” che seguono il puntatore */}
                <motion.ellipse
                  rx="20"
                  ry="30"
                  fill={eyeColor}
                  className="animate-blink"
                  // posizione reattiva: aggiungi una leggera attenuazione se vuoi
                  animate={{
                    cx: 80 + eyeOffset.x,
                    cy: 120 + eyeOffset.y,
                  }}
                  // regolazione rimbalzo occhi (-stiffness = -molla ; +dampling = +fluidità)
                  transition={{ type: "spring", stiffness: 350, damping: 25 }} 
                />
                <motion.ellipse
                  rx="20"
                  ry="30"
                  fill={eyeColor}
                  className="animate-blink"
                  animate={{
                    cx: 150 + eyeOffset.x,
                    cy: 120 + eyeOffset.y,
                  }}
                  // regolazione rimbalzo occhi (-stiffness = -molla ; +dampling = +fluidità)
                  transition={{ type: "spring", stiffness: 350, damping: 25 }} 
                />
              </motion.g>
            )}
          </AnimatePresence>
        </svg>
      </div>

      <style jsx>{`
        .animate-blink {
          animation: blink 3s infinite ease-in-out;
        }

        @keyframes blink {
          0%,
          90%,
          100% {
            ry: 30;
          }
          95% {
            ry: 3;
          }
        }
      `}</style>
    </motion.div>
  )
}
