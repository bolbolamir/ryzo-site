'use client'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
}

export function ScrollAnimation({ children, delay = 0 }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay
      }}
    >
      {children}
    </motion.div>
  )
}
