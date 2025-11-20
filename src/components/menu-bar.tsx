"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div className="flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === "dark" ? "text-[#A1A1AA] scale-75 rotate-12" : "text-foreground scale-100 rotate-0"
        }`}
      />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
        className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === "light" ? "text-[#A1A1AA] scale-75 rotate-12" : "text-foreground scale-100 rotate-0"
        }`}
      />
    </div>
  )
}

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

interface MenuBarProps {
  menuItems: MenuItem[]
  currentPath?: string
}

export function MenuBar({ menuItems, currentPath }: MenuBarProps) {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"
  
  const isActive = (href: string) => {
    if (!currentPath) return false
    if (href === "/") {
      return currentPath === "/"
    }
    return currentPath.startsWith(href)
  }
  
  const getBorderColor = (iconColor: string) => {
    const colorMap: { [key: string]: string } = {
      "text-blue-500": "border-blue-500",
      "text-green-500": "border-green-500",
      "text-purple-500": "border-purple-500",
      "text-orange-500": "border-orange-500",
      "text-pink-500": "border-pink-500",
      "text-red-500": "border-red-500",
      "text-cyan-500": "border-cyan-500",
    }
    return colorMap[iconColor] || "border-primary"
  }
  return (
    <motion.nav
      className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className={`absolute -inset-2 bg-gradient-radial from-transparent ${
          isDarkTheme
            ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
            : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
        } to-transparent rounded-3xl z-0 pointer-events-none`}
        variants={navGlowVariants}
      />
      <ul className="flex items-center gap-1 md:gap-2 relative z-10 flex-nowrap overflow-x-auto scrollbar-hide">
        {menuItems.map((item) => {
          const active = isActive(item.href)
          return (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              {/* Active state background */}
              {active && (
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{
                    background: item.gradient,
                    opacity: 0.8,
                    borderRadius: "16px",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                  borderRadius: "16px",
                }}
              />
              <motion.a
                href={item.href}
                className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 relative z-10 bg-transparent rounded-xl whitespace-nowrap transition-all border-2 ${
                  active 
                    ? `text-foreground font-semibold ${getBorderColor(item.iconColor)}` 
                    : "text-muted-foreground group-hover:text-foreground border-transparent"
                }`}
                variants={active ? undefined : itemVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
              >
                <span className={`transition-colors duration-300 flex-shrink-0 ${
                  active ? item.iconColor : "text-foreground"
                }`}>
                  {item.icon}
                </span>
                <span className={`text-xs md:text-sm whitespace-nowrap ${active ? item.iconColor : ""}`}>
                  {item.label}
                </span>
              </motion.a>
              {!active && (
                <motion.a
                  href={item.href}
                  className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl whitespace-nowrap"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                >
                  <span className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground flex-shrink-0`}>
                    {item.icon}
                  </span>
                  <span className="text-xs md:text-sm whitespace-nowrap">{item.label}</span>
                </motion.a>
              )}
            </motion.div>
          </motion.li>
          )
        })}
      </ul>
    </motion.nav>
  )
}

export { ThemeToggle }
export type { MenuItem }
