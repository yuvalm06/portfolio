"use client"

import { useEffect } from "react"

const HEADER_OFFSET = 80

export function SmoothScroll() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a")
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href?.startsWith("#")) return
      const el = document.getElementById(href.slice(1))
      if (!el) return
      e.preventDefault()
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
      window.scrollTo({ top, behavior: "smooth" })
    }

    // capture: true fires before Next.js's router handler
    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [])

  return null
}
