import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Clothing",
    image: "/stylish-clothing-collection.png",
    href: "/shop/clothing",
  },
  {
    id: 2,
    name: "Innerwear",
    image: "/comfortable-innerwear.png",
    href: "/shop/innerwear",
  },
  {
    id: 3,
    name: "Shoes",
    image: "/trendy-shoes-collection.png",
    href: "/shop/shoes",
  },
  {
    id: 4,
    name: "Socks",
    image: "/colorful-socks.png",
    href: "/shop/socks",
  },
]

export default function FeaturedCategories() {
  return (
    <section className="container px-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
          <p className="text-muted-foreground">Explore our wide range of in-house manufactured products</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href={category.href} className="group">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
