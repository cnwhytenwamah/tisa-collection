import { Product, CategoryInfo } from '@/types'


export const mockProducts: Product[] = [
  {
    _id: '1',
    slug: 'leather-tote-bag-brown',
    name: 'Classic Leather Tote Bag',
    description: 'Premium leather tote bag perfect for daily use. Spacious interior with multiple compartments.',
    price: 25000,
    compareAtPrice: 32000,
    category: 'bags',
    images: [
      { url: '/images/products/bag-1-1.jpg', alt: 'Brown leather tote bag' },
      { url: '/images/products/bag-1-2.jpg', alt: 'Brown leather tote bag interior' },
    ],
    inStock: true,
    featured: true,
    materials: 'Genuine Leather',
    colors: ['Brown', 'Black', 'Tan'],
    tags: ['bestseller', 'leather', 'tote'],
    createdAt: '2025-01-15',
  },
  // Add more products...
]