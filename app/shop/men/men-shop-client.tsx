"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Define the product type
interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  category: string
  subcategory: string
  rating: number
  tags?: string[]
}

// Define the selected subcategory type that includes the parent category
interface SelectedSubcategory {
  category: string
  subcategory: string
}

// Sample men's products data
const menProducts: Product[] = [
  {
    id: "classic-white-t-shirt",
    name: "Classic White T-Shirt",
    price: 599,
    originalPrice: 999,
    image: "/classic-white-t-shirt.png",
    category: "casual",
    subcategory: "tshirts",
    rating: 4.5,
    tags: ["Best Seller"],
  },
  {
    id: "mens-casual-tshirt",
    name: "Men's Casual T-Shirt",
    price: 699,
    originalPrice: 1199,
    image: "/mens-casual-tshirt.png",
    category: "casual",
    subcategory: "tshirts",
    rating: 4.4,
    tags: ["New Arrival"],
  },
  {
    id: "mens-white-shirt",
    name: "Men's White Formal Shirt",
    price: 899,
    originalPrice: 1799,
    image: "/mens-white-shirt-fashion.png",
    category: "formal",
    subcategory: "shirts",
    rating: 4.6,
    tags: ["Premium"],
  },
  {
    id: "mens-slim-fit-jeans",
    name: "Men's Slim Fit Jeans",
    price: 1299,
    originalPrice: 2499,
    image: "/mens-slim-fit-jeans.png",
    category: "casual",
    subcategory: "jeans",
    rating: 4.5,
  },
  {
    id: "mens-formal-pants",
    name: "Men's Formal Pants",
    price: 1499,
    originalPrice: 2999,
    image: "/formal-pants.png",
    category: "formal",
    subcategory: "pants",
    rating: 4.3,
    tags: ["Best Seller"],
  },
  {
    id: "mens-oversized-shirt",
    name: "Men's Oversized Shirt",
    price: 899,
    originalPrice: 1799,
    image: "/mens-oversized-shirt-fashion.png",
    category: "oversized",
    subcategory: "shirts",
    rating: 4.7,
    tags: ["Trending"],
  },
  {
    id: "mens-baggy-pants",
    name: "Men's Baggy Pants",
    price: 1199,
    originalPrice: 2399,
    image: "/mens-baggy-pants-fashion.png",
    category: "oversized",
    subcategory: "pants",
    rating: 4.4,
  },
  {
    id: "mens-round-neck-tshirt",
    name: "Men's Round Neck T-Shirt",
    price: 649,
    originalPrice: 1299,
    image: "/men-round-neck-t-shirt.png",
    category: "casual",
    subcategory: "tshirts",
    rating: 4.2,
  },
  {
    id: "mens-oversized-hoodie",
    name: "Men's Oversized Hoodie",
    price: 1599,
    originalPrice: 3199,
    image: "/men-oversized-hoodie.png",
    category: "oversized",
    subcategory: "hoodies",
    rating: 4.8,
    tags: ["Hot"],
  },
  {
    id: "mens-white-vest",
    name: "Men's White Vest",
    price: 399,
    originalPrice: 799,
    image: "/men-white-vest-innerwear.png",
    category: "innerwear",
    subcategory: "vests",
    rating: 4.1,
  },
  {
    id: "mens-gym-tank",
    name: "Men's Gym Tank Top",
    price: 599,
    originalPrice: 1199,
    image: "/men-gym-tank-top.png",
    category: "innerwear",
    subcategory: "vests",
    rating: 4.6,
    tags: ["Gym Wear"],
  },
  {
    id: "mens-briefs",
    name: "Men's Briefs",
    price: 499,
    originalPrice: 999,
    image: "/men-briefs-fashion.png",
    category: "innerwear",
    subcategory: "briefs",
    rating: 4.3,
    tags: ["Pack of 3"],
  },
]

// Define the categories and their subcategories
const categories = [
  {
    name: "casual",
    label: "Casual Wear",
    subcategories: [
      { name: "tshirts", label: "T-Shirts" },
      { name: "shirts", label: "Shirts" },
      { name: "jeans", label: "Jeans" },
    ],
  },
  {
    name: "formal",
    label: "Formal Wear",
    subcategories: [
      { name: "shirts", label: "Shirts" },
      { name: "pants", label: "Pants" },
    ],
  },
  {
    name: "oversized",
    label: "Oversized",
    subcategories: [
      { name: "shirts", label: "Shirts" },
      { name: "pants", label: "Pants" },
      { name: "hoodies", label: "Hoodies" },
    ],
  },
  {
    name: "innerwear",
    label: "Innerwear",
    subcategories: [
      { name: "vests", label: "Vests" },
      { name: "briefs", label: "Briefs" },
    ],
  },
]

export default function MenShopClient() {
  // State for selected categories and subcategories
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSubcategories, setSelectedSubcategories] = useState<SelectedSubcategory[]>([])
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  // State for price range
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])

  // State for sorting
  const [sortOption, setSortOption] = useState<string>("featured")

  // Toggle category selection
  const toggleCategory = (category: string) => {
    // Toggle category selection
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
      // Remove all subcategories of this category
      setSelectedSubcategories(selectedSubcategories.filter((sc) => sc.category !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }

    // Toggle category expansion
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category))
    } else {
      setExpandedCategories([...expandedCategories, category])
    }
  }

  // Toggle subcategory selection
  const toggleSubcategory = (category: string, subcategory: string) => {
    const selectedSubcat = { category, subcategory }
    const isSelected = isSubcategorySelected(category, subcategory)

    if (isSelected) {
      // Remove the subcategory
      setSelectedSubcategories(
        selectedSubcategories.filter((sc) => !(sc.category === category && sc.subcategory === subcategory)),
      )
    } else {
      // Add the subcategory and ensure its parent category is selected
      setSelectedSubcategories([...selectedSubcategories, selectedSubcat])
      if (!selectedCategories.includes(category)) {
        setSelectedCategories([...selectedCategories, category])
      }
    }
  }

  // Check if a subcategory is selected
  const isSubcategorySelected = (category: string, subcategory: string) => {
    return selectedSubcategories.some((sc) => sc.category === category && sc.subcategory === subcategory)
  }

  // Remove a filter
  const removeFilter = (filter: string, type: "category" | "subcategory", category?: string) => {
    if (type === "category") {
      setSelectedCategories(selectedCategories.filter((c) => c !== filter))
      // Also remove all subcategories of this category
      setSelectedSubcategories(selectedSubcategories.filter((sc) => sc.category !== filter))
    } else if (type === "subcategory" && category) {
      setSelectedSubcategories(
        selectedSubcategories.filter((sc) => !(sc.category === category && sc.subcategory === filter)),
      )
    }
  }

  // Filter products based on selected categories, subcategories, and price range
  const filteredProducts = menProducts.filter((product) => {
    // Check if the product's price is within the selected range
    const isPriceInRange = product.price >= priceRange[0] && product.price <= priceRange[1]

    // If no categories are selected, show all products in the price range
    if (selectedCategories.length === 0) {
      return isPriceInRange
    }

    // Check if the product's category is selected
    const isCategorySelected = selectedCategories.includes(product.category)

    // Get all subcategories selected for this product's category
    const selectedSubcatsForCategory = selectedSubcategories.filter((sc) => sc.category === product.category)

    // If the category is selected but no subcategories are selected for it,
    // show all products in that category
    if (isCategorySelected && selectedSubcatsForCategory.length === 0) {
      return isPriceInRange
    }

    // If subcategories are selected for this category, check if the product's
    // subcategory is among the selected ones
    const isSubcategorySelected = selectedSubcatsForCategory.some((sc) => sc.subcategory === product.subcategory)

    // For categories with selected subcategories, only show products that match
    // those specific subcategories
    if (isCategorySelected && selectedSubcatsForCategory.length > 0) {
      return isPriceInRange && isSubcategorySelected
    }

    // For categories without selected subcategories, show all products in those categories
    return isPriceInRange && isCategorySelected
  })

  // Sort the filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return a.price - b.price
      case "price-high-low":
        return b.price - a.price
      case "newest":
        return 0 // In a real app, you would sort by date
      case "rating":
        return b.rating - a.rating
      default:
        return 0 // Featured or default sorting
    }
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Men's Collection</h1>

      {/* Active filters */}
      {(selectedCategories.length > 0 || selectedSubcategories.length > 0) && (
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Active Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category) => {
              // Only show category as a filter if it has no selected subcategories
              const hasSelectedSubcategories = selectedSubcategories.some((sc) => sc.category === category)
              if (!hasSelectedSubcategories) {
                const categoryLabel = categories.find((c) => c.name === category)?.label || category
                return (
                  <Badge key={category} variant="outline" className="flex items-center gap-1 px-3 py-1">
                    {categoryLabel}
                    <button
                      onClick={() => removeFilter(category, "category")}
                      className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )
              }
              return null
            })}

            {selectedSubcategories.map((sc) => {
              const categoryLabel = categories.find((c) => c.name === sc.category)?.label || sc.category
              const subcategoryLabel =
                categories.find((c) => c.name === sc.category)?.subcategories.find((s) => s.name === sc.subcategory)
                  ?.label || sc.subcategory
              return (
                <Badge
                  key={`${sc.category}-${sc.subcategory}`}
                  variant="outline"
                  className="flex items-center gap-1 px-3 py-1"
                >
                  {`${categoryLabel}: ${subcategoryLabel}`}
                  <button
                    onClick={() => removeFilter(sc.subcategory, "subcategory", sc.category)}
                    className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )
            })}

            <button
              onClick={() => {
                setSelectedCategories([])
                setSelectedSubcategories([])
              }}
              className="text-sm text-blue-600 hover:underline"
            >
              Clear All
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters sidebar */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.name}`}
                        checked={selectedCategories.includes(category.name)}
                        onCheckedChange={() => toggleCategory(category.name)}
                      />
                      <Label htmlFor={`category-${category.name}`} className="text-sm font-medium cursor-pointer">
                        {category.label}
                      </Label>
                    </div>
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      {expandedCategories.includes(category.name) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {/* Subcategories */}
                  {expandedCategories.includes(category.name) && (
                    <div className="ml-6 space-y-1 border-l-2 pl-2">
                      {category.subcategories.map((subcategory) => (
                        <div key={subcategory.name} className="flex items-center space-x-2">
                          <Checkbox
                            id={`${category.name}-${subcategory.name}`}
                            checked={isSubcategorySelected(category.name, subcategory.name)}
                            onCheckedChange={() => toggleSubcategory(category.name, subcategory.name)}
                          />
                          <Label htmlFor={`${category.name}-${subcategory.name}`} className="text-sm cursor-pointer">
                            {subcategory.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Price Range</h3>
            <div className="px-2">
              <Slider
                defaultValue={[0, 5000]}
                max={5000}
                step={100}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="mb-6"
              />
              <div className="flex items-center justify-between">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">{sortedProducts.length} products</p>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-md px-3 py-1.5 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice > product.price && (
                      <Badge className="absolute top-2 right-2 bg-red-500 text-white border-0">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                    {product.tags && product.tags.length > 0 && (
                      <Badge className="absolute top-2 left-2 bg-black/70 text-white border-0">{product.tags[0]}</Badge>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium truncate">{product.name}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <div>
                        <span className="font-semibold">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="h-3 w-3 fill-yellow-400 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="text-xs">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No products match your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedSubcategories([])
                  setPriceRange([0, 5000])
                }}
                className="mt-4 text-blue-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
