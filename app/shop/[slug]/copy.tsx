import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import ProductCard from '@/components/shop/ProductCard'
import { formatPrice, calculateDiscount } from '@/lib/utils'
import type { Metadata } from 'next'
import WhatsAppButton from '@/components/shared/WhatsappButton'
import ImageComponent from '@/components/ui/ImageComponent'
import { getAllProductSlugs, getSingleProduct } from '@/lib/sanity'

// Generate static params
export async function generateStaticParams() {
  const products = await getAllProductSlugs()

  return products.map((p: any) => ({
    slug: p.slug,
  }))
}

// Generate SEO Metadata
export async function generateMetadata({ params }: { params: { slug?: string } }) {
  if (!params?.slug) {
    return { title: "Product Not Found" }
  }

  const product = await getSingleProduct(params.slug)

  if (!product) {
    return { title: "Product Not Found" }
  }

  return {
    title: `${product.name} - Tisa Collections`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getSingleProduct(params.slug)

  if (!product) {
    notFound()
  }

  // Fetch related products (same category)
  const allProducts = await getAllProductSlugs()
  const related = allProducts
    .filter((p: any) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4)

  const discount = product.compareAtPrice
    ? calculateDiscount(product.price, product.compareAtPrice)
    : 0

  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/shop" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Back to Shop</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <ImageComponent
                src={product.images?.[0]?.url}
                alt={product.images?.[0]?.alt || product.name}
                width={400}
                height={320}
                className="object-cover"
              />

              {discount > 0 && (
                <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  -{discount}% OFF
                </div>
              )}
            </div>

            {product.images?.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image: any, idx: number) => (
                  <div 
                    key={idx}
                    className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
                  >
                    <ImageComponent
                      src={image.asset?.url}
                      alt={image.alt || product.name}
                      width={400}
                      height={320}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {product.name}
            </h1>

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

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* DETAILS */}
            <div className="bg-primary-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Product Details</h2>
              <div className="space-y-3">
                {product.materials && (
                  <p className="text-gray-700"><strong>Materials:</strong> {product.materials}</p>
                )}
                {product.colors?.length > 0 && (
                  <p className="text-gray-700"><strong>Colors:</strong> {product.colors.join(', ')}</p>
                )}
                {product.sizes?.length > 0 && (
                  <p className="text-gray-700"><strong>Sizes:</strong> {product.sizes.join(', ')}</p>
                )}
              </div>
            </div>

            <WhatsAppButton 
              product={product}
              variant="primary"
              size="lg"
              className="w-full mb-4"
            />
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section>
            <h2 className="text-3xl font-display font-bold mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rel: any) => (
                <ProductCard key={rel.slug} product={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}