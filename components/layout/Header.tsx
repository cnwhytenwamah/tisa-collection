'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-display font-bold text-[#846358] cursor-pointer"
              >
                Tisa Collections
              </motion.span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer transition-colors text-[#a18072] relative font-medium ${
                      pathname === item.href
                        ? 'text-[#a18072]'
                        : 'text-[#3A3A3A] hover:text-[#a18072]'
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#a18072]"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
            </div>


            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-[#3A3A3A] z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 md:hidden"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <nav className="flex-1 space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={item.href}>
                        <div
                          className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                            pathname === item.href
                              ? 'bg-[#a18072] text-white shadow-lg shadow-[#d2bab0]/30'
                              : 'text-[#3A3A3A] hover:bg-gray-100 hover:text-[#a18072]'
                          }`}
                        >
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="py-6 border-t border-gray-200">
                  <p className="text-gray-500 text-sm text-center">
                    &copy; {new Date().getFullYear()} Tisa Collections
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}