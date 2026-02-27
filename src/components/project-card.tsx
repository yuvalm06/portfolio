"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ImageIcon } from "lucide-react"

interface ProjectCardProps {
  title: string
  blurb: string
  tags: string[]
  links: { label: string; href: string }[]
  highlight?: string
}

export function ProjectCard({ title, blurb, tags, links, highlight }: ProjectCardProps) {
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
        <div className="flex items-start justify-between gap-2">
          <div className="text-lg font-semibold">{title}</div>
          <AnimatePresence mode="wait">
            {highlight ? (
              <motion.span
                key={highlight}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="mt-0.5 shrink-0 rounded-full bg-neutral-900 px-2 py-0.5 font-mono text-[10px] text-white dark:bg-neutral-100 dark:text-neutral-950"
              >
                {highlight}
              </motion.span>
            ) : (
              <div className="mt-0.5 shrink-0 text-neutral-300 dark:text-neutral-700 transition-colors group-hover:text-neutral-400">
                <ImageIcon className="h-4 w-4" />
              </div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {blurb}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200"
            >
              {t}
            </span>
          ))}
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
