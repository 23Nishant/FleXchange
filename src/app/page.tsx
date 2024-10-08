import Navbar from '../components/ui/navbar'
import ProductCatalogue from '@/components/ui/ProductCatalogue'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <ProductCatalogue />
      </main>
    </div>
  )
}
