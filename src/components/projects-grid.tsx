"use client"

import { useViewMode } from "@/components/view-mode-provider"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"

export function ProjectsGrid() {
  const { mode } = useViewMode()

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          baseDescription={p.baseDescription}
          focus={p.focus[mode]}
          tags={p.tags}
          links={p.links}
          highlightTags={p.highlightTags[mode]}
        />
      ))}
    </div>
  )
}
