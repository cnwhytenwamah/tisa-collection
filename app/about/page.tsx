import { Heart, Shield, Sparkles, Users } from 'lucide-react'
import type { Metadata } from 'next'
import ImageComponent from '@/components/ui/ImageComponent'

export const metadata: Metadata = {
  title: 'About Us - Tisa Collections',
  description: 'Learn about Tisa Collections - our story, values, and commitment to bringing you stylish, affordable fashion.',
}

const values = [
  {
    icon: Heart,
    title: 'Quality First',
    description: 'Every product is carefully selected to meet our high standards of craftsmanship and durability.',
  },
  {
    icon: Sparkles,
    title: 'Affordable Style',
    description: 'We believe everyone deserves to look and feel great without breaking the bank.',
  },
  {
    icon: Shield,
    title: 'Customer Trust',
    description: 'Your satisfaction is our priority. We stand behind every product we sell.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We are building a community of confident, stylish individuals who express themselves through fashion.',
  },
]

export default function AboutPage() {
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
              Our Story
            </h1>
            <p className="text-xl md:text-2xl">
              Where Style Meets Affordability
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Tisa Collections was born from a simple belief: <strong>everyone deserves 
                  to feel confident and stylish, regardless of their budget</strong>. What started 
                  as a passion for fashion has grown into a curated collection of bags, footwear, 
                  and accessories that empower people to express their unique style.
                </p>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  We understand that fashion is more than just clothing and accessories—it&apos;s 
                  about <strong>self-expression, confidence, and feeling your best</strong> every 
                  single day. That&apos;s why we meticulously select each piece in our collection, 
                  ensuring it meets our standards for quality, style, and value.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Today, Tisa Collections serves customers across Nigeria who share our 
                  vision of accessible, elegant fashion. We&apos;re more than just a store—we&apos;re 
                  a community of style enthusiasts who believe that looking good shouldn&apos;t 
                  come at a premium.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#fdf8f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <value.icon size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <ImageComponent
                  src="/images/hero/breadcrumb.avif" 
                  alt="Our Mission"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  To make stylish, high-quality fashion accessories accessible to 
                  everyone, empowering individuals to express their unique style 
                  with confidence.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We strive to curate collections that combine elegance, affordability, 
                  and quality—proving that you don&apos;t need to compromise to look and 
                  feel amazing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-[#a18072] to-[#977669] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover your next favorite accessory and become part of the 
              Tisa Collections family
            </p>
            <a 
              href="/shop"
              className="inline-block bg-white text-[#977669] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Shopping
            </a>
          </div>
        </section>
      </main>
    </>
  )
}