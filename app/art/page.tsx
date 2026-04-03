"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const STATEMENTS = [
  "Art is the hidden operating system.",
  "Not decoration. Infrastructure.",
  "Every other world runs on this one.",
]

export default function ArtPage() {
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
          justifyContent: "center",
          padding: "0 8vw",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #1A1A1A",
        }}
      >
        <div className="img-placeholder" style={{ position: "absolute", inset: 0, opacity: 0.06 }} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F43F5E",
            marginBottom: "2rem",
          }}
        >
          {"World 06 \u2014 Art"}
        </motion.div>

        {STATEMENTS.map((stmt, i) => (
          <div key={i} style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 6.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: i === 2 ? "#F43F5E" : i === 1 ? "#6B6B6B" : "#F2F0ED",
                fontStyle: i === 1 ? "italic" : "normal",
              }}
            >
              {stmt}
            </motion.div>
          </div>
        ))}
      </section>

      <section style={{ padding: "8rem 8vw 6rem", borderBottom: "1px solid #1A1A1A" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
            color: "#6B6B6B",
            lineHeight: 1.8,
            maxWidth: "60ch",
          }}
        >
          {"The visual sense that makes a product feel right, a layout breathe, a system feel intentional \u2014 that\u2019s not learned in a CS degree. It lives somewhere else. This is where."}
        </motion.p>
      </section>

      {/* Three placeholder image blocks */}
      <section
        style={{
          padding: "4rem 8vw 10rem",
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "1.5rem",
          alignItems: "start",
        }}
      >
        {[
          { aspect: "3/4", label: "[ Visual work / sketches ]" },
          { aspect: "1/1", label: "[ Art direction / design ]" },
          { aspect: "3/4", label: "[ Creative photography ]" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.15 }}
          >
            <div
              className="img-placeholder"
              style={{ width: "100%", aspectRatio: item.aspect }}
            >
              <div style={{
                position: "absolute", bottom: "1.2rem", left: "1.2rem",
                fontFamily: "var(--font-space-mono)", fontSize: "0.5rem",
                color: "#2A2A2A", letterSpacing: "0.1em",
              }}>
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <div style={{ padding: "3rem 8vw", borderTop: "1px solid #1A1A1A", display: "flex", justifyContent: "flex-end" }}>
        <Link href="/" data-hover style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ x: 8 }}
            style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3D3D3D", transition: "color 0.2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F2F0ED" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#3D3D3D" }}
          >
            ← Back to Origin
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
