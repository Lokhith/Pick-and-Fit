"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CategoryData {
  name: string
  href: string
  image: string
  subcategories: {
    name: string
    href: string
    subItems?: {
      name: string
      href: string
    }[]
  }[]
}

// Category data with detailed subcategories (same as in header)
const categories: CategoryData[] = [
  {
    name: "Men",
    href: "/shop/men",
    image: "/mens-casual-tshirt-fashion.png",
    subcategories: [
      {
        name: "Casual Wear",
        href: "/shop/men/casual-wear",
        subItems: [
          { name: "Shirts", href: "/shop/men/casual-wear/shirts" },
          { name: "Pants", href: "/shop/men/casual-wear/pants" },
          { name: "T-Shirts", href: "/shop/men/casual-wear/t-shirts" },
        ],
      },
      {
        name: "Formal Wear",
        href: "/shop/men/formal-wear",
        subItems: [
          { name: "Shirts", href: "/shop/men/formal-wear/shirts" },
          { name: "Pants", href: "/shop/men/formal-wear/pants" },
        ],
      },
      {
        name: "Oversized Fit",
        href: "/shop/men/oversized-fit",
        subItems: [
          { name: "Shirts", href: "/shop/men/oversized-fit/shirts" },
          { name: "Pants", href: "/shop/men/oversized-fit/pants" },
          { name: "Polo T-Shirts", href: "/shop/men/oversized-fit/polo-t-shirts" },
          { name: "Round Neck T-Shirts", href: "/shop/men/oversized-fit/round-neck-t-shirts" },
          { name: "Hoodies", href: "/shop/men/oversized-fit/hoodies" },
        ],
      },
      {
        name: "Innerwear",
        href: "/shop/men/innerwear",
        subItems: [
          { name: "Vests", href: "/shop/men/innerwear/vests" },
          { name: "Gym Vests", href: "/shop/men/innerwear/gym-vests" },
          { name: "Briefs", href: "/shop/men/innerwear/briefs" },
          { name: "Trunkers", href: "/shop/men/innerwear/trunkers" },
        ],
      },
      {
        name: "Footwear",
        href: "/shop/men/footwear",
        subItems: [
          { name: "Casual Shoes", href: "/shop/men/footwear/casual-shoes" },
          { name: "Flip Flops & Slippers", href: "/shop/men/footwear/flip-flops-slippers" },
          { name: "Formal Shoes", href: "/shop/men/footwear/formal-shoes" },
          { name: "Sandals", href: "/shop/men/footwear/sandals" },
          { name: "Sneakers", href: "/shop/men/footwear/sneakers" },
          { name: "Sports Shoes", href: "/shop/men/footwear/sports-shoes" },
        ],
      },
      {
        name: "Accessories",
        href: "/shop/men/accessories",
        subItems: [
          { name: "Backpacks", href: "/shop/men/accessories/backpacks" },
          { name: "Bags & Wallets", href: "/shop/men/accessories/bags-wallets" },
          { name: "Belts", href: "/shop/men/accessories/belts" },
          { name: "Caps & Hats", href: "/shop/men/accessories/caps-hats" },
          { name: "Socks", href: "/shop/men/accessories/socks" },
          { name: "Sunglasses", href: "/shop/men/accessories/sunglasses" },
          { name: "Watches", href: "/shop/men/accessories/watches" },
        ],
      },
      {
        name: "Western Wear",
        href: "/shop/men/western-wear",
        subItems: [
          { name: "Jackets & Coats", href: "/shop/men/western-wear/jackets-coats" },
          { name: "Jeans", href: "/shop/men/western-wear/jeans" },
          { name: "Shorts & 3/4ths", href: "/shop/men/western-wear/shorts-3-4ths" },
          { name: "Sweatshirts & Hoodies", href: "/shop/men/western-wear/sweatshirts-hoodies" },
          { name: "Track Pants", href: "/shop/men/western-wear/track-pants" },
          { name: "Boxers", href: "/shop/men/western-wear/boxers" },
        ],
      },
      { name: "Night and Lounge Wear", href: "/shop/men/night-lounge-wear" },
      {
        name: "Ethnic and Festive",
        href: "/shop/men/ethnic-festive",
        subItems: [
          { name: "Dhotis", href: "/shop/men/ethnic-festive/dhotis" },
          { name: "Shirts", href: "/shop/men/ethnic-festive/shirts" },
          { name: "Kurtas", href: "/shop/men/ethnic-festive/kurtas" },
        ],
      },
    ],
  },
  {
    name: "Women",
    href: "/shop/women",
    image: "/women-casual-shirt-fashion.png",
    subcategories: [
      {
        name: "Formal Wear",
        href: "/shop/women/formal-wear",
        subItems: [
          { name: "Shirts", href: "/shop/women/formal-wear/shirts" },
          { name: "Pants", href: "/shop/women/formal-wear/pants" },
        ],
      },
      {
        name: "Casual Wear",
        href: "/shop/women/casual-wear",
        subItems: [
          { name: "Shirts", href: "/shop/women/casual-wear/shirts" },
          { name: "Pants", href: "/shop/women/casual-wear/pants" },
          { name: "T-Shirts", href: "/shop/women/casual-wear/t-shirts" },
        ],
      },
      {
        name: "Oversized Fit",
        href: "/shop/women/oversized-fit",
        subItems: [
          { name: "Shirts", href: "/shop/women/oversized-fit/shirts" },
          { name: "Pants", href: "/shop/women/oversized-fit/pants" },
          { name: "Polo T-Shirts", href: "/shop/women/oversized-fit/polo-t-shirts" },
          { name: "Round Neck T-Shirts", href: "/shop/women/oversized-fit/round-neck-t-shirts" },
          { name: "Hoodies", href: "/shop/women/oversized-fit/hoodies" },
        ],
      },
      {
        name: "Lingerie and Innerwear",
        href: "/shop/women/lingerie-innerwear",
        subItems: [
          { name: "Bra", href: "/shop/women/lingerie-innerwear/bra" },
          { name: "Panties", href: "/shop/women/lingerie-innerwear/panties" },
        ],
      },
      {
        name: "Footwear",
        href: "/shop/women/footwear",
        subItems: [
          { name: "Casual Shoes", href: "/shop/women/footwear/casual-shoes" },
          { name: "Sport Shoes", href: "/shop/women/footwear/sport-shoes" },
          { name: "Flip Flops & Slippers", href: "/shop/women/footwear/flip-flops-slippers" },
          { name: "Heeled Sandals", href: "/shop/women/footwear/heeled-sandals" },
          { name: "Heeled Shoes", href: "/shop/women/footwear/heeled-shoes" },
        ],
      },
      {
        name: "Accessories",
        href: "/shop/women/accessories",
        subItems: [
          { name: "Sunglasses", href: "/shop/women/accessories/sunglasses" },
          { name: "Watches", href: "/shop/women/accessories/watches" },
          { name: "Bags", href: "/shop/women/accessories/bags" },
          { name: "Belts & Wallets", href: "/shop/women/accessories/belts-wallets" },
          { name: "Socks", href: "/shop/women/accessories/socks" },
          { name: "Caps", href: "/shop/women/accessories/caps" },
        ],
      },
      {
        name: "Western Wear",
        href: "/shop/women/western-wear",
        subItems: [
          { name: "Tops", href: "/shop/women/western-wear/tops" },
          { name: "T-Shirts", href: "/shop/women/western-wear/t-shirts" },
          { name: "Jeans & Jeggings", href: "/shop/women/western-wear/jeans-jeggings" },
          { name: "Trousers & Pants", href: "/shop/women/western-wear/trousers-pants" },
          { name: "Shirts", href: "/shop/women/western-wear/shirts" },
          { name: "Skirts & Shorts", href: "/shop/women/western-wear/skirts-shorts" },
        ],
      },
      { name: "Night and Lounge Wear", href: "/shop/women/night-lounge-wear" },
      {
        name: "Ethnic and Festive",
        href: "/shop/women/ethnic-festive",
        subItems: [
          { name: "Kurtas", href: "/shop/women/ethnic-festive/kurtas" },
          { name: "Sarees", href: "/shop/women/ethnic-festive/sarees" },
          { name: "Kurtis", href: "/shop/women/ethnic-festive/kurtis" },
          { name: "Dupattas", href: "/shop/women/ethnic-festive/dupattas" },
        ],
      },
    ],
  },
  {
    name: "Kids",
    href: "/shop/kids",
    image: "/stylish-kids.png",
    subcategories: [
      {
        name: "Boy",
        href: "/shop/kids/boy",
        subItems: [
          { name: "Clothing", href: "/shop/kids/boy/clothing" },
          { name: "Innerwear and Sleepwear", href: "/shop/kids/boy/innerwear-sleepwear" },
          { name: "Toys and Babycare", href: "/shop/kids/boy/toys-babycare" },
          { name: "Footwear", href: "/shop/kids/boy/footwear" },
          { name: "Festive and Ethnic Wear", href: "/shop/kids/boy/festive-ethnic" },
        ],
      },
      {
        name: "Girl",
        href: "/shop/kids/girl",
        subItems: [
          { name: "Clothing", href: "/shop/kids/girl/clothing" },
          { name: "Innerwear and Sleepwear", href: "/shop/kids/girl/innerwear-sleepwear" },
          { name: "Toys and Babycare", href: "/shop/kids/girl/toys-babycare" },
          { name: "Footwear", href: "/shop/kids/girl/footwear" },
          { name: "Festive and Ethnic Wear", href: "/shop/kids/girl/festive-ethnic" },
        ],
      },
    ],
  },
]

function CategoryCard({
  category,
  isActive,
  onClick,
}: {
  category: CategoryData
  isActive: boolean
  onClick: () => void
}) {
  // Calculate optimal column count based on number of subcategories
  const columnCount = Math.min(4, Math.max(2, Math.ceil(category.subcategories.length / 5)))

  return (
    <div className="relative flex-1 group">
      {/* Main Category Card */}
      <div
        className="relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 
                  shadow-md hover:shadow-xl transform hover:-translate-y-1"
        onClick={onClick}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg sm:aspect-[3/2]">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                        group-hover:from-black/80 group-hover:via-black/40 transition-all duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform transition-transform duration-300">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold group-hover:text-primary-foreground transition-colors duration-300">
                {category.name}
              </h2>
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  isActive ? "rotate-180" : "group-hover:scale-110",
                )}
              />
            </div>
            <p className="mt-1 text-sm sm:text-base text-white/80 group-hover:text-white transition-colors duration-300">
              Click to explore {category.name.toLowerCase()}'s collection
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CategoryDropdown({ category, isOpen }: { category: CategoryData; isOpen: boolean }) {
  // Calculate optimal column count based on number of subcategories
  const columnCount = Math.min(4, Math.max(2, Math.ceil(category.subcategories.length / 5)))

  return (
    <div
      className={cn(
        "mt-2 overflow-hidden rounded-lg border bg-background shadow-lg transition-all duration-300",
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
      )}
    >
      <div className="p-4 sm:p-6">
        <Link href={category.href} className="mb-4 block text-lg font-semibold text-primary hover:underline">
          All {category.name}
        </Link>

        <div className="grid gap-x-6 gap-y-0" style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}>
          {category.subcategories.map((subcategory, index) => (
            <div key={index} className="mb-4">
              <Link
                href={subcategory.href}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {subcategory.name}
              </Link>

              {subcategory.subItems && subcategory.subItems.length > 0 && (
                <ul className="mt-1 space-y-0.5 border-l border-gray-200 dark:border-gray-800 pl-3">
                  {subcategory.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-1 h-1 w-20 bg-primary"></div>
    </div>
  )
}

export default function ShopPageClient() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null) // Close if already open
    } else {
      setActiveCategory(categoryName) // Open the clicked category
    }
  }

  // Main categories for the shop page
  const mainCategories = [
    {
      name: "Men",
      image: "/mens-casual-tshirt-fashion.png",
      href: "/men",
      description: "Explore our collection of men's clothing, footwear, and accessories",
    },
    {
      name: "Women",
      image: "/women-casual-shirt-fashion.png",
      href: "/women",
      description: "Discover stylish women's fashion for every occasion",
    },
    {
      name: "Kids",
      image: "/stylish-kids.png",
      href: "/kids",
      description: "Find the perfect outfits for your little ones",
    },
    {
      name: "Beauty",
      image: "/facial-cleanser-product.png",
      href: "/beauty",
      description: "Shop premium skincare, makeup, and grooming products",
    },
  ]

  return (
    <div className="container py-12">
      {/* Hero Banner */}
      <div className="relative mb-12 overflow-hidden rounded-xl">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl sm:aspect-[21/8] md:aspect-[21/6]">
          <Image
            src="/stylish-clothing-collection.png"
            alt="Shop our collection"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Shop Your Style, Your Way
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              Browse our collection and try before you buy with Pick&Fit's home try-on service
            </p>
          </div>
        </div>
      </div>

      {/* Shop by Category */}
      <section className="mb-16">
        <SectionTitle title="Shop by Category" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCategories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <div className="relative overflow-hidden rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform transition-transform duration-300">
                    <h2 className="text-xl sm:text-2xl font-bold group-hover:text-primary-foreground transition-colors duration-300">
                      {category.name}
                    </h2>
                    <p className="mt-1 text-sm sm:text-base text-white/80 group-hover:text-white transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Try at Home Feature */}
      <section className="rounded-xl bg-gray-100 p-6 dark:bg-gray-800">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How Pick&Fit Works</h2>
            <div className="mt-1 h-1 w-20 bg-primary"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Our try-before-you-buy service lets you experience the perfect fit without commitment.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  1
                </span>
                <span>Select multiple sizes and styles</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  2
                </span>
                <span>Try them on at home with no obligation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  3
                </span>
                <span>Keep what you love, return the rest for free</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  4
                </span>
                <span>Only pay for what you keep</span>
              </li>
            </ul>
            <Link
              href="/how-it-works"
              className="mt-6 inline-flex items-center text-primary hover:underline dark:text-primary-foreground"
            >
              Learn more about our service <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg sm:aspect-[4/3]">
            <Image
              src="/fashion-model-home-try-on.png"
              alt="Try at home"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
