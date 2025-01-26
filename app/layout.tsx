import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navigation from "@/components/Navigation"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Health & Nutrition App",
  description: "Track your meals, plan your diet, and achieve your health goals",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          inter.className,
          "h-full bg-background",
          // Add padding for navigation
          "pb-16 md:pb-0 md:pl-16",
        )}
      >
        <Navigation />
        <main className="min-h-full">{children}</main>
      </body>
    </html>
  )
}

