"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useViewMode } from "@/components/view-mode-provider"
import { HERO_COPY } from "@/lib/view-mode"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HashLink } from "@/components/hash-link"

export function HeroSection() {
  const { mode } = useViewMode()
  const copy = HERO_COPY[mode]

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-28">
      <div className="max-w-2xl">
        <Badge variant="secondary" className="mb-6">
          Available for Summer 2026
        </Badge>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {copy.headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {copy.subline}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <HashLink href="#projects">View projects</HashLink>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume">Resume</a>
          </Button>
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-200 bg-white/70 p-5 text-sm text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-200">
          <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400">~/now</div>
          <div className="mt-2">
            Building: FSAE drivetrain work • automation systems • product design • food delivery solution • design reliability OS
          </div>
        </div>
      </div>
    </section>
  )
}
