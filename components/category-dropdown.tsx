"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface Subcategory {
  name: string
  href: string
}

interface CategoryDropdownProps {
  name: string
  subcategories: Subcategory[]
  href: string
}

export default function CategoryDropdown({ name, subcategories, href }: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link href={href} className="block px-4 py-2 text-sm hover:bg-muted" onClick={() => setIsOpen(false)}>
              All {name}
            </Link>
            {subcategories.map((subcategory, index) => (
              <Link
                key={index}
                href={subcategory.href}
                className="block px-4 py-2 text-sm hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {subcategory.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
