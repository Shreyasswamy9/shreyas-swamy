"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { usePageTransition, WorldName } from "./TransitionProvider"

// Per-world entry animation personality — premium fluid choreography
const ENTRY_PERSONALITIES: Record<
  WorldName,
  {
    duration: number
    ease: [number, number, number, number]
    initialBlur: number
    initialScale: number
  }
> = {
  // Football: heavy and mythic — weighted, reverent emergence
  football: {
    duration: 1.2,
    ease: [0.25, 0.46, 0.45, 0.94],
    initialBlur: 12,
    initialScale: 1.04,
  },
  // Art: abstract — diffuse, sensory unfolding
  art: {
    duration: 1.0,
    ease: [0.34, 1.56, 0.64, 1],
    initialBlur: 16,
    initialScale: 1.032,
  },
  // Build: sharp and clean — snappy, precise entry
  build: {
    duration: 0.72,
    ease: [0.39, 0.575, 0.565, 1],
    initialBlur: 5,
    initialScale: 1.018,
  },
  // Ride: velocity — responsive and dynamic pull-in
  ride: {
    duration: 0.68,
    ease: [0.19, 1, 0.22, 1],
    initialBlur: 7,
    initialScale: 1.022,
  },
  // Sound: atmospheric — elegant, smooth emergence
  sound: {
    duration: 1.1,
    ease: [0.25, 0.46, 0.45, 0.94],
    initialBlur: 18,
    initialScale: 1.02,
  },
  // Play: digital / surreal — sharp, immersive reveal
  play: {
    duration: 0.8,
    ease: [0.34, 1.56, 0.64, 1],
    initialBlur: 9,
    initialScale: 1.033,
  },
}

interface WorldPageEntryProps {
  children: React.ReactNode
  world: WorldName
}

export function WorldPageEntry({ children, world }: WorldPageEntryProps) {
  const { phase, activeWorld } = usePageTransition()

  // Capture at mount time — was this page entered via a transition?
  const isTransitionEntryRef = useRef(
    activeWorld === world && phase !== "idle"
  )
  const isTransitionEntry = isTransitionEntryRef.current

  // Tracks when we should animate in (once dissolve begins)
  const [shouldReveal, setShouldReveal] = useState(false)

  useEffect(() => {
    if (isTransitionEntry && phase === "dissolving" && !shouldReveal) {
      setShouldReveal(true)
    }
  }, [isTransitionEntry, phase, shouldReveal])

  // Direct navigation — no wrapper, existing page animations run normally
  if (!isTransitionEntry) {
    return <>{children}</>
  }

  const p = ENTRY_PERSONALITIES[world]

  return (
    <motion.div
      // Premium reveal: orchestrated blur, scale, and opacity for fluid emergence
      initial={{
        opacity: 0,
        filter: `blur(${p.initialBlur}px)`,
        scale: p.initialScale,
      }}
      animate={
        shouldReveal
          ? { opacity: 1, filter: "blur(0px)", scale: 1 }
          : { opacity: 0, filter: `blur(${p.initialBlur}px)`, scale: p.initialScale }
      }
      transition={{
        duration: p.duration,
        ease: p.ease,
      }}
      style={{
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </motion.div>
  )
}
