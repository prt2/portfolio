import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pal Tilva | Portfolio - prt2.dev",
  description: "Portfolio of Pal Tilva",
  metadataBase: new URL("https://pal-tilva.vercel.app"),
  openGraph: {
    title: "Pal Tilva | Portfolio",
    description: "Portfolio of Pal Tilva",
    url: "https://pal-tilva.vercel.app",
    siteName: "prt2.dev",
    images: [
      {
        url: "/assets/og-image.png", // relative path works with metadataBase
        width: 1200,
        height: 630,
        alt: "Portfolio of Pal Tilva",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pal Tilva | Portfolio",
    description: "Portfolio of Pal Tilva",
    images: ["/assets/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-dark-bg text-white font-mono">
        {children}
      </body>
    </html>
  )
}
