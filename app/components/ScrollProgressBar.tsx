"use client"

import { motion, useScroll } from "framer-motion"

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

