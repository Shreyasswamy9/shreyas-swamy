"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function RidePage() {
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
        <div className="img-placeholder" style={{ position: "absolute", inset: 0, opacity: 0.1 }} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#A0A0A0",
            marginBottom: "1.5rem",
          }}
        >
          {"World 03 \u2014 Ride"}
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
            Metal.
            <br />
            <em style={{ fontStyle: "italic", color: "#A0A0A0" }}>Momentum.</em>
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
          {"A Kawasaki Ninja 400. New York traffic. The only place where speed and stillness coexist."}
        </motion.p>
      </section>

      <section
        style={{
          padding: "8rem 8vw 12rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
        }}
      >
        <div>
          <div className="img-placeholder" style={{ width: "100%", aspectRatio: "2/3" }}>
            <div style={{
              position: "absolute", bottom: "1.5rem", left: "1.5rem",
              fontFamily: "var(--font-space-mono)", fontSize: "0.55rem",
              color: "#2A2A2A", letterSpacing: "0.1em",
            }}>
              [ Ninja 400 / riding photography ]
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "3rem" }}>
          {[
            { label: "Machine", value: "Kawasaki Ninja 400" },
            { label: "City", value: "New York" },
            { label: "Discipline", value: "Control at speed" },
          ].map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{ borderBottom: "1px solid #181818", paddingBottom: "2rem" }}
            >
              <div style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#2A2A2A",
                marginBottom: "0.75rem",
              }}>
                {label}
              </div>
              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "2.2rem",
                fontWeight: 300,
                color: "#C4C2BF",
              }}>
                {value}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ padding: "3rem 8vw", borderTop: "1px solid #1A1A1A", display: "flex", justifyContent: "flex-end" }}>
        <Link href="/sound" data-hover style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ x: 8 }}
            style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3D3D3D", transition: "color 0.2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F2F0ED" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#3D3D3D" }}
          >
            Next: Sound →
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
