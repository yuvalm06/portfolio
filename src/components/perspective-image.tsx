"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useViewMode } from "@/components/view-mode-provider"
import type { Perspective } from "@/lib/view-mode"

const IMAGES: Record<Perspective, { src: string; alt: string }> = {
  build:  { src: "/Scooter/IMG_9068.jpg", alt: "E-scooter prototype build" },
  design: { src: "/qfsae-car.png",        alt: "QFSAE formula car CAD"     },
  scale:  { src: "/Campus%20Cravings/cc-system-2.png", alt: "Campus Cravings automation system" },
}

// Identical timing to the hero headline transition
const TRANSITION = { duration: 0.2, ease: "easeOut" } as const

export function PerspectiveImage() {
  const { mode } = useViewMode()

  return (
    <div className="hidden lg:block w-[420px] shrink-0 -mr-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={TRANSITION}
          className="overflow-hidden rounded-2xl"
        >
          <Image
            src={IMAGES[mode].src}
            alt={IMAGES[mode].alt}
            width={420}
            height={280}
            className="h-auto w-full object-contain opacity-80 dark:opacity-95 brightness-100 dark:brightness-110 transition-[filter,opacity] duration-500"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
