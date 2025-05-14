import { cn } from "@/lib/utils"

interface OfferTagProps {
  discount: string
  variant?: "primary" | "secondary" | "accent" | "warning" | "success"
  className?: string
}

export default function OfferTag({ discount, variant = "primary", className }: OfferTagProps) {
  const variantStyles = {
    primary: "bg-blue-600 border-blue-500",
    secondary: "bg-pink-600 border-pink-500",
    accent: "bg-purple-600 border-purple-500",
    warning: "bg-amber-600 border-amber-500",
    success: "bg-green-600 border-green-500",
  }

  return (
    <div
      className={cn(
        "absolute top-3 right-3 z-10",
        "px-2.5 py-1 rounded-sm",
        "shadow-sm border-b-2",
        "font-bold text-xs text-white",
        variantStyles[variant],
        className,
      )}
    >
      {discount}
    </div>
  )
}
