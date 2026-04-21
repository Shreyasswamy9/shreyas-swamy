"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function ProgressIndicator() {
  const [hydrated, setHydrated] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) return null

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <>
      {/* Vertical progress bar */}
      <motion.div
        style={{
          position: "fixed",
          left: "1.5rem",
          top: 0,
          width: "2px",
          height: "100vh",
          background: "linear-gradient(to bottom, #C8A96E, #4A9EFF, #10B981)",
          scaleY,
          transformOrigin: "top",
          zIndex: 40,
          pointerEvents: "none",
        }}
      />

      {/* Horizontal progress bar at top */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: "100%",
          background: "linear-gradient(to right, #C8A96E, #4A9EFF, #10B981, #8B5CF6, #F43F5E)",
          scaleX: scrollYProgress,
          transformOrigin: "left",
          zIndex: 999,
          pointerEvents: "none",
        }}
      />
    </>
  )
}
