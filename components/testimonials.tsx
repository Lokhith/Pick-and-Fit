import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/woman-portrait.png",
    rating: 5,
    text: "The try-at-home feature is a game-changer! I was able to try multiple sizes and styles before deciding. The quality of the clothes is excellent too.",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/thoughtful-man-portrait.png",
    rating: 5,
    text: "I hate shopping in stores, so Pick&Fit is perfect for me. I ordered several shirts and jeans, tried them all, and kept what fit best. Simple and convenient!",
  },
  {
    id: 3,
    name: "Priya Patel",
    avatar: "/indian-woman-portrait.png",
    rating: 4,
    text: "The quality of the products is outstanding. I especially love their cotton innerwear collection. The try-at-home service makes shopping so much easier.",
  },
]

export default function Testimonials() {
  return (
    <section className="container px-4 py-12">
      <div className="flex flex-col gap-8">
        {/* Minimal Heading with Customer Icons */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="flex -space-x-2 mr-3">
              <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-100 overflow-hidden shadow-sm">
                <Image
                  src="/diverse-woman-smiling.png"
                  alt="Customer"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-100 overflow-hidden shadow-sm">
                <Image
                  src="/smiling-man.png"
                  alt="Customer"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-100 overflow-hidden shadow-sm">
                <Image
                  src="/woman-portrait.png"
                  alt="Customer"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-blue-600">What Our Customers Say</h2>
            <div className="flex -space-x-2 ml-3">
              <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-100 overflow-hidden shadow-sm">
                <Image
                  src="/thoughtful-man-portrait.png"
                  alt="Customer"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-100 overflow-hidden shadow-sm">
                <Image
                  src="/diverse-woman-smiling.png"
                  alt="Customer"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600 shadow-sm">
                +99
              </div>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our satisfied customers who love the Pick&Fit experience
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
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
