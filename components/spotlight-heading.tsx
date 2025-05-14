"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Zap } from "lucide-react"

interface SpotlightHeadingProps {
  title: string
  subtitle?: string
  variant?: "primary" | "secondary" | "premium" | "ultra"
  children?: React.ReactNode
  boldLevel?: "normal" | "bold" | "extra" | "ultra"
  compact?: boolean
  showIcon?: boolean
  iconPosition?: "left" | "right" | "both"
}

export default function SpotlightHeading({
  title,
  subtitle,
  variant = "primary",
  children,
  boldLevel = "normal",
  compact = false,
  showIcon = false,
  iconPosition = "both",
}: SpotlightHeadingProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Define color schemes based on variant
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          gradientFrom: "from-primary",
          gradientVia: "via-primary-600",
          gradientTo: "to-primary-700",
          spotlightColor: "text-primary",
          bgGradientFrom: "from-primary-100",
          bgGradientTo: "to-primary-50",
          darkBgGradientFrom: "dark:from-primary-900/30",
          darkBgGradientTo: "dark:to-primary-800/20",
          textShadow: "text-shadow-primary",
          iconColor: "text-primary",
        }
      case "secondary":
        return {
          gradientFrom: "from-amber-500",
          gradientVia: "via-amber-600",
          gradientTo: "to-amber-700",
          spotlightColor: "text-amber-500",
          bgGradientFrom: "from-amber-100",
          bgGradientTo: "to-amber-50",
          darkBgGradientFrom: "dark:from-amber-900/30",
          darkBgGradientTo: "dark:to-amber-800/20",
          textShadow: "text-shadow-amber",
          iconColor: "text-amber-500",
        }
      case "premium":
        return {
          gradientFrom: "from-amber-400",
          gradientVia: "via-amber-500",
          gradientTo: "to-amber-600",
          spotlightColor: "text-amber-400",
          bgGradientFrom: "from-amber-100",
          bgGradientTo: "to-amber-50",
          darkBgGradientFrom: "dark:from-amber-900/30",
          darkBgGradientTo: "dark:to-amber-800/20",
          textShadow: "text-shadow-gold",
          iconColor: "text-amber-400",
        }
      case "ultra":
        return {
          gradientFrom: "from-primary",
          gradientVia: "via-primary-600",
          gradientTo: "to-primary-700",
          spotlightColor: "text-primary",
          bgGradientFrom: "from-primary-100",
          bgGradientTo: "to-primary-50",
          darkBgGradientFrom: "dark:from-primary-900/30",
          darkBgGradientTo: "dark:to-primary-800/20",
          textShadow: "text-shadow-primary",
          iconColor: "text-primary",
        }
      default:
        return {
          gradientFrom: "from-primary",
          gradientVia: "via-primary-600",
          gradientTo: "to-primary-700",
          spotlightColor: "text-primary",
          bgGradientFrom: "from-primary-100",
          bgGradientTo: "to-primary-50",
          darkBgGradientFrom: "dark:from-primary-900/30",
          darkBgGradientTo: "dark:to-primary-800/20",
          textShadow: "text-shadow-primary",
          iconColor: "text-primary",
        }
    }
  }

  const colors = getColors()

  // Define font weight based on boldLevel
  const getFontWeight = () => {
    switch (boldLevel) {
      case "normal":
        return "font-bold"
      case "bold":
        return "font-extrabold"
      case "extra":
        return "font-black"
      case "ultra":
        return "font-black tracking-tighter"
      default:
        return "font-bold"
    }
  }

  const fontWeight = getFontWeight()
  const paddingY = compact ? "py-6" : "py-10"

  // Icon component based on variant
  const IconComponent = () => {
    return <Zap className={`w-6 h-6 ${colors.iconColor}`} />
  }

  return (
    <div
      className={`relative overflow-hidden ${paddingY} ${colors.bgGradientFrom} ${colors.bgGradientTo} ${colors.darkBgGradientFrom} ${colors.darkBgGradientTo} bg-gradient-to-b dark:bg-gray-900`}
    >
      {/* Spotlight effects */}
      <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className={`w-32 h-32 rounded-full bg-gradient-to-b ${colors.gradientFrom} ${colors.gradientTo} opacity-30 blur-3xl`}
        ></div>
      </div>
      <div className="absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-1/2">
        <div
          className={`w-32 h-32 rounded-full bg-gradient-to-b ${colors.gradientFrom} ${colors.gradientTo} opacity-30 blur-3xl`}
        ></div>
      </div>

      {/* Spotlights */}
      <div className="absolute left-[15%] top-0 transform -translate-y-1/2 rotate-12 opacity-70">
        <div className="relative">
          <div
            className={`w-6 h-12 rounded-full bg-gradient-to-b ${colors.gradientFrom} ${colors.gradientTo} blur-sm`}
          ></div>
          <div className="absolute top-0 left-0 w-6 h-12 bg-white opacity-50 blur-sm"></div>
          <div
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-24 bg-white opacity-10 blur-lg`}
          ></div>
        </div>
      </div>
      <div className="absolute right-[15%] top-0 transform -translate-y-1/2 -rotate-12 opacity-70">
        <div className="relative">
          <div
            className={`w-6 h-12 rounded-full bg-gradient-to-b ${colors.gradientFrom} ${colors.gradientTo} blur-sm`}
          ></div>
          <div className="absolute top-0 left-0 w-6 h-12 bg-white opacity-50 blur-sm"></div>
          <div
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-24 bg-white opacity-10 blur-lg`}
          ></div>
        </div>
      </div>

      <div
        className={`container mx-auto px-4 text-center relative z-10 transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className={`text-4xl md:text-5xl ${fontWeight} mb-2 relative inline-flex items-center`}>
          {showIcon && (iconPosition === "left" || iconPosition === "both") && (
            <span className="mr-3 animate-pulse">
              <IconComponent />
            </span>
          )}

          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientVia} ${colors.gradientTo}`}
          >
            {title}
          </span>

          {showIcon && (iconPosition === "right" || iconPosition === "both") && (
            <span className="ml-3 animate-pulse">
              <IconComponent />
            </span>
          )}

          {/* Decorative underline */}
          <span
            className={`absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} rounded-full`}
          ></span>
        </h2>

        {subtitle && (
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-2">{subtitle}</p>
        )}

        {children}
      </div>
    </div>
  )
}
