"use client"

import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-4 text-foreground">About Ryzo Search</h3>
            <p className="text-muted-foreground mb-6">
              At Ryzo Search, we're revolutionizing e-commerce search with cutting-edge AI technology. Our team of data
              scientists, engineers, and e-commerce experts have created a solution that understands both visual and
              textual search queries with unprecedented accuracy.
            </p>
            <p className="text-muted-foreground">
              Our mission is to help Shopify store owners increase conversions, reduce bounce rates, and provide an
              exceptional shopping experience that keeps customers coming back for more.
            </p>
          </motion.div>
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-card rounded-lg transform -rotate-3 flex items-center justify-center">
              <p className="text-2xl font-bold text-foreground">Creative Team at Work</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

