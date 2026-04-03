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
      "Systems, algorithms, data structures — the underlying language of every product built. Currently studying at Fordham University.",
  },
  {
    code: "SEC",
    title: "Cybersecurity",
    body:
      "Understanding how systems break is the first step to building ones that don't. Attack surfaces, threat modeling, secure architecture.",
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
        <span>←</span>
        <span>Back</span>
      </Link>

      {/* Hero */}
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
        <div
          className="img-placeholder"
          style={{ position: "absolute", inset: 0, opacity: 0.08 }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#4A9EFF",
            marginBottom: "1.5rem",
          }}
        >
          {"World 02 \u2014 Build"}
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
            Systems
            <br />
            <em style={{ fontStyle: "italic", color: "#4A9EFF" }}>That Work</em>
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
            maxWidth: "50ch",
            lineHeight: 1.7,
          }}
        >
          {"At Fruitstand, built the entire ecommerce platform from scratch \u2014 frontend, backend, payments, logistics, analytics. Every layer. Solo."}
        </motion.p>
      </section>

      {/* Fruitstand case */}
      <section style={{ padding: "8rem 8vw", borderBottom: "1px solid #1A1A1A" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "start",
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#2A2A2A",
                marginBottom: "2rem",
              }}
            >
              {"Case \u2014 Fruitstand"}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 4vw, 5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                marginBottom: "2rem",
                color: "#F2F0ED",
              }}
            >
              {"A fashion brand\u2019s"}
              <br />
              {"full digital spine."}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "0.95rem",
                color: "#6B6B6B",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              {"Built the complete ecommerce platform \u2014 from product catalog and checkout flows to order management, shipping integration, and the admin panel used by the team daily. Not a Shopify template. A real system."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: "#3D3D3D",
                lineHeight: 2,
              }}
            >
              → Full ecommerce frontend<br />
              → Admin and backend panel<br />
              → Payment processing with Stripe<br />
              → Shipping via Shippo<br />
              → Analytics with PostHog<br />
              → Real-time DB with Supabase
            </motion.div>
          </div>

          <div>
            <div
              className="img-placeholder"
              style={{ width: "100%", aspectRatio: "3/4" }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.55rem",
                  color: "#2A2A2A",
                  letterSpacing: "0.1em",
                }}
              >
                [ Fruitstand platform screenshots ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section style={{ padding: "6rem 8vw", borderBottom: "1px solid #1A1A1A" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#2A2A2A",
            marginBottom: "3rem",
          }}
        >
          Stack
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "#181818",
            border: "1px solid #181818",
          }}
        >
          {STACK.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{
                background: "#060606",
                padding: "2rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.5rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#4A9EFF",
                  marginBottom: "0.5rem",
                  opacity: 0.6,
                }}
              >
                {item.category}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "1rem",
                  color: "#C4C2BF",
                  fontWeight: 500,
                }}
              >
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Disciplines */}
      <section style={{ padding: "6rem 8vw 10rem" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#2A2A2A",
            marginBottom: "3rem",
          }}
        >
          Disciplines
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {DISCIPLINES.map((d, i) => (
            <motion.div
              key={d.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "5rem 1fr",
                gap: "3rem",
                paddingBottom: i < DISCIPLINES.length - 1 ? "3rem" : 0,
                borderBottom: i < DISCIPLINES.length - 1 ? "1px solid #181818" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: "#4A9EFF",
                  paddingTop: "0.2rem",
                  opacity: 0.7,
                }}
              >
                {d.code}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2rem",
                    fontWeight: 400,
                    color: "#F2F0ED",
                    marginBottom: "0.75rem",
                  }}
                >
                  {d.title}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "0.9rem",
                    color: "#6B6B6B",
                    lineHeight: 1.7,
                    maxWidth: "55ch",
                  }}
                >
                  {d.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div
        style={{
          padding: "3rem 8vw",
          borderTop: "1px solid #1A1A1A",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link href="/ride" data-hover style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#3D3D3D",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F2F0ED" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#3D3D3D" }}
          >
            Next: Ride →
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
