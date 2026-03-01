"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  baseDescription: string
  focus: string
  tags: string[]
  links: { label: string; href: string }[]
  highlightTags?: string[]
  isOpen?: boolean
  onClick?: () => void
}

export function ProjectCard({
  title,
  baseDescription,
  focus,
  tags,
  links,
  highlightTags = [],
  isOpen = false,
  onClick,
}: ProjectCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`group relative cursor-pointer rounded-2xl border bg-white/70 backdrop-blur transition-all dark:bg-neutral-950/60 ${
        isOpen
          ? "border-neutral-400 shadow-lg dark:border-neutral-600"
          : "border-neutral-200/70 hover:border-neutral-300 dark:border-neutral-800/70 dark:hover:border-neutral-700"
      }`}
    >
      {/* Hover hint */}
      <span className="pointer-events-none absolute bottom-4 right-5 font-mono text-[10px] text-neutral-400 opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:text-neutral-600">
        {isOpen ? "click to close" : "click for details →"}
      </span>

      <div className="p-6">
        <div className="text-lg font-semibold">{title}</div>

        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {baseDescription}
        </p>

        {/* Focus line */}
        <AnimatePresence mode="wait">
          <motion.p
            key={focus}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="mt-3 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400"
          >
            <span className="font-mono text-neutral-400 dark:text-neutral-500">Focus </span>
            {focus}
          </motion.p>
        </AnimatePresence>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => {
            const isHighlighted = highlightTags.includes(t)
            return (
              <motion.span
                key={t}
                animate={
                  isHighlighted
                    ? { borderColor: "rgb(23 23 23)", color: "rgb(23 23 23)" }
                    : { borderColor: "rgb(229 229 229)", color: "rgb(115 115 115)" }
                }
                transition={{ duration: 0.2 }}
                className={`rounded-full border bg-white px-2.5 py-1 text-xs dark:bg-neutral-950 ${
                  isHighlighted
                    ? "font-medium dark:border-neutral-400 dark:text-neutral-100"
                    : "dark:border-neutral-700 dark:text-neutral-300"
                }`}
              >
                {t}
              </motion.span>
            )
          })}
        </div>

        {links.filter((l) => l.href !== "#").length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {links
              .filter((l) => l.href !== "#")
              .map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm text-neutral-700 underline-offset-4 hover:underline dark:text-neutral-200"
                >
                  {l.label}
                </a>
              ))}
          </div>
        )}
      </div>
    </Card>
  )
}
