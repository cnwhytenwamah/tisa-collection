import { CategoryInfo, Product } from '@/types'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-01-01',
  useCdn: true,
})


const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source).url()
}


function mapProductImages(product: any) {
  return {
    ...product,
    images: product.images?.map((img: any) => ({
      url: img.asset?.url || urlFor(img.asset),
      alt: img.alt || product.name,
      width: img.asset?.metadata?.dimensions?.width,
      height: img.asset?.metadata?.dimensions?.height,
    })) || [],
  }
}



export async function getProducts(): Promise<Product[]> {
  const result = await client.fetch(`*[_type == "product"] | order(_createdAt desc)`)
  return result.map(mapProductImages)
}

export async function getFeaturedProducts() {
  const result = await client.fetch(`*[_type == "product" && featured == true] | order(_createdAt desc)[0...6]`)
  return result.map(mapProductImages)
}

export async function getProductBySlug(slug: string) {
  const result = await client.fetch( `*[_type == "product" && slug.current == $slug][0]`, { slug })
  return result ? mapProductImages(result) : null
}

export async function getProductsByCategory(category: string) {
  const result = await client.fetch( `*[_type == "product" && category == $category] | order(_createdAt desc)`,{ category })
  return result.map(mapProductImages)
}

export async function getCategories(): Promise<CategoryInfo[]> {
  return client.fetch(`*[_type == "category"] | order(name asc) {"id": id,"name": name,"slug": slug.current,"description": description,"image": image.asset->url}` )
}

export async function getAllProductSlugs() {
  return client.fetch(
    `*[_type == "product" && defined(slug.current)]{
      "slug": slug.current,
      category
    }`
  );
}


export async function getSingleProduct(slug?: string) {
  if (!slug) return null;

  return await client.fetch(
    `*[_type == "product" && (
        slug.current == $slug ||
        slug == $slug
      )][0]{
      _id,
      name,
      "slug": slug.current,
      description,
      price,
      compareAtPrice,
      inStock,
      category,
      materials,
      colors,
      sizes,
      images[] {
        asset->{
          _id,
          url,
          metadata { dimensions }
        },
        alt
      }
    }`,
    { slug }
  );
}


