'use client'

import { useState, useEffect } from 'react'
import { Product, ProductCategory } from '@/types'
import { Filter, X } from 'lucide-react'
import CustomButton from '../ui/CustomButton'

interface ProductFilterProps {
  products: Product[]
  onFilterChange: (products: Product[]) => void
  onLoadingChange: (loading: boolean) => void
}

export default function ProductFilter({ 
  products, 
  onFilterChange, 
  onLoadingChange 
}: ProductFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 })
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high'>('newest')

  const categories = [
    { value: 'all' as const, label: 'All Products' },
    { value: 'bags' as const, label: 'Bags' },
    { value: 'footwear' as const, label: 'Footwear' },
    { value: 'accessories' as const, label: 'Accessories' },
    { value: 'new-arrivals' as const, label: 'New Arrivals' },
  ]

  useEffect(() => {
    filterProducts()
  }, [selectedCategory, priceRange, sortBy])

  const filterProducts = () => {
    onLoadingChange(true)

    setTimeout(() => {
      let filtered = [...products]

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory)
      }

      filtered = filtered.filter(
        p => p.price >= priceRange.min && p.price <= priceRange.max
      )

      switch (sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price)
          break
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price)
          break
        case 'newest':
          filtered.sort((a, b) => 
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          break
      }

      onFilterChange(filtered)
      onLoadingChange(false)
    }, 300)
  }

  const resetFilters = () => {
    setSelectedCategory('all')
    setPriceRange({ min: 0, max: 100000 })
    setSortBy('newest')
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <CustomButton
          className="bg-[#a18072] text-gray-400"
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter size={18} className="mr-2" />
          Filters
        </CustomButton>
      </div>

      <div className={`
        ${isOpen ? 'block' : 'hidden'} lg:block
        bg-white p-6 rounded-lg shadow-sm mb-6
      `}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-3">Category</label>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`
                    block w-full text-left px-3 py-2 rounded-lg transition-colors
                    ${selectedCategory === cat.value
                      ? 'bg-[#a18072] text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3">Price Range</label>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-600">Min: ₦{priceRange.min.toLocaleString()}</label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600">Max: ₦{priceRange.max.toLocaleString()}</label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="flex items-end">
            <CustomButton
              variant="secondary"
              size="sm"
              onClick={resetFilters}
              className="w-full"
            >
              <X size={18} className="mr-2" />
              Reset Filters
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}