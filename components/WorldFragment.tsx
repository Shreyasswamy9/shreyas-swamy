"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { usePageTransition, WorldName } from "./TransitionProvider"

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
  depth?: boolean
}

const STRENGTH = 14
const RADIUS = 220

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
  depth = false,
}: WorldFragmentProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [magnetActive, setMagnetActive] = useState(false)

  const { triggerTransition, phase, activeWorld } = usePageTransition()
  const isDimmed = phase !== "idle" && id !== activeWorld

  const magX = useMotionValue(0)
  const magY = useMotionValue(0)
  const smoothX = useSpring(magX, { stiffness: 140, damping: 32, mass: 0.7 })
  const smoothY = useSpring(magY, { stiffness: 140, damping: 32, mass: 0.7 })

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

  const handleClick = useCallback(() => {
    if (phase !== "idle") return
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    triggerTransition({ rect, color: accent, world: id as WorldName, href })
  }, [phase, accent, id, href, triggerTransition])

  const isDominant = id === "football"
  const driftDur = 4 + index * 0.7

  return (
    <div
      ref={cardRef}
      className={depth ? "fragment-depth" : undefined}
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
        "--drift-r": isDominant ? "0.08deg" : `${0.2 + index * 0.08}deg`,
      } as React.CSSProperties}
      onMouseEnter={() => setMagnetActive(true)}
      onMouseLeave={() => setMagnetActive(false)}
    >
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          width: "100%",
          height: "100%",
          willChange: "transform",
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 + index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          role="link"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleClick() }}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            textDecoration: "none",
            cursor: "none",
          }}
          data-hover
        >
          <div
            className="fragment-card"
            data-dominant={isDominant ? "true" : undefined}
          >
            {/* Image plane — fills card entirely */}
            <div className="fragment-shimmer img-placeholder" />

            {/* Accent color atmosphere */}
            <div
              className="fragment-accent-wash"
              style={{
                background: isDominant
                  ? `radial-gradient(ellipse at 60% 90%, ${accent}1A 0%, transparent 60%)`
                  : `radial-gradient(ellipse at 70% 80%, ${accent}10 0%, transparent 65%)`,
              }}
            />

            {/* Football gravitational glow — breathing warmth from below */}
            {isDominant && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 50% 95%, rgba(200,169,110,0.24) 0%, rgba(200,169,110,0.1) 32%, transparent 65%)",
                  pointerEvents: "none",
                  animation: "footballPulse 3.8s ease-in-out infinite",
                }}
              />
            )}

            {/* Football: top gold slash */}
            {isDominant && <div className="fragment-gold-slash" />}

            {/* Bottom content — text floats on gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: isDominant ? "2.5rem" : "1.4rem",
                background: isDominant
                  ? "linear-gradient(to top, rgba(6,6,6,0.98) 0%, rgba(6,6,6,0.6) 55%, transparent 100%)"
                  : "linear-gradient(to top, rgba(6,6,6,0.95) 0%, rgba(6,6,6,0.45) 60%, transparent 100%)",
              }}
            >
              <div
                className="fragment-sublabel"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.48rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: accent,
                  marginBottom: isDominant ? "0.7rem" : "0.5rem",
                }}
              >
                {sublabel}
              </div>

              <div
                className="fragment-label"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: isDominant
                    ? "clamp(3rem, 5vw, 6.5rem)"
                    : "clamp(1.6rem, 2.6vw, 3.2rem)",
                  fontWeight: 300,
                  letterSpacing: isDominant ? "-0.03em" : "-0.015em",
                  color: "#F2F0ED",
                  lineHeight: 0.92,
                  marginBottom: "0.9rem",
                }}
              >
                {label}
              </div>

              <div
                className="fragment-description"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: isDominant ? "0.78rem" : "0.68rem",
                  color: "#5A5A5A",
                  lineHeight: 1.55,
                  maxWidth: isDominant ? "28ch" : "22ch",
                  letterSpacing: "0.01em",
                }}
              >
                {description}
              </div>
            </div>

            {/* Index marker — very faint */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.45rem",
                color: "#161616",
                letterSpacing: "0.05em",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Bottom accent line */}
            {!isDominant && <div className="fragment-accent-line" style={{ background: accent }} />}

            {/* Dim overlay — fades in when another world is being entered */}
            <AnimatePresence>
              {isDimmed && (
                <motion.div
                  key="dim"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(6,6,6,0.68)",
                    backdropFilter: "blur(3px)",
                    WebkitBackdropFilter: "blur(3px)",
                    zIndex: 4,
                    pointerEvents: "none",
                    borderRadius: "inherit",
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
