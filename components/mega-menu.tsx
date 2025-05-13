"use client"

import { useState } from "react"
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

interface MegaMenuProps {
  name: string
  subcategories: Subcategory[]
  href: string
}

export default function MegaMenu({ name, subcategories, href }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Group subcategories into columns (max 6 items per column)
  const columns = []
  const itemsPerColumn = 6

  for (let i = 0; i < subcategories.length; i += itemsPerColumn) {
    columns.push(subcategories.slice(i, i + itemsPerColumn))
  }

  return (
    <div className="group relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="flex items-center gap-1 py-1.5">
        <Link href={href} className="text-sm font-medium transition-colors group-hover:text-primary relative">
          {name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 text-muted-foreground group-hover:text-primary" />
      </div>

      {/* Mega Menu */}
      <div
        className={`absolute left-0 top-full z-50 w-screen max-w-screen-xl bg-white dark:bg-gray-950 rounded-md border shadow-lg transform origin-top transition-all duration-200 ${
          isOpen || "group-hover:opacity-100 group-hover:scale-100"
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
          {/* All Category Link */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 mb-2">
            <Link href={href} className="text-lg font-semibold text-primary hover:underline">
              All {name}
            </Link>
          </div>

          {/* Columns of subcategories */}
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-6">
              {column.map((subcategory, index) => (
                <div key={index}>
                  <Link
                    href={subcategory.href}
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {subcategory.name}
                  </Link>

                  {subcategory.subItems && subcategory.subItems.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {subcategory.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors pl-2 border-l border-gray-200 dark:border-gray-800 ml-1"
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

        {/* Featured or promotional content could go here */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-b-md border-t">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">New Arrivals</p>
            <Link href={`${href}/new-arrivals`} className="text-xs text-primary hover:underline">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
