'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import CustomButton from '../ui/CustomButton'

// Mock Instagram posts - replace with actual API integration
const mockPosts = [
  { id: '1', imageUrl: '/images/instagram/post-1.jpg', caption: 'New arrivals' },
  { id: '2', imageUrl: '/images/instagram/post-2.jpg', caption: 'Summer collection' },
  { id: '3', imageUrl: '/images/instagram/post-3.jpg', caption: 'Behind the scenes' },
  { id: '4', imageUrl: '/images/instagram/post-4.jpg', caption: 'Customer favorites' },
]

export default function InstagramFeed() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Instagram size={48} className="mx-auto mb-4 text-accent-rose" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Join our community and get inspired by the latest trends
          </p>
          <a 
            href="https://instagram.com/tinacollections" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <CustomButton variant="outline" size="lg">
              <Instagram size={20} className="mr-2" />
              @tinacollections
            </CustomButton>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram 
                  size={32} 
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}