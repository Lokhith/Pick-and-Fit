"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"

interface Subcategory {
  name: string
  href: string
}

interface Category {
  name: string
  href: string
  subcategories: Subcategory[]
}

interface MobileCategoryMenuProps {
  categories: Category[]
  onClose: () => void
}

export default function MobileCategoryMenu({ categories, onClose }: MobileCategoryMenuProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName)
  }

  return (
    <div className="flex flex-col gap-1 py-4">
      {categories.map((category) => (
        <div key={category.name} className="border-b border-gray-100 pb-2">
          <div className="flex items-center justify-between">
            <Link href={category.href} className="py-2 text-base font-medium" onClick={onClose}>
              {category.name}
            </Link>
            <button
              onClick={() => toggleCategory(category.name)}
              className="p-2"
              aria-expanded={openCategory === category.name}
              aria-controls={`category-${category.name}`}
            >
              {openCategory === category.name ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
          </div>

          {openCategory === category.name && (
            <div id={`category-${category.name}`} className="ml-4 flex flex-col gap-2 pt-2">
              {category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.name}
                  href={subcategory.href}
                  className="py-1 text-sm text-muted-foreground hover:text-foreground"
                  onClick={onClose}
                >
                  {subcategory.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
