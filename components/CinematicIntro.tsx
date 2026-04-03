"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ─── Name sequence ──────────────────────────────────────────────────────────
// Starts in non-English scripts — the name is revealed in English last.
// Arabic uses rtl layout. Japanese uses wider letter-spacing.
const NAMES = [
  { text: "श्रेयस स्वामी",     script: "HI", rtl: false, wide: false },
  { text: "شرياس سوامي",     script: "AR", rtl: true,  wide: false },
  { text: "シュレヤス スワミ", script: "JA", rtl: false, wide: true  },
  { text: "Shreyas Swamy",   script: "EN", rtl: false, wide: false },
]

// ── Timing ──────────────────────────────────────────────────────────────────
// mode="sync" → exit and enter overlap (crossfade). Each frame is at full
// opacity for (STEP_MS − FADE_MS) = 900 − 500 = 400ms per step.
const FADE_MS      = 380  // enter / exit fade duration
const STEP_MS      = 720  // how often index advances (must be > FADE_MS)
// Final EN: slower, reverent enter (FINAL_FADE_MS) + desired hold (FINAL_HOLD_MS).
// HOLD_LAST_MS starts counting from when the index changes, so it includes
// the entry fade time.
const FINAL_FADE_MS  = 520
const FINAL_HOLD_MS  = 700
const HOLD_LAST_MS   = FINAL_FADE_MS + FINAL_HOLD_MS  // = 1220ms from index change
const EXIT_ANIM_MS   = 650

const NOISE_SVG =
  "data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E"

// ─── Component ──────────────────────────────────────────────────────────────

export default function CinematicIntro() {
  const [show,    setShow]    = useState(false)
  const [index,   setIndex]   = useState(0)
  const [leaving, setLeaving] = useState(false)

  const dismiss = useCallback(() => {
    if (leaving) return
    setLeaving(true)
    setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ""
    }, EXIT_ANIM_MS)
  }, [leaving])

  // Play on every load
  useEffect(() => {
    setShow(true)
    document.body.style.overflow = "hidden"
  }, [])

  // Advance through sequence then dismiss
  useEffect(() => {
    if (!show || leaving) return
    if (index < NAMES.length - 1) {
      const t = setTimeout(() => setIndex(i => i + 1), STEP_MS)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(dismiss, HOLD_LAST_MS)
      return () => clearTimeout(t)
    }
  }, [show, index, leaving, dismiss])

  if (!show) return null

  const current = NAMES[index]
  const isFinal = index === NAMES.length - 1

  // Per-frame transition config — final EN enters more slowly, with gravity
  const fadeDuration = isFinal ? FINAL_FADE_MS / 1000 : FADE_MS / 1000
  const fadeEase     = isFinal
    ? ([0.16, 1, 0.3, 1] as const)
    : ([0.25, 0.1, 0.25, 1] as const)

  return (
    <motion.div
      animate={leaving
        ? { opacity: 0, scale: 1.016 }
        : { opacity: 1,  scale: 1     }}
      transition={{ duration: EXIT_ANIM_MS / 1000, ease: [0.16, 1, 0.3, 1] }}
      onClick={dismiss}
      aria-hidden="true"
      style={{
        position:       "fixed",
        inset:          0,
        zIndex:         99999,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        overflow:       "hidden",
        cursor:         "none",
      }}
    >

      {/* ── Atmospheric BG: soft radial, warm dark centre → pure black edges ── */}
      <div style={{
        position:   "absolute",
        inset:      0,
        background: "radial-gradient(ellipse 140% 110% at 50% 44%, #1c1b1a 0%, #0e0d0c 28%, #060606 54%, #020202 78%, #010101 100%)",
      }} />

      {/* Centre bloom — slow breath while sequence plays */}
      <motion.div
        animate={leaving
          ? { opacity: 0 }
          : { opacity: [0.03, 0.08, 0.03] }}
        transition={leaving
          ? { duration: 0.3 }
          : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position:      "absolute",
          inset:         0,
          background:    "radial-gradient(ellipse 44% 28% at 50% 48%, rgba(255,255,255,0.10) 0%, transparent 72%)",
          pointerEvents: "none",
        }}
      />

      {/* Grain */}
      <div
        aria-hidden="true"
        style={{
          position:        "absolute",
          top:             "-60px",
          right:           "-60px",
          bottom:          "-60px",
          left:            "-60px",
          width:           "calc(100% + 120px)",
          height:          "calc(100% + 120px)",
          backgroundImage: `url("${NOISE_SVG}")`,
          opacity:         0.065,
          pointerEvents:   "none",
          zIndex:          1,
          animation:       "grainAnim 0.5s steps(1) infinite",
        }}
      />

      {/* ── Typography stage ── */}
      {/*
        The container is fixed-height so that when two frames overlap during
        mode="sync" crossfade, they stack cleanly in the same space.
        Each <motion.p> is position:absolute + inset:0 + flex-centered.
      */}
      <div style={{
        position: "relative",
        zIndex:   2,
        width:    "90vw",
        height:   "clamp(52px, 8vw, 110px)",
      }}>
        <AnimatePresence mode="sync">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 9  }}
            animate={{ opacity: 1, y: 0  }}
            exit={{   opacity: 0, y: -7  }}
            transition={{ duration: fadeDuration, ease: fadeEase }}
            style={{
              position:      "absolute",
              inset:         0,
              display:       "flex",
              alignItems:    "center",
              justifyContent:"center",
              fontFamily:    "var(--font-cormorant), 'Noto Serif', Georgia, serif",
              fontSize:      "clamp(1.8rem, 4.2vw, 4.8rem)",
              fontWeight:    300,
              lineHeight:    1.1,
              color:         "#F2F0ED",
              letterSpacing: current.rtl  ? "0.04em"
                           : current.wide ? "0.06em"
                           : "-0.02em",
              direction:     current.rtl ? "rtl" : "ltr",
              userSelect:    "none",
              margin:        0,
              textAlign:     "center",
            }}
          >
            {current.text}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ── Script label — bottom, 12% opacity, barely there ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.script}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{   opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position:      "absolute",
            bottom:        "2.8rem",
            left:          "50%",
            transform:     "translateX(-50%)",
            fontFamily:    "var(--font-space-mono), monospace",
            fontSize:      "0.38rem",
            letterSpacing: "0.44em",
            color:         "rgba(242,240,237,0.12)",
            textTransform: "uppercase",
            userSelect:    "none",
            zIndex:        2,
            whiteSpace:    "nowrap",
          }}
        >
          {current.script}
        </motion.div>
      </AnimatePresence>

      {/* ── Deep cinematic vignette ── */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          background:    "radial-gradient(ellipse at 50% 50%, transparent 34%, rgba(1,1,1,0.36) 66%, rgba(1,1,1,0.68) 100%)",
          pointerEvents: "none",
          zIndex:        3,
        }}
      />

    </motion.div>
  )
}
