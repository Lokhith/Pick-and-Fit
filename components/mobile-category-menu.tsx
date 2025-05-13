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
  const [openSubcategory, setOpenSubcategory] = useState<string | null>(null)

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName)
    setOpenSubcategory(null) // Close any open subcategory when toggling category
  }

  const toggleSubcategory = (subcategoryName: string) => {
    setOpenSubcategory(openSubcategory === subcategoryName ? null : subcategoryName)
  }

  return (
    <div className="flex flex-col gap-1 py-4 overflow-y-auto max-h-[60vh]">
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
                <div key={subcategory.name} className="mb-3">
                  <div className="flex items-center justify-between">
                    <Link
                      href={subcategory.href}
                      className="py-1 text-sm font-medium hover:text-foreground"
                      onClick={onClose}
                    >
                      {subcategory.name}
                    </Link>
                    {subcategory.subItems && subcategory.subItems.length > 0 && (
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          toggleSubcategory(subcategory.name)
                        }}
                        className="p-1"
                        aria-expanded={openSubcategory === subcategory.name}
                      >
                        {openSubcategory === subcategory.name ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>

                  {subcategory.subItems && subcategory.subItems.length > 0 && openSubcategory === subcategory.name && (
                    <div className="grid grid-cols-2 gap-x-2 ml-4 pt-1 border-l border-gray-100 pl-2 mt-1">
                      {subcategory.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="py-1 text-xs text-muted-foreground hover:text-foreground"
                          onClick={onClose}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
