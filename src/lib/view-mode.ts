export type Perspective = "build" | "design" | "scale"

export const PERSPECTIVES: { key: Perspective; label: string }[] = [
  { key: "build",  label: "Build"  },
  { key: "design", label: "Design" },
  { key: "scale",  label: "Scale"  },
]

export interface HeroCopy {
  headline: string
  subline: string
}

export const HERO_COPY: Record<Perspective, HeroCopy> = {
  build: {
    headline: "I build physical systems and ship real things.",
    subline:
      "Iteration, prototyping, and testing until it works. I care about making things that actually exist in the world — not just designs that look good on a slide.",
  },
  design: {
    headline: "I design systems under real constraints.",
    subline:
      "Loads, tolerances, tradeoffs. I work from first principles and validate with data — no guessing, no over-engineering.",
  },
  scale: {
    headline: "I build systems that scale.",
    subline:
      "Automation, product workflows, and leverage. I look for the design that removes work, not just the one that looks good.",
  },
}
