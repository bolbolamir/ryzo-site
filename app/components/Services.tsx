"use client"

import { motion } from "framer-motion"
import { Search, ImagePlus, SlidersHorizontal, Sparkles, BarChart3, Lightbulb, Zap, Globe, UserCheck, MessageSquare, Repeat, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: <Search className="w-12 h-12 mb-4 text-purple-500" />,
    title: "Easy Shopify Integration",
    description:
      "Integrate our powerful search engine app with your Shopify store—no coding needed. Enhance your store's search capabilities instantly.",
  },
  {
    icon: <ImagePlus className="w-12 h-12 mb-4 text-pink-500" />,
    title: "AI Visual Search",
    description:
      "Our AI-powered app allows customers to find products by simply describing their appearance, making shopping effortless.",
  },
  {
    icon: <Zap className="w-12 h-12 mb-4 text-yellow-500" />,
    title: "Image Search with Ryzo Lenz",
    description:
      "Advanced AI model enables customers to upload product images and find matches in your catalog. No product goes unnoticed.",
  },
  {
    icon: <SlidersHorizontal className="w-12 h-12 mb-4 text-green-500" />,
    title: "Customized Filters",
    description:
      "Enhance shopping experience with filters by vendor, category, price, and more. Helps customers find perfect products effortlessly.",
  },
  {
    icon: <Sparkles className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Typo and Similar Word Resistance",
    description:
      "Our intelligent algorithm ensures that even if customers make typos or use similar words, they still get accurate results, maximizing conversions.",
  },
  {
    icon: <Lightbulb className="w-12 h-12 mb-4 text-orange-500" />,
    title: "Powerful Suggestion Box",
    description:
      "As customers type, our suggestion box provides smart, context-aware recommendations that predict what they're looking for.",
  },
  {
    icon: <BarChart3 className="w-12 h-12 mb-4 text-indigo-500" />,
    title: "Enhanced Analytics Dashboard",
    description:
      "Gain deep insights into customer search patterns, popular keywords, and frequently missed products to optimize your store.",
  },
  {
    icon: <Globe className="w-12 h-12 mb-4 text-teal-500" />,
    title: "Multilingual Support",
    description:
      "Expand your global reach with our app's ability to process queries in multiple languages, such as Spanish and French, without needing separate models. Perfect for international Shopify stores.",
  },
  {
    icon: <MessageSquare className="w-12 h-12 mb-4 text-lime-500" />,
    title: "Handling Complex Queries",
    description:
      "Accurately parse ambiguous or verbose queries, such as 'lightweight waterproof jacket for hiking in rainy weather,' and resolve ambiguities like 'apple' (fruit) vs. 'Apple' (brand) using context.",
  },
  {
    icon: <Repeat className="w-12 h-12 mb-4 text-rose-500" />,
    title: "Continuous Improvement",
    description:
      "Keep your search results relevant over time with adaptive learning that fine-tunes the model using new product data or search trends. User interactions, such as clicks and purchases, refine the model for better accuracy.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 mb-4 text-red-500" />,
    title: "Robust Security",
    description:
      "Ensure the safety and privacy of your customers' data with our top-notch security features, including encryption and regular security audits.",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Powerful Features
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card p-6 rounded-lg border-2 border-transparent hover:border-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-background mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

