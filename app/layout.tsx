import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"], variable: "--font-bebas-neue" })

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
      </head>
      <body className={`${inter.className} ${bebasNeue.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
