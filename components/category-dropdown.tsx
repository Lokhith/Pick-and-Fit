"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface Subcategory {
  name: string
  href: string
  subItems?: {
    name: string
    href: string
  }[]
}

interface CategoryDropdownProps {
  name: string
  subcategories: Subcategory[]
  href: string
}

export default function CategoryDropdown({ name, subcategories, href }: CategoryDropdownProps) {
  return (
    <div className="group relative">
      <div className="flex items-center gap-1 py-1.5">
        <Link href={href} className="text-sm font-medium transition-colors group-hover:text-primary relative">
          {name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 text-muted-foreground group-hover:text-primary" />
      </div>

      {/* Dropdown menu */}
      <div className="absolute left-0 top-full z-50 hidden rounded-md border bg-background shadow-md group-hover:block transform origin-top opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
        <div className="grid gap-0.5 p-1.5">
          <Link
            href={href}
            className="block rounded-sm px-3 py-1.5 text-sm font-medium hover:bg-muted hover:text-primary transition-colors whitespace-nowrap"
          >
            All {name}
          </Link>
          <div className="my-1 h-px bg-muted"></div>

          {subcategories.map((subcategory, index) => (
            <div key={index} className="relative group/sub">
              <Link
                href={subcategory.href}
                className="block rounded-sm px-3 py-1.5 text-sm hover:bg-muted hover:text-primary transition-colors whitespace-nowrap flex items-center justify-between"
              >
                {subcategory.name}
                {subcategory.subItems && subcategory.subItems.length > 0 && (
                  <ChevronDown className="h-3 w-3 ml-2 transition-transform duration-200 group-hover/sub:rotate-[-90deg]" />
                )}
              </Link>

              {subcategory.subItems && subcategory.subItems.length > 0 && (
                <div className="absolute left-full top-0 z-50 hidden rounded-md border bg-background shadow-md group-hover/sub:block transform origin-top-left opacity-0 scale-95 group-hover/sub:opacity-100 group-hover/sub:scale-100 transition-all duration-200 min-w-[150px]">
                  <div className="grid gap-0.5 p-1.5">
                    <Link
                      href={subcategory.href}
                      className="block rounded-sm px-3 py-1.5 text-sm font-medium hover:bg-muted hover:text-primary transition-colors whitespace-nowrap"
                    >
                      All {subcategory.name}
                    </Link>
                    <div className="my-1 h-px bg-muted"></div>
                    {subcategory.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block rounded-sm px-3 py-1.5 text-sm hover:bg-muted hover:text-primary transition-colors whitespace-nowrap"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
