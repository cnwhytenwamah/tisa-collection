import { Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: 'Tisa Collections - Stylish Bags, Footwear & Fashion Accessories',
  description: 'Discover elegant and affordable fashion accessories. Shop our collection of bags, footwear, and accessories that make you feel confident.',
  keywords: 'fashion bags, footwear, accessories, women fashion, affordable style',
  openGraph: {
    title: 'Tisa Collections - Stylish Fashion Accessories',
    description: 'Shop elegant bags, footwear, and fashion accessories',
    type: 'website',
    url: '',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tisa Collections',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
        <body className="font-sans antialiased">
          <Header />
            {children}
          <Footer />
        </body>
    </html>
  )
}