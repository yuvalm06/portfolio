"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ImageIcon } from "lucide-react"

interface ProjectCardProps {
  title: string
  baseDescription: string
  focus: string
  tags: string[]
  links: { label: string; href: string }[]
  highlightTags?: string[]
}

export function ProjectCard({
  title,
  baseDescription,
  focus,
  tags,
  links,
  highlightTags = [],
}: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <Card
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="rounded-2xl border-neutral-200/70 bg-white/70 backdrop-blur overflow-hidden transition-shadow hover:shadow-lg dark:border-neutral-800/70 dark:bg-neutral-950/60"
    >
      {/* Folder panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="folder"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 110, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
            className="overflow-hidden"
          >
            <div className="flex gap-2 px-4 pt-4 pb-3 bg-neutral-50/90 dark:bg-neutral-900/60 border-b border-neutral-200/70 dark:border-neutral-800/70">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex-1 h-16 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 flex flex-col items-center justify-center gap-1"
                >
                  <ImageIcon className="h-4 w-4 text-neutral-300 dark:text-neutral-700" />
                  <span className="font-mono text-[10px] text-neutral-300 dark:text-neutral-700">
                    fig {i}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card content */}
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
                    : "dark:border-neutral-800 dark:text-neutral-400"
                }`}
              >
                {t}
              </motion.span>
            )
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-neutral-700 underline-offset-4 hover:underline dark:text-neutral-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Card>
  )
}
