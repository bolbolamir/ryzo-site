"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Search, Upload, Filter, Sparkles, BarChart3 } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Power of AI for Ryzo Visual Search",
    description:
      "Our AI-powered app allows customers to find products by simply describing their appearance. Instantly matching their words to your product images, it makes shopping effortless and delightful.",
    image: "https://cdn.shopify.com/app-store/listing_images/13c3194ffbb0fa55c6500b556c4b5e1b/desktop_screenshot/CLq7gbr56IkDEAE=.png?height=900&width=1600 1x, https://cdn.shopify.com/app-store/listing_images/13c3194ffbb0fa55c6500b556c4b5e1b/desktop_screenshot/CLq7gbr56IkDEAE=.png?height=1800&width=3200 2x",
    icon: <Search className="w-12 h-12 text-purple-500" />,
  },
  {
    id: 2,
    name: "Image Search with Ryzo Lenz",
    description:
      "Our advanced AI-powered model enables customers to upload product images and find matches in your catalog. This cutting-edge technology ensures no product goes unnoticed.",
    image: "https://cdn.shopify.com/app-store/listing_images/13c3194ffbb0fa55c6500b556c4b5e1b/desktop_screenshot/CMnW97n56IkDEAE=.png?height=900&width=1600 1x, https://cdn.shopify.com/app-store/listing_images/13c3194ffbb0fa55c6500b556c4b5e1b/desktop_screenshot/CMnW97n56IkDEAE=.png?height=1800&width=3200 2x",
    icon: <Upload className="w-12 h-12 text-pink-500" />,
  },
  {
    id: 3,
    name: "Customized Filters",
    description:
      "Enhance your customers' shopping experience with customized filters by vendor, category, price, and more. Our advanced detection simplifies the search process, helping customers quickly find the perfect products.",
    image: "https://cdn.shopify.com/app-store/listing_images/13c3194ffbb0fa55c6500b556c4b5e1b/desktop_screenshot/CPDBmLr56IkDEAE=.png?height=900&width=1600 1x, https://cdn.shopify.com/app-store/listing_images/13c3194ffbb0fa55c6500b556c4b5e1b/desktop_screenshot/CPDBmLr56IkDEAE=.png?height=1800&width=3200 2x",
    icon: <Filter className="w-12 h-12 text-green-500" />,
  },

  {
    id: 5,
    name: "Enhanced Analytics Dashboard",
    description:
      "Gain deep insights into customer search patterns, popular keywords, and frequently missed products. Use this data to optimize your store layout, improve SEO, and boost overall sales performance.",
    image: "https://cdn.shopify.com/app-store/listing_images/13c3194ffbb0fa55c6500b556c4b5e1b/desktop_screenshot/CPS1jLr56IkDEAE=.png?height=900&width=1600 1x, https://cdn.shopify.com/app-store/listing_images/13c3194ffbb0fa55c6500b556c4b5e1b/desktop_screenshot/CPS1jLr56IkDEAE=.png?height=1800&width=3200 2x",
    icon: <BarChart3 className="w-12 h-12 text-indigo-500" />,
  },
]

export default function ProductShowcase() {
  const [currentProduct, setCurrentProduct] = useState(0)

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-foreground">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Advanced Features
          </span>
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct}
              className="flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">{products[currentProduct].icon}</div>
                  <h3 className="text-3xl font-bold text-foreground">{products[currentProduct].name}</h3>
                </div>
                <p className="text-xl text-muted-foreground mb-8">{products[currentProduct].description}</p>
                <button className="apple-button">Learn More</button>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
                <Image
                  src={products[currentProduct].image || "/placeholder.svg"}
                  alt={products[currentProduct].name}
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-lg relative z-10"
                />
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            onClick={prevProduct}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            onClick={nextProduct}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProduct(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentProduct === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

