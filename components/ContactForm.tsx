"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { validateEmail, validateForm } from "@/utils/formValidation"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate form submission - in production, send to API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus("success")
      setSuccessMessage("Message sent! I'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      setSubmitStatus("error")
      setErrors({ submit: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      style={{
        padding: "6rem 8vw",
        background: "linear-gradient(180deg, rgba(244,63,94,0.02) 0%, transparent 100%)",
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
          Let's Connect
        </h2>
        <p style={{ color: "#9A9A9A", fontSize: "1rem", maxWidth: "600px" }}>
          Have a project in mind? Want to collaborate? I'd love to hear from you.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* Name field */}
        <div>
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#F2F0ED",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 600,
            }}
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "rgba(30, 30, 30, 0.5)",
              border: `1px solid ${errors.name ? "#F43F5E" : "#2A2A2A"}`,
              color: "#F2F0ED",
              borderRadius: "4px",
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
              e.currentTarget.style.borderColor = errors.name ? "#F43F5E" : "#2A2A2A"
              e.currentTarget.style.background = "rgba(30, 30, 30, 0.5)"
            }}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p style={{ color: "#F43F5E", fontSize: "0.8rem", marginTop: "0.3rem" }}>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#F2F0ED",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 600,
            }}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "rgba(30, 30, 30, 0.5)",
              border: `1px solid ${errors.email ? "#F43F5E" : "#2A2A2A"}`,
              color: "#F2F0ED",
              borderRadius: "4px",
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              transition: "all 0.3s ease",
              outline: "none",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#4A9EFF"
              e.currentTarget.style.background = "rgba(40, 40, 40, 0.8)"
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors.email ? "#F43F5E" : "#2A2A2A"
              e.currentTarget.style.background = "rgba(30, 30, 30, 0.5)"
            }}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p style={{ color: "#F43F5E", fontSize: "0.8rem", marginTop: "0.3rem" }}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject field */}
        <div>
          <label
            htmlFor="subject"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#F2F0ED",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 600,
            }}
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "rgba(30, 30, 30, 0.5)",
              border: `1px solid ${errors.subject ? "#F43F5E" : "#2A2A2A"}`,
              color: "#F2F0ED",
              borderRadius: "4px",
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              transition: "all 0.3s ease",
              outline: "none",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#10B981"
              e.currentTarget.style.background = "rgba(40, 40, 40, 0.8)"
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors.subject ? "#F43F5E" : "#2A2A2A"
              e.currentTarget.style.background = "rgba(30, 30, 30, 0.5)"
            }}
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p style={{ color: "#F43F5E", fontSize: "0.8rem", marginTop: "0.3rem" }}>
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message field */}
        <div>
          <label
            htmlFor="message"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#F2F0ED",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 600,
            }}
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "rgba(30, 30, 30, 0.5)",
              border: `1px solid ${errors.message ? "#F43F5E" : "#2A2A2A"}`,
              color: "#F2F0ED",
              borderRadius: "4px",
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              transition: "all 0.3s ease",
              outline: "none",
              resize: "vertical",
              minHeight: "120px",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#8B5CF6"
              e.currentTarget.style.background = "rgba(40, 40, 40, 0.8)"
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors.message ? "#F43F5E" : "#2A2A2A"
              e.currentTarget.style.background = "rgba(30, 30, 30, 0.5)"
            }}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p style={{ color: "#F43F5E", fontSize: "0.8rem", marginTop: "0.3rem" }}>
              {errors.message}
            </p>
          )}
        </div>

        {/* Status messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: "1rem",
              background: "#10B98120",
              border: "1px solid #10B981",
              borderRadius: "4px",
              color: "#10B981",
              fontSize: "0.9rem",
            }}
          >
            ✓ {successMessage}
          </motion.div>
        )}
        {errors.submit && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: "1rem",
              background: "#F43F5E20",
              border: "1px solid #F43F5E",
              borderRadius: "4px",
              color: "#F43F5E",
              fontSize: "0.9rem",
            }}
          >
            {errors.submit}
          </motion.div>
        )}

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
          whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
          data-hover
          style={{
            padding: "1rem",
            background: "linear-gradient(135deg, #C8A96E, #4A9EFF)",
            color: "#060606",
            border: "none",
            borderRadius: "4px",
            fontFamily: "var(--font-serif)",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: isSubmitting ? "not-allowed" : "none",
            transition: "all 0.3s ease",
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </section>
  )
}
