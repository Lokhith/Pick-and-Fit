import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CategoryCard {
  name: string
  image: string
  href: string
  discount: string
  offer?: string
}

interface CategoryLandingTemplateProps {
  title: string
  bannerImage: string
  featuredImage: string
  categories: CategoryCard[]
}

export default function CategoryLandingTemplate({
  title,
  bannerImage,
  featuredImage,
  categories,
}: CategoryLandingTemplateProps) {
  return (
    <div className="container px-4 py-8">
      {/* Top Banner - Offer */}
      <div className="relative mb-8 overflow-hidden rounded-xl">
        <div className="bg-gradient-to-r from-primary/90 to-primary/70 p-6 md:p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-block bg-white dark:bg-gray-800 text-primary font-bold px-4 py-1 rounded-full text-sm mb-3">
                LIMITED TIME OFFER
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Flat ₹400 OFF + Free Delivery</h2>
              <p className="text-white/90 mb-4">On your first order. Use code: FIRST400</p>
              <Button variant="secondary" className="font-medium">
                Shop Now
              </Button>
            </div>
            <div className="relative h-40 w-40 md:h-48 md:w-48 flex-shrink-0">
              <Image
                src={bannerImage || "/placeholder.svg"}
                alt={`${title} offer`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Great Saving Day */}
      <div className="mb-12">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm mb-3">
              GREAT SAVING DAY
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}'s Collection</h1>
            <p className="text-muted-foreground mb-6">
              Discover our exclusive collection of {title.toLowerCase()}'s fashion with amazing discounts. From trendy
              styles to classic essentials, find everything you need to upgrade your wardrobe.
            </p>
            <Button className="font-medium">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={featuredImage || "/placeholder.svg"}
              alt={`${title} collection`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Shop By Category */}
      <div className="mb-12">
        <div className="relative py-8 px-6 rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5"></div>
          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold">SHOP BY CATEGORY</h2>
            <div className="mt-2 h-1 w-24 bg-primary mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="relative overflow-hidden rounded-xl border dark:border-gray-800 transition-all duration-300 hover:shadow-md">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Discount Tag */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {category.discount}
                  </div>

                  {/* Special Offer Tag (if any) */}
                  {category.offer && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {category.offer}
                    </div>
                  )}

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
          <Link href={`/shop/${title.toLowerCase()}`}>
            Explore All {title}'s Categories <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
