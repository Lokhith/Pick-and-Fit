"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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

interface BeautyMegaMenuProps {
  name: string
  subcategories: Subcategory[]
  href: string
}

export default function BeautyMegaMenu({ name, subcategories, href }: BeautyMegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="flex items-center gap-1 py-1.5">
        <Link href={href} className="text-sm font-medium transition-colors group-hover:text-primary relative">
          {name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 text-muted-foreground group-hover:text-primary" />
      </div>

      {/* Beauty Mega Menu */}
      <div
        className={`absolute left-0 top-full z-50 w-screen max-w-screen-xl bg-white dark:bg-gray-950 rounded-md border shadow-lg transform origin-top transition-all duration-200 ${
          isOpen || "group-hover:opacity-100 group-hover:scale-100"
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Left column: Categories */}
          <div className="space-y-6">
            <div>
              <Link href={href} className="text-lg font-semibold text-primary hover:underline">
                All {name}
              </Link>
            </div>

            {subcategories.map((category, index) => (
              <div key={index}>
                <Link href={category.href} className="font-medium text-foreground hover:text-primary transition-colors">
                  {category.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Middle column: Subcategories */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {subcategories.map(
              (category, index) =>
                category.subItems &&
                category.subItems.length > 0 && (
                  <div key={index} className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">{category.name}</h4>
                    <ul className="space-y-1">
                      {category.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
            )}
          </div>

          {/* Right column: Featured products */}
          <div className="space-y-4">
            <h4 className="font-medium">Featured Products</h4>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/shop/beauty/skincare/serum" className="group block">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src="/vitamin-c-serum-product.png"
                    alt="Vitamin C Serum"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-1 text-xs">Vitamin C Serum</p>
              </Link>
              <Link href="/shop/beauty/makeup/lipstick" className="group block">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src="/matte-lipstick-product.png"
                    alt="Matte Lipstick"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-1 text-xs">Matte Lipstick</p>
              </Link>
              <Link href="/shop/beauty/men-grooming/beard-essentials" className="group block">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src="/beard-oil-product.png"
                    alt="Beard Oil"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-1 text-xs">Beard Oil</p>
              </Link>
              <Link href="/shop/beauty/haircare/shampoo" className="group block">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src="/shampoo-haircare-product.png"
                    alt="Anti-Dandruff Shampoo"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-1 text-xs">Anti-Dandruff Shampoo</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom promotional banner */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-b-md border-t">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">New Beauty Arrivals</p>
            <Link href="/shop/beauty/new-arrivals" className="text-xs text-primary hover:underline">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
