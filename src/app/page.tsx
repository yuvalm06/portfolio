import { ThemeToggle } from "@/components/theme-toggle"
import { HashLink } from "@/components/hash-link"
import { ProjectsSection } from "@/components/projects-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-neutral-200/60 bg-white/70 backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Yuval Munz</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                Mechanical Engineering • Product Design
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300 md:flex">
              <HashLink className="hover:text-neutral-900 dark:hover:text-white" href="#projects">
                Projects
              </HashLink>
              <HashLink className="hover:text-neutral-900 dark:hover:text-white" href="#about">
                About
              </HashLink>
              <HashLink className="hover:text-neutral-900 dark:hover:text-white" href="#contact">
                Contact
              </HashLink>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-28">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-6">
            Available for Summer 2026
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            I build mechanical systems and product experiences that feel inevitable.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            Focused on real constraints, clean execution, and shipping. I like work where design
            decisions connect to manufacturing, reliability, and user experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <HashLink href="#projects">View projects</HashLink>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume">Resume</a>
            </Button>
          </div>

          <div className="mt-12 rounded-2xl border border-neutral-200 bg-white/70 p-5 text-sm text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-200">
            <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400">~/now</div>
            <div className="mt-2">
              Building: FSAE drivetrain work • automation systems • product design • food delivery solution • design reliability OS
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      <ProjectsSection />

      <Separator className="mx-auto max-w-6xl" />

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          Write a short bio here. Keep it concrete and specific.
        </p>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
          Email:{" "}
          <a className="underline underline-offset-4" href="mailto:yuvalmunz@gmail.com">
            yuvalmunz@gmail.com
          </a>
        </p>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          LinkedIn:{" "}
          <a className="underline underline-offset-4" href="https://www.linkedin.com/in/yuvalmunz/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yuvalmunz
          </a>
        </p>
      </section>

      <footer className="border-t border-neutral-200/60 py-16 text-center text-xs text-neutral-500 dark:border-neutral-800/60 dark:text-neutral-400">
        © {new Date().getFullYear()} Yuval Munz
      </footer>
    </main>
  )
}
