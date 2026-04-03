"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const STACK = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI" },
  { name: "Supabase", category: "Database" },
  { name: "Vercel", category: "Deployment" },
  { name: "Stripe", category: "Payments" },
  { name: "Shippo", category: "Logistics" },
  { name: "PostHog", category: "Analytics" },
  { name: "TypeScript", category: "Language" },
]

const DISCIPLINES = [
  {
    code: "CS",
    title: "Computer Science",
    body:
      "Systems, algorithms, data structures \u2014 the underlying language of every product built. Currently at Fordham University.",
  },
  {
    code: "SEC",
    title: "Cybersecurity",
    body:
      "Understanding how systems break is the first step to building ones that don\u2019t. Attack surfaces, threat modeling, secure architecture.",
  },
  {
    code: "BIZ",
    title: "Business Administration",
    body:
      "Engineering without economic awareness builds for no one. Product thinking, go-to-market, and why things actually get adopted.",
  },
]

export default function BuildPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#060606", color: "#F2F0ED" }}>
      <Link href="/" className="world-back-btn" data-hover>
        <span>{"←"}</span>
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
        <div
          className="img-placeholder"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",
          }}
        />

        {/* Ghost BUILD — underpainting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          style={{
            position: "absolute",
            right: "-4%",
            top: "8%",
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(14rem, 28vw, 38rem)",
            fontWeight: 300,
            color: "rgba(74,158,255,0.03)",
            letterSpacing: "-0.05em",
            lineHeight: 0.85,
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          BUILD
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#4A9EFF",
            marginBottom: "1.8rem",
          }}
        >
          {"World 02 \u2014 Build"}
        </motion.div>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4.5rem, 10vw, 13rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 0.88,
              marginBottom: "2.5rem",
            }}
          >
            Systems
            <br />
            <em style={{ fontStyle: "italic", color: "#4A9EFF" }}>That Work</em>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(0.82rem, 1.1vw, 1rem)",
            color: "#4A4A4A",
            maxWidth: "48ch",
            lineHeight: 1.75,
            letterSpacing: "0.01em",
          }}
        >
          {"At Fruitstand, built the entire ecommerce platform from scratch \u2014 frontend, backend, payments, logistics, analytics. Every layer. Solo."}
        </motion.p>
      </section>

      {/* ── FRUITSTAND CASE ── */}
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
          {"Case \u2014 Fruitstand"}
        </motion.div>

        {/* Headline — dominant, editorial */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 6vw, 8rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            marginBottom: "5rem",
            color: "#F2F0ED",
            maxWidth: "18ch",
          }}
        >
          {"A fashion brand\u2019s"}
          <br />
          <em style={{ color: "#4A9EFF", fontStyle: "italic" }}>{"full digital spine."}</em>
        </motion.h2>

        {/* Two-column — image + detail */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8rem",
            alignItems: "start",
          }}
        >
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="img-placeholder"
              style={{
                width: "100%",
                aspectRatio: "3/4",
                maskImage: "linear-gradient(to bottom right, black 60%, rgba(0,0,0,0.5) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom right, black 60%, rgba(0,0,0,0.5) 100%)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.48rem",
                  color: "#9A9A9A",
                  letterSpacing: "0.12em",
                }}
              >
                [ Fruitstand platform ]
              </div>
            </div>
          </motion.div>

          {/* Right: copy */}
          <div style={{ paddingTop: "2rem" }}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "1rem",
                color: "#4A4A4A",
                lineHeight: 1.8,
                marginBottom: "3.5rem",
                maxWidth: "44ch",
                letterSpacing: "0.01em",
              }}
            >
              {"Built the complete ecommerce platform \u2014 from product catalog and checkout flows to order management, shipping integration, and the admin panel used by the team daily."}
            </motion.p>

            {/* Pull statement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderLeft: "1px solid #4A9EFF",
                paddingLeft: "1.5rem",
                marginBottom: "4rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.5rem, 2vw, 2.2rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#5A5A5A",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                Not a Shopify template.
                <br />
                A real system.
              </p>
            </motion.div>

            {/* Deliverables — minimal list */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {[
                "Full ecommerce frontend",
                "Admin and backend panel",
                "Payment processing — Stripe",
                "Shipping integration — Shippo",
                "Analytics — PostHog",
                "Real-time database — Supabase",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.1em",
                    color: "#9A9A9A",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                  }}
                >
                  <span style={{ color: "#4A9EFF", opacity: 0.5 }}>{"\u2192"}</span>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STACK — horizontal manifest ── */}
      <section style={{ padding: "2rem 0 8rem", overflow: "hidden" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.48rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#9A9A9A",
            marginBottom: "2.5rem",
            padding: "0 8vw",
          }}
        >
          Stack
        </motion.div>

        {/* Full-width stack row — edge to edge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            borderTop: "1px solid #0E0E0E",
            borderBottom: "1px solid #0E0E0E",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {STACK.map((item, i) => (
            <div
              key={item.name}
              style={{
                flex: 1,
                padding: "2.5rem 2rem",
                borderRight: i < STACK.length - 1 ? "1px solid #0E0E0E" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                minWidth: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.42rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#4A9EFF",
                  opacity: 0.45,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {item.category}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "clamp(0.8rem, 1vw, 1rem)",
                  color: "#C4C2BF",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {item.name}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── DISCIPLINES ── */}
      <section style={{ padding: "0 8vw 12rem" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.48rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#9A9A9A",
            marginBottom: "5rem",
          }}
        >
          Disciplines
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {DISCIPLINES.map((d, i) => (
            <motion.div
              key={d.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "4rem 1fr",
                gap: "4rem",
                padding: `${i === 0 ? 0 : "4rem"} 0 4rem`,
                borderBottom: "1px solid #0E0E0E",
              }}
            >
              {/* Code — architectural label */}
              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.52rem",
                  letterSpacing: "0.12em",
                  color: "#4A9EFF",
                  paddingTop: "0.3rem",
                  opacity: 0.5,
                }}
              >
                {d.code}
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(2rem, 3vw, 3.5rem)",
                    fontWeight: 300,
                    color: "#F2F0ED",
                    letterSpacing: "-0.02em",
                    lineHeight: 0.95,
                    marginBottom: "1.2rem",
                  }}
                >
                  {d.title}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.9rem",
                    color: "#4A4A4A",
                    lineHeight: 1.8,
                    maxWidth: "52ch",
                    letterSpacing: "0.01em",
                  }}
                >
                  {d.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
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
        <Link href="/ride" data-hover style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#252525",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C4C2BF" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#252525" }}
          >
            Next: Ride {"\u2192"}
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
