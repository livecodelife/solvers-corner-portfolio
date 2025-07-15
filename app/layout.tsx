import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Solvers Corner - Caleb Cowen",
  description:
    "Explore 8+ years of solving complex problems through GenAI innovation, cross-functional leadership, and hands-on engineering by Caleb Cowen",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="http://localhost:3000/script.js"
          data-website-id="c8748051-d1ec-4034-bd59-a23bd4e8dfb1"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
