'use client';

import { Layout } from '../../src/components/layout/Layout';
import { 
  Eye, 
  Glasses, 
  Shield, 
  Star, 
  Clock, 
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Examen Visual Completo',
    description: 'Evaluación profesional de tu visión con tecnología de última generación',
    icon: Eye,
    price: 'Desde $150.000',
    duration: '45 min',
    features: [
      'Medición de agudeza visual',
      'Examen de fondo de ojo',
      'Evaluación de presión ocular',
      'Detección temprana de enfermedades'
    ],
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    title: 'Adaptación de Lentes',
    description: 'Asesoría personalizada para encontrar los lentes perfectos para ti',
    icon: Glasses,
    price: 'Incluido',
    duration: '30 min',
    features: [
      'Análisis de estilo de vida',
      'Prueba de diferentes monturas',
      'Ajuste personalizado',
      'Garantía de satisfacción'
    ],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 3,
    title: 'Terapia Visual',
    description: 'Ejercicios especializados para mejorar el rendimiento visual',
    icon: Shield,
    price: 'Desde $200.000',
    duration: '60 min',
    features: [
      'Evaluación de habilidades visuales',
      'Ejercicios personalizados',
      'Seguimiento del progreso',
      'Material de práctica'
    ],
    color: 'from-pink-500 to-red-600'
  },
  {
    id: 4,
    title: 'Consulta Especializada',
    description: 'Atención con oftalmólogos especializados en diferentes áreas',
    icon: Star,
    price: 'Desde $300.000',
    duration: '90 min',
    features: [
      'Consulta con especialista',
      'Diagnóstico detallado',
      'Plan de tratamiento',
      'Seguimiento continuo'
    ],
    color: 'from-emerald-500 to-blue-600'
  }
];

const testimonials = [
  {
    name: 'María González',
    service: 'Examen Visual Completo',
    rating: 5,
    comment: 'Excelente atención y equipos de última tecnología. Muy satisfecha con el servicio.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b096?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Carlos Rodríguez',
    service: 'Adaptación de Lentes',
    rating: 5,
    comment: 'El proceso fue muy profesional y ahora tengo los lentes perfectos para mi trabajo.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Ana Martínez',
    service: 'Terapia Visual',
    rating: 5,
    comment: 'Mi hija mejoró significativamente su rendimiento visual. Altamente recomendado.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Sparkles className="h-12 w-12 text-yellow-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Cuidamos tu visión con tecnología avanzada y atención personalizada
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Users className="h-4 w-4" />
                <span>+1000 pacientes satisfechos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>4.9/5 calificación promedio</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Clock className="h-4 w-4" />
                <span>15+ años de experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios para el cuidado de tu visión
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {service.duration}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className={`w-full py-4 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2`}>
                      Agendar Cita
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proceso de Atención
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un proceso simple y profesional para cuidar tu visión
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Agendamiento',
                description: 'Reserva tu cita en línea o por teléfono de manera fácil y rápida',
                icon: Clock
              },
              {
                step: '02',
                title: 'Evaluación',
                description: 'Examen completo con equipos de última generación y profesionales expertos',
                icon: Eye
              },
              {
                step: '03',
                title: 'Diagnóstico',
                description: 'Análisis detallado y recomendaciones personalizadas para tu caso',
                icon: Shield
              },
              {
                step: '04',
                title: 'Seguimiento',
                description: 'Acompañamiento continuo para asegurar tu bienestar visual',
                icon: Star
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-purple-600 shadow-lg border-2 border-purple-200">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testimonios reales de personas que confiaron en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para cuidar tu visión?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Agenda tu cita hoy y recibe atención profesional personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              Agendar Cita
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300">
              Llamar Ahora
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
