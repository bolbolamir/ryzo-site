"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Users, Search, ShoppingBag } from "lucide-react"

const stats = [
  {
    value: 28,
    label: "Increase in Conversions",
    icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
    suffix: "%",
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    value: 3,
    label: "Million Queries Monthly",
    icon: <Search className="w-8 h-8 text-pink-500" />,
    suffix: "M+",
    color: "from-pink-500/20 to-red-500/20",
  },
  {
    value: 44,
    label: "Visual Search Increase",
    icon: <Users className="w-8 h-8 text-blue-500" />,
    suffix: "%",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    value: 15,
    label: "Higher Average Order Value",
    icon: <ShoppingBag className="w-8 h-8 text-green-500" />,
    suffix: "%",
    color: "from-green-500/20 to-teal-500/20",
  },
]

export default function StatisticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Proven Results
          </span>
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-xl shadow-lg p-6 border border-border"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4`}>{stat.icon}</div>
              <div className="flex items-baseline">
                <motion.span
                  className="text-4xl font-bold text-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                  <Counter from={0} to={stat.value} duration={2} delay={0.5 + index * 0.1} />
                </motion.span>
                <span className="text-2xl font-bold text-foreground ml-1">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
}

function Counter({ from, to, duration = 2, delay = 0 }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true })

  // For decimal numbers
  const isDecimal = !Number.isInteger(to)
  const decimals = isDecimal ? (to.toString().split(".")[1] || "").length : 0

  // Animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay,
      },
    },
  }

  // Counter animation
  const counterVariants = {
    hidden: { value: from },
    visible: {
      value: to,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.span ref={nodeRef} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants}>
      <motion.span
        variants={counterVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        // @ts-ignore - custom prop for framer-motion
        custom={to}
        // Format the number as it animates
        onUpdate={(latest) => {
          if (nodeRef.current && latest.value !== undefined) {
            nodeRef.current.textContent = isDecimal
              ? latest.value.toFixed(decimals)
              : Math.round(latest.value).toString()
          }
        }}
      />
    </motion.span>
  )
}

