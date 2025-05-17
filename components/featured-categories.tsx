"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import RibbonOfferTag from "@/components/ribbon-offer-tag"
import "../app/category-animations.css"

export default function FeaturedCategories() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const mainCategories = [
    {
      name: "Men",
      image: "/mens-white-shirt-fashion.png",
      href: "/men",
      discount: "Upto 70% OFF",
      variant: "primary" as const,
    },
    {
      name: "Women",
      image: "/women-casual-shirt-fashion.png",
      href: "/women",
      discount: "Upto 70% OFF",
      variant: "secondary" as const,
    },
    {
      name: "Kids",
      image: "/stylish-kids.png",
      href: "/kids",
      discount: "Upto 70% OFF",
      variant: "accent" as const,
    },
    {
      name: "Beauty",
      image: "/moisturizer-skincare-product.png",
      href: "/beauty",
      discount: "Upto 70% OFF",
      variant: "warning" as const,
    },
  ]

  return (
    <div className="relative overflow-hidden py-6">
      {/* Minimal background design */}
      <div className="absolute inset-0 bg-blue-50/70 dark:bg-blue-950/10">
        {/* Subtle pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-blue-500"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-blue-500"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-blue-500"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Single blue color heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black mb-2 relative inline-block">
            {/* Fixed blue color */}
            <span className="text-blue-600">SHOP BY CATEGORY</span>

            {/* Matching underline */}
            <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-blue-600 rounded-full"></span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-2">
            Discover our exclusive collection of premium products curated just for you
          </p>
        </div>

        {/* Category cards with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainCategories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl border dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white dark:bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Enhanced Ribbon Offer Tag */}
                  <RibbonOfferTag discount={category.discount} variant={category.variant} />

                  {/* Category name with enhanced styling */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-foreground transition-colors">
                      {category.name}
                    </h3>
                    <div className="w-10 h-1 bg-white rounded-full mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
