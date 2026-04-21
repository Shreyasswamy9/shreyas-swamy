"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

export default function ParticleEmitter() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [hydrated])

  useEffect(() => {
    if (!hydrated) return

    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: Date.now(),
        x: mousePos.x + (Math.random() - 0.5) * 60,
        y: mousePos.y + (Math.random() - 0.5) * 60,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 1.5 + 1,
        delay: Math.random() * 0.3,
        color: ["#C8A96E", "#4A9EFF", "#10B981", "#8B5CF6", "#F43F5E"][
          Math.floor(Math.random() * 5)
        ],
      }

      setParticles((prev) => [...prev, newParticle])

      // Remove particle after animation completes
      setTimeout(
        () => setParticles((prev) => prev.filter((p) => p.id !== newParticle.id)),
        (newParticle.delay + newParticle.duration + 0.5) * 1000
      )
    }, 100)

    return () => clearInterval(interval)
  }, [mousePos, hydrated])

  if (!hydrated) return null

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 25,
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0.6,
            scale: 1,
          }}
          animate={{
            x: particle.x + (Math.random() - 0.5) * 80,
            y: particle.y - 60 * Math.random(),
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  )
}
