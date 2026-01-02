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
    title: 'Authentic Craftsmanship',
    description:
      'We celebrate African heritage through meticulously handcrafted Ankara and leather pieces that reflect tradition, creativity, and timeless design.',
  },
  {
    icon: Users,
    title: 'Artisan Empowerment',
    description:
      'We work closely with skilled local artisans, ensuring fair wages, safe working conditions, and opportunities for growth while preserving generational skills.',
  },
  {
    icon: Shield,
    title: 'Ethical & Sustainable Practices',
    description:
      'Our materials are responsibly sourced, and our processes prioritize durability, reduced waste, and respect for people and the environment.',
  },
  {
    icon: Sparkles,
    title: 'Purposeful Style',
    description:
      'Every piece is designed to inspire confidence, individuality, and meaningful self-expression through fashion with a story.',
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
              Where Culture Meets Craftsmanship
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Tisa Collections was founded with a deep passion for <strong>African culture,
                  craftsmanship, and creative expression</strong>. What began as a vision to
                  showcase the beauty of Ankara and leather has grown into a brand that tells
                  powerful stories through handmade bags and footwear.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Each Tisa Collections piece is thoughtfully designed and handcrafted, blending
                  <strong> traditional African aesthetics with contemporary design</strong>.
                  Our products are more than fashion accessories — they are expressions of
                  identity, heritage, and artistry.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  At the heart of our brand is a commitment to people. By partnering with local
                  artisans and communities, we help preserve invaluable skills while empowering
                  individuals to thrive through ethical and sustainable fashion practices.
                  Tisa Collections stands for style with meaning, purpose, and cultural pride.
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
                <div key={index} className="bg-white rounded-2xl py-8 px-4 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <value.icon size={32} className="text-primary-600 text-center" />
                  </div>
                  <h3 className="text-[20px] text-center font-display font-bold mb-3">
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
                  At Tisa Collections, our mission is to create exceptional handmade
                  Ankara and leather bags and footwear that embody the spirit of African
                  culture while inspiring individuals to express their unique style
                  through meaningful, well-crafted fashion.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  We are deeply committed to preserving and promoting the rich heritage
                  of African aesthetics by blending traditional Ankara fabrics with
                  premium leather. Through this fusion of contemporary design and
                  authentic craftsmanship, each piece tells a story of culture,
                  creativity, and timeless beauty.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Central to our mission is the empowerment of skilled artisans. We
                  partner with local communities to provide fair wages, safe working
                  environments, and opportunities for personal and professional growth,
                  ensuring that invaluable generational skills are preserved and
                  celebrated.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  We are equally committed to sustainability and ethical practices.
                  From responsible material sourcing to environmentally conscious
                  production methods, we prioritize quality, durability, and reduced
                  waste in everything we create.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Above all, we strive to deliver products of unparalleled quality,
                  functionality, and design—pieces that not only enhance personal style
                  but also connect our customers to a global community that values
                  craftsmanship, cultural diversity, and responsible fashion choices.
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