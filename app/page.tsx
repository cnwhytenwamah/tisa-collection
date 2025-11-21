import BrandStory from '@/components/home/BrandStory'
import CategorySection from '@/components/home/Category'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import { getCategories, getFeaturedProducts} from '@/lib/sanity'

export default async function HomePage() {
  const products = await getFeaturedProducts()
  const categories = await getCategories()

  return (
    <>
      <main>
        <Hero />
        <CategorySection categories={categories} />
        <FeaturedProducts products={products} />
        <BrandStory />
        {/* <InstagramFeed /> */}
      </main>
    </>
  )
}