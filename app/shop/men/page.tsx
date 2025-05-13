"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, Grid3X3, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock product data (simplified version)
const mockProducts = [
  // Men's products
  {
    id: 1,
    name: "Classic White Shirt",
    price: 1299,
    image: "/mens-white-shirt-fashion.png",
    category: "casual-wear",
    subcategory: "shirts",
    gender: "men",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 1499,
    image: "/mens-slim-fit-jeans.png",
    category: "casual-wear",
    subcategory: "pants",
    gender: "men",
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: 799,
    image: "/mens-casual-tshirt-fashion.png",
    category: "casual-wear",
    subcategory: "t-shirts",
    gender: "men",
  },
  {
    id: 4,
    name: "Formal Shirt",
    price: 1599,
    image: "/mens-formal-shirt-fashion.png",
    category: "formal-wear",
    subcategory: "shirts",
    gender: "men",
  },
  {
    id: 5,
    name: "Formal Pants",
    price: 1899,
    image: "/mens-formal-pants-fashion.png",
    category: "formal-wear",
    subcategory: "pants",
    gender: "men",
  },
  {
    id: 6,
    name: "Oversized Shirt",
    price: 1399,
    image: "/mens-oversized-shirt-fashion.png",
    category: "oversized-fit",
    subcategory: "shirts",
    gender: "men",
  },
  {
    id: 7,
    name: "Oversized Pants",
    price: 1699,
    image: "/mens-baggy-pants-fashion.png",
    category: "oversized-fit",
    subcategory: "pants",
    gender: "men",
  },
  {
    id: 8,
    name: "Polo T-Shirt",
    price: 999,
    image: "/placeholder.svg?key=lbwjl",
    category: "oversized-fit",
    subcategory: "polo-t-shirts",
    gender: "men",
  },
  {
    id: 9,
    name: "Round Neck T-Shirt",
    price: 899,
    image: "/men-round-neck-t-shirt.png",
    category: "oversized-fit",
    subcategory: "round-neck-t-shirts",
    gender: "men",
  },
  {
    id: 10,
    name: "Oversized Hoodie",
    price: 1899,
    image: "/men-oversized-hoodie.png",
    category: "oversized-fit",
    subcategory: "hoodies",
    gender: "men",
  },
  {
    id: 11,
    name: "Vest",
    price: 499,
    image: "/men-white-vest-innerwear.png",
    category: "innerwear",
    subcategory: "vests",
    gender: "men",
  },
  {
    id: 12,
    name: "Gym Vest",
    price: 599,
    image: "/men-gym-tank-top.png",
    category: "innerwear",
    subcategory: "gym-vests",
    gender: "men",
  },
  {
    id: 13,
    name: "Briefs",
    price: 399,
    image: "/men-briefs-fashion.png",
    category: "innerwear",
    subcategory: "briefs",
    gender: "men",
  },
]

// Category structure for filters
const categoryFilters = {
  "casual-wear": "Casual Wear",
  "formal-wear": "Formal Wear",
  "oversized-fit": "Oversized Fit",
  innerwear: "Innerwear",
  footwear: "Footwear",
  accessories: "Accessories",
  "western-wear": "Western Wear",
  "night-lounge-wear": "Night and Lounge Wear",
  "ethnic-festive": "Ethnic and Festive",
}

export default function MenShopPage() {
  const [products, setProducts] = useState(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [sortBy, setSortBy] = useState<string>("featured")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [activeTab, setActiveTab] = useState<string>("all")

  // Filter products based on selected criteria
  useEffect(() => {
    let filtered = [...products]

    // Filter by gender (always men for this page)
    filtered = filtered.filter((product) => product.gender === "men")

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category))
    }

    // Filter by active tab (if not "all")
    if (activeTab !== "all") {
      filtered = filtered.filter((product) => product.category === activeTab)
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Sort products
    if (sortBy === "price-low-high") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high-low") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === "newest") {
      // In a real app, you would sort by date
      filtered.sort((a, b) => b.id - a.id)
    }

    setFilteredProducts(filtered)
  }, [products, selectedCategories, priceRange, sortBy, activeTab])

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category],
    )
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 5000])
    setActiveTab("all")
  }

  return (
    <div className="container px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-6">
        <ol className="flex flex-wrap items-center text-sm">
          <li className="flex items-center">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2 text-muted-foreground">/</span>
            <Link href="/shop" className="text-muted-foreground hover:text-foreground">
              Shop
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="font-medium">Men</span>
          </li>
        </ol>
      </nav>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Men's Collection</h1>
        <p className="mt-2 text-muted-foreground">
          {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} available
        </p>
      </div>

      {/* Category Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="mb-4 flex w-full flex-wrap justify-start gap-2">
          <TabsTrigger value="all">All Categories</TabsTrigger>
          {Object.entries(categoryFilters).map(([key, value]) => (
            <TabsTrigger key={key} value={key}>
              {value}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Mobile Filter Button */}
      <div className="flex items-center justify-between mb-6 md:hidden">
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85vw] sm:w-[350px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>

              {/* Mobile Filters */}
              <div className="flex-1 overflow-y-auto">
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    {Object.entries(categoryFilters).map(([key, value]) => (
                      <div key={key} className="flex items-center">
                        <Checkbox
                          id={`mobile-${key}`}
                          checked={selectedCategories.includes(key)}
                          onCheckedChange={() => toggleCategory(key)}
                        />
                        <label htmlFor={`mobile-${key}`} className="ml-2 text-sm cursor-pointer">
                          {value}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 5000]}
                      max={5000}
                      step={100}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      className="mb-4"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">₹{priceRange[0]}</span>
                      <span className="text-sm">₹{priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <Button className="w-full" onClick={() => setIsFilterOpen(false)}>
                  Apply Filters
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2">
          <select
            className="text-sm border rounded-md px-2 py-1"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>

          <div className="flex border rounded-md overflow-hidden">
            <button className={`p-1 ${viewMode === "grid" ? "bg-muted" : ""}`} onClick={() => setViewMode("grid")}>
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button className={`p-1 ${viewMode === "list" ? "bg-muted" : ""}`} onClick={() => setViewMode("list")}>
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar Filters */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-[calc(14rem+1px)]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                {Object.entries(categoryFilters).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <Checkbox
                      id={key}
                      checked={selectedCategories.includes(key)}
                      onCheckedChange={() => toggleCategory(key)}
                    />
                    <label htmlFor={key} className="ml-2 text-sm cursor-pointer">
                      {value}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3">Price Range</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[0, 5000]}
                  max={5000}
                  step={100}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  className="mb-4"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm">₹{priceRange[0]}</span>
                  <span className="text-sm">₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Desktop Sort and View Options */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm">Sort by:</span>
              <select
                className="text-sm border rounded-md px-2 py-1"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>

            <div className="flex border rounded-md overflow-hidden">
              <button className={`p-1 ${viewMode === "grid" ? "bg-muted" : ""}`} onClick={() => setViewMode("grid")}>
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button className={`p-1 ${viewMode === "list" ? "bg-muted" : ""}`} onClick={() => setViewMode("list")}>
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-lg font-medium mb-4">No products found</p>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search criteria</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-3 gap-4" : "space-y-4"}>
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  {viewMode === "grid" ? (
                    <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                      <CardContent className="p-3">
                        <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                        <p className="mt-1 font-medium text-sm">₹{product.price.toLocaleString("en-IN")}</p>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <div className="flex">
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="128px"
                          />
                        </div>
                        <CardContent className="p-3 flex-1">
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="mt-1 font-medium">₹{product.price.toLocaleString("en-IN")}</p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {categoryFilters[product.category as keyof typeof categoryFilters]}
                          </p>
                        </CardContent>
                      </div>
                    </Card>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
