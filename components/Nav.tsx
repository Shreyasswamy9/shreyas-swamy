"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "1.75rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pointerEvents: "none",
      }}
    >
      <Link
        href="/"
        data-hover
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#6B6B6B",
          textDecoration: "none",
          pointerEvents: "all",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "#F2F0ED" }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "#6B6B6B" }}
      >
        SS
      </Link>

      <div style={{ display: "flex", gap: "2.5rem", pointerEvents: "all" }}>
        {[
          { label: "Football", href: "/football" },
          { label: "Build", href: "/build" },
          { label: "Ride", href: "/ride" },
        ].map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            data-hover
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6B6B6B",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F2F0ED" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#6B6B6B" }}
          >
            {label}
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}
