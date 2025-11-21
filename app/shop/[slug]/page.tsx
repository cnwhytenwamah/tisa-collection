import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import ProductCard from '@/components/shop/ProductCard'
import { formatPrice, calculateDiscount } from '@/lib/utils'
import type { Metadata } from 'next'
import ImageComponent from '@/components/ui/ImageComponent'
import WhatsAppButton from '@/components/shared/WhatsappButton'
import { getAllProductSlugs, getSingleProduct, getProductsByCategory } from '@/lib/sanity'
import type { Product } from '@/types'

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getAllProductSlugs()
  return products.map((product: any) => ({
    slug: product.slug,
  }))
}

// Generate metadata for each product
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const product = await getSingleProduct(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Tina Collections`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images?.[0]?.url ? [{ url: product.images[0].url }] : [],
    },
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getSingleProduct(params.slug)

  if (!product) {
    notFound()
  }

  // Get related products (same category, excluding current)
  const allCategoryProducts = await getProductsByCategory(product.category)
  const relatedProducts = allCategoryProducts
    .filter((p: Product) => p._id !== product._id)
    .slice(0, 4)

  const discount = product.compareAtPrice 
    ? calculateDiscount(product.price, product.compareAtPrice) 
    : 0

  return (
    <>
      <main className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link 
            href="/shop" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="ml-1">Back to Shop</span>
          </Link>

          {/* Product Details Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                {product.images?.[0]?.url && (
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt || product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                {discount > 0 && (
                  <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    -{discount}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {product.images?.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image: any, idx: number) => (
                    <div 
                      key={idx}
                      className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
                    >
                      <Image
                        src={image.url}
                        alt={image.alt || product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium uppercase">
                  {product.category.replace('-', ' ')}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-primary-700">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-2xl text-gray-400 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="inline-flex items-center text-green-600 font-medium">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                    In Stock - Ready to Ship
                  </span>
                ) : (
                  <span className="inline-flex items-center text-red-600 font-medium">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">Description</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Product Details */}
              {(product.materials || product.colors?.length > 0 || product.sizes?.length > 0) && (
                <div className="bg-primary-50 rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                  <div className="space-y-3">
                    {product.materials && (
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Materials:</span>
                        <span className="text-gray-600">{product.materials}</span>
                      </div>
                    )}
                    {product.colors && product.colors.length > 0 && (
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Colors:</span>
                        <span className="text-gray-600">{product.colors.join(', ')}</span>
                      </div>
                    )}
                    {product.sizes && product.sizes.length > 0 && (
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Sizes:</span>
                        <span className="text-gray-600">{product.sizes.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* WhatsApp Order Button */}
              <WhatsAppButton 
                product={product} 
                variant="primary"
                size="lg"
                className="w-full mb-4"
              />

              {/* Additional Info */}
              <div className="text-sm text-gray-500 text-center">
                Questions about this product? Contact us on WhatsApp!
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-3xl font-display font-bold mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((rel: any) => (
                  <ProductCard key={rel._id} product={rel} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  )
}