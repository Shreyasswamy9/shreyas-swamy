"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, toggleTheme, isMounted } = useTheme()
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated || !isMounted) return null

  return (
    <motion.button
      onClick={() => toggleTheme()}
      className="theme-toggle"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      data-hover
      style={{
        position: "fixed",
        top: "1.75rem",
        right: "2.5rem",
        zIndex: 999,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "rgba(200, 169, 110, 0.1)",
        border: "1px solid rgba(200, 169, 110, 0.3)",
        cursor: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "all",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(200, 169, 110, 0.2)"
        e.currentTarget.style.borderColor = "rgba(200, 169, 110, 0.5)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(200, 169, 110, 0.1)"
        e.currentTarget.style.borderColor = "rgba(200, 169, 110, 0.3)"
      }}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 90 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ fontSize: "20px" }}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </motion.div>
    </motion.button>
  )
}
