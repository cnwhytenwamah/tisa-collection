'use client'

import { MessageCircle } from 'lucide-react'
import { Product } from '@/types'
import { generateWhatsAppLink } from '@/lib/whatsapp'
import CustomButton from '../ui/CustomButton'

interface WhatsAppButtonProps {
  product: Product
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function WhatsAppButton({ 
  product, 
  variant = 'primary', 
  size = 'md',
  className 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const link = generateWhatsAppLink(product, '2348156166597')
    window.open(link, '_blank')
  }

  return (
    <CustomButton
      variant={variant}
      size={size}
      onClick={handleClick}
      className={className}
    >
      <MessageCircle size={20} className="mr-2" />
      Order on WhatsApp
    </CustomButton>
  )
}