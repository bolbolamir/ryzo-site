"use client"
import { motion } from "framer-motion"
import { Search, ImagePlus, Sparkles, MessageSquare, BarChart3, Zap } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"

const features = [
  {
    title: "AI-Powered Text Search",
    description: "Natural language processing that understands customer intent, even with typos or similar words.",
    icon: <Search className="w-12 h-12 text-purple-500" />,
    color: "bg-purple-500/10",
  },
  {
    title: "Visual Search with Ryzo Lenz",
    description: "Let customers upload images to find visually similar products in your catalog.",
    icon: <ImagePlus className="w-12 h-12 text-pink-500" />,
    color: "bg-pink-500/10",
  },
  {
    title: "Smart Suggestion Box",
    description: "Context-aware search suggestions that predict what customers are looking for as they type.",
    icon: <MessageSquare className="w-12 h-12 text-blue-500" />,
    color: "bg-blue-500/10",
  },
  {
    title: "Typo Resistance",
    description: "Intelligent algorithm that handles typos and similar words for better results.",
    icon: <Sparkles className="w-12 h-12 text-yellow-500" />,
    color: "bg-yellow-500/10",
  },
  {
    title: "Enhanced Analytics",
    description: "Detailed insights into search behavior to optimize your product listings and inventory.",
    icon: <BarChart3 className="w-12 h-12 text-green-500" />,
    color: "bg-green-500/10",
  },
  {
    title: "Lightning Fast Results",
    description: "Optimized for speed to keep customers engaged and reduce bounce rates.",
    icon: <Zap className="w-12 h-12 text-orange-500" />,
    color: "bg-orange-500/10",
  },
]

export default function ScrollRevealFeatures() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeIn">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Powerful Features That Convert
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Ryzo Search combines cutting-edge AI technology with user-friendly design to help your customers find
              exactly what they're looking for.
            </p>
          </motion.div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} animation="scaleUp" delay={index * 0.1}>
              <motion.div
                className="bg-card rounded-xl shadow-lg p-6 border border-border"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                <div className={`rounded-full w-16 h-16 flex items-center justify-center ${feature.color} mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

