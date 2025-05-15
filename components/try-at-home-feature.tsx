import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TryAtHomeFeature() {
  return (
    <section className="container px-4 py-12">
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/20">
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/5 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/5 rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-400/5 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                🛍️ How It Works – Pick&Fit
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our innovative try-at-home service lets you experience products before you commit to buying them.
              </p>
            </div>

            {/* Steps */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line connecting steps */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600 hidden md:block"></div>

                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-start mb-8 relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4 md:mb-0 z-10">
                    1
                  </div>
                  <div className="md:ml-6 md:mt-2">
                    <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                      Browse and Add to Basket
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Explore our wide range of products, including clothing, footwear, accessories, and more. Add up to{" "}
                      <span className="font-semibold">200 items</span> you'd like to try at home to your basket.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-start mb-8 relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4 md:mb-0 z-10">
                    2
                  </div>
                  <div className="md:ml-6 md:mt-2">
                    <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                      Place Your Order for Home Trial
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Once you've selected your favorites, place the order{" "}
                      <span className="font-semibold">without any upfront payment</span>. Just provide your address, and
                      we'll handle the rest.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-start mb-8 relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4 md:mb-0 z-10">
                    3
                  </div>
                  <div className="md:ml-6 md:mt-2">
                    <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Fast Delivery</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our delivery executive will bring your selected items to your specified address{" "}
                      <span className="font-semibold">within 30 minutes</span>.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-start mb-8 relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4 md:mb-0 z-10">
                    4
                  </div>
                  <div className="md:ml-6 md:mt-2">
                    <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Try at Home</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Take your time to try the products in the comfort of your home. You'll have{" "}
                      <span className="font-semibold">15 minutes</span> to decide if the items are the right fit for
                      you.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-start mb-8 relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4 md:mb-0 z-10">
                    5
                  </div>
                  <div className="md:ml-6 md:mt-2">
                    <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Flexible Trial Time</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Need more time to decide? You can extend the trial by paying just{" "}
                      <span className="font-semibold">₹50 for every 10 minutes</span> for as long as you need.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex flex-col md:flex-row items-start mb-8 relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4 md:mb-0 z-10">
                    6
                  </div>
                  <div className="md:ml-6 md:mt-2">
                    <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                      Free Waiting for Large Orders
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      If your order value is <span className="font-semibold">₹5,000 or more</span>, you'll get 30
                      minutes of free waiting time – no extra charges!
                    </p>
                  </div>
                </div>

                {/* Step 7 */}
                <div className="flex flex-col md:flex-row items-start relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4 md:mb-0 z-10">
                    7
                  </div>
                  <div className="md:ml-6 md:mt-2">
                    <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Pay for What You Love</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Only pay for the items you decide to keep. The rest will be taken back by our delivery executive,
                      ensuring a <span className="font-semibold">hassle-free shopping experience</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-full group"
              >
                Try Now
                <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
