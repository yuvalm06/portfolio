import type { Perspective } from "./view-mode"

export interface Project {
  title: string
  baseDescription: string
  tags: string[]
  links: { label: string; href: string }[]
  focus: Record<Perspective, string>
  highlightTags: Record<Perspective, string[]>
}

export const projects: Project[] = [
  {
    title: "Sprocket Topology & Mass Reduction",
    baseDescription:
      "Redesigned and structurally optimized our FSAE sprocket to cut unnecessary mass while keeping strength and chain reliability under race loads.",
    tags: ["SolidWorks", "CATIA", "Ansys", "FEA", "Topology", "Chain"],
    links: [{ label: "Case Study", href: "#" }],
    focus: {
      build:  "Topology optimization workflow from FEA result to final machined geometry.",
      design: "Balancing stress distribution against material removal under cyclic chain loads.",
      scale:  "Reducing material cost without touching the performance spec.",
    },
    highlightTags: {
      build:  ["Topology", "SolidWorks"],
      design: ["FEA", "Ansys", "Topology"],
      scale:  ["SolidWorks", "CATIA"],
    },
  },
  {
    title: "Drivetrain Optimization",
    baseDescription:
      "Analyzed gear ratios, chain sizing, motor torque curves, and lap simulation data to tune our electric drivetrain for acceleration without sacrificing durability.",
    tags: ["FSAE", "SolidWorks", "Powertrain", "MATLAB", "Simulation"],
    links: [{ label: "Overview", href: "#" }],
    focus: {
      build:  "Tuning gear ratios against real lap simulation outputs, not just static calculations.",
      design: "Matching motor torque curves to chain load tolerances across the full rev range.",
      scale:  "Finding the configuration that maximizes race outcomes within hardware constraints.",
    },
    highlightTags: {
      build:  ["FSAE", "Powertrain"],
      design: ["MATLAB", "Simulation", "Powertrain"],
      scale:  ["Simulation", "MATLAB"],
    },
  },
  {
    title: "Reliability OS",
    baseDescription:
      "Designed a system concept that centralizes hardware failure data across revisions so engineering teams can actually see patterns instead of losing insights in spreadsheets.",
    tags: ["Supabase", "Next.js", "Backend", "Startup", "Database", "DFMEA", "DFR"],
    links: [{ label: "Write-up", href: "#" }],
    focus: {
      build:  "Prototyping a failure-tracking schema and UI from scratch.",
      design: "Structuring data to surface meaningful failure patterns across revision cycles.",
      scale:  "Giving teams a tool so institutional knowledge stops dying in spreadsheets.",
    },
    highlightTags: {
      build:  ["Next.js", "Backend"],
      design: ["Database", "Backend"],
      scale:  ["Startup", "Supabase", "Next.js"],
    },
  },
  {
    title: "Automated API Food Delivery System",
    baseDescription:
      "Built a fully automated SMS-based ordering system with live inventory, Stripe payments, and delivery routing logic so a student-run food operation could scale without chaos.",
    tags: ["API", "Automation", "Twilio", "Stripe", "Logistics"],
    links: [{ label: "Case Study", href: "#" }],
    focus: {
      build:  "Connecting Twilio, Stripe, and routing APIs into a live, working system.",
      design: "Designing a routing pipeline that handles orders end-to-end without manual steps.",
      scale:  "Automating the full operation so the business could grow without adding headcount.",
    },
    highlightTags: {
      build:  ["API", "Automation"],
      design: ["API", "Logistics"],
      scale:  ["Automation", "Stripe", "Twilio"],
    },
  },
  {
    title: "Rivian Thermal Partition",
    baseDescription:
      "Developed a thermal isolation concept to improve system efficiency and manage heat transfer between critical vehicle subsystems under real-world operating constraints.",
    tags: ["Product", "Thermodynamics", "NumPy", "Optimization", "Systems"],
    links: [{ label: "Overview", href: "#" }],
    focus: {
      build:  "Prototyping a partition geometry that fits within existing packaging constraints.",
      design: "Modeling heat transfer to keep thermal margins within spec across operating loads.",
      scale:  "Identifying a subsystem integration gap and proposing a targeted design fix.",
    },
    highlightTags: {
      build:  ["Product", "Optimization"],
      design: ["Thermodynamics", "NumPy", "Systems"],
      scale:  ["Systems", "Product"],
    },
  },
  {
    title: "E-Scooter Concept Platform",
    baseDescription:
      "Designed a modular electric scooter concept focused on structural integrity, safety compliance, and real-world usability instead of just aesthetics.",
    tags: ["Industrial", "CATIA", "SolidWorks", "DFMEA", "DFM", "DFR"],
    links: [{ label: "Case Study", href: "#" }],
    focus: {
      build:  "Building out structural geometry and load paths from the frame up.",
      design: "Running DFMEA across the full platform before any part was finalized.",
      scale:  "Designing DFM and DFR in from the start, not bolted on at the end.",
    },
    highlightTags: {
      build:  ["Industrial", "SolidWorks"],
      design: ["DFMEA", "DFM", "DFR"],
      scale:  ["DFM", "Industrial"],
    },
  },
  {
    title: "Baja Steering Wheel System",
    baseDescription:
      "Led the design and validation of a competition-ready steering wheel assembly balancing ergonomics, structural integrity, and manufacturability.",
    tags: ["CAD", "Manufacturing", "Ergonomics", "Validation", "Design"],
    links: [{ label: "Overview", href: "#" }],
    focus: {
      build:  "Designing and iterating on the assembly until it passed competition load requirements.",
      design: "Validating load path integrity against ergonomic constraints and manufacturing tolerances.",
      scale:  "Delivering a competition-ready system on a tight timeline without over-engineering.",
    },
    highlightTags: {
      build:  ["Manufacturing", "CAD"],
      design: ["Validation", "Ergonomics", "CAD"],
      scale:  ["Manufacturing", "Design"],
    },
  },
]
