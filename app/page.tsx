"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
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
    sublabel: "This is everything.",
    description: "Seven years. One scholarship. Three surgeries. Still here.",
    href: "/football",
    accent: "#C8A96E",
    style: { left: "27%", top: "1%", width: "42%", height: "73%" },
    driftDelay: 0,
    depth: false,
  },
  {
    id: "art",
    label: "Art",
    sublabel: "This is how I see things.",
    description: "It runs under everything.",
    href: "/art",
    accent: "#F43F5E",
    style: { left: "1%", top: "1%", width: "24%", height: "43%" },
    driftDelay: 0.9,
    depth: true,
  },
  {
    id: "build",
    label: "Build",
    sublabel: "CS \u00B7 Cybersecurity \u00B7 Ecommerce",
    description: "I build systems that don't break.",
    href: "/build",
    accent: "#4A9EFF",
    style: { left: "72%", top: "1%", width: "27%", height: "43%" },
    driftDelay: 1.3,
    depth: false,
  },
  {
    id: "ride",
    label: "Ride",
    sublabel: "Ninja 400 \u00B7 Speed \u00B7 Control",
    description: "Speed. Silence. Mine.",
    href: "/ride",
    accent: "#A0A0A0",
    style: { left: "1%", top: "48%", width: "24%", height: "28%" },
    driftDelay: 1.7,
    depth: true,
  },
  {
    id: "sound",
    label: "Sound",
    sublabel: "Guitar \u00B7 Voice",
    description: "Late night. Minor chords. Just me.",
    href: "/sound",
    accent: "#8B5CF6",
    style: { left: "72%", top: "48%", width: "27%", height: "28%" },
    driftDelay: 2.1,
    depth: true,
  },
  {
    id: "play",
    label: "Play",
    sublabel: "Games \u00B7 Strategy \u00B7 Immersion",
    description: "Same instincts. Different terrain.",
    href: "/play",
    accent: "#10B981",
    style: { left: "27%", top: "78%", width: "42%", height: "21%" },
    driftDelay: 2.5,
    depth: false,
  },
]

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  // Depth plane parallax — background moves slower than foreground (depth illusion)
  const portraitY = useTransform(scrollY, [0, 700], ["0%", "16%"])
  const weightY = useTransform(scrollY, [300, 1400], ["0%", "-6%"])

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
      transition: { delay: i * 0.042, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
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
        {/* Portrait depth plane — rear cinematic image field, moves at different depth */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.2, delay: 0.3 }}
          style={{
            position: "absolute",
            right: "-6%",
            top: "-8%",
            width: "58%",
            height: "116%",
            y: portraitY,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {/* Image placeholder — replace with hero portrait */}
          <div
            className="img-placeholder"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.11,
              maskImage: "linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 50%, transparent 90%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 50%, transparent 90%)",
            }}
          />
          {/* Gold atmospheric wash over the portrait plane */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(145deg, transparent 20%, rgba(200,169,110,0.06) 58%, transparent 88%)",
              pointerEvents: "none",
            }}
          />
        </motion.div>

        {/* Art-layer atmospheric mark — diagonal presence */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "55%",
            height: "100%",
            background: "linear-gradient(135deg, transparent 35%, rgba(200,169,110,0.045) 58%, transparent 80%)",
            pointerEvents: "none",
          }}
        />

        {/* Location / context — top right, barely visible */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.2 }}
          style={{
            position: "absolute",
            right: "8vw",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
            alignItems: "flex-end",
            pointerEvents: "none",
          }}
        >
          {["New York City", "Bangalore, India", "Fordham University", "Manhattan Celtics"].map((t, i) => (
            <div
              key={i}
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.5rem",
                letterSpacing: "0.14em",
                color: `rgba(242,240,237,${0.04 + i * 0.022})`,
                textTransform: "uppercase",
              }}
            >
              {t}
            </div>
          ))}
        </motion.div>

        {/* Name — SHREYAS */}
        <div style={{ overflow: "hidden", marginBottom: "0.04em" }}>
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
                  fontSize: "clamp(5rem, 13.5vw, 17rem)",
                  fontWeight: 300,
                  lineHeight: 0.88,
                  letterSpacing: "-0.04em",
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
        <div style={{ overflow: "hidden", marginBottom: "3rem" }}>
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
                  fontSize: "clamp(5rem, 13.5vw, 17rem)",
                  fontWeight: 300,
                  lineHeight: 0.88,
                  letterSpacing: "-0.04em",
                  color: "#F2F0ED",
                  userSelect: "none",
                }}
              >
                {ch}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Gold divider — left-anchored, asymmetric */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "clamp(80px, 10vw, 160px)",
            height: "1px",
            background: "linear-gradient(90deg, #C8A96E, transparent)",
            transformOrigin: "left",
            marginBottom: "2rem",
          }}
        />

        {/* Identity line + rotating word */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.4rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(0.6rem, 0.9vw, 0.82rem)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#4A4A4A",
              fontWeight: 300,
            }}
          >
            Athlete. Builder. Creative Technologist.
          </span>

          <span style={{ width: "1px", height: "0.8rem", background: "#222222", flexShrink: 0 }} />

          <div style={{ height: "1.5em", overflow: "hidden", position: "relative", minWidth: "14ch" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "block",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "clamp(0.5rem, 0.75vw, 0.68rem)",
                  letterSpacing: "0.18em",
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
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
              fontSize: "0.45rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#202020",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "3rem",
              background: "linear-gradient(to bottom, #202020, transparent)",
              animation: "scrollPulse 1.8s ease-in-out infinite",
            }}
          />
        </motion.div>
      </section>

      {/* ─── WORLDS — sculptural composition ────── */}
      <section
        style={{
          width: "100vw",
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          padding: "0 3vw",
        }}
      >
        {/* Section label — minimal, editorial */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{
            padding: "1.6rem 5vw 1rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.48rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#9A9A9A",
              whiteSpace: "nowrap",
            }}
          >
            Worlds / 06
          </div>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(90deg, #161616, transparent)",
            }}
          />
        </motion.div>

        {/* The composition — worlds are planes, not cards */}
        <div
          className="worlds-grid"
          style={{
            position: "relative",
            flex: 1,
            width: "100%",
          }}
        >
          {/* Ghost WEIGHT text — art layer, moves at its own depth plane */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.5 }}
            style={{
              position: "absolute",
              right: "-4%",
              bottom: "-12%",
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(18rem, 38vw, 52rem)",
              fontWeight: 300,
              letterSpacing: "-0.06em",
              lineHeight: 0.8,
              color: "rgba(242,240,237,0.032)",
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
              whiteSpace: "nowrap",
              y: weightY,
            }}
          >
            WEIGHT
          </motion.div>

          {/* Ambient floating coordinate — art world residue */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.5 }}
            style={{
              position: "absolute",
              right: "3.5vw",
              bottom: "2rem",
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.42rem",
              color: "rgba(242,240,237,0.05)",
              letterSpacing: "0.1em",
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            40.7128{"\u00B0"} N &nbsp;/&nbsp; 74.0060{"\u00B0"} W
          </motion.div>

          {/* Fragments — layer over ghost text */}
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
            background: "linear-gradient(90deg, transparent, #131313 30%, #131313 70%, transparent)",
            marginBottom: "3.5rem",
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
                color: "#141414",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: "0.7rem",
              }}
            >
              Shreyas Swamy
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.48rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9A9A9A",
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
                  fontSize: "0.52rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#9A9A9A",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#F2F0ED" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#9A9A9A" }}
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
