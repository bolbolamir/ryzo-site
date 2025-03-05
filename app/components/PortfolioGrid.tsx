"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Visual Search",
    description: "Customers can describe what they're looking for and our AI finds matching products",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Features",
    color: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    title: "Image Upload",
    description: "Upload an image to find similar products in your store catalog",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Features",
    color: "from-pink-500 to-red-500",
  },
  {
    id: 3,
    title: "Smart Filters",
    description: "Intelligent filtering system that adapts to your store's product categories",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Features",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Track search performance and gain insights into customer behavior",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Dashboard",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 5,
    title: "Typo Resistance",
    description: "Intelligent algorithm that handles typos and similar words for better results",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Features",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    title: "Smart Suggestions",
    description: "Context-aware search suggestions that predict customer intent",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Features",
    color: "from-orange-500 to-red-500",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              How It Works
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Explore the powerful features of Ryzo Search</p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-800"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 z-10`}></div>
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h3 className="text-3xl font-bold text-white text-center px-4">{project.title}</h3>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 z-30"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-6 text-lg">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

