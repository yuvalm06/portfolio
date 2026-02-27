import { ThemeToggle } from "@/components/theme-toggle"
import { HashLink } from "@/components/hash-link"
import { ViewModeToggle } from "@/components/view-mode-toggle"
import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { AboutSection } from "@/components/about-section"
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
            <ViewModeToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <HeroSection />

      <Separator className="mx-auto max-w-6xl" />

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            A few things I&apos;ve built.
          </p>
        </div>
        <ProjectsGrid />
      </section>

      <Separator className="mx-auto max-w-6xl" />

      <AboutSection />

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
          <a
            className="underline underline-offset-4"
            href="https://www.linkedin.com/in/yuvalmunz/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
