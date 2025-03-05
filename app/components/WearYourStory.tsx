"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Search, Zap } from "lucide-react"

export default function WearYourStory() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <Zap className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-medium">Quick Setup</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Easy Shopify Integration
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Integrate our powerful search engine app with your Shopify store—no coding needed. Enhance your store's
            search capabilities, leading to increased purchases and higher customer satisfaction.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <ShoppingCart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Install from Shopify</h3>
              <p className="text-muted-foreground text-center">One-click installation from the Shopify App Store</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Search className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Configure Settings</h3>
              <p className="text-muted-foreground text-center">Customize search behavior to match your store's needs</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Go Live</h3>
              <p className="text-muted-foreground text-center">Instantly improve your store's search experience</p>
            </motion.div>
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://apps.shopify.com/ryzo-search"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button inline-flex items-center"
            >
              Install on Shopify
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

