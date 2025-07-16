'use client'

import { Layout } from '../src/components/layout/Layout'
import { ModernHeroSection } from '../src/components/sections/ModernHeroSection'
import { ProductShowcaseSection, NewsletterSection } from '../src/components/sections/ProductShowcaseSection'

export default function Home() {
  return (
    <Layout>
      <ModernHeroSection />
      <ProductShowcaseSection />
      <NewsletterSection />
    </Layout>
  )
}
