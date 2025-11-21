'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import WhatsAppButton from '../shared/WhatsappButton'
import CustomButton from '../ui/CustomButton'


interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-4xl md:w-full bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2 max-h-[90vh] overflow-y-auto">
              {/* Image Gallery */}
              <div className="relative bg-gray-100 aspect-square md:aspect-auto">
                <Image
                  src={product.images[currentImageIndex].url}
                  alt={product.images[currentImageIndex].alt}
                  fill
                  className="object-cover"
                />

                {/* Image Navigation */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {product.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Product Details */}
              <div className="p-8">
                <h2 className="text-3xl font-display font-bold mb-2">
                  {product.name}
                </h2>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl font-bold text-[#977669]">
                    {formatPrice(product.price)}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#f2e8e5] text-[#977669] rounded-full text-sm font-medium">
                    {product.category.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Product Details */}
                <div className="space-y-3 mb-6">
                  {product.materials && (
                    <div className="flex items-start">
                      <span className="font-semibold w-24">Materials:</span>
                      <span className="text-gray-600">{product.materials}</span>
                    </div>
                  )}
                  {product.colors && product.colors.length > 0 && (
                    <div className="flex items-start">
                      <span className="font-semibold w-24">Colors:</span>
                      <span className="text-gray-600">{product.colors.join(', ')}</span>
                    </div>
                  )}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="flex items-start">
                      <span className="font-semibold w-24">Sizes:</span>
                      <span className="text-gray-600">{product.sizes.join(', ')}</span>
                    </div>
                  )}
                  <div className="flex items-start">
                    <span className="font-semibold w-24">Stock:</span>
                    <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <WhatsAppButton 
                    product={product} 
                    variant="primary"
                    size="lg"
                    className="w-full"
                  />
                  <CustomButton
                    variant="secondary"
                    size="lg"
                    onClick={onClose}
                    className="w-full bg-[#977669] text-gray-600"
                  >
                    Continue Shopping
                  </CustomButton>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}