"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Zap, Filter, ChevronDown, Sparkles, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Flash deal product type
type FlashDealProduct = {
  id: number
  name: string
  image: string
  originalPrice: number
  discountedPrice: number
  discount: number
  href: string
  tag: string
  rating: number
  reviews: number
}

// Flash deals products data - completely separate from category pages with unique images
const flashDealProducts: FlashDealProduct[] = [
  {
    id: 1,
    name: "Limited Edition Graphic Tee",
    image: "/flash-deal-graphic-tee.png",
    originalPrice: 1299,
    discountedPrice: 399,
    discount: 70,
    href: "/flash-deals/limited-graphic-tee",
    tag: "Best Seller",
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: "Designer Hoodie",
    image: "/flash-deal-designer-hoodie.png",
    originalPrice: 2499,
    discountedPrice: 749,
    discount: 70,
    href: "/flash-deals/designer-hoodie",
    tag: "Trending",
    rating: 4.6,
    reviews: 187,
  },
  {
    id: 3,
    name: "Premium Dress Shirt",
    image: "/flash-deal-premium-shirt.png",
    originalPrice: 1899,
    discountedPrice: 569,
    discount: 70,
    href: "/flash-deals/premium-dress-shirt",
    tag: "Limited",
    rating: 4.5,
    reviews: 156,
  },
  {
    id: 4,
    name: "Designer Denim Jeans",
    image: "/flash-deal-designer-jeans.png",
    originalPrice: 2199,
    discountedPrice: 659,
    discount: 70,
    href: "/flash-deals/designer-denim-jeans",
    tag: "Hot Deal",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 5,
    name: "Luxury Blouse",
    image: "/flash-deal-luxury-blouse.png",
    originalPrice: 1499,
    discountedPrice: 449,
    discount: 70,
    href: "/flash-deals/luxury-blouse",
    tag: "Must Have",
    rating: 4.9,
    reviews: 278,
  },
  {
    id: 6,
    name: "Designer Tee",
    image: "/flash-deal-designer-tee.png",
    originalPrice: 1099,
    discountedPrice: 329,
    discount: 70,
    href: "/flash-deals/designer-tee",
    tag: "Hot Deal",
    rating: 4.6,
    reviews: 142,
  },
  {
    id: 7,
    name: "Limited Edition Serum",
    image: "/flash-deal-luxury-serum.png",
    originalPrice: 1299,
    discountedPrice: 389,
    discount: 70,
    href: "/flash-deals/limited-serum",
    tag: "Bestseller",
    rating: 4.8,
    reviews: 324,
  },
  {
    id: 8,
    name: "Designer Kids Collection",
    image: "/flash-deal-kids-collection.png",
    originalPrice: 899,
    discountedPrice: 269,
    discount: 70,
    href: "/flash-deals/designer-kids-collection",
    tag: "Limited",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 9,
    name: "Premium Cosmetic Set",
    image: "/flash-deal-cosmetic-set.png",
    originalPrice: 999,
    discountedPrice: 299,
    discount: 70,
    href: "/flash-deals/premium-cosmetic-set",
    tag: "Trending",
    rating: 4.9,
    reviews: 216,
  },
  {
    id: 10,
    name: "Designer Skirt",
    image: "/flash-deal-designer-skirt.png",
    originalPrice: 1799,
    discountedPrice: 539,
    discount: 70,
    href: "/flash-deals/designer-skirt",
    tag: "Hot Pick",
    rating: 4.5,
    reviews: 124,
  },
]

export function FlashDealsPageClient() {
  const [sortOption, setSortOption] = useState("discount-high-to-low")

  // Sort products based on selected option
  const sortedProducts = [...flashDealProducts].sort((a, b) => {
    if (sortOption === "discount-high-to-low") {
      return b.discount - a.discount
    } else if (sortOption === "price-low-to-high") {
      return a.discountedPrice - b.discountedPrice
    } else if (sortOption === "price-high-to-low") {
      return b.discountedPrice - a.discountedPrice
    } else if (sortOption === "popularity") {
      return b.reviews - a.reviews
    }
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Flash deals banner */}
      <div className="relative mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-red-600 p-6 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-full">
              <Zap className="h-8 w-8 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Exclusive Flash Deals!</h3>
              <p className="text-white/90">Special products with massive discounts - only available here!</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Button className="bg-white hover:bg-gray-100 text-red-600 font-bold px-6" size="lg">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-white/10"></div>
      </div>

      {/* Sorting and filtering section */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-amber-500" />
          <span className="font-medium">
            <span className="font-bold">{flashDealProducts.length}</span> exclusive flash deals available
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                {sortOption === "discount-high-to-low" && "Discount: High to Low"}
                {sortOption === "price-low-to-high" && "Price: Low to High"}
                {sortOption === "price-high-to-low" && "Price: High to Low"}
                {sortOption === "popularity" && "Popularity"}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => setSortOption("discount-high-to-low")}>
                Discount: High to Low
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-low-to-high")}>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-high-to-low")}>Price: High to Low</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("popularity")}>Popularity</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <Link href={product.href} key={product.id} className="group">
            <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-800/30">
              <div className="relative">
                {/* Product image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                {/* Tag label */}
                <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-amber-400 to-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {product.tag}
                </div>

                {/* Discount badge */}
                <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-full flex items-center">
                  <Zap className="w-3 h-3 mr-1" />
                  {product.discount}% OFF
                </div>

                {/* Quick add button overlay */}
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-12 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
                  <Button
                    variant="secondary"
                    className="bg-white hover:bg-gray-100 text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
                  >
                    Quick Add
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                    {product.name}
                  </h3>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-1 flex items-center text-sm">
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 font-medium">{product.rating}</span>
                  </div>
                  <span className="mx-1.5 text-gray-500">·</span>
                  <span className="text-gray-500">{product.reviews} reviews</span>
                </div>

                <div className="mt-2 flex items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">₹{product.discountedPrice}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
