import { useState } from 'react';
import { Button } from '../components/ui';
import { AppointmentModal } from '../components/AppointmentModal';
import { 
  Eye, 
  Clock, 
  Calendar, 
  Star, 
  Users, 
  Award, 
  Shield, 
  Phone,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('Todos los servicios');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleScheduleAppointment = (serviceName?: string) => {
    setSelectedService(serviceName || '');
    setIsAppointmentModalOpen(true);
  };

  const filters = [
    'Todos los servicios',
    'Diagnóstico',
    'Tratamientos',
    'Adaptación',
    'Especialidades',
    'Asesoría'
  ];

  const services = [
    {
      id: 1,
      title: 'Examen Visual Completo',
      description: 'Evaluación integral de la salud visual que incluye refracción, presión intraocular y salud de la retina.',
      duration: '45 minutos',
      price: '$80.000',
      category: 'Diagnóstico',
      popular: false
    },
    {
      id: 2,
      title: 'Adaptación de Lentes de Contacto',
      description: 'Servicio especializado para adaptar lentes de contacto según las necesidades específicas de cada paciente.',
      duration: '60 minutos',
      price: '$120.000',
      category: 'Adaptación',
      popular: false
    },
    {
      id: 3,
      title: 'Terapia Visual',
      description: 'Tratamientos personalizados para mejorar habilidades visuales y corregir problemas de coordinación ocular.',
      duration: '60 minutos',
      price: '$150.000',
      category: 'Tratamientos',
      popular: false
    },
    {
      id: 4,
      title: 'Detección de Patologías Oculares',
      description: 'Examen especializado para detectar enfermedades como glaucoma, cataratas y degeneración macular.',
      duration: '30 minutos',
      price: '$100.000',
      category: 'Diagnóstico',
      popular: true
    },
    {
      id: 5,
      title: 'Optometría Pediátrica',
      description: 'Evaluación visual especializada para niños, con técnicas adaptadas a sus necesidades.',
      duration: '45 minutos',
      price: '$90.000',
      category: 'Especialidades',
      popular: false
    },
    {
      id: 6,
      title: 'Salud Ocular para Adultos Mayores',
      description: 'Atención especializada para personas mayores, enfocada en los cambios visuales relacionados con la edad.',
      duration: '50 minutos',
      price: '$95.000',
      category: 'Especialidades',
      popular: false
    },
    {
      id: 7,
      title: 'Asesoría en Lentes Oftálmicos',
      description: 'Orientación profesional para elegir los lentes más adecuados según prescripción y estilo de vida.',
      duration: '30 minutos',
      price: 'Sin costo adicional',
      category: 'Asesoría',
      popular: true
    },
    {
      id: 8,
      title: 'Control de Miopía',
      description: 'Programa especializado para controlar la progresión de la miopía, especialmente en niños y adolescentes.',
      duration: '45 minutos',
      price: '$200.000',
      category: 'Tratamientos',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Profesionales Certificados',
      description: 'Equipo de optómetras con amplia experiencia y certificaciones'
    },
    {
      icon: Eye,
      title: 'Tecnología Avanzada',
      description: 'Equipos de última generación para diagnósticos precisos'
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Tratamientos adaptados a las necesidades de cada paciente'
    },
    {
      icon: Shield,
      title: 'Garantía de Calidad',
      description: 'Comprometidos con la excelencia en cada servicio'
    }
  ];

  const process = [
    {
      step: 'Paso 1',
      title: 'Agenda tu Cita',
      description: 'Programa tu consulta en línea o por teléfono según tu disponibilidad'
    },
    {
      step: 'Paso 2',
      title: 'Evaluación Profesional',
      description: 'Examen completo realizado por nuestros optómetras especializados'
    },
    {
      step: 'Paso 3',
      title: 'Solución Personalizada',
      description: 'Recomendaciones y tratamientos adaptados a tus necesidades específicas'
    }
  ];

  const testimonials = [
    {
      name: 'Carolina Ramírez',
      location: 'Bogotá',
      comment: 'El examen visual fue muy completo y el optómetra me explicó detalladamente mi condición. Excelente servicio.',
      service: 'Examen Visual Completo',
      avatar: 'https://img.heroui.chat/image/avatar?w=150&h=150&u=2'
    },
    {
      name: 'Andrés Martínez',
      location: 'Medellín',
      comment: 'La terapia visual ha mejorado significativamente mi problema de convergencia. Muy profesionales.',
      service: 'Terapia Visual',
      avatar: 'https://img.heroui.chat/image/avatar?w=150&h=150&u=3'
    },
    {
      name: 'Valentina Gómez',
      location: 'Cali',
      comment: 'Mi hijo de 6 años fue atendido en optometría pediátrica. El trato fue excelente y muy paciente.',
      service: 'Optometría Pediátrica',
      avatar: 'https://img.heroui.chat/image/avatar?w=150&h=150&u=1'
    }
  ];

  const faqs = [
    {
      question: '¿Con qué frecuencia debo realizarme un examen visual?',
      answer: 'Se recomienda realizar un examen visual completo una vez al año. Sin embargo, si tienes condiciones específicas o usas lentes correctivos, tu optómetra puede recomendarte revisiones más frecuentes.'
    },
    {
      question: '¿Qué incluye el examen visual completo?',
      answer: 'Nuestro examen visual completo incluye evaluación de agudeza visual, refracción, presión intraocular, salud de la retina, evaluación de la coordinación ocular y detección temprana de patologías.'
    },
    {
      question: '¿Desde qué edad se recomienda realizar exámenes visuales?',
      answer: 'Recomendamos realizar el primer examen visual a los 6 meses de edad, luego a los 3 años y antes de iniciar la etapa escolar. Posteriormente, se recomienda un examen anual.'
    },
    {
      question: '¿Cuánto tiempo toma adaptarse a nuevos lentes?',
      answer: 'El período de adaptación varía según cada persona y el tipo de lentes. Generalmente toma entre 1 y 2 semanas adaptarse completamente a una nueva prescripción.'
    }
  ];

  const filteredServices = activeFilter === 'Todos los servicios' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#ffffff', fontWeight: '700' }}>Servicios de Optometría</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#e0f2fe', fontWeight: '500' }}>
            Cuidado visual profesional y personalizado para toda la familia
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              style={{
                backgroundColor: '#ffffff',
                color: '#1e40af',
                border: '3px solid #ffffff',
                fontWeight: '700',
                padding: '12px 32px',
                fontSize: '18px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
              className="hover:bg-gray-100 transition-all duration-200"
              onClick={() => handleScheduleAppointment()}
            >
              Agendar Cita
            </Button>
            <Button 
              size="lg" 
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '3px solid #ffffff',
                fontWeight: '700',
                padding: '12px 32px',
                fontSize: '18px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
              className="hover:bg-white hover:text-blue-800 transition-all duration-200"
            >
              Contactar
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#111827' }}>Nuestros Servicios Profesionales</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6b7280' }}>
              En Horus Optic ofrecemos servicios de optometría de alta calidad con tecnología avanzada y profesionales altamente calificados para cuidar la salud visual de toda su familia.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  backgroundColor: activeFilter === filter ? '#1e40af' : '#ffffff',
                  color: activeFilter === filter ? '#ffffff' : '#1f2937',
                  fontWeight: '600',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  border: activeFilter === filter ? '2px solid #1e40af' : '2px solid #d1d5db',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: activeFilter === filter ? '0 4px 12px rgba(30,64,175,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
                }}
                className="hover:shadow-lg transform hover:scale-105"
              >
                {filter}
                {(filter === 'Asesoría' || filter === 'Diagnóstico') && (
                  <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: '#111827', fontWeight: '700' }}>{service.title}</h3>
                  {service.popular && (
                    <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="mb-6" style={{ color: '#4b5563', fontWeight: '500', lineHeight: '1.6' }}>{service.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center" style={{ color: '#6b7280' }}>
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>
                  <div className="text-2xl font-bold" style={{ color: '#1e40af' }}>{service.price}</div>
                </div>
                
                <Button 
                  style={{
                    backgroundColor: '#1e40af',
                    color: '#ffffff',
                    fontWeight: '700',
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(30,64,175,0.3)'
                  }}
                  className="hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
                  onClick={() => handleScheduleAppointment(service.title)}
                >
                  <Calendar className="h-4 w-4 mr-2" style={{ color: '#ffffff' }} />
                  Agendar Cita
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir Horus Optic?</h2>
            <p className="text-xl text-gray-600">
              Nos distinguimos por ofrecer atención personalizada y soluciones visuales de alta calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
            <p className="text-xl text-gray-600">
              Experiencia fluida y profesional desde la primera cita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <div className="text-sm text-blue-600 font-medium mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros pacientes</h2>
            <p className="text-xl text-gray-600">
              Experiencias reales de quienes han confiado en nuestros servicios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Servicio: {testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#ffffff', fontWeight: '700' }}>¿Listo para cuidar tu salud visual?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#e0f2fe', fontWeight: '500' }}>
            Agenda una cita con nuestros profesionales y descubre la diferencia de un servicio de optometría de calidad
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              style={{
                backgroundColor: '#ffffff',
                color: '#1e40af',
                border: '3px solid #ffffff',
                fontWeight: '700',
                padding: '12px 32px',
                fontSize: '18px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
              className="hover:bg-gray-100 transition-all duration-200"
              onClick={() => handleScheduleAppointment()}
            >
              <Calendar className="h-5 w-5 mr-2" style={{ color: '#1e40af' }} />
              Agendar Cita
            </Button>
            <Button 
              size="lg" 
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '3px solid #ffffff',
                fontWeight: '700',
                padding: '12px 32px',
                fontSize: '18px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
              className="hover:bg-white hover:text-blue-800 transition-all duration-200"
            >
              <Phone className="h-5 w-5 mr-2" style={{ color: '#ffffff' }} />
              Contactar
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">
              Respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
