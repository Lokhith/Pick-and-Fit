import { cn } from "@/lib/utils"

interface RibbonOfferTagProps {
  discount: string
  variant?: "primary" | "secondary" | "accent" | "warning" | "success"
  className?: string
}

export default function RibbonOfferTag({ discount, variant = "primary", className }: RibbonOfferTagProps) {
  const variantStyles = {
    primary: "bg-blue-600 before:border-blue-700",
    secondary: "bg-pink-600 before:border-pink-700",
    accent: "bg-purple-600 before:border-purple-700",
    warning: "bg-amber-600 before:border-amber-700",
    success: "bg-green-600 before:border-green-700",
  }

  return (
    <div
      className={cn(
        "absolute top-0 right-0 z-10",
        "px-3 py-1.5",
        "font-bold text-xs text-white",
        "before:absolute before:content-[''] before:top-0 before:right-full",
        "before:border-t-[12px] before:border-r-[12px] before:border-b-0 before:border-l-0",
        "before:border-transparent before:border-r-inherit",
        variantStyles[variant],
        className,
      )}
    >
      {discount}
    </div>
  )
}
