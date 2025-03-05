"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ryzo Search</span>
            <img className="h-8 w-auto" src="https://cdn.shopify.com/app-store/listing_images/13c3194ffbb0fa55c6500b556c4b5e1b/icon/CLaTjumI14kDEAE=.png" alt="Ryzo Search Logo" />
          </Link>
        </div>
        <div className="flex gap-x-8">
          <Link
            href="/features"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/support"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Support
          </Link>
        </div>
        <div className="flex flex-1 justify-end items-center gap-x-6">
          <Link href="/pricing">
            <Button variant="outline" className="hidden sm:inline-flex">
              View Plans
            </Button>
          </Link>
          <Link href="https://apps.shopify.com/ryzo-search" target="_blank" rel="noopener noreferrer">
            <Button className="hidden sm:inline-flex">Get Started</Button>
          </Link>
          {mounted && (
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}

