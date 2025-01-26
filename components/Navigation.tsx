'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Utensils, Calendar, Book, Activity, Home } from 'lucide-react'
import { cn } from "@/lib/utils"

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Utensils, label: 'Log', href: '/log' },
    { icon: Calendar, label: 'Plan', href: '/plan' },
    { icon: Book, label: 'Recipes', href: '/recipes' },
    { icon: Activity, label: 'Progress', href: '/progress' },
  ]

  return (
    <nav className={cn(
      "fixed z-50 bg-background",
      // Mobile styles
      "bottom-0 left-0 right-0 border-t h-16",
      // Desktop styles
      "md:top-0 md:left-0 md:h-screen md:w-16 md:border-r md:border-t-0"
    )}>
      <div className={cn(
        "flex h-full",
        "justify-around md:flex-col md:justify-start md:pt-4"
      )}>
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href} 
            className={cn(
              "w-full flex items-center justify-center",
              "md:h-16"
            )}
          >
            <div className={cn(
              "flex flex-col items-center justify-center",
              "w-full h-full px-1",
              pathname === item.href && "bg-accent"
            )}>
              <item.icon className={cn(
                "h-5 w-5 mb-1",
                pathname === item.href ? "text-accent-foreground" : "text-muted-foreground"
              )} />
              <span className={cn(
                "text-[10px]",
                "md:hidden",
                pathname === item.href ? "text-accent-foreground" : "text-muted-foreground"
              )}>
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
