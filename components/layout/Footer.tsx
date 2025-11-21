'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#3A3A3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">Tisa Collections</h3>
            <p className="text-gray-300 mb-4">
              Your destination for stylish, affordable fashion. Discover elegant bags,
              footwear, and accessories that make you feel confident.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-[#E8B4B8] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#E8B4B8] transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

    
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-300 hover:text-[#a18072]">Shop All</Link></li>
              <li><Link href="/shop?category=bags" className="text-gray-300 hover:text-[#a18072]">Bags</Link></li>
              <li><Link href="/shop?category=footwear" className="text-gray-300 hover:text-[#a18072]">Footwear</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#a18072]">About Us</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+234" className="text-gray-300 hover:text-[#a18072]">+234 XXX XXX XXXX</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@tisacollections.com" className="text-gray-300 hover:text-[#a18072]">
                  info@tisacollections.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Tisa Collections. All rights reserved. | Built by Clinton Nwamah </p>
        </div>
      </div>
    </footer>
  )
}