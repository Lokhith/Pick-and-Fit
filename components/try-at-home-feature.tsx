import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function TryAtHomeFeature() {
  return (
    <section className="container px-4">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=600&width=600&query=person trying clothes at home with shopping bags"
            alt="Try at home experience"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Try Before You Buy</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience a new way of shopping with our unique try-at-home service. Order multiple items, try them in
              the comfort of your home, and only pay for what you keep.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Select Multiple Items</h3>
                <p className="text-muted-foreground">Choose up to 5 items to try at home with no upfront payment</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Free Home Delivery</h3>
                <p className="text-muted-foreground">
                  We deliver your selected items to your doorstep at no extra cost
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Try in Comfort</h3>
                <p className="text-muted-foreground">Take your time to try everything in the comfort of your home</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Pay Only for What You Keep</h3>
                <p className="text-muted-foreground">
                  Return unwanted items for free and only pay for what you decide to keep
                </p>
              </div>
            </div>
          </div>
          <Button size="lg" className="w-fit">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
