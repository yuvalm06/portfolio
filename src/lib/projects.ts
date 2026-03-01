import type { Perspective } from "./view-mode"

export interface Project {
  title: string
  baseDescription: string
  tags: string[]
  links: { label: string; href: string }[]
  focus: Record<Perspective, string>
  highlightTags: Record<Perspective, string[]>
  role?: string
  details: string[]
  outcomes?: string[]
  media: { src: string; alt: string; caption?: string }[]
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
    role: "Lead Design Engineer — QFSAE Powertrain",
    details: [
      "Ran topology optimization in Ansys to identify low-stress material regions, then translated results into a machinable SolidWorks geometry without compromising chain interface tolerances.",
      "Validated the final geometry under cyclic chain-load FEA cases, confirming peak stress stayed below yield across all critical cross-sections.",
      "Coordinated with the chain and suspension teams to ensure pitch compatibility and sprocket clearance were preserved after mass removal.",
      "Iterated three geometry revisions between simulation and CAD before locking the design for manufacturing.",
      "Delivered the machining drawing package to our contracted shop with full GD&T callouts.",
    ],
    outcomes: [
      "Measurable mass reduction from the previous sprocket geometry while holding identical chain interface specs.",
      "Zero structural failures during track testing and competition load cycles.",
    ],
    media: [
      { src: "/Sprocket%20Topology/sprocket-1.png", alt: "Sprocket topology optimization" },
      { src: "/Sprocket%20Topology/sprocket-2.png", alt: "Sprocket FEA stress analysis" },
      { src: "/Sprocket%20Topology/sprocket-3.png", alt: "Sprocket final machined geometry" },
    ],
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
    role: "Powertrain Engineer — QFSAE",
    details: [
      "Pulled motor torque-curve data and mapped it against a range of gear ratio configurations to identify the optimal acceleration band for our track profile.",
      "Used MATLAB lap simulation outputs to evaluate ratio options under realistic load conditions rather than theoretical peak numbers.",
      "Analyzed chain sizing constraints against peak motor output to define minimum safety margins at maximum torque.",
      "Iterated the final ratio selection with the suspension team to account for weight transfer dynamics and grip limits at corner exit.",
      "Produced a documented decision matrix comparing four candidate configurations across acceleration, top speed, and chain life.",
    ],
    outcomes: [
      "Locked in gear ratio ahead of schedule, enabling early drivetrain assembly and test.",
      "Simulation-validated improvement in predicted 0–60 acceleration versus prior season configuration.",
    ],
    media: [
      { src: "/Drivetrain%20Optimization/drivetrain-1.png", alt: "Drivetrain gear ratio analysis" },
      { src: "/Drivetrain%20Optimization/drivetrain-2.png", alt: "Motor torque curve data" },
      { src: "/Drivetrain%20Optimization/drivetrain-3.png", alt: "Chain sizing analysis" },
      { src: "/Drivetrain%20Optimization/drivetrain-4.png", alt: "Lap simulation output" },
    ],
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
    role: "Founder & Systems Designer",
    details: [
      "Defined a failure-tracking schema in Supabase scoped to engineering revision cycles — not generic bug tickets — with fields for subsystem, failure mode, root cause, and revision delta.",
      "Built a Next.js prototype to log, tag, and query failure patterns across hardware iterations, replacing the typical post-mortem spreadsheet.",
      "Designed the data model for cross-team visibility: a failure logged in powertrain can surface automatically in a suspension design review.",
      "Identified the core insight driving the product: most hardware teams lose institutional knowledge because failure data lives in disconnected documents and individual memory.",
      "Scoped an MVP feature set focused on DFMEA alignment, revision tracking, and pattern detection without requiring process changes from the team.",
    ],
    outcomes: [
      "Working prototype with failure logging, tagging, and pattern visualization across revision cycles.",
      "System architecture designed to scale across multiple subsystems without per-team configuration.",
    ],
    media: [],
  },
  {
    title: "Automated API Food Delivery System",
    baseDescription:
      "Built a fully automated SMS-based ordering system with live inventory, Stripe payments, and delivery routing logic so a student-run food operation could scale without chaos.",
    tags: ["API", "Automation", "Twilio", "Stripe", "Logistics", "Figma"],
    links: [{ label: "Website", href: "https://campuscravings-ym06.github.io/campus-cravings-site/menu.html" }],
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
    role: "Founder & Operator — Campus Cravings",
    details: [
      "Integrated Twilio SMS for order intake, building a state machine to handle multi-step order flows (item selection, confirmation, payment) entirely over text.",
      "Connected Stripe for payment processing with automatic receipt generation and error-state handling for failed transactions.",
      "Built live inventory tracking so the system automatically removes out-of-stock items and notifies the operator without manual updates.",
      "Designed a delivery routing module that batches orders by proximity and time window to minimize delivery trips per shift.",
      "Wrote the full backend in Node.js with a lightweight admin dashboard for monitoring order volume and inventory in real time.",
    ],
    outcomes: [
      "System handled full order lifecycle — intake to payment to routing — with zero manual steps per order.",
      "Scaled the operation to multiple concurrent orders without adding delivery headcount.",
    ],
    media: [
      { src: "/Campus%20Cravings/cc-system-1.png", alt: "Campus Cravings ordering system" },
      { src: "/Campus%20Cravings/cc-system-2.png", alt: "Campus Cravings system flow" },
      { src: "/Campus%20Cravings/cc-figma-1.png",  alt: "Figma UI design — menu layout", caption: "Figma" },
      { src: "/Campus%20Cravings/cc-figma-2.png",  alt: "Figma UI design — order flow",  caption: "Figma" },
    ],
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
    role: "Design Engineer — Academic Project",
    details: [
      "Identified a thermal crosstalk problem between adjacent subsystems and framed it as a partitioning design challenge.",
      "Built a thermal model in NumPy to simulate heat flux across candidate partition geometries under steady-state and transient operating conditions.",
      "Iterated partition material and geometry configurations to find the combination that kept both subsystems within thermal spec across the full operating range.",
      "Documented packaging constraints from the Rivian architecture and used them to bound the feasible design space.",
      "Produced a final concept report with thermal simulation results, geometry drawings, and a sensitivity analysis on material choice.",
    ],
    outcomes: [
      "Concept design achieved target thermal isolation margin under worst-case operating load.",
      "Analysis flagged a secondary packaging interference that changed the final geometry recommendation.",
    ],
    media: [
      { src: "/Rivian/rivian-1.png", alt: "Rivian thermal partition concept" },
      { src: "/Rivian/rivian-2.png", alt: "Rivian thermal analysis" },
      { src: "/Rivian/rivian-3.png", alt: "Rivian partition geometry" },
      { src: "/Rivian/rivian-4.png", alt: "Rivian thermal simulation results" },
    ],
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
    role: "Lead Designer — Academic Concept Project",
    details: [
      "Designed the full frame geometry in CATIA, defining load paths from rider weight, braking, and road impact through the structural members.",
      "Ran a complete DFMEA across all major subsystems — frame, steering, drivetrain, braking — before finalizing any individual part geometry.",
      "Applied DFM constraints throughout: minimized unique fastener types, kept weld joint geometries consistent, and designed for single-setup machining where possible.",
      "Incorporated DFR requirements by designing fatigue-critical joints with conservative stress margins and flagging high-cycle components for material upgrade.",
      "Benchmarked the concept against existing market scooters for ergonomic compliance and safety standard alignment.",
    ],
    outcomes: [
      "Complete concept platform with full DFM/DFR documentation and structural validation.",
      "DFMEA identified three high-risk failure modes that changed the final steering geometry.",
    ],
    media: [
      { src: "/Scooter/ALSO. Scooter Rendered Concept 2.png", alt: "Scooter rendered concept" },
      { src: "/Scooter/IMG_8951.JPG",                         alt: "Scooter prototype photo" },
      { src: "/Scooter/IMG_9068.jpg",                         alt: "Scooter detail photo" },
      { src: "/Scooter/scooter-loads.png",                    alt: "Scooter load analysis" },
    ],
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
    role: "Lead Design Engineer — Baja SAE",
    details: [
      "Designed the steering wheel geometry and grip profile in SolidWorks, iterating with driver feedback to balance ergonomic comfort against structural cross-section requirements.",
      "Ran load validation on the hub and spoke geometry under SAE Baja competition impact loads to confirm no yielding at critical attachment points.",
      "Managed tolerancing on the hub interface to ensure reliable quick-release engagement without play under steering inputs.",
      "Coordinated with the manufacturing team to keep the design within in-house fabrication capability — no outsourced machining required.",
      "Delivered the full assembly drawing package with BOM, GD&T, and material callouts within the team build schedule.",
    ],
    outcomes: [
      "Assembly passed all competition inspection requirements on first submission.",
      "Zero steering play or fit issues reported during testing or competition runs.",
    ],
    media: [
      { src: "/Baja%20Steering%20Wheel/baja-1.png", alt: "Baja steering wheel CAD design" },
      { src: "/Baja%20Steering%20Wheel/baja-2.png", alt: "Baja steering wheel assembly" },
      { src: "/Baja%20Steering%20Wheel/baja-3.png", alt: "Baja steering wheel validation" },
    ],
  },
]
