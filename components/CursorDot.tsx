"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CursorDot() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  // Offset centering via translateX/Y instead of useTransform (saves 2 computed motion values)
  const springX = useSpring(rawX, { stiffness: 500, damping: 40, mass: 0.5 })
  const springY = useSpring(rawY, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    let rafId: number | null = null
    let pendingX = -100
    let pendingY = -100

    const onMove = (e: MouseEvent) => {
      pendingX = e.clientX
      pendingY = e.clientY
      setVisible(true)
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          rawX.set(pendingX)
          rawY.set(pendingY)
          rafId = null
        })
      }
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovering(!!(el.closest("a") || el.closest("button") || el.closest("[data-hover]")))
    }

    const onLeave = () => setVisible(false)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    document.documentElement.addEventListener("mouseleave", onLeave)

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      document.documentElement.removeEventListener("mouseleave", onLeave)
    }
  }, [rawX, rawY])

  return (
    <motion.div
      className={`cursor-dot ${hovering ? "hovering" : ""}`}
      style={{ x: springX, y: springY, translateX: -3.5, translateY: -3.5 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    />
  )
}
