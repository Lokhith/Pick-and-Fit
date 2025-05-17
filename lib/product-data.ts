// Product interface
export interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  category: string
  subcategory?: string
  gender?: string
  kidGender?: string
  rating: number
  reviewCount?: number
  tags?: string[]
  shortDescription?: string
  description?: string
}

// Sample product data - updated with numeric IDs
const products: Product[] = [
  // Men's products
  {
    id: "1",
    name: "Classic White Shirt",
    price: 1299,
    originalPrice: 1999,
    image: "/mens-white-shirt-fashion.png",
    category: "casual-wear",
    subcategory: "shirts",
    gender: "men",
    rating: 4.5,
    reviewCount: 128,
    tags: ["Best Seller", "Pure Cotton"],
    shortDescription: "Premium cotton shirt for everyday comfort",
    description:
      "This classic white shirt is made from 100% organic cotton for ultimate comfort. The breathable fabric ensures you stay fresh throughout the day, while the timeless design makes it perfect for any casual occasion. Pair it with jeans or formal pants for an effortlessly stylish look.",
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 1499,
    originalPrice: 2499,
    image: "/mens-slim-fit-jeans.png",
    category: "casual-wear",
    subcategory: "pants",
    gender: "men",
    rating: 4.7,
    reviewCount: 86,
    tags: ["Trending", "Comfortable"],
    shortDescription: "Comfortable slim fit jeans with stretch fabric",
    description:
      "These slim fit jeans combine style and comfort with their premium denim fabric that includes just the right amount of stretch. The modern slim fit silhouette flatters your physique while allowing freedom of movement. Versatile enough for both casual and semi-formal occasions, these jeans will quickly become your go-to choice.",
  },
  {
    id: "3",
    name: "Casual T-Shirt",
    price: 799,
    originalPrice: 1299,
    image: "/mens-casual-tshirt-fashion.png",
    category: "casual-wear",
    subcategory: "t-shirts",
    gender: "men",
    rating: 4.4,
    reviewCount: 89,
    tags: ["Casual", "Comfortable"],
    shortDescription: "Comfortable casual t-shirt for everyday wear",
    description:
      "This casual t-shirt is perfect for your everyday wardrobe. Made from soft, breathable fabric that keeps you comfortable all day long. The relaxed fit and durable construction ensure it will be a staple in your closet for seasons to come. Available in multiple colors to match any style.",
  },
  {
    id: "4",
    name: "Formal Shirt",
    price: 1599,
    originalPrice: 2599,
    image: "/mens-formal-shirt-fashion.png",
    category: "formal-wear",
    subcategory: "shirts",
    gender: "men",
    rating: 4.6,
    reviewCount: 112,
    tags: ["Formal", "Business"],
    shortDescription: "Crisp formal shirt for professional settings",
    description:
      "Make a professional impression with this crisp formal shirt. Tailored for a perfect fit with wrinkle-resistant fabric that keeps you looking sharp throughout the day. The classic design features a standard collar and button cuffs, making it versatile for various business and formal occasions.",
  },
  {
    id: "5",
    name: "Formal Pants",
    price: 1899,
    originalPrice: 2999,
    image: "/mens-formal-pants-fashion.png",
    category: "formal-wear",
    subcategory: "pants",
    gender: "men",
    rating: 4.3,
    reviewCount: 68,
    tags: ["Formal", "Office Wear"],
    shortDescription: "Classic formal pants for professional attire",
    description:
      "Complete your professional wardrobe with these classic formal pants. The tailored fit and premium fabric create a polished look suitable for business meetings and formal events. The comfortable waistband and durable construction ensure all-day comfort and long-lasting wear.",
  },
  {
    id: "6",
    name: "Oversized Shirt",
    price: 1399,
    originalPrice: 2199,
    image: "/mens-oversized-shirt-fashion.png",
    category: "oversized-fit",
    subcategory: "shirts",
    gender: "men",
    rating: 4.7,
    reviewCount: 94,
    tags: ["Trending", "Casual"],
    shortDescription: "Stylish oversized shirt for a relaxed look",
    description:
      "Embrace the oversized trend with this stylish shirt. The relaxed fit provides ultimate comfort while maintaining a fashionable appearance. Perfect for casual outings or lounging at home, this versatile piece can be styled in numerous ways to create different looks.",
  },
  {
    id: "7",
    name: "Oversized Pants",
    price: 1699,
    originalPrice: 2599,
    image: "/mens-baggy-pants-fashion.png",
    category: "oversized-fit",
    subcategory: "pants",
    gender: "men",
    rating: 4.4,
    reviewCount: 72,
    tags: ["Trending", "Comfortable"],
    shortDescription: "Comfortable oversized pants for a relaxed fit",
    description:
      "These oversized pants offer both style and comfort with their relaxed fit and premium fabric. The loose silhouette provides freedom of movement while maintaining a fashionable appearance. Perfect for casual outings or lounging at home, these pants will quickly become a staple in your wardrobe.",
  },
  {
    id: "8",
    name: "Polo T-Shirt",
    price: 999,
    originalPrice: 1599,
    image: "/placeholder.svg?key=kww7e",
    category: "oversized-fit",
    subcategory: "polo-t-shirts",
    gender: "men",
    rating: 4.6,
    reviewCount: 88,
    tags: ["Classic", "Casual"],
    shortDescription: "Classic polo t-shirt for a smart casual look",
    description:
      "This classic polo t-shirt combines comfort and style for a smart casual look. The premium cotton fabric ensures breathability and softness, while the traditional design with a collar and button placket adds a touch of sophistication. Perfect for casual Fridays at work or weekend outings.",
  },
  {
    id: "9",
    name: "Round Neck T-Shirt",
    price: 899,
    originalPrice: 1399,
    image: "/men-round-neck-t-shirt.png",
    category: "oversized-fit",
    subcategory: "round-neck-t-shirts",
    gender: "men",
    rating: 4.2,
    reviewCount: 64,
    tags: ["Basic", "Everyday"],
    shortDescription: "Comfortable round neck t-shirt for everyday wear",
    description:
      "This comfortable round neck t-shirt is perfect for everyday wear. Made from soft, breathable cotton, it keeps you comfortable throughout the day. The simple design makes it versatile enough to pair with any bottom, from jeans to shorts, for a casual, effortless look.",
  },
  {
    id: "10",
    name: "Oversized Hoodie",
    price: 1899,
    originalPrice: 2999,
    image: "/men-oversized-hoodie.png",
    category: "oversized-fit",
    subcategory: "hoodies",
    gender: "men",
    rating: 4.8,
    reviewCount: 156,
    tags: ["Winter Collection", "Warm"],
    shortDescription: "Warm and comfortable hoodie for cold days",
    description:
      "Stay warm and stylish with this oversized hoodie. The soft fleece lining provides excellent insulation, while the adjustable hood offers additional protection from the elements. Perfect for lazy weekends or casual outings, this versatile hoodie is a must-have for your winter wardrobe.",
  },
  {
    id: "11",
    name: "Vest",
    price: 499,
    originalPrice: 799,
    image: "/men-white-vest-innerwear.png",
    category: "innerwear",
    subcategory: "vests",
    gender: "men",
    rating: 4.1,
    reviewCount: 52,
    tags: ["Innerwear", "Basic"],
    shortDescription: "Comfortable cotton vest for everyday wear",
    description:
      "This comfortable cotton vest is designed for everyday wear. The soft, breathable fabric keeps you cool and comfortable throughout the day. The sleeveless design makes it perfect for wearing under shirts or as a standalone piece during hot weather.",
  },
  {
    id: "12",
    name: "Gym Vest",
    price: 599,
    originalPrice: 999,
    image: "/men-gym-tank-top.png",
    category: "innerwear",
    subcategory: "gym-vests",
    gender: "men",
    rating: 4.6,
    reviewCount: 78,
    tags: ["Gym Wear", "Active"],
    shortDescription: "Moisture-wicking gym vest for workouts",
    description:
      "Enhance your workout experience with this moisture-wicking gym vest. The lightweight, breathable fabric keeps you cool and dry during intense exercise sessions. The sleeveless design provides unrestricted movement, making it perfect for any type of workout, from weightlifting to cardio.",
  },
  {
    id: "13",
    name: "Briefs",
    price: 399,
    originalPrice: 699,
    image: "/men-briefs-fashion.png",
    category: "innerwear",
    subcategory: "briefs",
    gender: "men",
    rating: 4.3,
    reviewCount: 62,
    tags: ["Innerwear", "Pack of 3"],
    shortDescription: "Comfortable cotton briefs for everyday wear",
    description:
      "These comfortable cotton briefs are designed for everyday wear. The soft, breathable fabric ensures all-day comfort, while the elastic waistband provides a secure fit. Each pack contains three briefs in different colors, offering variety and value.",
  },

  // Women's products
  {
    id: "14",
    name: "Formal Shirt",
    price: 1499,
    originalPrice: 2499,
    image: "/formal-shirt-business-woman.png",
    category: "formal-wear",
    subcategory: "shirts",
    gender: "women",
    rating: 4.6,
    reviewCount: 94,
    tags: ["Formal", "Office Wear"],
    shortDescription: "Elegant formal shirt for professional women",
    description:
      "This elegant formal shirt is designed for the modern professional woman. The tailored fit and premium fabric create a polished look that transitions seamlessly from day to evening. The wrinkle-resistant material ensures you look crisp and put-together throughout your busy day. Pair with formal pants or a skirt for a complete business look.",
  },
  {
    id: "15",
    name: "Casual Shirt",
    price: 1299,
    originalPrice: 1999,
    image: "/women-casual-shirt-fashion.png",
    category: "casual-wear",
    subcategory: "shirts",
    gender: "women",
    rating: 4.5,
    reviewCount: 78,
    tags: ["Casual", "Weekend"],
    shortDescription: "Comfortable casual shirt for relaxed style",
    description:
      "This comfortable casual shirt is perfect for weekend outings or relaxed office environments. Made from soft, breathable fabric, it offers both style and comfort. The versatile design can be dressed up with accessories or kept simple for a more laid-back look.",
  },
  {
    id: "16",
    name: "Oversized Hoodie",
    price: 1799,
    originalPrice: 2899,
    image: "/women-oversized-hoodie.png",
    category: "oversized-fit",
    subcategory: "hoodies",
    gender: "women",
    rating: 4.7,
    reviewCount: 112,
    tags: ["Cozy", "Lounge Wear"],
    shortDescription: "Cozy oversized hoodie for ultimate comfort",
    description:
      "Wrap yourself in comfort with this oversized hoodie. The soft fleece lining provides warmth while the roomy design ensures unrestricted movement. Perfect for lounging at home or casual outings when paired with leggings or jeans.",
  },

  // Beauty products
  {
    id: "17",
    name: "Gentle Facial Cleanser",
    price: 599,
    originalPrice: 999,
    image: "/facial-cleanser-product.png",
    category: "skincare",
    subcategory: "cleanser",
    gender: "beauty",
    rating: 4.7,
    reviewCount: 186,
    tags: ["Gentle", "For All Skin Types"],
    shortDescription: "Gentle yet effective cleanser for all skin types",
    description:
      "This gentle facial cleanser effectively removes impurities without stripping your skin's natural moisture. Formulated with soothing botanical extracts and mild surfactants, it cleanses deeply while maintaining your skin's natural balance. Perfect for daily use, this cleanser prepares your skin for the rest of your skincare routine while leaving it feeling fresh and comfortable.",
  },
  {
    id: "18",
    name: "Hydrating Moisturizer",
    price: 799,
    originalPrice: 1299,
    image: "/moisturizer-skincare-product.png",
    category: "skincare",
    subcategory: "moisturisers",
    gender: "beauty",
    rating: 4.8,
    reviewCount: 142,
    tags: ["Hydrating", "Non-greasy"],
    shortDescription: "Lightweight daily moisturizer for lasting hydration",
    description:
      "Keep your skin hydrated all day long with this lightweight daily moisturizer. The fast-absorbing formula delivers intense hydration without a greasy feel, making it perfect for all skin types. Enriched with hyaluronic acid and ceramides, it strengthens your skin barrier while providing the moisture your skin needs. Use morning and night for best results.",
  },
  {
    id: "19",
    name: "Vitamin C Serum",
    price: 1299,
    originalPrice: 1999,
    image: "/vitamin-c-serum-product.png",
    category: "skincare",
    subcategory: "serum",
    gender: "beauty",
    rating: 4.9,
    reviewCount: 214,
    tags: ["Anti-aging", "Brightening"],
    shortDescription: "Powerful vitamin C serum for brighter, younger-looking skin",
    description:
      "Transform your skincare routine with our Vitamin C Serum. This potent formulation contains 20% stabilized vitamin C, hyaluronic acid, and vitamin E to brighten skin tone, reduce fine lines, and provide superior antioxidant protection. The lightweight, non-greasy formula absorbs quickly and works throughout the day to give you a radiant, youthful complexion.",
  },
  {
    id: "20",
    name: "Beard Oil",
    price: 499,
    originalPrice: 799,
    image: "/beard-oil-product.png",
    category: "men-grooming",
    subcategory: "beard-essentials",
    gender: "beauty",
    rating: 4.5,
    reviewCount: 78,
    tags: ["Men's Grooming", "Nourishing"],
    shortDescription: "Nourishing beard oil for softer, healthier facial hair",
    description:
      "This premium beard oil is formulated with natural oils to nourish and condition your facial hair and the skin beneath. Regular use helps to soften coarse hair, reduce itchiness, and promote healthier beard growth. The lightweight formula absorbs quickly without leaving a greasy residue, while the subtle masculine scent keeps you feeling fresh throughout the day.",
  },
]

// Function to get product by ID
export function getProductById(id: string): Product {
  console.log("Looking for product with ID:", id)
  const product = products.find((p) => p.id === id)
  console.log("Found product:", product ? product.name : "Not found")

  if (!product) {
    // Return a default product if not found
    return {
      id: "not-found",
      name: "Product Not Found",
      price: 0,
      originalPrice: 0,
      image: "/product-not-found.png",
      category: "none",
      rating: 0,
      description: "The product you are looking for does not exist or has been removed.",
    }
  }
  return product
}

// Function to get related products (excluding the current one)
export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return products
    .filter((product) => product.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}

// Function to get all products
export function getAllProducts(): Product[] {
  return products
}

// Function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
