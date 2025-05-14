"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightHeading from "@/components/spotlight-heading"

// Flash deals products with high discounts
const flashDeals = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    image: "/mens-casual-tshirt-fashion.png",
    originalPrice: 1299,
    discountedPrice: 399,
    discount: 70,
    href: "/flash-deals/premium-cotton-tshirt",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Oversized Hoodie",
    image: "/oversized-hoodie-fashion.png",
    originalPrice: 2499,
    discountedPrice: 749,
    discount: 70,
    href: "/flash-deals/oversized-hoodie",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Formal Shirt",
    image: "/mens-formal-shirt-fashion.png",
    originalPrice: 1899,
    discountedPrice: 569,
    discount: 70,
    href: "/flash-deals/formal-shirt",
    tag: "Limited",
  },
  {
    id: 4,
    name: "Slim Fit Jeans",
    image: "/mens-slim-fit-jeans.png",
    originalPrice: 2199,
    discountedPrice: 659,
    discount: 70,
    href: "/flash-deals/slim-fit-jeans",
    tag: "Hot Deal",
  },
]

export default function FlashDeals() {
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

  return (
    <div className="relative">
      {/* Enhanced Flash Deals Heading with icons */}
      <SpotlightHeading
        title="FLASH DEALS"
        subtitle="Exclusive offers at unbelievable prices - Limited time only!"
        variant="secondary"
        boldLevel="ultra"
        compact={true}
        showIcon={true}
        iconPosition="both"
      />

      <div className="container mx-auto px-4 pb-16 pt-4">
        {/* Enhanced Flash deals label */}
        <div className="flex justify-center -mt-4 mb-8">
          <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-6 py-2 rounded-full shadow-lg flex items-center transform hover:scale-105 transition-transform duration-300">
            <Zap className="w-5 h-5 mr-2" />
            <span className="font-bold text-lg">UP TO 70% OFF</span>
            <Zap className="w-5 h-5 ml-2" />
          </div>
        </div>

        {/* Lightning bolts decoration */}
        <div className="relative">
          <div className="absolute -top-4 left-4 text-amber-500 transform rotate-12 opacity-70">
            <Zap className="w-8 h-8" />
          </div>
          <div className="absolute -top-4 right-4 text-amber-500 transform -rotate-12 opacity-70">
            <Zap className="w-8 h-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashDeals.map((product, index) => (
            <Link
              key={product.id}
              href={product.href}
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {/* Premium tag */}
                <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-amber-400 to-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {product.tag}
                </div>

                {/* Enhanced Discount badge with lightning icon */}
                <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-full flex items-center">
                  <Zap className="w-3 h-3 mr-1" />
                  {product.discount}% OFF
                </div>

                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Quick view button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 dark:bg-black/80 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                    {product.name}
                  </h3>

                  <div className="mt-2 flex items-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">₹{product.discountedPrice}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    <span className="ml-auto text-xs text-red-600 font-medium flex items-center">
                      <Zap className="w-3 h-3 mr-1" />
                      Limited Stock
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="default"
            size="lg"
            className="font-medium relative overflow-hidden group bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <Link href="/flash-deals" className="flex items-center px-8 py-6">
              <Zap className="mr-2 h-5 w-5" />
              <span className="relative z-10">View All Flash Deals</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              <div className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
