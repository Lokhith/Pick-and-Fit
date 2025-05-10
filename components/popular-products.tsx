import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=300&query=classic white t-shirt",
    href: "/product/classic-white-tee",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300&query=slim fit blue jeans",
    href: "/product/slim-fit-jeans",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=300&query=casual white sneakers",
    href: "/product/casual-sneakers",
  },
  {
    id: 4,
    name: "Cotton Boxer Briefs",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=300&query=cotton boxer briefs",
    href: "/product/cotton-boxer-briefs",
  },
  {
    id: 5,
    name: "Patterned Socks",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=300&query=colorful patterned socks",
    href: "/product/patterned-socks",
  },
  {
    id: 6,
    name: "Hooded Sweatshirt",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300&query=gray hooded sweatshirt",
    href: "/product/hooded-sweatshirt",
  },
]

export default function PopularProducts() {
  return (
    <section className="container px-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Popular Products</h2>
          <p className="text-muted-foreground">Our best-selling items loved by customers</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <Link href={product.href} className="block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <Link href={product.href} className="block">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="mt-1 font-medium">${product.price.toFixed(2)}</p>
                </Link>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button className="w-full">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="w-full">
                  Try at Home
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
