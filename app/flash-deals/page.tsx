import SpotlightHeading from "@/components/spotlight-heading"

export default function FlashDealsPage() {
  return (
    <div className="py-12">
      <SpotlightHeading title="FLASH DEALS" subtitle="Limited-time offers with massive discounts" variant="secondary" />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">All Flash Deals</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This page will contain all flash deals products. Currently under development.
          </p>
        </div>
      </div>
    </div>
  )
}
