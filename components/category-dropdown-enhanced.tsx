"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"

interface SubItem {
  name: string
  href: string
}

interface Subcategory {
  name: string
  href: string
  subItems?: SubItem[]
}

interface CategoryDropdownEnhancedProps {
  name: string
  subcategories: Subcategory[]
  href: string
}

export default function CategoryDropdownEnhanced({ name, subcategories, href }: CategoryDropdownEnhancedProps) {
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(null)

  return (
    <div className="group relative">
      <div className="flex items-center gap-1 py-1.5">
        <Link href={href} className="text-sm font-medium transition-colors group-hover:text-primary relative">
          {name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 text-muted-foreground group-hover:text-primary" />
      </div>

      {/* Enhanced Dropdown Menu */}
      <div className="absolute left-0 top-full z-50 hidden min-w-[280px] max-w-[400px] rounded-md border bg-background shadow-lg group-hover:block transform origin-top opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
        <div className="p-4">
          <Link href={href} className="block text-base font-semibold text-primary hover:underline mb-3">
            All {name}
          </Link>

          <div className="grid gap-2">
            {subcategories.map((subcategory, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredSubcategory(subcategory.name)}
                onMouseLeave={() => setHoveredSubcategory(null)}
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={subcategory.href}
                    className="block py-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    {subcategory.name}
                  </Link>
                  {subcategory.subItems && subcategory.subItems.length > 0 && (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>

                {/* Nested Submenu */}
                {subcategory.subItems && subcategory.subItems.length > 0 && hoveredSubcategory === subcategory.name && (
                  <div className="absolute left-full top-0 z-50 min-w-[200px] rounded-md border bg-background shadow-lg -mt-1 ml-1">
                    <div className="p-2">
                      <Link
                        href={subcategory.href}
                        className="block px-3 py-1.5 text-sm font-medium hover:bg-muted hover:text-primary transition-colors"
                      >
                        All {subcategory.name}
                      </Link>
                      <div className="my-1 h-px bg-muted"></div>
                      <div className="grid gap-1">
                        {subcategory.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-3 py-1.5 text-sm hover:bg-muted hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
