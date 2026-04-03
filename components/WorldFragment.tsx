"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Link from "next/link"

interface WorldFragmentProps {
  id: string
  label: string
  sublabel: string
  description: string
  href: string
  accent: string
  index: number
  style: React.CSSProperties
  driftDelay?: number
}

const STRENGTH = 16
const RADIUS = 200

export default function WorldFragment({
  id,
  label,
  sublabel,
  description,
  href,
  accent,
  index,
  style,
  driftDelay = 0,
}: WorldFragmentProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [magnetActive, setMagnetActive] = useState(false)

  const magX = useMotionValue(0)
  const magY = useMotionValue(0)
  const smoothX = useSpring(magX, { stiffness: 160, damping: 28, mass: 0.6 })
  const smoothY = useSpring(magY, { stiffness: 160, damping: 28, mass: 0.6 })

  // Proper single-RAF throttle for magnetic effect
  const rafRef = useRef<number | null>(null)
  const pendingEvent = useRef<{ x: number; y: number } | null>(null)

  const onWindowMouseMove = useCallback((e: MouseEvent) => {
    pendingEvent.current = { x: e.clientX, y: e.clientY }
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const ev = pendingEvent.current
      const card = cardRef.current
      if (!ev || !card) return
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = ev.x - cx
      const dy = ev.y - cy
      const dist = Math.hypot(dx, dy)
      if (dist < RADIUS) {
        const f = (1 - dist / RADIUS) * STRENGTH
        magX.set((dx / dist) * f)
        magY.set((dy / dist) * f)
      } else {
        magX.set(0)
        magY.set(0)
      }
    })
  }, [magX, magY])

  useEffect(() => {
    if (magnetActive) {
      window.addEventListener("mousemove", onWindowMouseMove)
    } else {
      window.removeEventListener("mousemove", onWindowMouseMove)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      magX.set(0)
      magY.set(0)
    }
    return () => {
      window.removeEventListener("mousemove", onWindowMouseMove)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [magnetActive, onWindowMouseMove, magX, magY])

  const isDominant = id === "football"
  const driftDur = 4 + index * 0.7

  return (
    // Outer wrapper: CSS drift animation runs entirely on compositor thread
    <div
      ref={cardRef}
      style={{
        ...style,
        position: "absolute",
        animationName: "cardDrift",
        animationDuration: `${driftDur}s`,
        animationDelay: `${driftDelay}s`,
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        "--drift-y": isDominant ? "-3px" : "-6px",
        "--drift-r": isDominant ? "0.1deg" : "0.3deg",
      } as React.CSSProperties}
      onMouseEnter={() => setMagnetActive(true)}
      onMouseLeave={() => setMagnetActive(false)}
    >
      {/* Middle: entry animation + magnetic spring — only 2 motion values */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          width: "100%",
          height: "100%",
          willChange: "transform",
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.11, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href={href}
          style={{ display: "block", width: "100%", height: "100%", textDecoration: "none" }}
          data-hover
        >
          {/* All hover effects handled by CSS :hover — zero JS per frame */}
          <div
            className="fragment-card"
            style={{ "--accent-wash": `${accent}14` } as React.CSSProperties}
          >
            {/* Shimmer placeholder */}
            <div className="fragment-shimmer img-placeholder" />

            {/* Accent color wash */}
            <div
              className="fragment-accent-wash"
              style={{
                background: `radial-gradient(ellipse at 70% 80%, ${accent}14 0%, transparent 65%)`,
              }}
            />

            {/* Bottom content */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: isDominant ? "2rem" : "1.4rem",
                background: "linear-gradient(to top, rgba(6,6,6,0.96) 0%, rgba(6,6,6,0.5) 60%, transparent 100%)",
              }}
            >
              <div
                className="fragment-sublabel"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.52rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: accent,
                  marginBottom: "0.5rem",
                }}
              >
                {sublabel}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: isDominant
                    ? "clamp(2.8rem, 4.5vw, 5.5rem)"
                    : "clamp(1.8rem, 2.8vw, 3.5rem)",
                  fontWeight: 300,
                  letterSpacing: isDominant ? "-0.025em" : "-0.01em",
                  color: "#F2F0ED",
                  lineHeight: 0.95,
                  marginBottom: "0.8rem",
                }}
              >
                {label}
              </div>

              <div
                className="fragment-description"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "0.72rem",
                  color: "#6B6B6B",
                  lineHeight: 1.5,
                  maxWidth: "22ch",
                }}
              >
                {description}
              </div>
            </div>

            {/* Index marker */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.5rem",
                color: "#1E1E1E",
                letterSpacing: "0.05em",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Bottom accent line */}
            <div className="fragment-accent-line" style={{ background: accent }} />
          </div>
        </Link>
      </motion.div>
    </div>
  )
}
