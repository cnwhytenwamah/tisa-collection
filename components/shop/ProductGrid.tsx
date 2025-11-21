'use client'

import { useState } from 'react'
import { Product } from '@/types'
import ProductCard from './ProductCard'
import ProductFilter from './ProductFilter'

interface ProductGridProps {
  initialProducts: Product[]
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ProductFilter 
        products={initialProducts}
        onFilterChange={setFilteredProducts}
        onLoadingChange={setIsLoading}
      />

      <div className="mb-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{filteredProducts.length}</span> products
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4" />
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No products found matching your filters.</p>
        </div>
      )}
    </div>
  )
}