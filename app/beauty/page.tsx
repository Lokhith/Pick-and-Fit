import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import RibbonOfferTag from "@/components/ribbon-offer-tag"
import FirstOrderRibbon from "@/components/first-order-ribbon"

export const metadata = {
  title: "Beauty Collection | Pick&Fit",
  description: "Discover our exclusive collection of beauty products with amazing discounts.",
}

export default function BeautyCategoryPage() {
  const categories = [
    {
      name: "Skincare",
      image: "/moisturizer-skincare-product.png",
      href: "/shop/beauty/skincare",
      discount: "30-50% OFF",
      variant: "primary" as const,
    },
    {
      name: "Makeup",
      image: "/matte-lipstick-product.png",
      href: "/shop/beauty/makeup",
      discount: "40-70% OFF",
      variant: "secondary" as const,
    },
    {
      name: "Haircare",
      image: "/shampoo-haircare-product.png",
      href: "/shop/beauty/haircare",
      discount: "30-60% OFF",
      variant: "accent" as const,
    },
    {
      name: "Fragrances",
      image: "/placeholder.svg?key=d39f3",
      href: "/shop/beauty/fragrances",
      discount: "20-40% OFF",
      variant: "warning" as const,
    },
    {
      name: "Bath & Body",
      image: "/placeholder.svg?key=i72zr",
      href: "/shop/beauty/bath-body",
      discount: "50-70% OFF",
      variant: "success" as const,
    },
    {
      name: "Men's Grooming",
      image: "/beard-oil-product.png",
      href: "/shop/beauty/men-grooming",
      discount: "30-50% OFF",
      variant: "primary" as const,
    },
  ]

  return (
    <div className="container px-4 py-8">
      {/* First Order Offer Ribbon */}
      <FirstOrderRibbon variant="purple" />

      {/* Promotional Banner - More Compact */}
      <div className="mb-8">
        <div className="relative rounded-xl overflow-hidden">
          <div className="relative aspect-[21/9] md:aspect-[3/1] w-full overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?key=xvvlx"
              alt="Beauty products collection"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Great Saving Days</h1>
              <p className="text-lg mb-3">Up to 70% OFF on Beauty Collection</p>
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10"></div>
          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold">SHOP BY CATEGORY</h2>
            <div className="mt-2 h-1 w-24 bg-purple-500 mx-auto"></div>
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

                  {/* Using Ribbon Offer Tag */}
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
          <Link href="/shop/beauty">
            Explore All Beauty Categories <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
