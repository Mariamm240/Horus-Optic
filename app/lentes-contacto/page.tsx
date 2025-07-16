'use client';

import { Layout } from '../../src/components/layout/Layout';
import { 
  Eye, 
  Shield, 
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Heart,
  Zap,
  Sun,
  Droplets
} from 'lucide-react';

const lensTypes = [
  {
    id: 1,
    name: 'Diarios',
    subtitle: 'Lentes de Contacto Diarios',
    description: 'Perfectos para uso ocasional, máxima higiene y comodidad',
    price: 'Desde $45.000/mes',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8a47a?w=400&h=300&fit=crop',
    features: [
      'Sin mantenimiento',
      'Máxima higiene',
      'Ideales para principiantes',
      'Perfectos para deportes'
    ],
    benefits: [
      'Cero riesgo de infecciones',
      'No necesitas soluciones',
      'Siempre frescos y limpios',
      'Cómodos todo el día'
    ],
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    name: 'Semanales',
    subtitle: 'Lentes de Contacto Semanales',
    description: 'Balance perfecto entre comodidad y economía para uso regular',
    price: 'Desde $65.000/mes',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    features: [
      'Hasta 7 días de uso',
      'Material avanzado',
      'Fácil mantenimiento',
      'Excelente relación precio-calidad'
    ],
    benefits: [
      'Más económicos que los diarios',
      'Comodidad durante toda la semana',
      'Fáciles de cuidar',
      'Ideales para uso regular'
    ],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 3,
    name: 'Mensuales',
    subtitle: 'Lentes de Contacto Mensuales',
    description: 'Máxima durabilidad y tecnología avanzada para usuarios frecuentes',
    price: 'Desde $85.000/mes',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
    features: [
      'Hasta 30 días de uso',
      'Tecnología de hidratación',
      'Material resistente',
      'Para uso intensivo'
    ],
    benefits: [
      'Máxima economía a largo plazo',
      'Tecnología más avanzada',
      'Resistentes y duraderos',
      'Perfectos para uso diario'
    ],
    color: 'from-pink-500 to-red-600'
  },
  {
    id: 4,
    name: 'Especializados',
    subtitle: 'Lentes para Condiciones Especiales',
    description: 'Soluciones específicas para astigmatismo, presbicia y ojo seco',
    price: 'Desde $120.000/mes',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
    features: [
      'Para astigmatismo',
      'Multifocales',
      'Para ojo seco',
      'Diseño personalizado'
    ],
    benefits: [
      'Corrección especializada',
      'Visión nítida en todas las distancias',
      'Hidratación prolongada',
      'Adaptación personalizada'
    ],
    color: 'from-emerald-500 to-blue-600'
  }
];

const advantages = [
  {
    icon: Eye,
    title: 'Campo Visual Completo',
    description: 'Sin limitaciones de montura, visión natural en 360°'
  },
  {
    icon: Zap,
    title: 'Libertad de Movimiento',
    description: 'Perfectos para deportes y actividades físicas'
  },
  {
    icon: Sun,
    title: 'Compatible con Gafas de Sol',
    description: 'Usa cualquier gafa de sol sin restricciones'
  },
  {
    icon: Droplets,
    title: 'No se Empañan',
    description: 'Sin problemas de condensación o lluvia'
  },
  {
    icon: Heart,
    title: 'Mejora la Autoestima',
    description: 'Aspecto natural sin cambios en tu apariencia'
  },
  {
    icon: Shield,
    title: 'Protección UV',
    description: 'Muchos modelos incluyen filtro UV integrado'
  }
];

const process = [
  {
    step: '01',
    title: 'Evaluación Inicial',
    description: 'Examen completo de tus ojos y estilo de vida',
    icon: Eye,
    details: [
      'Medición de la curvatura corneal',
      'Evaluación de la película lagrimal',
      'Análisis de tus necesidades específicas',
      'Pruebas de compatibilidad'
    ]
  },
  {
    step: '02',
    title: 'Selección Personalizada',
    description: 'Elegimos el tipo perfecto según tus necesidades',
    icon: Star,
    details: [
      'Recomendación basada en tu examen',
      'Consideración de tu estilo de vida',
      'Explicación de opciones disponibles',
      'Presupuesto personalizado'
    ]
  },
  {
    step: '03',
    title: 'Adaptación y Entrenamiento',
    description: 'Te enseñamos todo sobre el uso y cuidado',
    icon: Users,
    details: [
      'Colocación y remoción segura',
      'Rutinas de limpieza y cuidado',
      'Horarios de uso recomendados',
      'Solución de problemas comunes'
    ]
  },
  {
    step: '04',
    title: 'Seguimiento Continuo',
    description: 'Acompañamiento para asegurar tu bienestar',
    icon: Shield,
    details: [
      'Controles periódicos programados',
      'Ajustes según tu adaptación',
      'Detección temprana de problemas',
      'Actualizaciones de prescripción'
    ]
  }
];

export default function LentesContactoPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757175-0eb30cd8a47a?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Lentes de Contacto
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Descubre la libertad visual que siempre has deseado. Tecnología avanzada, comodidad excepcional.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <CheckCircle className="h-4 w-4" />
                  <span>Adaptación personalizada</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>Marcas reconocidas mundialmente</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Shield className="h-4 w-4" />
                  <span>Seguimiento profesional</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                  Agenda tu Evaluación
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Ver Catálogo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=400&fit=crop"
                  alt="Lentes de Contacto"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                <Eye className="h-12 w-12 text-purple-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Lenses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Lentes de Contacto
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encuentra la opción perfecta para tu estilo de vida y necesidades visuales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {lensTypes.map((lens) => (
              <div
                key={lens.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48">
                  <img
                    src={lens.image}
                    alt={lens.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${lens.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{lens.name}</h3>
                      <p className="text-lg opacity-90">{lens.subtitle}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {lens.price}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {lens.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Características</h4>
                      <ul className="space-y-2">
                        {lens.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Beneficios</h4>
                      <ul className="space-y-2">
                        {lens.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${lens.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2`}>
                    Más Información
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ventajas de los Lentes de Contacto
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre por qué millones de personas eligen la libertad de los lentes de contacto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proceso de Adaptación
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un proceso cuidadoso y personalizado para garantizar tu éxito con lentes de contacto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-purple-600 shadow-lg border-2 border-purple-200">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos las dudas más comunes sobre lentes de contacto
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                question: '¿Cuánto tiempo lleva adaptarse a los lentes de contacto?',
                answer: 'La mayoría de personas se adaptan en 1-2 semanas. Nuestro programa de adaptación personalizado te ayuda a sentirte cómodo desde el primer día.'
              },
              {
                question: '¿Son seguros los lentes de contacto?',
                answer: 'Sí, cuando se usan correctamente y con el seguimiento profesional adecuado, los lentes de contacto son muy seguros. Te enseñamos todas las mejores prácticas.'
              },
              {
                question: '¿Puedo usar lentes de contacto si tengo astigmatismo?',
                answer: 'Absolutamente. Tenemos lentes especializados para astigmatismo que proporcionan una visión nítida y estable durante todo el día.'
              },
              {
                question: '¿Con qué frecuencia debo cambiar mis lentes?',
                answer: 'Depende del tipo: diarios se descartan cada día, semanales cada semana, y mensuales cada mes. Nunca uses lentes más tiempo del recomendado.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para experimentar la libertad visual?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Agenda tu evaluación gratuita y descubre qué tipo de lentes de contacto son perfectos para ti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              Evaluación Gratuita
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
