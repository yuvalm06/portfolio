"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Project } from "@/lib/projects"

export function ProjectDetailsPanel({ project }: { project: Project }) {
  const [zoomed, setZoomed] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <motion.div
        className="col-span-full overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="pb-2 pt-0">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
            <div className="grid gap-8 md:grid-cols-2">

              {/* Left: role + details + outcomes */}
              <div>
                {project.role && (
                  <p className="mb-5 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                    {project.role}
                  </p>
                )}

                <ul className="space-y-3">
                  {project.details.map((d, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="mt-0.5 shrink-0 font-mono text-[10px] tabular-nums text-neutral-400 dark:text-neutral-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>

                {project.outcomes && project.outcomes.length > 0 && (
                  <div className="mt-6">
                    <div className="mb-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                      outcomes
                    </div>
                    <ul className="space-y-2">
                      {project.outcomes.map((o, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="mt-0.5 shrink-0 text-neutral-400 dark:text-neutral-600">→</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right: media or placeholder */}
              <div>
                {project.media.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {project.media.map((m, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <img
                          src={m.src}
                          alt={m.alt}
                          onMouseEnter={() => setZoomed(m)}
                          onMouseLeave={() => setZoomed(null)}
                          className="w-full cursor-zoom-in rounded-lg object-cover transition-opacity hover:opacity-90"
                        />
                        {m.caption && (
                          <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
                            {m.caption}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-full min-h-[160px] flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700">
                    <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                      media coming soon
                    </span>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </motion.div>

      {/* Zoom overlay */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.img
              src={zoomed.src}
              alt={zoomed.alt}
              className="relative max-h-[80vh] max-w-[80vw] rounded-2xl object-contain shadow-2xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.15 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
