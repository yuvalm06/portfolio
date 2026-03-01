"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroVisualization() {
  return (
    <motion.div
      className="hidden lg:flex w-80 shrink-0 items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      aria-hidden
    >
      <Image
        src="/qfsae-car.png"
        alt=""
        width={400}
        height={300}
        className="w-full h-auto object-contain opacity-80 dark:opacity-60"
        priority
      />
    </motion.div>
  )
}
