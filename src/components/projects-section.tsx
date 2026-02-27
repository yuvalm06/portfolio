"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/project-card"

type Perspective = "performance" | "weight" | "reliability" | "systems"

interface PerspectiveMeta {
  priority: number
  highlight: string
}

interface Project {
  title: string
  blurb: string
  tags: string[]
  links: { label: string; href: string }[]
  perspectives: Record<Perspective, PerspectiveMeta>
}

const projects: Project[] = [
  {
    title: "Sprocket Topology & Mass Reduction",
    blurb: "Redesigned and structurally optimized our FSAE sprocket to cut unnecessary mass while keeping strength and chain reliability under race loads.",
    tags: ["SolidWorks", "CATIA", "Ansys", "FEA", "Topology Optimization", "Chain Loads"],
    links: [{ label: "Case Study", href: "#" }],
    perspectives: {
      performance: { priority: 3, highlight: "Race-load validated" },
      weight:       { priority: 1, highlight: "Topology optimized" },
      reliability:  { priority: 2, highlight: "FEA certified" },
      systems:      { priority: 6, highlight: "Load path analysis" },
    },
  },
  {
    title: "Drivetrain Optimization",
    blurb: "Analyzed gear ratios, chain sizing, motor torque curves, and lap simulation data to tune our electric drivetrain for acceleration without sacrificing durability.",
    tags: ["FSAE", "SolidWorks", "Powertrain", "MATLAB", "Simulation"],
    links: [{ label: "Overview", href: "#" }],
    perspectives: {
      performance: { priority: 1, highlight: "Torque curve tuned" },
      weight:       { priority: 3, highlight: "Power-to-weight ratio" },
      reliability:  { priority: 5, highlight: "Durability tested" },
      systems:      { priority: 3, highlight: "Lap sim + controls" },
    },
  },
  {
    title: "Reliability OS",
    blurb: "Designed a system concept that centralizes hardware failure data across revisions so engineering teams can actually see patterns instead of losing insights in spreadsheets.",
    tags: ["Supabase", "Next.js", "Backend", "Startup"],
    links: [{ label: "Write-up", href: "#" }],
    perspectives: {
      performance: { priority: 6, highlight: "Data throughput" },
      weight:       { priority: 7, highlight: "Lightweight stack" },
      reliability:  { priority: 1, highlight: "Failure patterns" },
      systems:      { priority: 1, highlight: "Data centralization" },
    },
  },
  {
    title: "Automated API Food Delivery System",
    blurb: "Built a fully automated SMS-based ordering system with live inventory, Stripe payments, and delivery routing logic so a student-run food operation could scale without chaos.",
    tags: ["API", "Automation", "Twilio", "Make.com", "Stripe", "Logistics", "Marketing"],
    links: [{ label: "Case Study", href: "#" }],
    perspectives: {
      performance: { priority: 5, highlight: "System throughput" },
      weight:       { priority: 6, highlight: "Lean stack" },
      reliability:  { priority: 4, highlight: "Uptime & failover" },
      systems:      { priority: 2, highlight: "Full-stack automation" },
    },
  },
  {
    title: "Rivian Thermal Partition",
    blurb: "Developed a thermal isolation concept to improve system efficiency and manage heat transfer between critical vehicle subsystems under real-world operating constraints.",
    tags: ["Product Design", "Optimization Solutions", "Thermodynamics", "NumPy"],
    links: [{ label: "Overview", href: "#" }],
    perspectives: {
      performance: { priority: 2, highlight: "Thermal efficiency" },
      weight:       { priority: 5, highlight: "Material trade-off" },
      reliability:  { priority: 6, highlight: "Thermal margins" },
      systems:      { priority: 4, highlight: "Subsystem integration" },
    },
  },
  {
    title: "E-Scooter Concept Platform",
    blurb: "Designed a modular electric scooter concept focused on structural integrity, safety compliance, and real-world usability instead of just aesthetics.",
    tags: ["Industrial Design", "CATIA", "SolidWorks", "Load Analysis", "DFMEA", "DFM", "DFR"],
    links: [{ label: "Case Study", href: "#" }],
    perspectives: {
      performance: { priority: 4, highlight: "Structural rigidity" },
      weight:       { priority: 2, highlight: "Modular platform" },
      reliability:  { priority: 4, highlight: "DFMEA + DFR" },
      systems:      { priority: 5, highlight: "Platform architecture" },
    },
  },
  {
    title: "Baja Steering Wheel System",
    blurb: "Led the design and validation of a competition-ready steering wheel assembly balancing ergonomics, structural integrity, and manufacturability.",
    tags: ["CAD", "Manufacturing", "Design"],
    links: [{ label: "Overview", href: "#" }],
    perspectives: {
      performance: { priority: 7, highlight: "Driver response" },
      weight:       { priority: 4, highlight: "Assembly weight" },
      reliability:  { priority: 3, highlight: "Competition proven" },
      systems:      { priority: 7, highlight: "Assembly system" },
    },
  },
]

const PERSPECTIVES: { key: Perspective; label: string }[] = [
  { key: "performance", label: "Performance" },
  { key: "weight",      label: "Weight" },
  { key: "reliability", label: "Reliability" },
  { key: "systems",     label: "Systems" },
]

export function ProjectsSection() {
  const [active, setActive] = useState<Perspective | null>(null)

  const sorted = active
    ? [...projects].sort(
        (a, b) => a.perspectives[active].priority - b.perspectives[active].priority
      )
    : projects

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            A few things I&apos;ve built.
          </p>
        </div>

        {/* Perspective toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-neutral-400 dark:text-neutral-500 mr-1">View by</span>
          {PERSPECTIVES.map(({ key, label }) => {
            const isActive = active === key
            return (
              <button
                key={key}
                onClick={() => setActive(isActive ? null : key)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? "border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                    : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400 hover:text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-neutral-200"
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {sorted.map((p) => {
            const highlight =
              active && p.perspectives[active].priority <= 3
                ? p.perspectives[active].highlight
                : undefined
            return (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <ProjectCard
                  title={p.title}
                  blurb={p.blurb}
                  tags={p.tags}
                  links={p.links}
                  highlight={highlight}
                />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}
