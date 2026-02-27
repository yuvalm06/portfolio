import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ViewModeProvider } from "@/components/view-mode-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Name",
  description: "Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " antialiased"}>
        <ThemeProvider>
          <ViewModeProvider>{children}</ViewModeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}