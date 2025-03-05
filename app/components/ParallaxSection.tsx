"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, Zap, BarChart3 } from "lucide-react"

export default function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Transform values for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-secondary/30">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
          style={{ y: y3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" style={{ opacity, scale }}>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Transform Your Shopify Store
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ryzo Search uses advanced AI to understand exactly what your customers are looking for, even when they don't
            know the exact words to use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Search className="w-10 h-10 text-purple-400" />}
            title="Smart Search"
            description="AI-powered search that understands customer intent and handles typos with ease."
            delay={0.1}
            scrollYProgress={scrollYProgress}
          />
          <FeatureCard
            icon={<Zap className="w-10 h-10 text-pink-400" />}
            title="Lightning Fast"
            description="Instant results that keep customers engaged and reduce bounce rates."
            delay={0.3}
            scrollYProgress={scrollYProgress}
          />
          <FeatureCard
            icon={<BarChart3 className="w-10 h-10 text-blue-400" />}
            title="Deep Analytics"
            description="Understand search patterns and optimize your store for better conversions."
            delay={0.5}
            scrollYProgress={scrollYProgress}
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  scrollYProgress: any
}

function FeatureCard({ icon, title, description, delay, scrollYProgress }: FeatureCardProps) {
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [0, 1, 0])

  return (
    <motion.div
      className="bg-card/50 backdrop-blur-lg p-8 rounded-xl border border-border"
      style={{ y, opacity }}
      transition={{ delay }}
    >
      <div className="rounded-full w-16 h-16 flex items-center justify-center bg-background/50 mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

