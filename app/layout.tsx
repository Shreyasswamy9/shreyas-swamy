import type { Metadata } from "next"
import { Cormorant_Garamond, Space_Grotesk, Space_Mono } from "next/font/google"
import "./globals.css"
import CursorDot from "@/components/CursorDot"
import NoiseOverlay from "@/components/NoiseOverlay"
import SmoothScroll from "@/components/SmoothScroll"
import { TransitionProvider } from "@/components/TransitionProvider"
import CinematicIntro from "@/components/CinematicIntro"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shreyas Swamy",
  description: "Athlete. Builder. Creative Technologist.",
  openGraph: {
    title: "Shreyas Swamy",
    description: "Athlete. Builder. Creative Technologist.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>
        <CinematicIntro />
        <div className="cinematic-vignette" aria-hidden="true" />
        <NoiseOverlay />
        <CursorDot />
        <TransitionProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </TransitionProvider>
      </body>
    </html>
  )
}
