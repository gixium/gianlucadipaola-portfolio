"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })
  const [isSmiling, setIsSmiling] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showGhost, setShowGhost] = useState(false)

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

      const deltaX = (mousePosition.x - centerX) * 0.4
      const deltaY = (mousePosition.y - centerY) * 0.4

      const maxOffset = 25
      setEyeOffset({
        x: Math.max(-maxOffset, Math.min(maxOffset, deltaX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, deltaY)),
      })
    }
  }, [mousePosition])

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
      <svg xmlns="http://www.w3.org/2000/svg" width="231" height="289" viewBox="0 0 231 289" className="w-full h-auto">
        <defs>
          <clipPath id="shapeClip">
            <path d="M230.809 115.385V249.411C230.809 269.923 214.985 287.282 194.495 288.411C184.544 288.949 175.364 285.718 168.26 280C159.746 273.154 147.769 273.461 139.178 280.23C132.638 285.384 124.381 288.462 115.379 288.462C106.377 288.462 98.1451 285.384 91.6055 280.23C82.912 273.385 70.9353 273.385 62.2415 280.23C55.7532 285.334 47.598 288.411 38.7246 288.462C17.4132 288.615 0 270.667 0 249.359V115.385C0 51.6667 51.6756 0 115.404 0C179.134 0 230.809 51.6667 230.809 115.385Z" />
          </clipPath>
        </defs>

        <foreignObject width="231" height="289" clipPath="url(#shapeClip)">
          <div className="w-full h-full">
            <MeshGradient colors={colors} className="w-full h-full" speed={0.3} />
          </div>
        </foreignObject>

        <AnimatePresence mode="wait">
          {isSmiling ? (
            <motion.g
              key="smiling"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15, ease: "anticipate" }}
            >
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
              <motion.ellipse
                rx="20"
                ry="30"
                fill={eyeColor}
                className="animate-blink"
                animate={{
                  cx: 80 + eyeOffset.x,
                  cy: 120 + eyeOffset.y,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
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
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              />
            </motion.g>
          )}
        </AnimatePresence>
      </svg>

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
