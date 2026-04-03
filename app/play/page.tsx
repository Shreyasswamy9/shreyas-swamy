"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PlayPage() {
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
        <div className="img-placeholder" style={{ position: "absolute", inset: 0, opacity: 0.08 }} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#10B981",
            marginBottom: "1.5rem",
          }}
        >
          {"World 05 \u2014 Play"}
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
            Digital
            <br />
            <em style={{ fontStyle: "italic", color: "#10B981" }}>Arenas.</em>
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
          {"Competition doesn\u2019t require a pitch. Strategy, reflexes, systems thinking \u2014 the same instincts, different terrain."}
        </motion.p>
      </section>

      <section style={{ padding: "8rem 8vw 12rem" }}>
        {[
          {
            label: "Strategy",
            body: "Games as pattern recognition — reading the opponent, adapting the system, finding the edge.",
          },
          {
            label: "Immersion",
            body: "Worlds built with as much intentionality as any architecture. The craft behind them is real.",
          },
          {
            label: "Competition",
            body: "The drive to improve at something difficult doesn't turn off. It just changes environments.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "10rem 1fr",
              gap: "3rem",
              borderBottom: i < 2 ? "1px solid #181818" : "none",
              paddingBottom: "3rem",
              marginBottom: "3rem",
            }}
          >
            <div style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.5rem",
              fontWeight: 300,
              color: "#10B981",
            }}>
              {item.label}
            </div>
            <p style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.95rem",
              color: "#6B6B6B",
              lineHeight: 1.7,
              paddingTop: "0.15rem",
            }}>
              {item.body}
            </p>
          </motion.div>
        ))}
      </section>

      <div style={{ padding: "3rem 8vw", borderTop: "1px solid #1A1A1A", display: "flex", justifyContent: "flex-end" }}>
        <Link href="/art" data-hover style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ x: 8 }}
            style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3D3D3D", transition: "color 0.2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F2F0ED" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#3D3D3D" }}
          >
            Next: Art →
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
