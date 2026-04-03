"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const TIMELINE = [
  {
    year: "2014",
    label: "Origin",
    text: "Bangalore, India. Joined Alchemy International Football Club. Not a decision. An obsession that started early.",
    offset: "0",
  },
  {
    year: "2022",
    label: "Scholarship",
    text: "Seven years of training converted into something real. Earned a scholarship to play D2 at Mercyhurst University, Erie PA.",
    offset: "8vw",
  },
  {
    year: "2024",
    label: "Fracture",
    text: "ACL. Meniscus. Cyclops lesion. Two surgeries. Then appendicitis — a third surgery, unrelated, unwanted. Three operations in six months.",
    offset: "4vw",
  },
  {
    year: "2024",
    label: "Fordham",
    text: "Transferred to Fordham University, New York. Last two years. Different city, different campus. Same obsession.",
    offset: "12vw",
  },
  {
    year: "Now",
    label: "Comeback",
    text: "Playing for Manhattan Celtics. Every session is earned. Nothing is given back. The story is still being written.",
    offset: "0",
  },
]

const STATS = [
  { value: "7", label: "Years with Alchemy", indent: "0" },
  { value: "D2", label: "College football", indent: "18vw" },
  { value: "3", label: "Surgeries", indent: "8vw" },
  { value: "1", label: "Comeback", indent: "26vw" },
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
      <Link href="/" className="world-back-btn" data-hover>
        <span style={{ letterSpacing: "0.15em" }}>{"←"}</span>
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
        {/* Background image — full bleed, masked */}
        <div
          className="img-placeholder"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.3) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.3) 100%)",
          }}
        />

        {/* Diagonal gold atmosphere */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.6 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(145deg, transparent 50%, rgba(200,169,110,0.04) 70%, transparent 90%)",
            pointerEvents: "none",
          }}
        />

        {/* Ghost FOOTBALL — underpainting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          style={{
            position: "absolute",
            right: "-5%",
            top: "5%",
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(14rem, 30vw, 40rem)",
            fontWeight: 300,
            color: "rgba(200,169,110,0.03)",
            letterSpacing: "-0.05em",
            lineHeight: 0.85,
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          FOOTBALL
        </motion.div>

        {/* Vertical gold line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            left: "8vw",
            top: "18vh",
            bottom: "8vh",
            width: "1px",
            background: "linear-gradient(to bottom, transparent, #C8A96E 25%, #C8A96E 75%, transparent)",
            transformOrigin: "top",
          }}
        />

        {/* World tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C8A96E",
            marginBottom: "1.8rem",
            marginLeft: "calc(8vw + 2rem)",
          }}
        >
          {"World 01 \u2014 Football"}
        </motion.div>

        {/* Heading — large, editorial */}
        <div style={{ overflow: "hidden", marginLeft: "calc(8vw + 2rem)" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4.5rem, 10vw, 13rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 0.88,
              marginBottom: "2.5rem",
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
          transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(0.82rem, 1.1vw, 1rem)",
            color: "#C4C2BF",
            maxWidth: "48ch",
            lineHeight: 1.75,
            marginLeft: "calc(8vw + 2rem)",
            letterSpacing: "0.01em",
          }}
        >
          {"From Bangalore to Mercyhurst to Fordham to Manhattan \u2014 football is not what Shreyas does. It is what holds everything else together."}
        </motion.p>
      </section>

      {/* ── STATS — cinematic, not a grid ── */}
      <section
        style={{
          padding: "10rem 8vw 8rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.48rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#9A9A9A",
            marginBottom: "5rem",
          }}
        >
          The Weight of It
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "2.5rem",
                marginBottom: i < STATS.length - 1 ? "3.5rem" : 0,
                paddingLeft: stat.indent,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(6rem, 14vw, 16rem)",
                  fontWeight: 300,
                  lineHeight: 0.85,
                  color: i === STATS.length - 1 ? "#C8A96E" : "#F2F0ED",
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: i === STATS.length - 1 ? "#C8A96E" : "#9A9A9A",
                  lineHeight: 1.6,
                  maxWidth: "10ch",
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── THE ARC — editorial, not a list ── */}
      <section
        style={{
          padding: "0 0 6rem",
          position: "relative",
        }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.48rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#9A9A9A",
            marginBottom: "2rem",
            padding: "0 8vw",
          }}
        >
          The Arc
        </motion.div>

        {/* Timeline entries — editorial, staggered, discovered */}
        <div style={{ position: "relative" }}>
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                padding: `${i === 0 ? "3rem" : "4rem"} 8vw ${i === TIMELINE.length - 1 ? "4rem" : "4rem"}`,
                paddingLeft: `calc(8vw + ${item.offset})`,
                borderTop: "1px solid #0E0E0E",
              }}
            >
              {/* Ghost year — underpainting behind the content */}
              <div
                style={{
                  position: "absolute",
                  right: "3vw",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(5rem, 12vw, 14rem)",
                  fontWeight: 300,
                  color: i === TIMELINE.length - 1
                    ? "rgba(200,169,110,0.06)"
                    : "rgba(242,240,237,0.03)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {item.year}
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.5rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: i === TIMELINE.length - 1 ? "#C8A96E" : "#252525",
                  marginBottom: "1.2rem",
                }}
              >
                {item.label}
              </div>

              {/* Year — visible, small */}
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                  fontWeight: 300,
                  color: i === TIMELINE.length - 1 ? "#C8A96E" : "#F2F0ED",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                {item.year}
              </div>

              {/* Content */}
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
                  color: "#C4C2BF",
                  lineHeight: 1.75,
                  maxWidth: "52ch",
                  letterSpacing: "0.01em",
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FULL-BLEED IMAGE ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative" }}
      >
        <div
          className="img-placeholder"
          style={{
            height: "60vh",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "8vw",
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.48rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9A9A9A",
          }}
        >
          [ Match / training ]
        </div>
      </motion.div>

      {/* ── CLOSING STATEMENT ── */}
      <section style={{ padding: "8rem 8vw 10rem", position: "relative", overflow: "hidden" }}>
        {/* Ghost text underpainting */}
        <div
          style={{
            position: "absolute",
            left: "-2%",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(10rem, 22vw, 28rem)",
            fontWeight: 300,
            color: "rgba(200,169,110,0.025)",
            letterSpacing: "-0.05em",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          COMEBACK
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              width: "clamp(60px, 6vw, 100px)",
              height: "1px",
              background: "linear-gradient(90deg, #C8A96E, transparent)",
              marginBottom: "3rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 3.2vw, 4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#6B6B6B",
              lineHeight: 1.35,
              maxWidth: "42ch",
              letterSpacing: "-0.01em",
            }}
          >
            Three surgeries in six months.
            <br />
            <em style={{ color: "#9A9A9A" }}>The comeback is not a story.</em>
            <br />
            It is still happening.
          </p>
        </motion.blockquote>
      </section>

      {/* ── NEXT WORLD ── */}
      <div
        style={{
          padding: "3rem 8vw",
          borderTop: "1px solid #0E0E0E",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link href="/build" data-hover style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              color: "#252525",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C4C2BF" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#252525" }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Next: Build {"\u2192"}
            </span>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
