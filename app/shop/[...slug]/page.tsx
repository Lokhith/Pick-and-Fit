"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Filter, Grid3X3, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Mock product data
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
    image: "/placeholder.svg?height=400&width=300&query=oversized%20shirt%20for%20men%20fashion%20photography",
    category: "oversized-fit",
    subcategory: "shirts",
    gender: "men",
  },
  {
    id: 7,
    name: "Oversized Pants",
    price: 1699,
    image: "/placeholder.svg?height=400&width=300&query=oversized%20baggy%20pants%20for%20men%20fashion%20photography",
    category: "oversized-fit",
    subcategory: "pants",
    gender: "men",
  },
  {
    id: 8,
    name: "Polo T-Shirt",
    price: 999,
    image: "/placeholder.svg?height=400&width=300&query=men%20polo%20t-shirt%20with%20collar%20fashion%20photography",
    category: "oversized-fit",
    subcategory: "polo-t-shirts",
    gender: "men",
  },
  {
    id: 9,
    name: "Round Neck T-Shirt",
    price: 899,
    image: "/placeholder.svg?height=400&width=300&query=men%20round%20neck%20t-shirt%20casual%20fashion%20photography",
    category: "oversized-fit",
    subcategory: "round-neck-t-shirts",
    gender: "men",
  },
  {
    id: 10,
    name: "Oversized Hoodie",
    price: 1899,
    image: "/placeholder.svg?height=400&width=300&query=men%20oversized%20hoodie%20fashion%20photography",
    category: "oversized-fit",
    subcategory: "hoodies",
    gender: "men",
  },
  {
    id: 11,
    name: "Vest",
    price: 499,
    image: "/placeholder.svg?height=400&width=300&query=men%20white%20vest%20innerwear%20fashion%20photography",
    category: "innerwear",
    subcategory: "vests",
    gender: "men",
  },
  {
    id: 12,
    name: "Gym Vest",
    price: 599,
    image: "/placeholder.svg?height=400&width=300&query=men%20gym%20tank%20top%20athletic%20fashion%20photography",
    category: "innerwear",
    subcategory: "gym-vests",
    gender: "men",
  },
  {
    id: 13,
    name: "Briefs",
    price: 399,
    image: "/placeholder.svg?height=400&width=300&query=men%20briefs%20underwear%20fashion%20photography",
    category: "innerwear",
    subcategory: "briefs",
    gender: "men",
  },

  // Women's products
  {
    id: 14,
    name: "Formal Shirt",
    price: 1499,
    image: "/placeholder.svg?height=400&width=300&query=women%20formal%20shirt%20business%20fashion%20photography",
    category: "formal-wear",
    subcategory: "shirts",
    gender: "women",
  },
  {
    id: 15,
    name: "Formal Pants",
    price: 1799,
    image: "/placeholder.svg?height=400&width=300&query=women%20formal%20pants%20business%20fashion%20photography",
    category: "formal-wear",
    subcategory: "pants",
    gender: "women",
  },
  {
    id: 16,
    name: "Casual Shirt",
    price: 1299,
    image: "/placeholder.svg?height=400&width=300&query=women%20casual%20shirt%20fashion%20photography",
    category: "casual-wear",
    subcategory: "shirts",
    gender: "women",
  },
  {
    id: 17,
    name: "Casual Pants",
    price: 1399,
    image: "/placeholder.svg?height=400&width=300&query=women%20casual%20pants%20fashion%20photography",
    category: "casual-wear",
    subcategory: "pants",
    gender: "women",
  },
  {
    id: 18,
    name: "Casual T-Shirt",
    price: 899,
    image: "/placeholder.svg?height=400&width=300&query=women%20casual%20t-shirt%20fashion%20photography",
    category: "casual-wear",
    subcategory: "t-shirts",
    gender: "women",
  },
  {
    id: 19,
    name: "Oversized Shirt",
    price: 1399,
    image: "/placeholder.svg?height=400&width=300&query=women%20oversized%20shirt%20fashion%20photography",
    category: "oversized-fit",
    subcategory: "shirts",
    gender: "women",
  },
  {
    id: 20,
    name: "Oversized Pants",
    price: 1599,
    image: "/placeholder.svg?height=400&width=300&query=women%20oversized%20pants%20fashion%20photography",
    category: "oversized-fit",
    subcategory: "pants",
    gender: "women",
  },
  {
    id: 21,
    name: "Polo T-Shirt",
    price: 999,
    image: "/placeholder.svg?height=400&width=300&query=women%20polo%20t-shirt%20fashion%20photography",
    category: "oversized-fit",
    subcategory: "polo-t-shirts",
    gender: "women",
  },
  {
    id: 22,
    name: "Round Neck T-Shirt",
    price: 899,
    image: "/placeholder.svg?height=400&width=300&query=women%20round%20neck%20t-shirt%20fashion%20photography",
    category: "oversized-fit",
    subcategory: "round-neck-t-shirts",
    gender: "women",
  },
  {
    id: 23,
    name: "Oversized Hoodie",
    price: 1799,
    image: "/placeholder.svg?height=400&width=300&query=women%20oversized%20hoodie%20fashion%20photography",
    category: "oversized-fit",
    subcategory: "hoodies",
    gender: "women",
  },
  {
    id: 24,
    name: "Bra",
    price: 799,
    image: "/placeholder.svg?height=400&width=300&query=women%20bra%20lingerie%20fashion%20photography",
    category: "lingerie-innerwear",
    subcategory: "bra",
    gender: "women",
  },
  {
    id: 25,
    name: "Panties",
    price: 499,
    image: "/placeholder.svg?height=400&width=300&query=women%20panties%20lingerie%20fashion%20photography",
    category: "lingerie-innerwear",
    subcategory: "panties",
    gender: "women",
  },
  {
    id: 26,
    name: "Casual Shoes",
    price: 1999,
    image: "/placeholder.svg?height=400&width=300&query=women%20casual%20shoes%20fashion%20photography",
    category: "footwear",
    subcategory: "casual-shoes",
    gender: "women",
  },
  {
    id: 27,
    name: "Sport Shoes",
    price: 2499,
    image: "/placeholder.svg?height=400&width=300&query=women%20sport%20shoes%20athletic%20fashion%20photography",
    category: "footwear",
    subcategory: "sport-shoes",
    gender: "women",
  },
  {
    id: 28,
    name: "Flip Flops",
    price: 699,
    image: "/placeholder.svg?height=400&width=300&query=women%20flip%20flops%20fashion%20photography",
    category: "footwear",
    subcategory: "flip-flops-slippers",
    gender: "women",
  },
  {
    id: 29,
    name: "Heeled Sandals",
    price: 1899,
    image: "/placeholder.svg?height=400&width=300&query=women%20heeled%20sandals%20fashion%20photography",
    category: "footwear",
    subcategory: "heeled-sandals",
    gender: "women",
  },
  {
    id: 30,
    name: "Heeled Shoes",
    price: 2299,
    image: "/placeholder.svg?height=400&width=300&query=women%20heeled%20shoes%20fashion%20photography",
    category: "footwear",
    subcategory: "heeled-shoes",
    gender: "women",
  },
  {
    id: 31,
    name: "Sunglasses",
    price: 1299,
    image: "/placeholder.svg?height=400&width=300&query=women%20sunglasses%20fashion%20photography",
    category: "accessories",
    subcategory: "sunglasses",
    gender: "women",
  },
  {
    id: 32,
    name: "Wristwatch",
    price: 2499,
    image: "/placeholder.svg?height=400&width=300&query=women%20wristwatch%20fashion%20photography",
    category: "accessories",
    subcategory: "watches",
    gender: "women",
  },
  {
    id: 33,
    name: "Handbag",
    price: 1899,
    image: "/placeholder.svg?height=400&width=300&query=women%20handbag%20fashion%20photography",
    category: "accessories",
    subcategory: "bags",
    gender: "women",
  },
  {
    id: 34,
    name: "Leather Wallet",
    price: 999,
    image: "/placeholder.svg?height=400&width=300&query=women%20leather%20wallet%20fashion%20photography",
    category: "accessories",
    subcategory: "belts-wallets",
    gender: "women",
  },
  {
    id: 35,
    name: "Patterned Socks",
    price: 399,
    image: "/placeholder.svg?height=400&width=300&query=women%20patterned%20socks%20fashion%20photography",
    category: "accessories",
    subcategory: "socks",
    gender: "women",
  },
  {
    id: 36,
    name: "Fashion Top",
    price: 1199,
    image: "/placeholder.svg?height=400&width=300&query=women%20fashion%20top%20fashion%20photography",
    category: "western-wear",
    subcategory: "tops",
    gender: "women",
  },
  {
    id: 37,
    name: "Skinny Jeans",
    price: 1699,
    image: "/placeholder.svg?height=400&width=300&query=women%20skinny%20jeans%20fashion%20photography",
    category: "western-wear",
    subcategory: "jeans-jeggings",
    gender: "women",
  },
  {
    id: 38,
    name: "Pleated Skirt",
    price: 1299,
    image: "/placeholder.svg?height=400&width=300&query=women%20pleated%20skirt%20fashion%20photography",
    category: "western-wear",
    subcategory: "skirts-shorts",
    gender: "women",
  },
  {
    id: 39,
    name: "Winter Jacket",
    price: 2999,
    image: "/placeholder.svg?height=400&width=300&query=women%20winter%20jacket%20fashion%20photography",
    category: "western-wear",
    subcategory: "jackets-coats",
    gender: "women",
  },
  {
    id: 40,
    name: "Knit Sweater",
    price: 1799,
    image: "/placeholder.svg?height=400&width=300&query=women%20knit%20sweater%20fashion%20photography",
    category: "western-wear",
    subcategory: "sweaters",
    gender: "women",
  },
  {
    id: 41,
    name: "Silk Kurta",
    price: 2499,
    image: "/placeholder.svg?height=400&width=300&query=women%20silk%20kurta%20indian%20fashion%20photography",
    category: "ethnic-festive",
    subcategory: "kurtas",
    gender: "women",
  },
  {
    id: 42,
    name: "Cotton Churidar",
    price: 1299,
    image: "/placeholder.svg?height=400&width=300&query=women%20cotton%20churidar%20indian%20fashion%20photography",
    category: "ethnic-festive",
    subcategory: "churidars",
    gender: "women",
  },
  {
    id: 43,
    name: "Embroidered Kurti",
    price: 1899,
    image: "/placeholder.svg?height=400&width=300&query=women%20embroidered%20kurti%20indian%20fashion%20photography",
    category: "ethnic-festive",
    subcategory: "kurtis",
    gender: "women",
  },
  {
    id: 44,
    name: "Silk Saree",
    price: 4999,
    image: "/placeholder.svg?height=400&width=300&query=women%20silk%20saree%20indian%20fashion%20photography",
    category: "ethnic-festive",
    subcategory: "sarees",
    gender: "women",
  },
  {
    id: 45,
    name: "Embroidered Dupatta",
    price: 1299,
    image: "/placeholder.svg?height=400&width=300&query=women%20embroidered%20dupatta%20indian%20fashion%20photography",
    category: "ethnic-festive",
    subcategory: "dupattas",
    gender: "women",
  },
  {
    id: 46,
    name: "Diwali Special Dress",
    price: 3499,
    image:
      "/placeholder.svg?height=400&width=300&query=women%20diwali%20special%20dress%20indian%20fashion%20photography",
    category: "ethnic-festive",
    subcategory: "diwali-dresses",
    gender: "women",
  },
]

// Category structure for filters
const categoryFilters = {
  men: {
    "casual-wear": ["shirts", "pants", "t-shirts"],
    "formal-wear": ["shirts", "pants"],
    "oversized-fit": ["shirts", "pants", "polo-t-shirts", "round-neck-t-shirts", "hoodies"],
    innerwear: ["vests", "gym-vests", "briefs", "trunkers"],
    footwear: ["casual-shoes", "flip-flops-slippers", "formal-shoes", "sandals", "sneakers", "sports-shoes"],
    accessories: [
      "backpacks",
      "bags-wallets",
      "belts",
      "caps-hats",
      "fashion-accessories",
      "luggage-trolleys",
      "socks",
      "sunglasses",
      "watches",
    ],
    "western-wear": ["jackets-coats", "jeans", "shorts-3-4ths", "sweatshirts-hoodies", "track-pants", "boxers"],
    "night-lounge-wear": [],
    "ethnic-festive": ["dhotis", "shirts", "kurtas"],
  },
  women: {
    "formal-wear": ["shirts", "pants"],
    "casual-wear": ["shirts", "pants", "t-shirts"],
    "oversized-fit": ["shirts", "pants", "polo-t-shirts", "round-neck-t-shirts", "hoodies"],
    "lingerie-innerwear": ["bra", "panties"],
    footwear: ["casual-shoes", "sport-shoes", "flip-flops-slippers", "heeled-sandals", "heeled-shoes"],
    accessories: ["sunglasses", "watches", "bags", "belts-wallets", "socks", "caps", "luggage-trolleys"],
    "western-wear": [
      "tops",
      "t-shirts",
      "jeans-jeggings",
      "trousers-pants",
      "shirts",
      "track-pants",
      "skirts-shorts",
      "jackets-coats",
      "sweatshirts-hoodies",
      "sweaters",
    ],
    "night-lounge-wear": [],
    "ethnic-festive": ["kurtas", "churidars", "kurtis", "sarees", "dupattas", "diwali-dresses"],
  },
}

// Helper function to get category name from slug
const getCategoryName = (slug: string) => {
  const categoryMap: { [key: string]: string } = {
    men: "Men",
    women: "Women",
    kids: "Kids",
    beauty: "Beauty",
    "casual-wear": "Casual Wear",
    "formal-wear": "Formal Wear",
    "oversized-fit": "Oversized Fit",
    innerwear: "Innerwear",
    "lingerie-innerwear": "Lingerie & Innerwear",
    footwear: "Footwear",
    accessories: "Accessories",
    "western-wear": "Western Wear",
    "night-lounge-wear": "Night and Lounge Wear",
    "ethnic-festive": "Ethnic and Festive",
    shirts: "Shirts",
    pants: "Pants",
    "t-shirts": "T-Shirts",
    "polo-t-shirts": "Polo T-Shirts",
    "round-neck-t-shirts": "Round Neck T-Shirts",
    hoodies: "Hoodies",
    vests: "Vests",
    "gym-vests": "Gym Vests",
    briefs: "Briefs",
    trunkers: "Trunkers",
    bra: "Bra",
    panties: "Panties",
    "casual-shoes": "Casual Shoes",
    "sport-shoes": "Sport Shoes",
    "flip-flops-slippers": "Flip Flops & Slippers",
    "heeled-sandals": "Heeled Sandals",
    "heeled-shoes": "Heeled Shoes",
    sunglasses: "Sunglasses",
    watches: "Watches",
    bags: "Bags",
    "belts-wallets": "Belts & Wallets",
    socks: "Socks",
    caps: "Caps",
    "luggage-trolleys": "Luggage & Trolleys",
    tops: "Tops",
    "jeans-jeggings": "Jeans & Jeggings",
    "trousers-pants": "Trousers & Pants",
    "track-pants": "Track Pants",
    "skirts-shorts": "Skirts & Shorts",
    "jackets-coats": "Jackets & Coats",
    "sweatshirts-hoodies": "Sweatshirts & Hoodies",
    sweaters: "Sweaters",
    kurtas: "Kurtas",
    churidars: "Churidars",
    kurtis: "Kurtis",
    sarees: "Sarees",
    dupattas: "Dupattas",
    "diwali-dresses": "Diwali Dresses",
  }
  return categoryMap[slug] || slug
}

// Helper function to get subcategories for a category
const getSubcategories = (gender: string, category: string) => {
  if (gender && category && categoryFilters[gender as keyof typeof categoryFilters]) {
    return categoryFilters[gender as keyof typeof categoryFilters][
      category as keyof (typeof categoryFilters)[keyof typeof categoryFilters]
    ]
  }
  return []
}

export default function ShopPage() {
  const params = useParams()
  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug]

  const gender = slugArray[0] || ""
  const category = slugArray[1] || ""
  const subcategory = slugArray[2] || ""

  const [products, setProducts] = useState(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(subcategory ? [subcategory] : [])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [sortBy, setSortBy] = useState<string>("featured")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter products based on selected criteria
  useEffect(() => {
    let filtered = [...products]

    // Filter by gender
    if (gender) {
      filtered = filtered.filter((product) => product.gender === gender)
    }

    // Filter by category
    if (category) {
      filtered = filtered.filter((product) => product.category === category)
    }

    // Filter by selected subcategories
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter((product) => selectedSubcategories.includes(product.subcategory))
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
  }, [products, gender, category, selectedSubcategories, priceRange, sortBy])

  // Toggle subcategory selection
  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory) ? prev.filter((item) => item !== subcategory) : [...prev, subcategory],
    )
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedSubcategories([])
    setPriceRange([0, 5000])
  }

  // Get available subcategories for the current category
  const availableSubcategories = getSubcategories(gender, category)

  // Build breadcrumb path
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
  ]

  if (gender) {
    breadcrumbItems.push({
      name: getCategoryName(gender),
      href: `/shop/${gender}`,
    })
  }

  if (category) {
    breadcrumbItems.push({
      name: getCategoryName(category),
      href: `/shop/${gender}/${category}`,
    })
  }

  if (subcategory) {
    breadcrumbItems.push({
      name: getCategoryName(subcategory),
      href: `/shop/${gender}/${category}/${subcategory}`,
    })
  }

  return (
    <div className="container px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-6">
        <ol className="flex flex-wrap items-center text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-muted-foreground">/</span>}
              {index === breadcrumbItems.length - 1 ? (
                <span className="font-medium">{item.name}</span>
              ) : (
                <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {subcategory
            ? `${getCategoryName(subcategory)} ${getCategoryName(category)}`
            : category
              ? getCategoryName(category)
              : gender
                ? `${getCategoryName(gender)}'s Collection`
                : "All Products"}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} available
        </p>
      </div>

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
                {/* Subcategories */}
                {category && availableSubcategories.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-3">Subcategories</h3>
                    <div className="space-y-2">
                      {availableSubcategories.map((sub) => (
                        <div key={sub} className="flex items-center">
                          <Checkbox
                            id={`mobile-${sub}`}
                            checked={selectedSubcategories.includes(sub)}
                            onCheckedChange={() => toggleSubcategory(sub)}
                          />
                          <label htmlFor={`mobile-${sub}`} className="ml-2 text-sm cursor-pointer">
                            {getCategoryName(sub)}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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

            {/* Subcategories */}
            {category && availableSubcategories.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Subcategories</h3>
                <div className="space-y-2">
                  {availableSubcategories.map((sub) => (
                    <div key={sub} className="flex items-center">
                      <Checkbox
                        id={sub}
                        checked={selectedSubcategories.includes(sub)}
                        onCheckedChange={() => toggleSubcategory(sub)}
                      />
                      <label htmlFor={sub} className="ml-2 text-sm cursor-pointer">
                        {getCategoryName(sub)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                          />
                        </div>
                        <CardContent className="p-3 flex-1">
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="mt-1 font-medium">₹{product.price.toLocaleString("en-IN")}</p>
                          <p className="mt-2 text-sm text-muted-foreground">{getCategoryName(product.subcategory)}</p>
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
