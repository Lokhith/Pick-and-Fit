"use client"

import Image from "next/image"
import Link from "next/link"
import { getAllProducts } from "@/lib/product-data"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function FlashDealsPageClient() {
  const products = getAllProducts()
  const flashDeals = products.filter(
    (product) =>
      product.id === "21" ||
      product.id === "22" ||
      product.id === "23" ||
      product.id === "24" ||
      product.id === "25" ||
      product.id === "26" ||
      product.id === "27" ||
      product.id === "28" ||
      product.id === "29" ||
      product.id === "30",
  )

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {flashDeals.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <CardContent className="p-3">
                <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-1">
                  <div>
                    <span className="font-semibold">₹{product.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{product.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
