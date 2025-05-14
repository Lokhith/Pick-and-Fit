import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import RibbonOfferTag from "@/components/ribbon-offer-tag"
import FirstOrderRibbon from "@/components/first-order-ribbon"

export const metadata = {
  title: "Men's Collection | Pick&Fit",
  description: "Discover our exclusive collection of men's fashion with amazing discounts.",
}

export default function MenCategoryPage() {
  const categories = [
    {
      name: "Formal Wear",
      image: "/mens-formal-shirt-fashion.png",
      href: "/shop/men/formal-wear",
      discount: "30-50% OFF",
      variant: "primary" as const,
    },
    {
      name: "Casual Wear",
      image: "/mens-casual-tshirt-fashion.png",
      href: "/shop/men/casual-wear",
      discount: "40-70% OFF",
      variant: "secondary" as const,
    },
    {
      name: "Oversized Fit",
      image: "/mens-oversized-shirt-fashion.png",
      href: "/shop/men/oversized-fit",
      discount: "30-60% OFF",
      variant: "accent" as const,
    },
    {
      name: "Innerwear",
      image: "/men-white-vest-innerwear.png",
      href: "/shop/men/innerwear",
      discount: "20-40% OFF",
      variant: "warning" as const,
    },
    {
      name: "Footwear",
      image: "/casual-white-sneakers.png",
      href: "/shop/men/footwear",
      discount: "50-70% OFF",
      variant: "success" as const,
    },
    {
      name: "Accessories",
      image: "/placeholder.svg?key=1d9q8",
      href: "/shop/men/accessories",
      discount: "30-50% OFF",
      variant: "primary" as const,
    },
    {
      name: "Western Wear",
      image: "/men-oversized-hoodie.png",
      href: "/shop/men/western-wear",
      discount: "40-60% OFF",
      variant: "secondary" as const,
    },
    {
      name: "Night & Lounge Wear",
      image: "/placeholder.svg?key=n7p3q",
      href: "/shop/men/night-lounge-wear",
      discount: "25-45% OFF",
      variant: "accent" as const,
    },
    {
      name: "Ethnic & Festive",
      image: "/placeholder.svg?key=1p2km",
      href: "/shop/men/ethnic-festive",
      discount: "30-70% OFF",
      variant: "warning" as const,
    },
  ]

  return (
    <div className="container px-4 py-8">
      {/* First Order Offer Ribbon */}
      <FirstOrderRibbon variant="primary" />

      {/* Promotional Banner - More Compact */}
      <div className="mb-8">
        <div className="relative rounded-xl overflow-hidden">
          <div className="relative aspect-[21/9] md:aspect-[3/1] w-full overflow-hidden rounded-xl">
            <Image
              src="/mens-white-shirt-fashion.png"
              alt="Men's fashion collection"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Great Saving Days</h1>
              <p className="text-lg mb-3">Up to 70% OFF on Men's Collection</p>
              <Button variant="secondary" size="sm" className="text-sm">
                Explore Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Shop By Category */}
      <div className="mb-12">
        <div className="relative py-6 px-4 rounded-xl overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold">SHOP BY CATEGORY</h2>
            <div className="mt-2 h-1 w-24 bg-primary mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="relative overflow-hidden rounded-xl border dark:border-gray-800 transition-all duration-300 hover:shadow-md">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* New Minimalist Ribbon Offer Tag */}
                  <RibbonOfferTag discount={category.discount} variant={category.variant} />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-foreground transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Explore All Categories */}
      <div className="text-center mb-12">
        <Button variant="outline" size="lg" className="font-medium" asChild>
          <Link href="/shop/men">
            Explore All Men's Categories <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
