"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Zap, Filter, Type, Search, ImageIcon, ListFilter, RefreshCw, BarChart3, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Feature {
  name: string
  included: boolean
  icon: React.ReactNode
}

interface PricingTier {
  products: number
  price: number
  color: string
  gradient: string
  features: Feature[]
}

const tiers: PricingTier[] = [
  {
    products: 25,
    price: 0, // Will be displayed as "Free"
    color: "from-pink-500 to-rose-500",
    gradient: "hover:bg-gradient-to-r from-pink-500/10 to-rose-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 500,
    price: 5,
    color: "from-orange-500 to-amber-500",
    gradient: "hover:bg-gradient-to-r from-orange-500/10 to-amber-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 1000,
    price: 9, // Changed from 10
    color: "from-orange-500 to-amber-500",
    gradient: "hover:bg-gradient-to-r from-orange-500/10 to-amber-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 5500,
    price: 26, // Changed from 27
    color: "from-violet-500 to-purple-500",
    gradient: "hover:bg-gradient-to-r from-violet-500/10 to-purple-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 8500,
    price: 34, // Changed from 35
    color: "from-cyan-500 to-blue-500",
    gradient: "hover:bg-gradient-to-r from-cyan-500/10 to-blue-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 11000,
    price: 39, // Changed from 40
    color: "from-emerald-500 to-green-500",
    gradient: "hover:bg-gradient-to-r from-emerald-500/10 to-green-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 15500,
    price: 49, // Changed from 50
    color: "from-rose-500 to-pink-500",
    gradient: "hover:bg-gradient-to-r from-rose-500/10 to-pink-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 21000,
    price: 61, // Changed from 62
    color: "from-amber-500 to-orange-500",
    gradient: "hover:bg-gradient-to-r from-amber-500/10 to-orange-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 26000,
    price: 72, // Changed from 73
    color: "from-purple-500 to-violet-500",
    gradient: "hover:bg-gradient-to-r from-purple-500/10 to-violet-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 30500,
    price: 83, // Changed from 84
    color: "from-blue-500 to-cyan-500",
    gradient: "hover:bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 36000,
    price: 101, // Changed from 102
    color: "from-green-500 to-emerald-500",
    gradient: "hover:bg-gradient-to-r from-green-500/10 to-emerald-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 40500,
    price: 116, // Changed from 117
    color: "from-pink-500 to-rose-500",
    gradient: "hover:bg-gradient-to-r from-pink-500/10 to-rose-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
  {
    products: 45500,
    price: 133, // Changed from 134
    color: "from-orange-500 to-amber-500",
    gradient: "hover:bg-gradient-to-r from-orange-500/10 to-amber-500/10",
    features: [
      { name: "Unlimited Queries", included: true, icon: <Zap className="h-4 w-4" /> },
      { name: "Advanced Filters", included: true, icon: <Filter className="h-4 w-4" /> },
      { name: "Visual Text Search", included: true, icon: <Type className="h-4 w-4" /> },
      { name: "Semantic Text Search", included: true, icon: <Search className="h-4 w-4" /> },
      { name: "Image Search", included: true, icon: <ImageIcon className="h-4 w-4" /> },
      { name: "Search Suggestion Box", included: true, icon: <ListFilter className="h-4 w-4" /> },
      { name: "Real-time Sync", included: true, icon: <RefreshCw className="h-4 w-4" /> },
      { name: "Analytics", included: true, icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Priority Email Support", included: true, icon: <Mail className="h-4 w-4" /> },
    ],
  },
]

export default function PricingSlider() {
  const [selectedTierIndex, setSelectedTierIndex] = useState(0)
  const [sliderValue, setSliderValue] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Map slider value to tier index
  useEffect(() => {
    const tierIndex = Math.round((sliderValue / 100) * (tiers.length - 1))
    if (tierIndex !== selectedTierIndex) {
      setIsAnimating(true)
      setTimeout(() => {
        setSelectedTierIndex(tierIndex)
        setIsAnimating(false)
      }, 300)
    }
  }, [sliderValue, selectedTierIndex])

  const selectedTier = tiers[selectedTierIndex]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that's right for your store. All plans include all features.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex justify-between mb-2 text-sm font-medium text-muted-foreground">
            <span>{tiers[0].products} Products</span>
            <span>{tiers[Math.floor(tiers.length / 2)].products} Products</span>
            <span>{tiers[tiers.length - 1].products} Products</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number.parseInt(e.target.value))}
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, 
                rgb(236, 72, 153) 0%, 
                rgb(236, 72, 153) ${(sliderValue / 100) * 10}%, 
                rgb(249, 115, 22) ${(sliderValue / 100) * 10}%, 
                rgb(249, 115, 22) 100%)`,
            }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTierIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`max-w-3xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden border border-border ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div
              className={`p-8 bg-gradient-to-r ${selectedTier.color} text-white flex flex-col md:flex-row justify-between items-center`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {selectedTier.products} {selectedTier.products === 1 ? "Product" : "Products"}
                </h3>
                <p className="text-white/80">
                  Perfect for{" "}
                  {selectedTier.products <= 25 ? "small" : selectedTier.products <= 500 ? "medium" : "large"} stores
                </p>
              </div>
              <div className="text-center mt-4 md:mt-0">
                <div className="text-4xl font-bold">
                  {selectedTier.price === 0 ? "Free" : `$${selectedTier.price}`}
                  {selectedTier.price > 0 && <span className="text-lg font-normal">/month</span>}
                </div>
                <p className="text-white/80 text-sm">per store</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {selectedTier.features.map((feature) => (
                  <div key={feature.name} className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <div className="h-4 w-4 rounded-full bg-muted" />
                      )}
                    </div>
                    <div className="flex items-center">
                      {feature.icon && <span className="mr-2 text-primary">{feature.icon}</span>}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground line-through"}>
                        {feature.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="https://apps.shopify.com/ryzo-search">
                <Button className="apple-button w-full md:w-auto">
                  {selectedTier.price === 0 ? "Start for Free" : "Start Your Trial"}
                </Button>
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">No credit card required</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center text-muted-foreground">
          <p>
            Need more products?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Contact us
            </a>{" "}
            for custom enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  )
}

