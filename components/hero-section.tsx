import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <Image
        src="/fashion-model-home-try-on.png"
        alt="Try at home fashion experience"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 flex h-full flex-col items-start justify-center px-4 text-white">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Shop, Try, and Fit – Your Style, Your Choice
        </h1>
        <p className="mt-4 max-w-lg text-lg text-white/90">
          Order multiple items, try them at home, and only pay for what you keep. Experience a new way of shopping with
          Pick&Fit.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}
