import type { Metadata } from "next"
import ShopPageClient from "./ShopPageClient"

export const metadata: Metadata = {
  title: "Shop | Pick&Fit",
  description: "Browse our collection of clothing, footwear, and accessories for men, women, and kids.",
}

export default function ShopPage() {
  return <ShopPageClient />
}
