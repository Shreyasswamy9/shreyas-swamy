"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Nav from "@/components/Nav"
import WorldFragment from "@/components/WorldFragment"

const WORDS = [
  "Computer Science",
  "Cybersecurity",
  "Business Administration",
  "Football",
  "Motorcycles",
  "Guitar",
  "Gaming",
  "Art",
]

const WORLDS = [
  {
    id: "football",
    label: "Football",
    sublabel: "The center of gravity",
    description: "Seven years. One scholarship. Three surgeries. Still rising.",
    href: "/football",
    accent: "#C8A96E",
    style: { left: "27%", top: "1%", width: "42%", height: "73%" },
    driftDelay: 0,
  },
  {
    id: "art",
    label: "Art",
    sublabel: "The hidden layer",
    description: "The instinct beneath everything else.",
    href: "/art",
    accent: "#F43F5E",
    style: { left: "1%", top: "1%", width: "24%", height: "43%" },
    driftDelay: 0.9,
  },
  {
    id: "build",
    label: "Build",
    sublabel: "CS \u00B7 Cybersecurity \u00B7 Ecommerce",
    description: "Engineering systems that actually work.",
    href: "/build",
    accent: "#4A9EFF",
    style: { left: "72%", top: "1%", width: "27%", height: "43%" },
    driftDelay: 1.3,
  },
  {
    id: "ride",
    label: "Ride",
    sublabel: "Ninja 400 \u00B7 Speed \u00B7 Control",
    description: "Metal, momentum, managed silence.",
    href: "/ride",
    accent: "#A0A0A0",
    style: { left: "1%", top: "48%", width: "24%", height: "28%" },
    driftDelay: 1.7,
  },
  {
    id: "sound",
    label: "Sound",
    sublabel: "Guitar \u00B7 Voice",
    description: "Late night. Minor chords. Real.",
    href: "/sound",
    accent: "#8B5CF6",
    style: { left: "72%", top: "48%", width: "27%", height: "28%" },
    driftDelay: 2.1,
  },
  {
    id: "play",
    label: "Play",
    sublabel: "Games \u00B7 Strategy \u00B7 Immersion",
    description: "Competition in digital worlds.",
    href: "/play",
    accent: "#10B981",
    style: { left: "27%", top: "78%", width: "42%", height: "21%" },
    driftDelay: 2.5,
  },
]

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const worldsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length)
    }, 1900)
    return () => clearInterval(interval)
  }, [])


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const letterVariants: any = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: { delay: i * 0.042, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  return (
    <>
      <Nav />

      {/* ─── HERO ─────────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          width: "100vw",
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 8vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Faint grid accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          style={{
            position: "absolute",
            right: "8vw",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            alignItems: "flex-end",
            pointerEvents: "none",
          }}
        >
          {["New York City", "Bangalore, India", "Fordham University", "Manhattan Celtics"].map((t, i) => (
            <div
              key={i}
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.12em",
                color: `rgba(242,240,237,${0.06 + i * 0.03})`,
                textTransform: "uppercase",
              }}
            >
              {t}
            </div>
          ))}
        </motion.div>

        {/* Name — SHREYAS */}
        <div style={{ overflow: "hidden", marginBottom: "0.06em" }}>
          <div style={{ display: "flex" }}>
            {"SHREYAS".split("").map((ch, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: "block",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(5rem, 11.5vw, 14rem)",
                  fontWeight: 300,
                  lineHeight: 0.88,
                  letterSpacing: "-0.025em",
                  color: "#F2F0ED",
                  userSelect: "none",
                }}
              >
                {ch}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Name — SWAMY */}
        <div style={{ overflow: "hidden", marginBottom: "2.8rem" }}>
          <div style={{ display: "flex" }}>
            {"SWAMY".split("").map((ch, i) => (
              <motion.span
                key={i}
                custom={i + 7}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: "block",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(5rem, 11.5vw, 14rem)",
                  fontWeight: 300,
                  lineHeight: 0.88,
                  letterSpacing: "-0.025em",
                  color: "#F2F0ED",
                  userSelect: "none",
                }}
              >
                {ch}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "clamp(100px, 14vw, 200px)",
            height: "1px",
            background: "linear-gradient(90deg, #C8A96E, transparent)",
            transformOrigin: "left",
            marginBottom: "1.8rem",
          }}
        />

        {/* Identity line + rotating word */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(0.65rem, 1vw, 0.9rem)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#6B6B6B",
              fontWeight: 300,
            }}
          >
            Athlete. Builder. Creative Technologist.
          </span>

          <span style={{ width: "1px", height: "0.9rem", background: "#2A2A2A", flexShrink: 0 }} />

          <div style={{ height: "1.5em", overflow: "hidden", position: "relative", minWidth: "14ch" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "block",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "clamp(0.55rem, 0.8vw, 0.72rem)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#C8A96E",
                  whiteSpace: "nowrap",
                }}
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#2A2A2A",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "3.5rem",
              background: "linear-gradient(to bottom, #2A2A2A, transparent)",
              animation: "scrollPulse 1.6s ease-in-out infinite",
            }}
          />
        </motion.div>
      </section>

      {/* ─── WORLDS SECTION (snap target) ────── */}
      <section
        ref={worldsRef}
        style={{
          width: "100vw",
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          padding: "0 3vw",
        }}
      >
        {/* Section label row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            padding: "1.4rem 5vw 1rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.52rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#2A2A2A",
              whiteSpace: "nowrap",
            }}
          >
            Worlds / 06
          </div>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(90deg, #1A1A1A, transparent)",
            }}
          />
        </motion.div>

        {/* Worlds grid — fills remaining height */}
        <div
          className="worlds-grid"
          style={{
            position: "relative",
            flex: 1,
            width: "100%",
          }}
        >
          {WORLDS.map((world, i) => (
            <WorldFragment key={world.id} index={i} {...world} />
          ))}
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────── */}
      <footer style={{ padding: "6rem 8vw 4rem" }}>
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #1A1A1A 30%, #1A1A1A 70%, transparent)",
            marginBottom: "3rem",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 300,
                color: "#1A1A1A",
                lineHeight: 1,
                letterSpacing: "-0.01em",
                marginBottom: "0.6rem",
              }}
            >
              Shreyas Swamy
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.52rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#2A2A2A",
              }}
            >
              New York City &nbsp;/&nbsp; 2026
            </div>
          </div>

          <div style={{ display: "flex", gap: "2.5rem" }}>
            {["GitHub", "LinkedIn", "Email"].map((link) => (
              <a
                key={link}
                href="#"
                data-hover
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#2A2A2A",
                  textDecoration: "none",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#6B6B6B" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#2A2A2A" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
