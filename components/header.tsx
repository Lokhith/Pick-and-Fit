"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, Menu, X, Heart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import CategoryDropdown from "@/components/category-dropdown"
import MobileCategoryMenu from "@/components/mobile-category-menu"
import { cn } from "@/lib/utils"

// Mock user data - in a real app, this would come from your auth system
const user = {
  isLoggedIn: false,
  name: "John Doe",
}

// Category data
const categories = [
  {
    name: "Men",
    href: "/shop/men",
    subcategories: [
      { name: "Casual Wear", href: "/shop/men/casual-wear" },
      { name: "Formal Wear", href: "/shop/men/formal-wear" },
      { name: "Oversized Fit", href: "/shop/men/oversized-fit" },
      { name: "Innerwear", href: "/shop/men/innerwear" },
      { name: "Footwear", href: "/shop/men/footwear" },
      { name: "Accessories", href: "/shop/men/accessories" },
      { name: "Western Wear", href: "/shop/men/western-wear" },
      { name: "Night and Lounge Wear", href: "/shop/men/night-lounge-wear" },
      { name: "Ethnic and Festive", href: "/shop/men/ethnic-festive" },
    ],
  },
  {
    name: "Women",
    href: "/shop/women",
    subcategories: [
      { name: "Formal Wear", href: "/shop/women/formal-wear" },
      { name: "Casual Wear", href: "/shop/women/casual-wear" },
      { name: "Oversized Fit", href: "/shop/women/oversized-fit" },
      { name: "Lingerie and Innerwear", href: "/shop/women/lingerie-innerwear" },
      { name: "Footwear", href: "/shop/women/footwear" },
      { name: "Accessories", href: "/shop/women/accessories" },
      { name: "Western Wear", href: "/shop/women/western-wear" },
      { name: "Night and Lounge Wear", href: "/shop/women/night-lounge-wear" },
      { name: "Ethnic and Festive", href: "/shop/women/ethnic-festive" },
    ],
  },
  {
    name: "Kids",
    href: "/shop/kids",
    subcategories: [
      { name: "Boy", href: "/shop/kids/boy" },
      { name: "Girl", href: "/shop/kids/girl" },
      { name: "Boy Clothing", href: "/shop/kids/boy/clothing" },
      { name: "Boy Innerwear and Sleepwear", href: "/shop/kids/boy/innerwear-sleepwear" },
      { name: "Boy Toys and Babycare", href: "/shop/kids/boy/toys-babycare" },
      { name: "Boy Footwear", href: "/shop/kids/boy/footwear" },
      { name: "Boy Festive and Ethnic Wear", href: "/shop/kids/boy/festive-ethnic" },
      { name: "Girl Clothing", href: "/shop/kids/girl/clothing" },
      { name: "Girl Innerwear and Sleepwear", href: "/shop/kids/girl/innerwear-sleepwear" },
      { name: "Girl Toys and Babycare", href: "/shop/kids/girl/toys-babycare" },
      { name: "Girl Footwear", href: "/shop/kids/girl/footwear" },
      { name: "Girl Festive and Ethnic Wear", href: "/shop/kids/girl/festive-ethnic" },
    ],
  },
  {
    name: "Beauty",
    href: "/shop/beauty",
    subcategories: [
      { name: "Skincare", href: "/shop/beauty/skincare" },
      { name: "Makeup", href: "/shop/beauty/makeup" },
      { name: "Haircare", href: "/shop/beauty/haircare" },
      { name: "Fragrances", href: "/shop/beauty/fragrances" },
      { name: "Bath and Body", href: "/shop/beauty/bath-body" },
      { name: "Men Grooming", href: "/shop/beauty/men-grooming" },
    ],
  },
]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center">
          <Image src="/pick-and-fit-logo.png" alt="Pick&Fit Logo" width={120} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 flex-1">
          {categories.map((category) => (
            <CategoryDropdown
              key={category.name}
              name={category.name}
              subcategories={category.subcategories}
              href={category.href}
            />
          ))}
        </nav>

        {/* Search Bar */}
        <div className={cn("hidden md:flex items-center gap-4 mx-4", isSearchOpen ? "flex-1" : "w-auto")}>
          {isSearchOpen ? (
            <div className="flex w-full max-w-md items-center space-x-2">
              <Input type="search" placeholder="Search products..." className="w-full" autoFocus />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>

          <ThemeToggle />

          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>

          {user.isLoggedIn ? (
            <Button variant="ghost" size="icon" className="rounded-full bg-primary text-primary-foreground">
              {user.name.charAt(0)}
            </Button>
          ) : (
            <Button variant="outline" size="sm" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="py-4 border-b">
                    <div className="flex items-center space-x-2 mb-4">
                      <Input type="search" placeholder="Search products..." className="w-full" />
                    </div>
                    {!user.isLoggedIn && (
                      <div className="flex gap-2 mt-4">
                        <Button className="w-full" asChild>
                          <Link href="/signin">Sign In</Link>
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/signup">Sign Up</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                  <MobileCategoryMenu
                    categories={categories}
                    onClose={() => document.querySelector("[data-radix-collection-item]")?.click()}
                  />
                  <div className="mt-auto border-t py-4">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon">
                        <Heart className="h-5 w-5" />
                        <span className="sr-only">Wishlist</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                      </Button>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
