'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomButton from '../ui/CustomButton'
import ImageComponent from '../ui/ImageComponent'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageComponent
          src="/images/hero/hero.avif" 
          alt="Tisa Collections Hero"
          width={400}
          height={400}
          className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold mb-6 "
        >
          Elegance Meets Affordability
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto "
        >
          Discover stylish bags, footwear, and accessories that make you feel confident
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/shop">
            <CustomButton size="lg" className="min-w-[200px] hover:bg-[#846358]">
              Shop Now
            </CustomButton>
          </Link>
          <Link href="/about">
            <CustomButton variant="secondary" size="lg" className="min-w-[200px] bg-[#a18072] hover:bg-[#846358]">
              Our Story
            </CustomButton>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#a18072] rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-[#a18072] rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  )
}