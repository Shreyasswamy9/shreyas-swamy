"use client"

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

// ─── Types ────────────────────────────────────────────────────────────────────

export type WorldName = "football" | "art" | "build" | "ride" | "sound" | "play"
export type TransitionPhase = "idle" | "expanding" | "dissolving"

export interface OriginData {
  rect: DOMRect
  color: string
  world: WorldName
  href: string
}

interface TransitionContextValue {
  triggerTransition: (origin: OriginData) => void
  phase: TransitionPhase
  activeWorld: WorldName | null
}

// ─── Per-world personality config ────────────────────────────────────────────

const PERSONALITIES: Record<
  WorldName,
  {
    expandDur: number
    expandEase: [number, number, number, number]
    dissolveDur: number
    dissolveEase: [number, number, number, number]
  }
> = {
  // Heavier, slower, more mythic — premium cubic
  football: {
    expandDur: 1.0,
    expandEase: [0.25, 0.46, 0.45, 0.94],
    dissolveDur: 0.85,
    dissolveEase: [0.42, 0, 0.58, 1],
  },
  // More abstract, smooth entry
  art: {
    expandDur: 0.88,
    expandEase: [0.34, 1.56, 0.64, 1],
    dissolveDur: 0.8,
    dissolveEase: [0.42, 0, 0.58, 1],
  },
  // Sharper and cleaner — snappy modern feel
  build: {
    expandDur: 0.7,
    expandEase: [0.39, 0.575, 0.565, 1],
    dissolveDur: 0.62,
    dissolveEase: [0.42, 0, 0.58, 1],
  },
  // More velocity — responsive and quick
  ride: {
    expandDur: 0.6,
    expandEase: [0.19, 1, 0.22, 1],
    dissolveDur: 0.55,
    dissolveEase: [0.42, 0, 0.58, 1],
  },
  // Softer and atmospheric — elegant smooth
  sound: {
    expandDur: 0.92,
    expandEase: [0.25, 0.46, 0.45, 0.94],
    dissolveDur: 0.9,
    dissolveEase: [0.36, 0, 0.66, 1],
  },
  // More digital / surreal — sharp and precise
  play: {
    expandDur: 0.76,
    expandEase: [0.34, 1.56, 0.64, 1],
    dissolveDur: 0.7,
    dissolveEase: [0.42, 0, 0.58, 1],
  },
}

// ─── Context ─────────────────────────────────────────────────────────────────

const TransitionContext = createContext<TransitionContextValue>({
  triggerTransition: () => {},
  phase: "idle",
  activeWorld: null,
})

export function usePageTransition() {
  return useContext(TransitionContext)
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [phase, setPhase] = useState<TransitionPhase>("idle")
  const [origin, setOrigin] = useState<OriginData | null>(null)
  const phaseRef = useRef<TransitionPhase>("idle")
  phaseRef.current = phase

  // Lock scroll during transition
  useEffect(() => {
    if (phase !== "idle") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [phase])

  const triggerTransition = useCallback(
    (data: OriginData) => {
      if (phaseRef.current !== "idle") return
      setOrigin(data)
      setPhase("expanding")
      phaseRef.current = "expanding"
    },
    []
  )

  // Called when the expansion animation completes
  const handleExpandDone = useCallback(() => {
    if (!origin) return
    router.push(origin.href)
    // Brief pause for the page to mount, then dissolve
    setTimeout(() => {
      setPhase("dissolving")
      phaseRef.current = "dissolving"
    }, 110)
  }, [router, origin])

  // Called when the dissolve animation completes
  const handleDissolveDone = useCallback(() => {
    setPhase("idle")
    phaseRef.current = "idle"
    setOrigin(null)
  }, [])

  // The single overlay div's onAnimationComplete — phase-aware via ref
  const handleAnimationComplete = useCallback(() => {
    if (phaseRef.current === "expanding") {
      handleExpandDone()
    } else if (phaseRef.current === "dissolving") {
      handleDissolveDone()
    }
  }, [handleExpandDone, handleDissolveDone])

  const personality = origin
    ? PERSONALITIES[origin.world]
    : PERSONALITIES.football

  // Compute viewport dimensions client-side
  const vw =
    typeof window !== "undefined" ? window.innerWidth : 1440
  const vh =
    typeof window !== "undefined" ? window.innerHeight : 900

  return (
    <TransitionContext.Provider
      value={{ triggerTransition, phase, activeWorld: origin?.world ?? null }}
    >
      {children}

      {/* ── Expanding overlay (card → fullscreen) ── */}
      {phase === "expanding" && origin && (
        <ExpandOverlay
          origin={origin}
          vw={vw}
          vh={vh}
          personality={personality}
          onAnimationComplete={handleAnimationComplete}
        />
      )}

      {/* ── Dissolving overlay (fullscreen → transparent) ── */}
      {phase === "dissolving" && origin && (
        <DissolveOverlay
          color={origin.color}
          world={origin.world}
          personality={personality}
          onAnimationComplete={handleAnimationComplete}
        />
      )}
    </TransitionContext.Provider>
  )
}

// ─── Expanding overlay ────────────────────────────────────────────────────────

function ExpandOverlay({
  origin,
  vw,
  vh,
  personality,
  onAnimationComplete,
}: {
  origin: OriginData
  vw: number
  vh: number
  personality: (typeof PERSONALITIES)[WorldName]
  onAnimationComplete: () => void
}) {
  return (
    <motion.div
      style={{
        position: "fixed",
        zIndex: 10000,
        pointerEvents: "all",
        overflow: "hidden",
        willChange: "transform, opacity",
        background: "#0a0a0a",
      }}
      initial={{
        left: origin.rect.left,
        top: origin.rect.top,
        width: origin.rect.width,
        height: origin.rect.height,
        borderRadius: 3,
        opacity: 1,
        filter: "blur(0px)",
      }}
      animate={{
        left: 0,
        top: 0,
        width: vw,
        height: vh,
        borderRadius: 0,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: personality.expandDur,
        ease: personality.expandEase,
      }}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Subtle elevated shimmer layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Ghost world name — emerges smoothly as overlay expands */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 0.055, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "absolute",
          bottom: "8%",
          left: "8vw",
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(8rem, 22vw, 26rem)",
          fontWeight: 300,
          letterSpacing: "-0.05em",
          lineHeight: 0.85,
          color: "#060606",
          textTransform: "uppercase",
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {origin.world}
      </motion.div>
    </motion.div>
  )
}

// ─── Dissolving overlay ───────────────────────────────────────────────────────

function DissolveOverlay({
  color,
  world,
  personality,
  onAnimationComplete,
}: {
  color: string
  world: WorldName
  personality: (typeof PERSONALITIES)[WorldName]
  onAnimationComplete: () => void
}) {
  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        pointerEvents: "all",
        overflow: "hidden",
        willChange: "transform, opacity, filter",
        background: "#0a0a0a",
      }}
      initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      animate={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
      transition={{
        duration: personality.dissolveDur,
        ease: personality.dissolveEase,
      }}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Subtle shimmer layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Ghost world name fades with overlay */}
      <motion.div
        initial={{ opacity: 0.055 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: personality.dissolveDur,
          ease: personality.dissolveEase,
        }}
        style={{
          position: "absolute",
          bottom: "8%",
          left: "8vw",
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(8rem, 22vw, 26rem)",
          fontWeight: 300,
          letterSpacing: "-0.05em",
          lineHeight: 0.85,
          color: "#060606",
          textTransform: "uppercase",
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {world}
      </motion.div>
    </motion.div>
  )
}
