"use client"

import type { ReactNode } from "react"

const HEADER_OFFSET = 80

interface HashLinkProps {
  href: string
  className?: string
  children: ReactNode
}

export function HashLink({ href, className, children }: HashLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return
    e.preventDefault()
    const el = document.getElementById(href.slice(1))
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
