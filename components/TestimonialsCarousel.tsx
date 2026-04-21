"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface Testimonial {
  id: string
  author: string
  role: string
  content: string
  accent: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Coach Martinez",
    role: "Athletic Director",
    content:
      "Seven years, three surgeries, still performing at the highest level. That's resilience.",
    accent: "#C8A96E",
  },
  {
    id: "2",
    author: "Alex Chen",
    role: "CTO, TechCorp",
    content:
      "Systems that don't break. Shreyas builds infrastructure you can trust with your business.",
    accent: "#4A9EFF",
  },
  {
    id: "3",
    author: "Sarah J.",
    role: "Creative Director",
    content:
      "The intersection of art and technology—that's where Shreyas lives. Exceptional work.",
    accent: "#F43F5E",
  },
  {
    id: "4",
    author: "James Wu",
    role: "Security Lead",
    content:
      "Cybersecurity isn't just a skill for Shreyas—it's a philosophy. Every system is ironclad.",
    accent: "#10B981",
  },
  {
    id: "5",
    author: "Emma Davis",
    role: "Product Manager",
    content:
      "A builder who understands both the technical and human side. Rare combination.",
    accent: "#8B5CF6",
  },
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const current = TESTIMONIALS[index]
  const next = TESTIMONIALS[(index + 1) % TESTIMONIALS.length]
  const prev = TESTIMONIALS[(index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length]

  return (
    <section
      style={{
        padding: "6rem 8vw",
        background: "linear-gradient(180deg, rgba(139,92,246,0.02) 0%, transparent 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: "3rem" }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontFamily: "var(--font-serif)",
            marginBottom: "1rem",
            color: "#F2F0ED",
          }}
        >
          Testimonials
        </h2>
        <p style={{ color: "#9A9A9A", fontSize: "1rem", maxWidth: "600px" }}>
          Words from those who've worked with and experienced the journey.
        </p>
      </motion.div>

      <div
        style={{
          position: "relative",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
        }}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {/* Carousel background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${current.accent}10 0%, transparent 100%)`,
            borderRadius: "12px",
            border: `1px solid ${current.accent}40`,
            pointerEvents: "none",
          }}
        />

        {/* Main testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "relative",
              padding: "3rem",
              zIndex: 10,
              width: "100%",
            }}
          >
            {/* Quote mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: "6rem",
                fontFamily: "var(--font-serif)",
                color: current.accent,
                marginBottom: "1rem",
                lineHeight: 1,
              }}
            >
              "
            </motion.div>

            {/* Testimonial text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: "1.5rem",
                fontFamily: "var(--font-serif)",
                color: "#F2F0ED",
                marginBottom: "2rem",
                lineHeight: 1.6,
                maxWidth: "800px",
              }}
            >
              {current.content}
            </motion.p>

            {/* Author info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 style={{ color: current.accent, fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                {current.author}
              </h4>
              <p style={{ color: "#9A9A9A", fontSize: "0.9rem" }}>{current.role}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
            display: "flex",
            gap: "1rem",
            zIndex: 20,
          }}
        >
          <motion.button
            onClick={() => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            data-hover
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: `${current.accent}20`,
              border: `1px solid ${current.accent}`,
              color: current.accent,
              cursor: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${current.accent}40`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${current.accent}20`
            }}
          >
            ←
          </motion.button>

          <motion.button
            onClick={() => setIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            data-hover
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: `${current.accent}20`,
              border: `1px solid ${current.accent}`,
              color: current.accent,
              cursor: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${current.accent}40`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${current.accent}20`
            }}
          >
            →
          </motion.button>
        </div>

        {/* Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "2rem",
            display: "flex",
            gap: "0.5rem",
            zIndex: 20,
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              animate={{
                width: i === index ? "32px" : "8px",
                background: i === index ? current.accent : `${current.accent}40`,
              }}
              transition={{ duration: 0.3 }}
              data-hover
              style={{
                height: "8px",
                borderRadius: "4px",
                border: "none",
                cursor: "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
