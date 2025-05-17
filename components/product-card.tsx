import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  rating: number
  reviewCount?: number
  tags?: string[]
  category?: string
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount = 0,
  tags = [],
  category,
}: ProductCardProps) {
  // Calculate discount percentage
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100)

  return (
    <Link href={`/product/${id}`}>
      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
        <div className="relative aspect-square">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          {discountPercentage > 0 && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white border-0">{discountPercentage}% OFF</Badge>
          )}
          {tags.length > 0 && (
            <Badge className="absolute top-2 left-2 bg-black/70 text-white border-0">{tags[0]}</Badge>
          )}
        </div>
        <div className="p-3">
          <h3 className="font-medium truncate">{name}</h3>
          <div className="flex items-center justify-between mt-1">
            <div>
              <span className="font-semibold">₹{price.toLocaleString()}</span>
              {originalPrice > price && (
                <span className="text-sm text-muted-foreground line-through ml-2">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">{rating}</span>
            </div>
          </div>
          {category && (
            <div className="mt-1">
              <span className="text-xs text-muted-foreground capitalize">{category}</span>
            </div>
          )}
        </div>
      </Card>
    </Link>
  )
}
