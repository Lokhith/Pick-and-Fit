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
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t dark:border-gray-800">
      {/* Pre-Footer Banner */}
      <div className="bg-primary/10 dark:bg-primary/20 py-4">
        <div className="container px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="font-medium dark:text-gray-200">Secure Payments</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-6 w-6 text-primary" />
              <span className="font-medium dark:text-gray-200">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-6 w-6 text-primary" />
              <span className="font-medium dark:text-gray-200">Pay Only For What You Keep</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: About & Social */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/pick-and-fit-logo.png" alt="Pick&Fit Logo" width={150} height={50} className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground dark:text-gray-400">
              Pick&Fit offers a unique blend of online and offline shopping by allowing users to order multiple items,
              try them at home, and only pay for what they keep.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="group">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </div>
              </Link>
            </div>

            {/* Payment Methods */}
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2 dark:text-gray-300">We Accept</h4>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white dark:bg-gray-800 p-1.5 rounded shadow-sm">
                  <Image src="/visa-card-logo.png" alt="Visa" width={40} height={30} />
                </div>
                <div className="bg-white dark:bg-gray-800 p-1.5 rounded shadow-sm">
                  <Image src="/mastercard-logo.png" alt="Mastercard" width={40} height={30} />
                </div>
                <div className="bg-white dark:bg-gray-800 p-1.5 rounded shadow-sm">
                  <Image src="/american-express-logo.png" alt="American Express" width={40} height={30} />
                </div>
                <div className="bg-white dark:bg-gray-800 p-1.5 rounded shadow-sm">
                  <Image src="/paypal-logo.png" alt="PayPal" width={40} height={30} />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold dark:text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-primary dark:after:bg-primary">
              Quick Links
            </h3>
            <nav className="grid grid-cols-1 gap-2">
              <Link
                href="/about"
                className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center group"
              >
                <ChevronRight className="h-4 w-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                About Us
              </Link>
              <Link
                href="/how-it-works"
                className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center group"
              >
                <ChevronRight className="h-4 w-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                How It Works
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center group"
              >
                <ChevronRight className="h-4 w-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Contact Us
              </Link>
              <Link
                href="/returns"
                className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center group"
              >
                <ChevronRight className="h-4 w-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Returns & Refunds
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold dark:text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-primary">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                <address className="not-italic text-muted-foreground dark:text-gray-400">
                  <p>42 Fashion Avenue</p>
                  <p>Koramangala, Bangalore 560034</p>
                  <p>Karnataka, India</p>
                </address>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:info@pickandfit.com"
                  className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  info@pickandfit.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+919025666209"
                  className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  +91 9025666209
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Clock className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-muted-foreground dark:text-gray-400">
                  <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t dark:border-gray-800 text-center text-sm text-muted-foreground dark:text-gray-400">
          <p>© {new Date().getFullYear()} Pick&Fit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
