import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mewad | Riyasat of Traditional Elegance',
  description: 'Discover handcrafted Indian ethnic luxury apparel inspired by royal Indian heritage. Premium traditional wear for the modern connoisseur.',
  keywords: ['luxury ethnic wear', 'Indian traditional clothing', 'royal Indian heritage', 'premium apparel', 'handcrafted fashion'],
  authors: [{ name: 'Mewad' }],
  openGraph: {
    title: 'Mewad | Riyasat of Traditional Elegance',
    description: 'Crafted heritage. Modern presence.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#6B1F2F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
