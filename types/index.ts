export interface Product {
  _id: string
  slug: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  category: ProductCategory
  images: ProductImage[]
  inStock: boolean
  featured: boolean
  materials?: string
  sizes?: string[]
  colors?: string[]
  tags?: string[]
  createdAt: string
}

export interface ProductImage {
  url: string
  alt: string
  width?: number
  height?: number
}

export type ProductCategory = 'bags' | 'footwear' | 'accessories' | 'new-arrivals'



export interface CategoryInfo {
  id: ProductCategory
  name: string
  slug: string
  description: string
  image: string
}

export interface FilterOptions {
  categories: ProductCategory[]
  priceRange: {
    min: number
    max: number
  }
  sortBy: 'newest' | 'price-low' | 'price-high' | 'popular'
}

export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}




export interface InstagramPost {
  id: string
  imageUrl: string
  caption: string
  permalink: string
  timestamp: string
}