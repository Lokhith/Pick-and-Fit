import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=300&query=person wearing casual outfit",
    href: "#",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=300&query=person trying on shoes at home",
    href: "#",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=300&query=person wearing stylish outfit mirror selfie",
    href: "#",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=300&query=person showing off new clothes",
    href: "#",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=300&query=person wearing pick and fit clothing",
    href: "#",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=300&query=person unboxing clothing package",
    href: "#",
  },
]

export default function SocialProof() {
  return (
    <section className="container px-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Join Our Community</h2>
          <p className="text-muted-foreground">
            Follow us on Instagram <span className="font-medium">@pickandfit</span> and share your style
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {instagramPosts.map((post) => (
            <Link key={post.id} href={post.href} className="group relative aspect-square overflow-hidden rounded-md">
              <Image
                src={post.image || "/placeholder.svg"}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
