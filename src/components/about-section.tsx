const EDUCATION = [
  {
    school: "Queen's University",
    degree: "Bachelor of Applied Science, Mechanical Engineering",
    period: "2024 – Present",
    location: "Kingston, Ontario, Canada",
    logo: "/queens-logo.png",
    logoSize: "h-12",
  },
]

const CERTIFICATES = [
  {
    name: "Certified SOLIDWORKS Associate (CSWA)",
    issuer: "Dassault Systèmes",
    issued: "Oct 2025",
    credentialId: "C-4FZLM267EN",
    href: "https://drive.google.com/file/d/13qAPPtGrgk2VHhlaGVSHWxDbv_jL-6Ki/view?usp=sharing",
    logo: "/solidworks-logo.png",
  },
]

const CURRENT_ROLES = [
  {
    org: "Queen's Formula SAE Racing",
    location: "Kingston, Ontario, Canada",
    logo: "/qfsae-logo.png",
    logoSize: "h-23",
    logoClassName: "-mt-3 -mr-1",
    subroles: [
      {
        title: "Powertrain Engineer & Sprockets Lead",
        period: "Sep 2025 – Present",
      },
      {
        title: "Powertrain Engineer",
        period: "Sep 2024 – Jan 2026",
      },
    ],
    bullets: [
      "Designing and optimizing the drivetrain system for Queen's Formula SAE Electric vehicle.",
      "Performing gear ratio, chain, and sprocket analysis to balance torque, speed, and efficiency.",
      "Modelling and integrating drivetrain components in SolidWorks for performance validation.",
    ],
  },
  {
    org: "Queen's Additive Manufacturing Club",
    logo: "/qamt-logo.png",
    logoSize: "h-20",
    logoClassName: "-mt-2 ml-4",
    subroles: [{ title: "Mechanical Lead", period: "Dec 2025 – Present" }],
    bullets: [
      "Helped build and grow a student-led additive manufacturing team focused on hands-on fabrication and practical engineering applications.",
      "Currently designing and building a 3D printer from scratch, focusing on mechanical precision, calibration, and print reliability for functional engineering parts.",
    ],
  },
  {
    org: "Campus Cravings",
    logo: "/campuscravings-logo.png",
    logoSize: "h-18",
    logoClassName: "ml-2",
    subroles: [
      {
        title: "Founder & Operator · Full-Stack Systems Builder",
        period: "Sep 2025 – Present",
      },
    ],
    bullets: [
      "Built a late-night food delivery service for university students, managing operations and logistics.",
      "Built automated ordering and payment workflows using Twilio, Make.com, and Stripe to streamline operations.",
    ],
  },
]

const PREVIOUS_ROLES = [
  {
    org: "Green Air LTD",
    logo: "/greenair-logo.png",
    logoSize: "h-8",
    subroles: [
      {
        title: "Mechanical Project Assistant Intern",
        period: "May 2025 – Aug 2025",
      },
    ],
    bullets: [
      "Installed, wired, and troubleshot fluid and mechanical systems (pumps, filters, irrigation).",
      "Diagnosed and repaired mechanical faults under real-world field conditions.",
      "Gained practical experience applying engineering fundamentals in an independent, hands-on environment.",
    ],
  },
  {
    org: "CMiC",
    logo: "/CMIC-logo.png",
    subroles: [{ title: "IT Support Intern", period: "May 2024 – Sep 2024" }],
    bullets: [
      "Diagnosed hardware/software issues and implemented solutions under time constraints.",
      "Developed structured problem-solving and documentation skills for system-level reliability.",
    ],
  },
  {
    org: "3D Factory",
    logo: undefined,
    subroles: [
      {
        title: "3D Printing & Fabrication Intern",
        period: "Nov 2023 – May 2024",
      },
    ],
    bullets: [
      "Created, optimized, and printed custom prototypes using PLA, PETG, and resin printers.",
      "Collaborated with clients and designers to translate CAD models into physical components, ensuring dimensional accuracy and DFM compliance.",
    ],
  },
]

interface SubRole {
  title: string
  period: string
}

interface RoleEntry {
  org: string
  location?: string
  logo?: string
  logoSize?: string
  logoClassName?: string
  subroles: SubRole[]
  bullets: string[]
}

function RoleCard({ role }: { role: RoleEntry }) {
  return (
    <div className="overflow-hidden border-l border-neutral-200 pl-4 dark:border-neutral-800">
      {role.logo && (
        <img
          src={role.logo}
          alt={role.org}
          className={`float-right w-auto object-contain${role.logoClassName ? ` ${role.logoClassName}` : ""}`}
          style={{ height: role.logoSize === "h-24" ? "6rem" : role.logoSize === "h-23" ? "5.75rem" : role.logoSize === "h-22" ? "5.5rem" : role.logoSize === "h-20" ? "5rem" : role.logoSize === "h-18" ? "4.5rem" : role.logoSize === "h-16" ? "4rem" : role.logoSize === "h-12" ? "3rem" : role.logoSize === "h-8" ? "2rem" : "1.25rem" }}
        />
      )}
      <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        {role.org}
      </div>
      {role.location && (
        <div className="mt-0.5 text-xs text-neutral-400 dark:text-neutral-500">
          {role.location}
        </div>
      )}
      <div className="mt-2 space-y-1.5">
        {role.subroles.map((s) => (
          <div key={s.title}>
            <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
              {s.title}
            </div>
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
              {s.period}
            </div>
          </div>
        ))}
      </div>
      {role.bullets.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {role.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-2xl font-semibold tracking-tight">About</h2>

      {/* Bio */}
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        I build across hardware, performance systems, and automation infrastructure. My work spans
        drivetrain optimization, structural analysis, thermal concepts, and building full-stack
        systems from scratch. I&apos;m interested in engineering that connects physical design,
        modeling, and scalable execution.
      </p>

      {/* Education + Certificates */}
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {/* Education */}
        <div>
          <div className="mb-4 font-mono text-xs text-neutral-400 dark:text-neutral-500">
            Education
          </div>
          <div className="space-y-4">
            {EDUCATION.map((e) => (
              <div
                key={e.school}
                className="flex items-start gap-3 border-l border-neutral-200 pl-4 dark:border-neutral-800"
              >
                <div className="flex-1 pr-2">
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {e.school}
                  </div>
                  <div className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-300">
                    {e.degree}
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
                    {e.period} · {e.location}
                  </div>
                </div>
                {e.logo && (
                  <img
                    src={e.logo}
                    alt={e.school}
                    className="mt-0.5 w-auto shrink-0 object-contain"
                    style={{ height: e.logoSize === "h-14" ? "3.5rem" : e.logoSize === "h-12" ? "3rem" : e.logoSize === "h-8" ? "2rem" : "1.25rem" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="mb-4 font-mono text-xs text-neutral-400 dark:text-neutral-500">
            Certificates
          </div>
          <div className="space-y-4">
            {CERTIFICATES.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-4 border-l border-neutral-200 pl-4 dark:border-neutral-800"
              >
                <div className="flex-1 pr-4">
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {c.name}
                  </div>
                  <div className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-300">
                    {c.issuer}
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
                    Issued {c.issued} · {c.credentialId}
                  </div>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-neutral-100"
                  >
                    See Certificate ↗
                  </a>
                </div>
                {c.logo && (
                  <img
                    src={c.logo}
                    alt={c.issuer}
                    className="mt-0.5 h-7 w-auto shrink-0 object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Roles */}
      <div className="mt-12">
        <div className="mb-6 font-mono text-xs text-neutral-400 dark:text-neutral-500">
          Current Roles
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CURRENT_ROLES.map((r) => (
            <RoleCard key={r.org} role={r} />
          ))}
        </div>
      </div>

      {/* Previous Roles */}
      <div className="mt-12">
        <div className="mb-6 font-mono text-xs text-neutral-400 dark:text-neutral-500">
          Previous Roles
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIOUS_ROLES.map((r) => (
            <RoleCard key={r.org} role={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
