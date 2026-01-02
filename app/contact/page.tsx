'use client'

import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react'
import CustomButton from '@/components/ui/CustomButton'
import ImageComponent from '@/components/ui/ImageComponent'
import { useInView } from 'framer-motion'
import { ContactFormData } from '@/types'
import axios from 'axios';



export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await axios.post('/api/contact', formData);

      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '2348156166597'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'd like to inquire about your products.`

  return (
    <>
      <main className="min-h-screen pt-24">
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <ImageComponent
              src="/images/hero/breadcrumb.avif" 
              alt="Tisa Collections Contact"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl">
              Have questions? We'd love to hear from you. Send us a message!
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-8">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[#fdf8f6] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <MessageCircle size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                      <p className="text-gray-600">+234 810 927 2175</p>
                      <p className="text-sm text-[#a18072] mt-1">Click to chat with us</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4 p-4">
                    <div className="w-12 h-12 bg-[#f2e8e5] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-[#a18072]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <a href="tel:+234" className="text-gray-600 hover:text-[#a18072]">
                        +234 810 927 2175
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4">
                    <div className="w-12 h-12 bg-[#f2e8e5] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-[#a18072]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a href="mailto:info@tisacollections.com" className="text-gray-600 hover:text-[#a18072]">
                        info@tisacollections.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4">
                    <div className="w-12 h-12 bg-[#f2e8e5] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-[#a18072]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-gray-600">Port Harcourt, Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/tisacollections" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Instagram size={24} className="text-white" />
                    </a>
                    <a 
                      href="https://facebook.com/tisacollections" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Facebook size={24} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Send Us a Message
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    Something went wrong. Please try again or contact us directly via WhatsApp.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <CustomButton
                    type="submit"
                    size="lg"
                    className="w-full bg-[#a18072] hover:bg-[#846358]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </CustomButton>
                </form>

                <p className="text-sm text-gray-500 text-center mt-6">
                  Or reach us directly on{' '}
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#a18072] hover:underline">
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-display font-bold mb-6">
                Business Hours
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="font-semibold mb-2">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="font-semibold mb-2">Saturday - Sunday</p>
                  <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                We typically respond to WhatsApp messages within 1 hour during business hours
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}