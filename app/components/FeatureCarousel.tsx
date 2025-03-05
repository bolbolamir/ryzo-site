"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { Search, Eye, Zap, ShoppingCart, BarChart3, Sparkles, Upload, MessageSquare } from "lucide-react"

const features = [
  {
    title: "AI-Powered Search",
    description: "Advanced machine learning algorithms that understand customer intent.",
    icon: <Search className="w-10 h-10 text-purple-500" />,
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Visual Recognition",
    description: "Cutting-edge computer vision that identifies product attributes from images.",
    icon: <Eye className="w-10 h-10 text-pink-500" />,
    color: "from-pink-500/20 to-red-500/20",
  },
  {
    title: "Fast Performance",
    description: "Lightning-quick search results that keep customers engaged.",
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Shopify Integration",
    description: "Seamless integration with your existing Shopify store.",
    icon: <ShoppingCart className="w-10 h-10 text-green-500" />,
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Analytics & Insights",
    description: "Detailed reports on search behavior to optimize your store.",
    icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Typo Resistance",
    description: "Intelligent algorithm that handles typos and similar words for better results.",
    icon: <Sparkles className="w-10 h-10 text-indigo-500" />,
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Image Upload",
    description: "Let customers find products by uploading similar images.",
    icon: <Upload className="w-10 h-10 text-red-500" />,
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    title: "Smart Suggestions",
    description: "Context-aware search suggestions that predict customer intent.",
    icon: <MessageSquare className="w-10 h-10 text-teal-500" />,
    color: "from-teal-500/20 to-green-500/20",
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Why Choose Ryzo Search
          </span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Our powerful features help your customers find exactly what they're looking for, increasing conversions and
          customer satisfaction.
        </p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

          <motion.div ref={carousel} className="cursor-grab overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
              animate={controls}
              style={{ x }}
              onDragEnd={handleDragEnd}
              className="flex"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] h-[400px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-800"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color}`}>{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="mt-4">

                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">Swipe to see more features</p>
        </div>
      </div>
    </div>
  )
}

