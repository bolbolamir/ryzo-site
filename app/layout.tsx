import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ryzo Search | AI-Powered Visual & Text Search for Shopify",
  description: "Advanced AI search solution for Shopify stores with visual and textual search capabilities",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        
        {/* Add prefetching hints */}
        <link rel="dns-prefetch" href="https://ryzo.tech" />
        <link rel="preconnect" href="https://ryzo.tech" crossOrigin="anonymous" />
        <link rel="prerender" href="https://ryzo.tech/demo" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}