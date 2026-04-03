"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060606",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0 8vw",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#9A9A9A",
          marginBottom: "1.5rem",
        }}
      >
        404
      </motion.div>

      <div style={{ overflow: "hidden" }}>
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(4rem, 9vw, 12rem)",
            fontWeight: 300,
            letterSpacing: "-0.025em",
            lineHeight: 0.9,
            color: "#1A1A1A",
            marginBottom: "3rem",
          }}
        >
          Not
          <br />
          Found.
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link
          href="/"
          data-hover
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3D3D3D",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#F2F0ED" }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#3D3D3D" }}
        >
          {"← Return to Origin"}
        </Link>
      </motion.div>
    </div>
  )
}
