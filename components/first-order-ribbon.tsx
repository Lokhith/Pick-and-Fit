import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

interface FirstOrderRibbonProps {
  className?: string
  variant?: "primary" | "pink" | "green" | "purple"
}

export default function FirstOrderRibbon({ className, variant = "primary" }: FirstOrderRibbonProps) {
  const variantStyles = {
    primary: "from-blue-600 via-indigo-500 to-blue-400 text-white",
    pink: "from-pink-600 via-fuchsia-500 to-pink-400 text-white",
    green: "from-emerald-600 via-green-500 to-teal-400 text-white",
    purple: "from-purple-600 via-violet-500 to-purple-400 text-white",
  }

  return (
    <div className={cn("relative w-full overflow-hidden mb-6", className)}>
      <div
        className={cn(
          "py-3 px-4 bg-gradient-to-r shadow-lg border-y border-white/20",
          "relative z-10 overflow-hidden",
          variantStyles[variant],
        )}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/30 -skew-x-12 blur-xl"></div>
          <div className="absolute top-0 right-1/4 w-1/3 h-full bg-white/20 skew-x-12 blur-xl"></div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 text-center">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <p className="text-lg md:text-xl font-extrabold tracking-wide">
              <span className="text-yellow-300">₹400 OFF</span> on Your First Order + Free Delivery • Use code:{" "}
              <span className="bg-white/20 px-2 py-0.5 rounded text-white">FIRST400</span>
            </p>
            <Sparkles className="h-5 w-5 text-yellow-300" />
          </div>
        </div>
      </div>

      {/* Ribbon edges */}
      <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  )
}
