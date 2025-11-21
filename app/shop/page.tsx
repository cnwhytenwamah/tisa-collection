import { Suspense } from 'react'
import ProductGrid from '@/components/shop/ProductGrid'
import type { Metadata } from 'next'
import { getFeaturedProducts } from '@/lib/sanity'
import ImageComponent from '@/components/ui/ImageComponent'

export const metadata: Metadata = {
  title: 'Shop All Products - Tisa Collections',
  description: 'Browse our complete collection of bags, footwear, and fashion accessories. Find your perfect style at affordable prices.',
}

export default async function ShopPage() {
  const products = await getFeaturedProducts()
  return (
    <>
      <main className="min-h-screen pt-24">
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <ImageComponent
              src="/images/hero/breadcrumb.avif" 
              alt="Tisa Collections About"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Our Collection
            </h1>
            <p className="text-xl md:text-2xl">
              Discover our handpicked selection of stylish bags, footwear, and accessories
            </p>
          </div>
        </section>

        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid initialProducts={products} />
        </Suspense>
      </main>
    </>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-square bg-gray-200 rounded-lg mb-4" />
            <div className="h-4 bg-gray-200 rounded mb-2" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        ))}
      </div>
    </div>
  )
}