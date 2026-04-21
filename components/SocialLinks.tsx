"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
  hoverText?: string
}

const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "GitHub", color: "#F2F0ED", hoverText: "Code" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "LinkedIn", color: "#4A9EFF", hoverText: "Connect" },
  { name: "Twitter", url: "https://twitter.com", icon: "Twitter", color: "#1DA1F2", hoverText: "Ideas" },
  { name: "Email", url: "mailto:shreyas@example.com", icon: "✉️", color: "#C8A96E", hoverText: "Reach Out" },
]

export default function SocialLinks() {
  const [easterEggClicks, setEasterEggClicks] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setHydrated(true)
    return () => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
    }
  }, [])

  const handleEasterEgg = () => {
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
    setEasterEggClicks((prev) => prev + 1)
    if (easterEggClicks === 2) {
      setShowEasterEgg(true)
      setEasterEggClicks(0)
      clickTimeoutRef.current = setTimeout(() => setShowEasterEgg(false), 3000)
    } else {
      clickTimeoutRef.current = setTimeout(() => setEasterEggClicks(0), 500)
    }
  }

  if (!hydrated) return null

  return (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      {SOCIALS.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          data-hover
          data-magnetic
          onClick={handleEasterEgg}
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: `${social.color}15`,
            border: `1px solid ${social.color}40`,
            color: social.color,
            fontSize: "1.1rem",
            cursor: "none",
            transition: "all 0.3s ease",
            textDecoration: "none",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = `${social.color}30`
            el.style.borderColor = social.color
            el.style.boxShadow = `0 0 15px ${social.color}40`
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = `${social.color}15`
            el.style.borderColor = `${social.color}40`
            el.style.boxShadow = "none"
          }}
          title={social.hoverText || social.name}
        >
          {social.icon}
        </motion.a>
      ))}

      {/* Easter egg message */}
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #C8A96E, #4A9EFF)",
            color: "#060606",
            padding: "0.75rem 1rem",
            borderRadius: "6px",
            fontSize: "0.9rem",
            fontWeight: 600,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            fontFamily: "var(--font-serif)",
            marginBottom: "0.5rem",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          You found the easter egg! 🎮
        </motion.div>
      )}
    </div>
  )
}
