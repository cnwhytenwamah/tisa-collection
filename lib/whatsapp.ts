import { Product } from '@/types'

export function generateWhatsAppMessage(product: Product, quantity: number = 1): string {
  const message = `Hi! I'm interested in ordering:

Product: ${product.name}
Price: ₦${product.price.toLocaleString()}
Quantity: ${quantity}

Please confirm availability and delivery details.`

  return encodeURIComponent(message)
}

export function generateWhatsAppLink(product: Product, phoneNumber: string = '2348156166597'): string {
  const message = generateWhatsAppMessage(product)
  return `https://wa.me/${phoneNumber}?text=${message}`
}