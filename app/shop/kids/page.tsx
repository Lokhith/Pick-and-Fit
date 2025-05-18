import type { Metadata } from "next"
import KidsShopClient from "./kids-shop-client"

export const metadata: Metadata = {
  title: "Kids Shop | Pick & Fit",
  description: "Explore our collection of kids' clothing, footwear, and accessories.",
}

export default function KidsShopPage() {
  return <KidsShopClient />
}
