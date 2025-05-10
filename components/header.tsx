"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, Menu, Heart, MapPin, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import CategoryDropdown from "@/components/category-dropdown"
import MobileCategoryMenu from "@/components/mobile-category-menu"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/context/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(3) // Mock cart count
  const { user, signOut } = useAuth()

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Get user initials (first two letters of name)
  const getUserInitials = () => {
    if (!user || !user.name) return ""
    const nameParts = user.name.split(" ")
    if (nameParts.length > 1) {
      return (nameParts[0][0] + nameParts[1][0]).toUpperCase()
    }
    return user.name.substring(0, 2).toUpperCase()
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Top info bar */}
      <div className="bg-primary/10 py-1 text-xs font-medium hidden md:block">
        <div className="container flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Mumbai, India</span>
            </div>
          </div>
          <div>
            <span className="animate-pulse">Free shipping on orders over ₹999!</span>
          </div>
        </div>
      </div>

      {/* Main header row */}
      <div className="container border-b">
        <div className="flex h-14 items-center justify-between px-4">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <div className="relative overflow-hidden">
              <Image
                src="/pick-and-fit-logo.png"
                alt="Pick&Fit Logo"
                width={32}
                height={32}
                className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Pick&Fit
              </span>
              <span className="text-[10px] text-muted-foreground">Shop, Try, Keep</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-auto px-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full h-9 pl-10 pr-4 border-muted group-hover:border-primary transition-colors"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-5">
              <Button variant="ghost" size="sm" className="relative group h-9 px-2">
                <Heart className="h-[18px] w-[18px] group-hover:text-red-500 transition-colors" />
                <span className="sr-only">Wishlist</span>
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  2
                </span>
              </Button>

              <Button variant="ghost" size="sm" className="relative group h-9 px-2">
                <ShoppingBag className="h-[18px] w-[18px] group-hover:text-green-500 transition-colors" />
                <span className="sr-only">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </Button>

              <ThemeToggle />

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full h-8 w-8 p-0 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      {getUserInitials()}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/orders">Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/wishlist">Wishlist</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut} className="text-red-500">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="outline" size="sm" className="group overflow-hidden relative h-9" asChild>
                  <Link href="/signin">
                    <span className="relative z-10 group-hover:text-white transition-colors">Sign In</span>
                    <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-300 ease-in-out -z-0"></span>
                  </Link>
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <Button variant="ghost" size="sm" className="relative group h-9 px-2">
                <ShoppingBag className="h-[18px] w-[18px]" />
                <span className="sr-only">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-9 px-2">
                    <Menu className="h-[18px] w-[18px]" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                  <div className="flex flex-col h-full">
                    <div className="py-4 border-b">
                      <div className="flex items-center space-x-2 mb-4">
                        <Input type="search" placeholder="Search products..." className="w-full" />
                      </div>
                      {!user ? (
                        <div className="flex gap-2 mt-4">
                          <Button className="w-full" asChild>
                            <Link href="/signin">Sign In</Link>
                          </Button>
                          <Button variant="outline" className="w-full" asChild>
                            <Link href="/signup">Sign Up</Link>
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            {getUserInitials()}
                          </div>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <MobileCategoryMenu
                      categories={categories}
                      onClose={() => document.querySelector("[data-radix-collection-item]")?.click()}
                    />
                    <div className="mt-auto border-t py-4">
                      <div className="flex items-center justify-around">
                        <Button variant="ghost" size="icon" className="relative">
                          <Heart className="h-5 w-5" />
                          <span className="sr-only">Wishlist</span>
                          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                            2
                          </span>
                        </Button>
                        <ThemeToggle />
                        {user && (
                          <Button variant="ghost" size="icon" onClick={signOut}>
                            <LogOut className="h-5 w-5 text-red-500" />
                            <span className="sr-only">Sign out</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Categories row */}
      <div className="container border-b">
        <div className="hidden md:flex h-10 items-center justify-center px-4">
          <nav className="flex items-center gap-8">
            {categories.map((category, index) => (
              <CategoryDropdown
                key={category.name}
                name={category.name}
                subcategories={category.subcategories}
                href={category.href}
              />
            ))}
            <Link
              href="/new-arrivals"
              className="text-sm font-medium transition-colors hover:text-primary relative group"
            >
              New Arrivals
              <Badge className="ml-1 bg-red-500 hover:bg-red-600 absolute -top-3 -right-8 text-[10px] py-0">New</Badge>
            </Link>
            <Link href="/sale" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Sale
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Search (only visible on mobile) */}
      <div className="md:hidden container border-b py-2 px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search products..." className="w-full h-9 pl-10 pr-4" />
        </div>
      </div>
    </header>
  )
}
