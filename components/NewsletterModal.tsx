"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { validateEmail } from "@/utils/formValidation"

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Show modal after 30 seconds on home page
  useEffect(() => {
    setHydrated(true)
    const hasSeenModal = localStorage.getItem("newsletter-modal-seen")
    if (!hasSeenModal) {
      const timer = setTimeout(() => setIsOpen(true), 30000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Email is required")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      localStorage.setItem("newsletter-modal-seen", "true")

      setTimeout(() => {
        setIsOpen(false)
        setEmail("")
        setIsSubmitted(false)
      }, 2000)
    } catch (err) {
      setError("Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!hydrated) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.7)",
              zIndex: 1000,
              pointerEvents: "all",
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1001,
              maxWidth: "500px",
              width: "90%",
              background: "linear-gradient(135deg, rgba(14, 14, 14, 0.95) 0%, rgba(24, 24, 24, 0.95) 100%)",
              border: "1px solid rgba(200, 169, 110, 0.3)",
              borderRadius: "12px",
              padding: "2.5rem",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7)",
              pointerEvents: "all",
            }}
          >
            {/* Close button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "32px",
                height: "32px",
                background: "rgba(200, 169, 110, 0.1)",
                border: "1px solid rgba(200, 169, 110, 0.3)",
                borderRadius: "50%",
                color: "#C8A96E",
                fontSize: "1.2rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200, 169, 110, 0.2)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(200, 169, 110, 0.1)"
              }}
            >
              ×
            </motion.button>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  style={{ fontSize: "3rem" }}
                >
                  ✓
                </motion.div>
                <h3 style={{ fontSize: "1.5rem", color: "#10B981", fontFamily: "var(--font-serif)" }}>
                  Welcome!
                </h3>
                <p style={{ color: "#9A9A9A" }}>Check your email for confirmation.</p>
              </motion.div>
            ) : (
              <>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "var(--font-serif)",
                    marginBottom: "0.5rem",
                    color: "#F2F0ED",
                  }}
                >
                  Join the Newsletter
                </h3>
                <p
                  style={{
                    color: "#9A9A9A",
                    marginBottom: "1.5rem",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  Get updates on new projects, insights, and creative work. No spam, I promise.
                </p>

                <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (error) setError("")
                      }}
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "rgba(30, 30, 30, 0.6)",
                        border: `1px solid ${error ? "#F43F5E" : "#2A2A2A"}`,
                        borderRadius: "6px",
                        color: "#F2F0ED",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        transition: "all 0.3s ease",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#C8A96E"
                        e.currentTarget.style.background = "rgba(40, 40, 40, 0.8)"
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = error ? "#F43F5E" : "#2A2A2A"
                        e.currentTarget.style.background = "rgba(30, 30, 30, 0.6)"
                      }}
                    />
                    {error && <p style={{ color: "#F43F5E", fontSize: "0.8rem", marginTop: "0.3rem" }}>{error}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                    whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                    style={{
                      padding: "0.75rem",
                      background: "linear-gradient(135deg, #C8A96E, #4A9EFF)",
                      color: "#060606",
                      border: "none",
                      borderRadius: "6px",
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      opacity: isSubmitting ? 0.7 : 1,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </motion.button>

                  <p style={{ color: "#6B6B6B", fontSize: "0.75rem", textAlign: "center" }}>
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
