'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRightIcon, EyeIcon, ShieldCheckIcon, TruckIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { ModernProductGrid } from '../products/ModernProductCard';

// Mock data - en una aplicación real vendría de una API
const featuredProducts = [
  {
    id: 1,
    name: 'Gafas de Sol Aviador Premium',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviewCount: 324,
    images: ['https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&h=400&fit=crop'],
    category: 'Gafas de Sol',
    isNew: false,
    isSale: true,
    description: 'Clásico diseño aviador con lentes polarizadas y protección UV 100%. Marco de aleación ligera y resistente.'
  },
  {
    id: 2,
    name: 'Montura Intelectual Moderna',
    price: 89.99,
    rating: 4.8,
    reviewCount: 186,
    images: ['https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop'],
    category: 'Monturas',
    isNew: true,
    description: 'Diseño contemporáneo perfecto para uso diario. Material acetato de alta calidad con bisagras flexibles.'
  },
  {
    id: 3,
    name: 'Lentes de Contacto Comfort+',
    price: 45.99,
    rating: 4.7,
    reviewCount: 542,
    images: ['https://images.unsplash.com/photo-1576852187408-4834c1c2a91c?w=400&h=400&fit=crop'],
    category: 'Lentes de Contacto',
    description: 'Lentes mensuales con tecnología de hidratación avanzada para máximo confort durante todo el día.'
  },
  {
    id: 4,
    name: 'Gafas Deportivas Pro',
    price: 129.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviewCount: 97,
    images: ['https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop'],
    category: 'Deportivas',
    isSale: true,
    description: 'Diseñadas para deportistas exigentes. Resistentes al impacto con tecnología anti-empañamiento.'
  }
];

const features = [
  {
    icon: EyeIcon,
    title: 'Examen Visual Gratuito',
    description: 'Evaluación completa con tecnología de vanguardia',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Garantía Premium',
    description: '2 años de garantía en todos nuestros productos',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TruckIcon,
    title: 'Envío Express',
    description: 'Entrega en 24-48h en toda la península',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: HeartIcon,
    title: 'Satisfacción 100%',
    description: 'Cambios y devoluciones sin complicaciones',
    color: 'from-red-500 to-rose-500'
  }
];

export function ProductShowcaseSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Todos', count: featuredProducts.length },
    { id: 'gafas-sol', name: 'Gafas de Sol', count: 2 },
    { id: 'monturas', name: 'Monturas', count: 1 },
    { id: 'deportivas', name: 'Deportivas', count: 1 }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            <span>Productos Destacados</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Descubre Nuestra
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Colección Premium
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada producto ha sido cuidadosamente seleccionado por nuestros expertos para ofrecerte 
            la mejor experiencia visual combinada con el estilo más actual.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl bg-gray-100 p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-6 py-3 rounded-xl font-medium transition-all duration-300
                  ${selectedCategory === category.id
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <ModernProductGrid 
            products={featuredProducts}
            onAddToCart={(product) => console.log('Add to cart:', product)}
            onToggleWishlist={(product) => console.log('Toggle wishlist:', product)}
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mb-20">
          <Link href="/products">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver Todos los Productos
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Icon */}
              <div className={`
                w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} 
                flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
              `}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Newsletter Section con diseño moderno
export function NewsletterSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-12 lg:p-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
          </div>

          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Mantente al Día
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Recibe las últimas noticias sobre nuestros productos, ofertas exclusivas 
              y consejos de cuidado visual directamente en tu bandeja de entrada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 font-semibold rounded-xl">
                Suscribirme
              </Button>
            </div>

            <p className="text-sm opacity-75 mt-4">
              Sin spam. Puedes cancelar cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
