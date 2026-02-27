"use client"

import { createContext, useContext, useState } from "react"
import type { Perspective } from "@/lib/view-mode"

interface ViewModeContextValue {
  mode: Perspective
  setMode: (mode: Perspective) => void
}

const ViewModeContext = createContext<ViewModeContextValue>({
  mode: "build",
  setMode: () => {},
})

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Perspective>("build")

  return (
    <ViewModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ViewModeContext.Provider>
  )
}

export function useViewMode() {
  return useContext(ViewModeContext)
}
