import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rohini Sondole — Data & ML Engineer",
  description:
    "Data & Machine Learning Engineer with 6+ years of experience building cloud-scale data platforms, ML systems, and real-time pipelines. MS Business Analytics at UT Austin McCombs.",
  keywords: [
    "Data Engineer",
    "ML Engineer",
    "Machine Learning",
    "AWS",
    "Azure",
    "Kubernetes",
    "Python",
    "Snowflake",
    "Databricks",
    "UT Austin",
  ],
  authors: [{ name: "Rohini Sondole", url: "https://linkedin.com/in/rohini-sondole" }],
  creator: "Rohini Sondole",
  openGraph: {
    title: "Rohini Sondole — Data & ML Engineer",
    description:
      "6+ years building cloud-scale data platforms and ML systems. Currently ML Engineering Intern at Cisco. MS Business Analytics at UT Austin.",
    url: "https://rohini-sondole.vercel.app",
    siteName: "Rohini Sondole Portfolio",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="msapplication-navbutton-color" content="#1a1a2e" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`} style={{ backgroundColor: '#1a1a2e' }}>
        <ScrollToTop />
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
