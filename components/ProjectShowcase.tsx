"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  accent: string
  image?: string
  link?: string
}

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Ecommerce Platform",
    description: "Full-stack marketplace with real-time inventory management",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    accent: "#4A9EFF",
    link: "/build",
  },
  {
    id: "2",
    title: "Cybersecurity Dashboard",
    description: "Real-time threat detection and response system",
    tags: ["Node.js", "React", "AWS", "Security"],
    accent: "#F43F5E",
    link: "/build",
  },
  {
    id: "3",
    title: "AI-Powered Analytics",
    description: "Machine learning pipeline for predictive analysis",
    tags: ["Python", "ML", "TensorFlow", "Data Science"],
    accent: "#10B981",
    link: "/build",
  },
  {
    id: "4",
    title: "Portfolio Framework",
    description: "Cinematic portfolio website with premium interactions",
    tags: ["React 19", "Framer Motion", "Next.js 16", "Design"],
    accent: "#8B5CF6",
    link: "/build",
  },
  {
    id: "5",
    title: "Mobile Gaming App",
    description: "Cross-platform game with real-time multiplayer",
    tags: ["React Native", "Firebase", "Game Dev"],
    accent: "#C8A96E",
    link: "/play",
  },
  {
    id: "6",
    title: "Music Production Tools",
    description: "Web-based DAW for collaborative music creation",
    tags: ["Web Audio API", "React", "Node.js"],
    accent: "#A0A0A0",
    link: "/sound",
  },
]

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      data-hover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        background: isHovered ? `${project.accent}15` : "rgba(30, 30, 30, 0.5)",
        borderColor: isHovered ? project.accent : `${project.accent}40`,
        boxShadow: isHovered ? `0 0 20px ${project.accent}40` : "none",
      }}
      style={{
        display: "block",
        padding: "1.5rem",
        borderRadius: "8px",
        border: `1px solid ${project.accent}40`,
        textDecoration: "none",
        cursor: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent line */}
      <motion.div
        animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "3px",
          width: "100%",
          background: project.accent,
          transformOrigin: "left",
        }}
      />

      <div style={{ paddingTop: "0.5rem" }}>
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: project.accent,
            fontFamily: "var(--font-serif)",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#C4C2BF",
            marginBottom: "1rem",
            lineHeight: 1.5,
          }}
        >
          {project.description}
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.3rem 0.7rem",
                fontSize: "0.75rem",
                background: `${project.accent}20`,
                color: project.accent,
                borderRadius: "4px",
                fontFamily: "var(--font-mono)",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function ProjectShowcase() {
  return (
    <section
      style={{
        padding: "6rem 8vw",
        background: "linear-gradient(180deg, rgba(200,169,110,0.02) 0%, transparent 100%)",
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
            background: "linear-gradient(135deg, #C8A96E, #4A9EFF, #10B981)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Projects & Systems
        </h2>
        <p style={{ color: "#9A9A9A", fontSize: "1rem", maxWidth: "600px" }}>
          Carefully crafted systems that combine aesthetic excellence with technical resilience.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
