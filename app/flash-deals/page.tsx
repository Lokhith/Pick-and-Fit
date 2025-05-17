import type { Metadata } from "next"
import SpotlightHeading from "@/components/spotlight-heading"
import { FlashDealsPageClient } from "./flash-deals-page-client"

export const metadata: Metadata = {
  title: "Flash Deals | Pick & Fit",
  description: "Limited-time flash deals with massive discounts on fashion items",
}

export default function FlashDealsPage() {
  return (
    <div className="py-8 min-h-screen">
      <SpotlightHeading
        title="FLASH DEALS"
        subtitle="Limited-time offers with massive discounts - Grab them before they're gone!"
        variant="secondary"
      />
      <FlashDealsPageClient />
    </div>
  )
}
