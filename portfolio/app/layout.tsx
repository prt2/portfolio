import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio - prt2.dev",
  description: "Personal portfolio website showcasing my work and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-dark-bg text-white font-mono">{children}</body>
    </html>
  )
}
