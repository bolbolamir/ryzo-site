"use client"

import { motion } from "framer-motion"
import { Search, Sparkles, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimateOnScroll from "./AnimateOnScroll"

import image from "./../../public/visual.webp"
import Image from "next/image"
export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative isolate overflow-hidden bg-background">
      {/* Colorful background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <AnimateOnScroll animation="slideUp">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
            <div className="flex items-center gap-x-4 mb-4">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="h-5 w-5 text-primary" />
              </motion.div>
              <motion.span
                className="rounded-full px-3 py-1 text-sm font-semibold text-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                AI-Powered Search
              </motion.span>
            </div>

            <motion.h1
              className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                Ryzo Search
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Advanced AI-powered visual and textual search for your Shopify store. Help customers find exactly what
              they're looking for with unprecedented accuracy.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="https://apps.shopify.com/ryzo-search" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Install on Shopify
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeIn" delay={0.3}>
          <motion.div
            className="mx-auto mt-16 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative">
                <Image
                  src={image}
                  alt="Ryzo Search dashboard"
                  width={600}
                  height={600}
                  className="w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
                />

              </div>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </div>
  )
}

