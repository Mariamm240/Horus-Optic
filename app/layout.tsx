import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Horus Optic - Telescopios y Equipos Ópticos',
  description: 'Descubre el universo con nuestros telescopios y equipos ópticos de alta calidad. Horus Optic, tu tienda especializada en astronomía.',
  keywords: 'telescopios, binoculares, astronomía, óptica, horus optic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
