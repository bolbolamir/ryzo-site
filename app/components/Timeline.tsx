"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

// Update the timeline events to match Ryzo Search history
const timelineEvents = [
  {
    feature: "AI-Powered Text Search",
    title: "Revolutionizing Traditional Search",
    description: "Our core feature uses advanced natural language processing to understand customer queries better.",
    details:
      "Unlike basic keyword matching, our AI-powered text search interprets context, synonyms, and intent, improving search relevance by up to 40%. This ensures customers find exactly what they're looking for, even with vague or complex queries.",
  },
  {
    feature: "Visual Search (Ryzo Lenz)",
    title: "Search Beyond Words",
    description: "Allow customers to upload images and discover visually similar products.",
    details:
      "Ryzo Lenz leverages cutting-edge computer vision technology to enable image-based searches. Early adopters reported a 23% increase in conversion rates, as shoppers could effortlessly find products that matched their preferences without needing precise descriptions.",
  },
  {
    feature: "Comprehensive Analytics Dashboard",
    title: "Data-Driven Insights for Your Store",
    description: "Gain actionable insights into customer search behavior and optimize your listings.",
    details:
      "Our analytics dashboard provides detailed metrics such as popular search terms, abandoned searches, and product discovery trends. These insights empower store owners to refine their inventory, improve SEO, and enhance overall customer satisfaction.",
  },
  {
    feature: "Multi-Modal AI Model",
    title: "The Future of E-commerce Search",
    description: "Combine text and visual understanding for unparalleled accuracy.",
    details:
      "Our state-of-the-art multi-modal AI model processes both textual descriptions and visual elements simultaneously. This hybrid approach delivers the most accurate and relevant search results, setting a new standard in e-commerce technology.",
  },
  {
    feature: "Seamless Shopify Integration",
    title: "Built Specifically for Shopify Stores",
    description: "Enjoy effortless setup and deep integration with Shopify's ecosystem.",
    details:
      "As an official Shopify Partner, we've designed Ryzo Search to work seamlessly with Shopify stores. Our app integrates directly into your admin panel, offering real-time updates, automatic indexing, and easy customization—all without requiring technical expertise.",
  },
  {
    feature: "Customizable Search Experience",
    title: "Tailor the Search Bar to Your Brand",
    description: "Design a search bar that aligns perfectly with your store's aesthetics.",
    details:
      "With our drag-and-drop editor, you can customize every aspect of the search bar—from colors and fonts to layout and functionality. Add custom CSS if needed, ensuring your search experience reflects your unique brand identity.",
  },
];
const FlowerIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Features Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">The evolution of Ryzo</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"
            style={{ scaleY: scaleX }}
          />

          {/* Flower icon */}
          <motion.div
            className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <FlowerIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
          </motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.feature}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

