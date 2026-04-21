import { useEffect, useState } from "react"

export type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Check localStorage and system preference
    const stored = localStorage.getItem("theme") as Theme | null
    const preferred =
      window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
    const initial = stored || preferred

    setTheme(initial)
    document.documentElement.setAttribute("data-theme", initial)
    setIsMounted(true)
  }, [])

  const toggleTheme = (newTheme?: Theme) => {
    const next = newTheme || (theme === "dark" ? "light" : "dark")
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.setAttribute("data-theme", next)

    // Update CSS variables dynamically
    if (next === "light") {
      document.documentElement.style.setProperty("--color-void", "#F5F5F5")
      document.documentElement.style.setProperty("--color-surface", "#FFFFFF")
      document.documentElement.style.setProperty("--color-surface-2", "#F9F9F9")
      document.documentElement.style.setProperty("--color-body", "#1A1A1A")
      document.documentElement.style.setProperty("--color-bright", "#000000")
      document.documentElement.style.setProperty("--color-muted", "#888888")
    } else {
      document.documentElement.style.setProperty("--color-void", "#060606")
      document.documentElement.style.setProperty("--color-surface", "#0E0E0E")
      document.documentElement.style.setProperty("--color-surface-2", "#181818")
      document.documentElement.style.setProperty("--color-body", "#C4C2BF")
      document.documentElement.style.setProperty("--color-bright", "#F2F0ED")
      document.documentElement.style.setProperty("--color-muted", "#6B6B6B")
    }
  }

  return { theme, toggleTheme, isMounted }
}
