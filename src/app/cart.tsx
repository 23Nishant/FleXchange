// src/app/cart.tsx
import React from "react"
import { useRouter } from "next/router"
import Image from "next/image"

// Importing images
import image1 from "../images/sunglasses.jpeg"
import image2 from "../images/leatherwallet.jpeg"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
}

const cartItems: CartItem[] = [
  { id: 1, name: "Stylish Sunglasses", price: 29.99, image: image1 },
  { id: 2, name: "Leather Wallet", price: 49.99, image: image2 },
]

export default function Cart() {
  const router = useRouter()

  const handlePayment = () => {
    // Implement payment processing logic here
    alert("Payment processing...")
    // Redirect to payment confirmation or other page if needed
    router.push("/") // Redirecting to the home page as an example
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md flex p-4">
            <div className="relative h-24 w-24 mr-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={handlePayment}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Make Payment
        </button>
      </div>
    </div>
  )
}
