'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronRightIcon, PlayCircleIcon, StarIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/Button';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage: string;
  badge?: string;
  stats?: Array<{
    label: string;
    value: string;
  }>;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Visión Clara, Estilo Único',
    subtitle: 'Colección 2024',
    description: 'Descubre nuestra nueva línea de gafas diseñadas para complementar tu personalidad única con la máxima calidad óptica.',
    ctaText: 'Explorar Colección',
    ctaLink: '/products',
    secondaryCtaText: 'Ver Video',
    secondaryCtaLink: '#video',
    backgroundImage: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1920&h=1080&fit=crop',
    badge: 'Nuevo',
    stats: [
      { label: 'Clientes Satisfechos', value: '10,000+' },
      { label: 'Años de Experiencia', value: '15+' },
      { label: 'Productos Premium', value: '500+' }
    ]
  },
  {
    id: 2,
    title: 'Tecnología Avanzada',
    subtitle: 'Lentes Inteligentes',
    description: 'Experimenta la revolución óptica con nuestros lentes que combinan tecnología cutting-edge y diseño elegante.',
    ctaText: 'Conoce Más',
    ctaLink: '/technology',
    secondaryCtaText: 'Reservar Cita',
    secondaryCtaLink: '/appointment',
    backgroundImage: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=1920&h=1080&fit=crop',
    badge: 'Innovación'
  },
  {
    id: 3,
    title: 'Exámenes Profesionales',
    subtitle: 'Cuidado Experto',
    description: 'Nuestro equipo de optometristas certificados está aquí para brindarte el mejor cuidado visual personalizado.',
    ctaText: 'Agendar Examen',
    ctaLink: '/appointment',
    secondaryCtaText: 'Conocer Equipo',
    secondaryCtaLink: '/about',
    backgroundImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1920&h=1080&fit=crop',
    badge: 'Profesional'
  }
];

export function ModernHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-opacity duration-1000
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <img
              src={slide.backgroundImage}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-horus-purple-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-horus-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            {currentSlideData.badge && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-semibold">{currentSlideData.badge}</span>
                <ChevronRightIcon className="w-4 h-4 ml-2" />
              </div>
            )}

            {/* Subtitle */}
            <p className="text-horus-pink-300 font-medium text-lg tracking-wide">
              {currentSlideData.subtitle}
            </p>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block">{currentSlideData.title}</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              {currentSlideData.description}
            </p>

            {/* Stats */}
            {currentSlideData.stats && (
              <div className="flex flex-wrap gap-8">
                {currentSlideData.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={currentSlideData.ctaLink}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-horus-purple-500 to-horus-pink-500 hover:from-horus-purple-600 hover:to-horus-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {currentSlideData.ctaText}
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              {currentSlideData.secondaryCtaText && (
                <Link href={currentSlideData.secondaryCtaLink!}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-xl"
                  >
                    <PlayCircleIcon className="w-5 h-5 mr-2" />
                    {currentSlideData.secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Interactive Element */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-horus-purple-500 to-horus-pink-500 rounded-2xl mx-auto flex items-center justify-center">
                    <StarIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Calidad Premium</h3>
                  <p className="text-gray-600">Más de 15 años perfeccionando la experiencia visual</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">4.9/5 en más de 1,200 reseñas</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-horus-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-horus-pink-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === currentSlide 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
              }
            `}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center space-y-2 text-white/60">
        <span className="text-sm font-medium">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
}
