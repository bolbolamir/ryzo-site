"use client"

import type React from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

interface AnimateOnScrollProps {
  children: React.ReactNode
  animation?: "fadeIn" | "slideUp" | "scaleUp"
  duration?: number
  delay?: number
}

export default function AnimateOnScroll({
  children,
  animation = "fadeIn",
  duration = 0.5,
  delay = 0,
}: AnimateOnScrollProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants[animation]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

