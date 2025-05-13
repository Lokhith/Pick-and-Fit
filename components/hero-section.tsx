"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight, Home, Package, CreditCard } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const slides = [
    {
      image: "/fashion-model-home-try-on.png",
      title: "Try Before You Buy",
      subtitle: "Order multiple sizes and styles, try them at home, return what doesn't fit",
    },
    {
      image: "/stylish-clothing-collection.png",
      title: "Pay Only For What You Keep",
      subtitle: "No upfront payment, only pay for items you love and decide to keep",
    },
    {
      image: "/comfortable-innerwear.png",
      title: "Free Returns, Always",
      subtitle: "Hassle-free returns with our prepaid return labels within 7 days",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000) // 10 seconds per slide

    return () => clearInterval(interval)
  }, [slides.length])

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[650px] md:h-[700px] w-full overflow-hidden bg-gray-900">
      {/* Background image carousel */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover object-center scale-[1.02]"
            priority={index === 0}
            sizes="100vw"
            quality={90}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="container relative z-10 flex h-full flex-col items-start justify-center px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary-foreground backdrop-blur-sm mb-6">
            <span className="mr-1">✨</span> The new way to shop fashion
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            {slides[currentSlide].title}
          </h1>

          {/* Subheadline */}
          <p className="mt-2 text-xl text-white/90 mb-6">{slides[currentSlide].subtitle}</p>

          {/* Main description */}
          <p className="mt-2 text-lg text-white/80 max-w-xl mb-8">
            Pick&Fit revolutionizes online shopping by letting you try clothes in the comfort of your home before
            committing to purchase. No more size surprises or style disappointments.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/shop" className="flex items-center">
                Shop Now <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            {/* Updated button with solid background color on hover */}
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-300"
            >
              <Link href="/how-it-works" className="flex items-center">
                How It Works <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Key benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-primary/20 p-2 backdrop-blur-sm">
                <Home className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">Try at Home</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-primary/20 p-2 backdrop-blur-sm">
                <Package className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-primary/20 p-2 backdrop-blur-sm">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">Pay Later</span>
            </div>
          </div>
        </motion.div>

        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
