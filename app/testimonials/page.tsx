'use client';

import { Layout } from '../../src/components/layout/Layout';
import { 
  Star, 
  Quote, 
  Users, 
  Award, 
  Heart,
  CheckCircle,
  ArrowRight,
  ThumbsUp
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    occupation: 'Profesora',
    service: 'Examen Visual Completo',
    rating: 5,
    comment: 'Excelente atención y equipos de última tecnología. Me detectaron un problema visual que no sabía que tenía. El Dr. López fue muy profesional y me explicó todo detalladamente. Muy satisfecha con el servicio.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b096?w=200&h=200&fit=crop&crop=face',
    location: 'Bogotá',
    date: 'Marzo 2024'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    occupation: 'Ingeniero de Software',
    service: 'Adaptación de Lentes',
    rating: 5,
    comment: 'Trabajo muchas horas frente al computador y necesitaba lentes especiales. El proceso fue muy profesional y ahora tengo los lentes perfectos para mi trabajo. La diferencia es increíble, ya no tengo fatiga visual.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    location: 'Medellín',
    date: 'Febrero 2024'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    occupation: 'Madre de Familia',
    service: 'Terapia Visual',
    rating: 5,
    comment: 'Mi hija de 8 años tenía problemas de concentración en el colegio. Después de la terapia visual mejoró significativamente su rendimiento. El equipo es muy paciente con los niños. Altamente recomendado.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    location: 'Cali',
    date: 'Enero 2024'
  },
  {
    id: 4,
    name: 'Roberto Silva',
    occupation: 'Contador',
    service: 'Consulta Especializada',
    rating: 5,
    comment: 'Tenía problemas serios de visión y necesitaba una segunda opinión. El especialista fue muy minucioso y me dio un plan de tratamiento excelente. Mi visión ha mejorado considerablemente.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    location: 'Barranquilla',
    date: 'Abril 2024'
  },
  {
    id: 5,
    name: 'Laura Jiménez',
    occupation: 'Diseñadora Gráfica',
    service: 'Examen Visual y Lentes',
    rating: 5,
    comment: 'Como diseñadora necesito una visión perfecta para los detalles. El equipo me ayudó a encontrar los lentes ideales para mi trabajo. La atención al cliente es excepcional y los precios son justos.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face',
    location: 'Bucaramanga',
    date: 'Mayo 2024'
  },
  {
    id: 6,
    name: 'Miguel Torres',
    occupation: 'Jubilado',
    service: 'Tratamiento Cataratas',
    rating: 5,
    comment: 'A mis 68 años desarrollé cataratas y estaba muy preocupado. El Dr. García me tranquilizó y el tratamiento fue un éxito total. Ahora veo mejor que en años. Gracias por devolverme la claridad visual.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
    location: 'Cartagena',
    date: 'Marzo 2024'
  },
  {
    id: 7,
    name: 'Sofia Vargas',
    occupation: 'Estudiante Universitaria',
    service: 'Lentes de Contacto',
    rating: 5,
    comment: 'Quería cambiar a lentes de contacto para hacer deporte. Me enseñaron todo sobre el cuidado y uso correcto. Son muy cómodos y la adaptación fue perfecta. El seguimiento post-venta es excelente.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
    location: 'Pereira',
    date: 'Febrero 2024'
  },
  {
    id: 8,
    name: 'Andrés Morales',
    occupation: 'Médico',
    service: 'Cirugía Refractiva',
    rating: 5,
    comment: 'Como médico soy muy exigente con la calidad. La cirugía refractiva cambió mi vida completamente. Ya no necesito lentes y mi visión es perfecta. La tecnología que usan es de primera clase.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    location: 'Manizales',
    date: 'Abril 2024'
  },
  {
    id: 9,
    name: 'Elena Castro',
    occupation: 'Empresaria',
    service: 'Examen Preventivo',
    rating: 5,
    comment: 'Vengo cada año para mis exámenes preventivos. La atención es siempre excepcional y me mantienen informada sobre el estado de mi salud visual. La prevención es clave y aquí lo entienden perfectamente.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face',
    location: 'Ibagué',
    date: 'Mayo 2024'
  }
];

const stats = [
  {
    icon: Users,
    number: '2,500+',
    label: 'Pacientes Satisfechos',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Star,
    number: '4.9/5',
    label: 'Calificación Promedio',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Award,
    number: '15+',
    label: 'Años de Experiencia',
    color: 'from-pink-500 to-red-600'
  },
  {
    icon: Heart,
    number: '98%',
    label: 'Recomendación',
    color: 'from-emerald-500 to-blue-600'
  }
];

export default function TestimonialsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Quote className="h-12 w-12 text-yellow-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Testimonios
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Conoce las experiencias de nuestros pacientes y descubre por qué confían en nosotros
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <ThumbsUp className="h-4 w-4" />
                <span>Miles de historias de éxito</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Testimonios 100% reales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Historias Reales de Éxito
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada testimonio representa una vida transformada y una sonrisa recuperada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-purple-600 font-medium">{testimonial.occupation}</p>
                    <p className="text-sm text-gray-500">{testimonial.location} • {testimonial.date}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Service Badge */}
                <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {testimonial.service}
                </div>

                {/* Comment */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-purple-200" />
                  <p className="text-gray-700 leading-relaxed pl-6 italic">
                    {testimonial.comment}
                  </p>
                </div>

                {/* Verification Badge */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-500">Testimonio verificado</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <Quote className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Testimonio Destacado
              </h3>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 italic">
              "Después de años usando lentes, decidí hacerme la cirugía refractiva. El resultado superó todas mis expectativas. No solo recuperé mi visión perfecta, sino que gané confianza y libertad. El equipo médico es excepcional y la tecnología que utilizan es de primera clase."
            </blockquote>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face"
                alt="Dr. Andrés Morales"
                className="w-20 h-20 rounded-full object-cover border-4 border-purple-200"
              />
              <div className="text-center md:text-left">
                <div className="font-bold text-xl text-gray-900">Dr. Andrés Morales</div>
                <div className="text-purple-600 font-medium">Médico Cardiólogo</div>
                <div className="text-gray-500">Manizales • Cirugía Refractiva</div>
                <div className="flex justify-center md:justify-start gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quieres ser nuestro próximo testimonio de éxito?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a miles de pacientes satisfechos que han transformado su visión con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              Agendar Consulta
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300">
              Ver Nuestros Servicios
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
