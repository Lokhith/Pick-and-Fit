"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Search,
  ShoppingBag,
  Truck,
  Home,
  Clock,
  Timer,
  CreditCard,
  ThumbsUp,
  RefreshCw,
  PlayCircle,
  ChevronRight,
  Star,
} from "lucide-react"
import { motion } from "framer-motion"

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary"
    >
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/5 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-150"></div>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group rounded-lg border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-md"
    >
      <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </motion.div>
  )
}

function TimelineStep({
  number,
  title,
  description,
  icon,
  isLeft,
}: {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  isLeft: boolean
}) {
  return (
    <>
      {isLeft ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group relative md:pr-10"
          >
            <div className="hidden md:block absolute right-0 top-6 h-4 w-4 rounded-full bg-primary"></div>
            <div className="hidden md:block absolute right-4 top-8 h-0.5 w-6 bg-primary"></div>
            <div className="rounded-lg border border-transparent bg-card p-6 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-primary">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                {icon}
              </div>
              <div className="flex items-center mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white mr-3">
                  <span className="text-lg font-bold">{number}</span>
                </div>
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{title}</h3>
              </div>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </motion.div>
          <div className="hidden md:block"></div>
        </>
      ) : (
        <>
          <div className="hidden md:block"></div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group relative md:pl-10"
          >
            <div className="hidden md:block absolute left-0 top-6 h-4 w-4 rounded-full bg-primary"></div>
            <div className="hidden md:block absolute left-4 top-8 h-0.5 w-6 bg-primary"></div>
            <div className="rounded-lg border border-transparent bg-card p-6 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-primary">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                {icon}
              </div>
              <div className="flex items-center mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white mr-3">
                  <span className="text-lg font-bold">{number}</span>
                </div>
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{title}</h3>
              </div>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </motion.div>
        </>
      )}
    </>
  )
}

export default function HowItWorksClient() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  return (
    <div className="container py-12">
      {/* Hero Section with Video */}
      <section className="mb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Try Before You Buy
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">How Pick&Fit Works</h1>
            <p className="mb-6 text-xl text-muted-foreground">
              Try at home, pay only for what you keep. It's shopping, reimagined.
            </p>
            <p className="mb-8 text-muted-foreground">
              Pick&Fit revolutionizes online shopping by letting you try clothes in the comfort of your home before
              committing to purchase. With fast delivery and flexible trial times, we make shopping stress-free and
              convenient.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="/shop" className="flex items-center">
                  Start Shopping
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link href="/signup" className="flex items-center">
                  Create Account
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl shadow-xl"
          >
            <div className="relative aspect-video bg-black/5">
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handlePlayVideo}
                    className="rounded-full p-3 bg-white/80 hover:bg-white/90 backdrop-blur-sm group"
                  >
                    <PlayCircle className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="sr-only">Play Video</span>
                  </Button>
                </div>
              )}
              {!isVideoPlaying ? (
                <Image
                  src="/fashion-model-home-try-on.png"
                  alt="How Pick&Fit Works"
                  fill
                  className="object-cover object-center opacity-90"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              ) : (
                <video
                  ref={videoRef}
                  controls
                  className="absolute inset-0 h-full w-full object-cover"
                  poster="/fashion-model-home-try-on.png"
                >
                  <source src="/video-placeholder.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {!isVideoPlaying && (
                <div className="absolute bottom-4 left-4 z-10 rounded-full bg-primary/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  Watch How It Works
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Timeline Process */}
      <section className="mb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-2 h-1 w-20 rounded bg-primary"></div>
          <h2 className="mb-2 text-3xl font-bold tracking-tight">The Pick&Fit Process</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our simple 7-step process makes online shopping stress-free and enjoyable
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          {/* Center line for desktop */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary/20 hidden md:block"></div>

          {/* Timeline items */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <TimelineStep
              number={1}
              title="Browse and Add to Basket"
              description="Explore our wide range of products, including clothing, footwear, accessories, and more. Add up to 200 items you'd like to try at home to your basket."
              icon={<Search className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />}
              isLeft={true}
            />

            <TimelineStep
              number={2}
              title="Place Your Order for Home Trial"
              description="Once you've selected your favorites, place the order without any upfront payment. Just provide your address, and we'll handle the rest."
              icon={<ShoppingBag className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />}
              isLeft={false}
            />

            <TimelineStep
              number={3}
              title="Fast Delivery"
              description="Our delivery executive will bring your selected items to your specified address within 30 minutes."
              icon={<Truck className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />}
              isLeft={true}
            />

            <TimelineStep
              number={4}
              title="Try at Home"
              description="Take your time to try the products in the comfort of your home. You'll have 15 minutes to decide if the items are the right fit for you."
              icon={<Home className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />}
              isLeft={false}
            />

            <TimelineStep
              number={5}
              title="Flexible Trial Time"
              description="Need more time to decide? You can extend the trial by paying just ₹50 for every 10 minutes for as long as you need."
              icon={<Clock className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />}
              isLeft={true}
            />

            <TimelineStep
              number={6}
              title="Free Waiting for Large Orders"
              description="If your order value is ₹5,000 or more, you'll get 30 minutes of free waiting time – no extra charges!"
              icon={<Timer className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />}
              isLeft={false}
            />

            <TimelineStep
              number={7}
              title="Pay for What You Love"
              description="Only pay for the items you decide to keep. The rest will be taken back by our delivery executive, ensuring a hassle-free shopping experience."
              icon={<CreditCard className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />}
              isLeft={true}
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="mb-24 py-16 bg-muted rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <div className="mx-auto mb-2 h-1 w-20 rounded bg-primary"></div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight">Benefits of Pick&Fit</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">Why our customers love the Pick&Fit experience</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Ultra-Fast Delivery"
              description="Get your selected items delivered to your doorstep within 30 minutes of placing your order."
              icon={<Truck className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />}
            />
            <FeatureCard
              title="No Upfront Payment"
              description="You don't pay anything until you decide what you want to keep. Only pay for what you love."
              icon={<CreditCard className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />}
            />
            <FeatureCard
              title="Try Before You Buy"
              description="Experience the comfort, fit, and style of products before making a purchase decision."
              icon={<Home className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />}
            />
            <FeatureCard
              title="Flexible Trial Time"
              description="Need more time? Extend your trial period for as long as you need with our affordable extension option."
              icon={<Clock className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />}
            />
            <FeatureCard
              title="Premium Benefits for Large Orders"
              description="Orders over ₹5,000 get 30 minutes of free waiting time, giving you more time to decide."
              icon={<ThumbsUp className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />}
            />
            <FeatureCard
              title="Hassle-Free Returns"
              description="Our delivery executive takes back unwanted items on the spot - no return shipping or drop-offs needed."
              icon={<RefreshCw className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-2 h-1 w-20 rounded bg-primary"></div>
          <h2 className="mb-2 text-3xl font-bold tracking-tight">What Our Customers Say</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Hear from people who have experienced the Pick&Fit difference
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-xl bg-card p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="absolute -left-3 -top-3 text-6xl text-primary opacity-20 group-hover:opacity-30">"</div>
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Rahul M.</div>
                <div className="text-sm text-muted-foreground">Verified Customer</div>
              </div>
            </div>
            <p className="mb-4 text-muted-foreground">
              "The 30-minute delivery is incredible! I ordered during my lunch break and was able to try everything
              before heading back to work. Kept 2 shirts and returned the rest without any hassle."
            </p>
            <div className="flex text-primary">
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
            </div>
          </motion.blockquote>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-xl bg-card p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="absolute -left-3 -top-3 text-6xl text-primary opacity-20 group-hover:opacity-30">"</div>
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Priya K.</div>
                <div className="text-sm text-muted-foreground">Verified Customer</div>
              </div>
            </div>
            <p className="mb-4 text-muted-foreground">
              "Being able to try multiple sizes at home saved me from buying the wrong fit. The delivery person was
              patient while I tried everything on. This service is revolutionary!"
            </p>
            <div className="flex text-primary">
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
            </div>
          </motion.blockquote>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-xl bg-card p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="absolute -left-3 -top-3 text-6xl text-primary opacity-20 group-hover:opacity-30">"</div>
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Arjun S.</div>
                <div className="text-sm text-muted-foreground">Verified Customer</div>
              </div>
            </div>
            <p className="mb-4 text-muted-foreground">
              "I ordered items worth ₹6,000 and got 30 minutes of free waiting time. It was perfect because I needed to
              try several outfits together. Will definitely use Pick&Fit again!"
            </p>
            <div className="flex text-primary">
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
              <Star className="h-4 w-4 fill-primary" />
            </div>
          </motion.blockquote>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-2 h-1 w-20 rounded bg-primary"></div>
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Everything you need to know about our try-before-you-buy service
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FAQ
            question="How many items can I order for home trial?"
            answer="You can order up to 200 items per order to try at home. This gives you plenty of options to find exactly what you're looking for."
          />
          <FAQ
            question="How long is the initial trial period?"
            answer="The initial trial period is 15 minutes, during which you can try on all the items you've ordered and decide which ones you want to keep."
          />
          <FAQ
            question="How much does it cost to extend the trial period?"
            answer="You can extend your trial period by paying ₹50 for every additional 10 minutes. This gives you flexibility if you need more time to decide."
          />
          <FAQ
            question="What if my order is over ₹5,000?"
            answer="Orders valued at ₹5,000 or more receive 30 minutes of free waiting time instead of the standard 15 minutes, giving you more time to try your items."
          />
          <FAQ
            question="Do I need to pay anything upfront?"
            answer="No, there's no upfront payment required. You only pay for the items you decide to keep after trying them on."
          />
          <FAQ
            question="How do returns work?"
            answer="Returns are simple - our delivery executive waits during your trial period and takes back any items you don't want to keep. There's no need to arrange for return shipping."
          />
          <FAQ
            question="What areas do you deliver to?"
            answer="We currently deliver to major metropolitan areas and surrounding suburbs. Enter your pincode on our website to check if we deliver to your area."
          />
          <FAQ
            question="Can I exchange items for a different size?"
            answer="If you need a different size, you can place a new order for the item in your preferred size. Our 30-minute delivery ensures you'll receive it quickly."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl bg-primary p-12 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/fashion-model-home-try-on.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center"
        >
          <div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight">Ready to Transform Your Shopping Experience?</h2>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Join thousands of satisfied customers who have discovered a better way to shop online with Pick&Fit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link href="/shop" className="flex items-center">
                  Start Shopping Now
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 group" asChild>
                <Link href="/signup" className="flex items-center">
                  Create Account
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div className="text-4xl font-bold">30</div>
              <div className="text-sm">Minute delivery</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-4xl font-bold">15</div>
              <div className="text-sm">Minute trial period</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <div className="text-4xl font-bold">200</div>
              <div className="text-sm">Items per order</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div className="text-4xl font-bold">0</div>
              <div className="text-sm">Upfront payment</div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
