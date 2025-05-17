import { Suspense } from "react"
import ProductDetailClient from "./product-detail-client"
import { getProductById, getRelatedProducts } from "@/lib/product-data"
import { notFound } from "next/navigation"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // Get the product data
  const product = getProductById(params.id)

  // If product is not found, show 404 page
  if (product.id === "not-found") {
    notFound()
  }

  // Get related products
  const relatedProducts = getRelatedProducts(params.id)

  // Log the product data for debugging
  console.log("Product data:", {
    id: product.id,
    name: product.name,
    image: product.image,
  })

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <Suspense fallback={<div className="text-center py-20">Loading product details...</div>}>
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      </Suspense>
    </div>
  )
}
