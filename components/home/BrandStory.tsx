'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomButton from '../ui/CustomButton'
import ImageComponent from '../ui/ImageComponent'

export default function BrandStory() {
  return (
    <section className="py-20 bg-[#fdf8f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
          >
            <ImageComponent
              src="/images/hero/profile.jpg" 
              alt="Tisa Collections Story"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Tisa Collections was born from a passion for making elegant fashion 
              accessible to everyone. We believe that style shouldn't come with a 
              hefty price tag, and quality shouldn't be compromised for affordability.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every piece in our collection is carefully curated to ensure it meets 
              our high standards of quality, style, and value. We're not just selling 
              products; we're helping you express your unique style with confidence.
            </p>
            <Link href="/about">
              <CustomButton size="lg" className="text-gray-60 bg-[#a18072]">
                Discover More About Us
              </CustomButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}