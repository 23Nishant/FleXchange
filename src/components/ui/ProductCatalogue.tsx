"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "./button"

// Importing images
import image1 from "../../images/sunglasses.jpeg"
import image2 from "../../images/leatherwallet.jpeg"
import image3 from "../../images/earbuds.jpeg"
import image4 from "../../images/portablecharger.jpeg"
import image5 from "../../images/smartwatch.jpeg"
import image6 from "../../images/fitnesstracker.jpeg"

interface Product {
  id: number
  name: string
  price: number
  image: StaticImageData
}

const products: Product[] = [
  { id: 1, name: "Stylish Sunglasses", price: 29.99, image: image1 },
  { id: 2, name: "Leather Wallet", price: 49.99, image: image2 },
  { id: 3, name: "Wireless Earbuds", price: 99.99, image: image3 },
  { id: 4, name: "Smart Watch", price: 199.99, image: image4 },
  { id: 5, name: "Portable Charger", price: 39.99, image: image5 },
  { id: 6, name: "Fitness Tracker", price: 79.99, image: image6 },
]

export default function ProductCatalogue() {
  const [addedToCart, setAddedToCart] = useState<number[]>([])

  useEffect(() => {
    console.log("Products loaded:", products)
  }, [])

  const handleAddToCart = (id: number) => {
    console.log("Adding to cart:", id)
    if (!addedToCart.includes(id)) {
      setAddedToCart((prev) => [...prev, id])
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-sm font-semibold mb-2 flex-grow">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <Button
                className={`w-full ${addedToCart.includes(product.id) ? 'bg-gray-500' : 'bg-black text-white'} hover:bg-gray-800`}
                onClick={() => handleAddToCart(product.id)}
                disabled={addedToCart.includes(product.id)}
              >
                {addedToCart.includes(product.id) ? "Added to Cart" : "Add to Cart"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
