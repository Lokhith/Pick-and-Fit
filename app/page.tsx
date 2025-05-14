import HeroSection from "@/components/hero-section"
import FlashDeals from "@/components/flash-deals"
import FeaturedCategories from "@/components/featured-categories"
import PopularProducts from "@/components/popular-products"
import TryAtHomeFeature from "@/components/try-at-home-feature"
import Testimonials from "@/components/testimonials"
import NewsletterSignup from "@/components/newsletter-signup"
import SocialProof from "@/components/social-proof"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="py-4 flex flex-col gap-6">
        <FlashDeals />
        <FeaturedCategories />
        <PopularProducts />
        <TryAtHomeFeature />
        <Testimonials />
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <NewsletterSignup />
          </div>
        </div>
        <SocialProof />
      </div>
    </div>
  )
}
