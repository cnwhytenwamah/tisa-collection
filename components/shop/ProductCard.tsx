'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Product } from '@/types'
import { formatPrice, calculateDiscount } from '@/lib/utils'
import WhatsAppButton from '../shared/WhatsappButton'
import ImageComponent from '../ui/ImageComponent'


interface ProductCardProps {
  product: Product
  priority?: boolean
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const discount = product.compareAtPrice 
    ? calculateDiscount(product.price, product.compareAtPrice) 
    : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      {discount > 0 && (
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          -{discount}%
        </div>
      )}

      <Link href={`/shop/${product._id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <ImageComponent
            src={product.images[0].url}
            alt={product.images[0].alt}
            className="object-cover group-hover:scale-110 transition-transform duration-500 md:w-full md:h-full" 
            width={320} 
            height={150}          
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/shop/${product._id}`}>
          <h3 className="font-semibold text-lg text-[#3A3A3A] mb-2 group-hover:text-[#a18072] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-[#977669]">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

  
        <div className="mb-3">
          {product.inStock ? (
            <span className="text-sm text-green-600 font-medium">In Stock</span>
          ) : (
            <span className="text-sm text-red-600 font-medium">Out of Stock</span>
          )}
        </div>

        <WhatsAppButton 
          product={product} 
          variant="primary" 
          size="sm"
          className="w-full bg-[#a18072]"
        />
      </div>
    </motion.div>
  )
}