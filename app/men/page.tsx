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

      {/* Enhanced Promotional Banner with Better Text Styling and UI (Sparkles removed) */}
      <div className="mb-10">
        <div className="relative rounded-xl overflow-hidden">
          <div className="relative aspect-[21/9] md:aspect-[3/1] w-full overflow-hidden rounded-xl">
            <Image
              src="/mens-white-shirt-fashion.png"
              alt="Men's fashion collection"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />

            {/* Enhanced overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full bg-primary/20 blur-2xl"></div>
              <div className="absolute bottom-[10%] right-[5%] w-32 h-32 rounded-full bg-purple-500/20 blur-3xl"></div>
            </div>

            {/* Enhanced content with better typography and layout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="max-w-3xl mx-auto">
                {/* Main heading with enhanced styling */}
                <div className="relative">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-md">
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                      GREAT SAVING DAYS
                    </span>
                  </h1>
                </div>

                {/* Stylish divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto my-3 rounded-full"></div>

                {/* Enhanced subheading */}
                <p className="text-xl md:text-2xl font-medium text-white mb-4 drop-shadow-lg">
                  Exclusive Men's Collection at <span className="text-yellow-400 font-bold">UNBEATABLE PRICES</span>
                </p>

                {/* Highlighted discount */}
                <div className="inline-block bg-gradient-to-r from-primary to-purple-600 p-[2px] rounded-lg mb-4">
                  <div className="bg-black/50 backdrop-blur-sm px-6 py-2 rounded-lg">
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      UP TO <span className="text-yellow-400">70% OFF</span>
                    </p>
                  </div>
                </div>

                {/* Limited time offer text */}
                <p className="text-sm md:text-base text-white/80 mt-2">
                  Limited time offer. Shop now before it's gone!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Shop by Category Section with Attractive Heading */}
      <div className="mb-12">
        {/* New Attractive Heading */}
        <div className="relative py-8 mb-8 text-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>

          <div className="relative inline-block">
            <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl"></span>
            <h2 className="relative text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                DISCOVER YOUR STYLE
              </span>
            </h2>
          </div>

          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Explore our curated collection of premium men's fashion for every occasion
            </p>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
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
