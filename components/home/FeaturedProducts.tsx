'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Product } from '@/types'
import ProductCard from '../shop/ProductCard'
import CustomButton from '../ui/CustomButton'

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that our customers love
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product._id} product={product} priority />
          ))}
        </div>

        <div className="text-center">
          <Link href="/shop">
            <CustomButton size="lg" className="bg-[#a18072] hover:bg-[#846358] text-white">
              View All Products
            </CustomButton>
          </Link>
        </div>
      </div>
    </section>
  )
}