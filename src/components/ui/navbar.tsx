"use client" // Ensure this is a client component

import { useRouter } from 'next/navigation' // Import from next/navigation for app directory
import { ShoppingCart, User } from 'lucide-react'
import { Button } from './button'

export default function Navbar() {
  const router = useRouter()

  const goToCart = () => {
    router.push('/cart') // Navigate to /cart when the button is clicked
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Button variant="ghost" size="icon" className="mr-2" aria-label="Profile">
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="flex items-center"
              aria-label="Go to Cart"
              onClick={goToCart} // Handle click to go to cart
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Go to Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
