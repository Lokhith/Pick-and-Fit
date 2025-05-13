"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface SubItem {
  name: string
  href: string
}

interface Subcategory {
  name: string
  href: string
  subItems?: SubItem[]
}

interface HierarchicalDropdownProps {
  name: string
  subcategories: Subcategory[]
  href: string
}

export default function HierarchicalDropdown({ name, subcategories, href }: HierarchicalDropdownProps) {
  // Calculate optimal column count based on number of subcategories
  // For larger categories like Men and Women, we'll use more columns
  const columnCount = Math.min(6, Math.max(3, Math.ceil(subcategories.length / 3)))

  // Group subcategories into columns
  const columns: Subcategory[][] = Array.from({ length: columnCount }, () => [])

  // Distribute subcategories across columns in a top-to-bottom fashion
  subcategories.forEach((subcategory, index) => {
    const columnIndex = index % columnCount
    columns[columnIndex].push(subcategory)
  })

  return (
    <div className="group relative">
      <div className="flex items-center gap-1 py-1.5">
        <Link href={href} className="text-sm font-medium transition-colors group-hover:text-primary relative">
          {name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 text-muted-foreground group-hover:text-primary" />
      </div>

      {/* Hierarchical Dropdown Menu - only visible on hover */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 hidden min-w-[1000px] max-w-[1200px] rounded-md border bg-background shadow-lg group-hover:block transform origin-top opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
        <div className="p-4">
          <Link href={href} className="block text-lg font-semibold text-primary hover:underline mb-2">
            All {name}
          </Link>

          <div className="flex gap-x-8">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="flex-1">
                {column.map((subcategory, index) => (
                  <div key={index} className="mb-0">
                    <Link
                      href={subcategory.href}
                      className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {subcategory.name}
                    </Link>

                    {subcategory.subItems && subcategory.subItems.length > 0 && (
                      <ul className="space-y-0.5 border-l border-gray-200 dark:border-gray-800 pl-3 mb-1">
                        {subcategory.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
