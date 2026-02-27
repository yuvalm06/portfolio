"use client"

import { useViewMode } from "@/components/view-mode-provider"
import { PERSPECTIVES } from "@/lib/view-mode"

export function ViewModeToggle() {
  const { mode, setMode } = useViewMode()

  return (
    <div className="flex items-center rounded-full border border-neutral-200 bg-neutral-50/80 p-0.5 dark:border-neutral-800 dark:bg-neutral-900/80">
      {PERSPECTIVES.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setMode(key)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-150 ${
            mode === key
              ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-white"
              : "text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
