"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const TIMELINE = [
  {
    year: "2014",
    label: "Origin",
    text: "Bangalore, India. Joined Alchemy International Football Club.",
  },
  {
    year: "2021",
    label: "Scholarship",
    text: "Seven years later — earned a scholarship to play D2 at Mercyhurst University, Erie PA.",
  },
  {
    year: "2022",
    label: "Fracture",
    text: "ACL. Meniscus. Cyclops lesion. Two surgeries. Then appendicitis. Three surgeries in six months.",
  },
  {
    year: "2023",
    label: "Fordham",
    text: "Transferred to Fordham University, New York. Last two years. Different city. Same obsession.",
  },
  {
    year: "Now",
    label: "Comeback",
    text: "Playing for Manhattan Celtics. Every session is earned. Nothing is given back.",
  },
]

const STATS = [
  { value: "7", label: "Years with Alchemy" },
  { value: "D2", label: "College football" },
  { value: "3", label: "Surgeries" },
  { value: "1", label: "Comeback" },
]

export default function FootballPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060606",
        color: "#F2F0ED",
        overflow: "hidden",
      }}
    >
      {/* Back button */}
      <Link href="/" className="world-back-btn" data-hover>
        <span style={{ letterSpacing: "0.15em" }}>←</span>
        <span>Back</span>
      </Link>

      {/* ── HERO ── */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 8vw 8vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image placeholder */}
        <div
          className="img-placeholder"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
          }}
        />

        {/* Vertical accent line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            left: "8vw",
            top: "15vh",
            bottom: "8vh",
            width: "1px",
            background: "linear-gradient(to bottom, transparent, #C8A96E 30%, #C8A96E 70%, transparent)",
            transformOrigin: "top",
          }}
        />

        {/* World tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C8A96E",
            marginBottom: "1.5rem",
            marginLeft: "calc(8vw + 2rem)",
          }}
        >
          {"World 01 \u2014 Football"}
        </motion.div>

        {/* Heading */}
        <div style={{ overflow: "hidden", marginLeft: "calc(8vw + 2rem)" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4rem, 9vw, 11rem)",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              lineHeight: 0.9,
              marginBottom: "2rem",
            }}
          >
            The Center
            <br />
            <em style={{ fontStyle: "italic", color: "#C8A96E" }}>of Gravity</em>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)",
            color: "#6B6B6B",
            maxWidth: "50ch",
            lineHeight: 1.7,
            marginLeft: "calc(8vw + 2rem)",
          }}
        >
          {"From Bangalore to Mercyhurst to Fordham to Manhattan \u2014 football is not what Shreyas does. It is what holds everything else together."}
        </motion.p>
      </section>

      {/* ── STATS ROW ── */}
      <section
        style={{
          padding: "6rem 8vw",
          borderTop: "1px solid #1A1A1A",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(3rem, 5vw, 6rem)",
                fontWeight: 300,
                color: "#F2F0ED",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#3D3D3D",
                marginTop: "0.5rem",
              }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── TIMELINE ── */}
      <section
        style={{
          padding: "4rem 8vw 10rem",
          borderTop: "1px solid #1A1A1A",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#2A2A2A",
            marginBottom: "4rem",
          }}
        >
          The Arc
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "8rem 1px 1fr",
                gap: "0 2.5rem",
                paddingBottom: i < TIMELINE.length - 1 ? "3.5rem" : 0,
                alignItems: "start",
              }}
            >
              {/* Year */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.8rem",
                    fontWeight: 300,
                    color: i === TIMELINE.length - 1 ? "#C8A96E" : "#2A2A2A",
                    lineHeight: 1,
                  }}
                >
                  {item.year}
                </div>
              </div>

              {/* Vertical line */}
              <div
                style={{
                  background: i === TIMELINE.length - 1 ? "#C8A96E" : "#1A1A1A",
                  height: "100%",
                  minHeight: "5rem",
                  alignSelf: "stretch",
                }}
              />

              {/* Content */}
              <div style={{ paddingTop: "0.25rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: i === TIMELINE.length - 1 ? "#C8A96E" : "#3D3D3D",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "1rem",
                    color: i === TIMELINE.length - 1 ? "#C4C2BF" : "#6B6B6B",
                    lineHeight: 1.7,
                    maxWidth: "60ch",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image placeholder — full bleed */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.95 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: "6rem",
            marginLeft: "-8vw",
            marginRight: "-8vw",
          }}
        >
          <div
            className="img-placeholder"
            style={{ height: "55vh", position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "2.5rem",
                left: "8vw",
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#3D3D3D",
              }}
            >
              [ Football imagery — replace with match/training photos ]
            </div>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            marginTop: "6rem",
            borderLeft: "1px solid #C8A96E",
            paddingLeft: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 2.5vw, 2.8rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#9A9A9A",
              lineHeight: 1.4,
              maxWidth: "55ch",
            }}
          >
            Three surgeries in six months. The comeback is not a story.
            It is still happening.
          </p>
        </motion.blockquote>
      </section>

      {/* ── NEXT WORLD ── */}
      <div
        style={{
          padding: "3rem 8vw",
          borderTop: "1px solid #1A1A1A",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link href="/build" data-hover style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              color: "#3D3D3D",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F2F0ED" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#3D3D3D" }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Next: Build →
            </span>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
