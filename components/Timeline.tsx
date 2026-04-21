"use client"

import { motion } from "framer-motion"

interface TimelineEvent {
  year: string
  title: string
  description: string
  category: "sports" | "tech" | "education" | "personal"
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2017",
    title: "Football Journey Begins",
    description: "Received scholarship and started collegiate athlete career",
    category: "sports",
  },
  {
    year: "2018",
    title: "First System Built",
    description: "Created first full-stack application for inventory management",
    category: "tech",
  },
  {
    year: "2019",
    title: "CS & Cybersecurity Track",
    description: "Began dual focus on computer science and security systems",
    category: "education",
  },
  {
    year: "2020",
    title: "First Surgery - Still Here",
    description: "Major challenge overcome, continued growth and resilience",
    category: "personal",
  },
  {
    year: "2021",
    title: "Building Production Systems",
    description: "Deployed multiple systems serving millions of transactions",
    category: "tech",
  },
  {
    year: "2022",
    title: "Seven Years In Football",
    description: "Navigated three surgeries, still competing at peak performance",
    category: "sports",
  },
  {
    year: "2023",
    title: "Creative Evolution",
    description: "Integrated guitar, art, gaming, and music production into identity",
    category: "personal",
  },
  {
    year: "2024",
    title: "Next Generation Building",
    description: "Creating tools and frameworks for the next wave of creators",
    category: "tech",
  },
]

const CATEGORY_COLORS = {
  sports: "#C8A96E",
  tech: "#4A9EFF",
  education: "#10B981",
  personal: "#8B5CF6",
}

export default function Timeline() {
  return (
    <section
      style={{
        padding: "6rem 8vw",
        background: "linear-gradient(180deg, transparent 0%, rgba(74,158,255,0.02) 100%)",
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
          Timeline
        </h2>
        <p style={{ color: "#9A9A9A", fontSize: "1rem", maxWidth: "600px" }}>
          Seven years. One scholarship. Three surgeries. Always growing.
        </p>
      </motion.div>

      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        {/* Vertical timeline line */}
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            bottom: "0px",
            width: "2px",
            background: "linear-gradient(to bottom, #C8A96E, #4A9EFF, #10B981, #8B5CF6)",
          }}
        />

        {/* Timeline events */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {TIMELINE_EVENTS.map((event, index) => {
            const color = CATEGORY_COLORS[event.category]
            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{
                  paddingLeft: "2rem",
                  borderLeft: `2px solid ${color}`,
                  marginLeft: "-3px",
                }}
              >
                {/* Timeline dot */}
                <motion.div
                  style={{
                    position: "absolute",
                    left: "-10px",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: color,
                    border: "3px solid #060606",
                    boxShadow: `0 0 0 1px ${color}`,
                  }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Year and title */}
                <div>
                  <span
                    style={{
                      color: color,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    {event.year}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "var(--font-serif)",
                      marginTop: "0.3rem",
                      marginBottom: "0.5rem",
                      color: "#F2F0ED",
                    }}
                  >
                    {event.title}
                  </h3>
                  <p
                    style={{
                      color: "#9A9A9A",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      maxWidth: "500px",
                    }}
                  >
                    {event.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
