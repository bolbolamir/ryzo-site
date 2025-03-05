"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"

const testimonials = [
  {
    quote:
      "Ryzo Search transformed our online store. The AI visual search feature has significantly increased our conversion rates and reduced bounce rates.",
    author: "Jane Cooper",
    position: "Owner, Fashion Boutique",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    highlight: "40% increase in conversions",
  },
  {
    quote:
      "Our customers love the image search feature. They can now upload pictures of products they like and find similar items in our store instantly.",
    author: "John Smith",
    position: "E-commerce Manager, Home Decor",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    highlight: "Image search is a game-changer",
  },
  {
    quote:
      "The customized filters and typo resistance have made a huge difference in our user experience. Our average order value has increased by 28% since implementing Ryzo Search.",
    author: "Emily Brown",
    position: "Digital Director, Electronics Store",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    highlight: "28% higher average order value",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fadeIn">
          <motion.h2
            className="text-5xl font-black mb-16 text-center text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              What Our Customers Say
            </span>
          </motion.h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.author} animation="slideUp" delay={index * 0.1}>
              <motion.div className="bg-card p-8 rounded-xl relative overflow-hidden" whileHover={{ y: -10 }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-full"></div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                  {testimonial.highlight}
                </div>

                <p className="text-muted-foreground mb-6 relative z-10">"{testimonial.quote}"</p>

                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4 border-2 border-primary/30"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

