import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/single-ripe-red-tomato.png"
                alt="Pick&Fit Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground">
              Pick&Fit offers a unique blend of online and offline shopping by allowing users to order multiple items,
              try them at home, and only pay for what they keep.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                FAQs
              </Link>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Contact Information</h3>
            <address className="not-italic text-muted-foreground">
              <p>123 Fashion Street</p>
              <p>Styleville, ST 12345</p>
              <p>United States</p>
            </address>
            <p className="text-muted-foreground">
              <span className="font-medium">Email:</span> info@pickandfit.com
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium">Phone:</span> +1 (555) 123-4567
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-muted-foreground">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pick&Fit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
