import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  CreditCard,
  ShieldCheck,
  Truck,
  ChevronRight,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t dark:border-gray-800">
      {/* Pre-Footer Banner */}
      <div className="bg-primary/10 dark:bg-primary/20 py-3">
        <div className="container px-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span className="font-medium text-sm dark:text-gray-200">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="font-medium text-sm dark:text-gray-200">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <span className="font-medium text-sm dark:text-gray-200">Pay Only For What You Keep</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-4 py-8 md:py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Column 1: About & Social */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/pick-and-fit-logo.png" alt="Pick&Fit Logo" width={130} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Pick&Fit offers a unique blend of online and offline shopping by allowing users to order multiple items,
              try them at home, and only pay for what they keep.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </div>
              </Link>
            </div>

            {/* Payment Methods */}
            <div className="mt-2">
              <h4 className="text-xs font-medium mb-1.5 dark:text-gray-300">We Accept</h4>
              <div className="flex flex-wrap gap-1.5">
                <div className="bg-white dark:bg-gray-800 p-1 rounded shadow-sm">
                  <Image src="/visa-card-logo.png" alt="Visa" width={32} height={24} />
                </div>
                <div className="bg-white dark:bg-gray-800 p-1 rounded shadow-sm">
                  <Image src="/mastercard-logo.png" alt="Mastercard" width={32} height={24} />
                </div>
                <div className="bg-white dark:bg-gray-800 p-1 rounded shadow-sm">
                  <Image src="/american-express-logo.png" alt="American Express" width={32} height={24} />
                </div>
                <div className="bg-white dark:bg-gray-800 p-1 rounded shadow-sm">
                  <Image src="/paypal-logo.png" alt="PayPal" width={32} height={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold dark:text-white relative pb-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-primary dark:after:bg-primary">
              Quick Links
            </h3>
            <nav className="grid grid-cols-1 gap-1.5">
              <Link
                href="/about"
                className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center group"
              >
                <ChevronRight className="h-3.5 w-3.5 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                About Us
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center group"
              >
                <ChevronRight className="h-3.5 w-3.5 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                How It Works
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center group"
              >
                <ChevronRight className="h-3.5 w-3.5 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Contact Us
              </Link>
              <Link
                href="/returns"
                className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center group"
              >
                <ChevronRight className="h-3.5 w-3.5 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Returns & Refunds
              </Link>
            </nav>

            {/* Newsletter Subscription */}
            <div className="mt-3">
              <h3 className="text-base font-semibold dark:text-white relative pb-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-primary dark:after:bg-primary">
                Subscribe to Newsletter
              </h3>
              <p className="text-xs text-muted-foreground dark:text-gray-400 mt-1.5 mb-2">
                Get exclusive offers and updates directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="pr-10 h-9 text-sm bg-white dark:bg-gray-800"
                  />
                  <Button
                    size="sm"
                    className="absolute right-1 top-1 h-7 w-7 p-0 flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold dark:text-white relative pb-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-primary">
              Contact Information
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 group">
                <MapPin className="h-4 w-4 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                <address className="not-italic text-sm text-muted-foreground dark:text-gray-400">
                  <p>42 Fashion Avenue, Koramangala</p>
                  <p>Bangalore 560034, Karnataka, India</p>
                </address>
              </div>
              <div className="flex items-center gap-2 group">
                <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:info@pickandfit.com"
                  className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  info@pickandfit.com
                </a>
              </div>
              <div className="flex items-center gap-2 group">
                <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+919025666209"
                  className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  +91 9025666209
                </a>
              </div>
              <div className="flex items-center gap-2 group">
                <Clock className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-sm text-muted-foreground dark:text-gray-400">
                  <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t dark:border-gray-800 text-center text-xs text-muted-foreground dark:text-gray-400">
          <p>© {new Date().getFullYear()} Pick&Fit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
