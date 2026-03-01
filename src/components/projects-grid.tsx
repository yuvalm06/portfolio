"use client"

import { Fragment, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { useViewMode } from "@/components/view-mode-provider"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { ProjectDetailsPanel } from "@/components/project-details-panel"

const COLS = 3

export function ProjectsGrid() {
  const { mode } = useViewMode()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Group project indices into rows of COLS
  const rows: number[][] = []
  for (let i = 0; i < projects.length; i += COLS) {
    const row: number[] = []
    for (let j = i; j < Math.min(i + COLS, projects.length); j++) {
      row.push(j)
    }
    rows.push(row)
  }

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {rows.map((row, rowIdx) => (
        <Fragment key={rowIdx}>
          {row.map((idx) => {
            const p = projects[idx]
            return (
              <ProjectCard
                key={p.title}
                title={p.title}
                baseDescription={p.baseDescription}
                focus={p.focus[mode]}
                tags={p.tags}
                links={p.links}
                highlightTags={p.highlightTags[mode]}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            )
          })}

          <AnimatePresence>
            {openIndex !== null && row.includes(openIndex) && (
              <ProjectDetailsPanel key="panel" project={projects[openIndex]} />
            )}
          </AnimatePresence>
        </Fragment>
      ))}
    </div>
  )
}
