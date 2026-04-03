"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const LINES = [
  "Guitar, late at night.",
  "Voice finding what words can't hold.",
  "Chords that resolve into something true.",
]

export default function SoundPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#060606", color: "#F2F0ED" }}>
      <Link href="/" className="world-back-btn" data-hover>
        <span>←</span><span>Back</span>
      </Link>

      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 8vw 8vh",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #1A1A1A",
        }}
      >
        <div className="img-placeholder" style={{ position: "absolute", inset: 0, opacity: 0.07 }} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#8B5CF6",
            marginBottom: "1.5rem",
          }}
        >
          {"World 04 \u2014 Sound"}
        </motion.div>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4rem, 9vw, 11rem)",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              lineHeight: 0.9,
              marginBottom: "2rem",
            }}
          >
            Guitar.
            <br />
            <em style={{ fontStyle: "italic", color: "#8B5CF6" }}>Voice.</em>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)",
            color: "#6B6B6B",
            maxWidth: "45ch",
            lineHeight: 1.7,
          }}
        >
          {"Not performed. Just played. The quietest world, and maybe the most honest."}
        </motion.p>
      </section>

      <section style={{ padding: "10rem 8vw 12rem" }}>
        {LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 3.5vw, 4.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: i === 2 ? "#8B5CF6" : "#2A2A2A",
              lineHeight: 1.3,
              marginBottom: "1rem",
              paddingBottom: "2rem",
              borderBottom: i < LINES.length - 1 ? "1px solid #131313" : "none",
            }}
          >
            {line}
          </motion.div>
        ))}

        <div
          className="img-placeholder"
          style={{ marginTop: "6rem", height: "45vh" }}
        >
          <div style={{
            position: "absolute", bottom: "1.5rem", left: "1.5rem",
            fontFamily: "var(--font-space-mono)", fontSize: "0.55rem",
            color: "#2A2A2A", letterSpacing: "0.1em",
          }}>
            [ Guitar / music photography ]
          </div>
        </div>
      </section>

      <div style={{ padding: "3rem 8vw", borderTop: "1px solid #1A1A1A", display: "flex", justifyContent: "flex-end" }}>
        <Link href="/play" data-hover style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ x: 8 }}
            style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3D3D3D", transition: "color 0.2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F2F0ED" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#3D3D3D" }}
          >
            Next: Play →
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
