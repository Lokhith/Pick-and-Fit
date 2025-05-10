import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=80&width=80&query=woman portrait",
    rating: 5,
    text: "The try-at-home feature is a game-changer! I was able to try multiple sizes and styles before deciding. The quality of the clothes is excellent too.",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=80&width=80&query=man portrait",
    rating: 5,
    text: "I hate shopping in stores, so Pick&Fit is perfect for me. I ordered several shirts and jeans, tried them all, and kept what fit best. Simple and convenient!",
  },
  {
    id: 3,
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=80&width=80&query=woman portrait indian",
    rating: 4,
    text: "The quality of the products is outstanding. I especially love their cotton innerwear collection. The try-at-home service makes shopping so much easier.",
  },
]

export default function Testimonials() {
  return (
    <section className="container px-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">What Our Customers Say</h2>
          <p className="text-muted-foreground">Real experiences from our satisfied customers</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
