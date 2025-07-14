import { Button } from '../components/ui';
import { Users, Target, Award, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative" style={{ background: 'linear-gradient(135deg, #B892D5 0%, #E29AEE 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Acerca de Horus Optic
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: '#FFFFFF', opacity: '0.9' }}>
              Más de 10 años brindando soluciones de visión excepcionales en Bucaramanga con 
              tecnología de vanguardia y un servicio personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#B892D5' }}>Nuestra Misión</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9C989F' }}>
            Proporcionar productos ópticos de la más alta calidad y servicios excepcionales 
            que mejoren la vida de nuestros clientes a través de una visión perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(184, 146, 213, 0.1)' }}>
              <Target className="h-10 w-10" style={{ color: '#B892D5' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#B892D5' }}>Precisión</h3>
            <p style={{ color: '#9C989F' }}>
              Cada producto es cuidadosamente seleccionado para garantizar la máxima precisión óptica.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(184, 146, 213, 0.1)' }}>
              <Award className="h-10 w-10" style={{ color: '#B892D5' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#B892D5' }}>Calidad</h3>
            <p style={{ color: '#9C989F' }}>
              Trabajamos solo con las marcas más reconocidas y prestigiosas del mercado óptico.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Experiencia</h3>
            <p className="text-gray-600">
              Nuestro equipo cuenta con más de dos décadas de experiencia en óptica profesional.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Compromiso</h3>
            <p className="text-gray-600">
              Estamos comprometidos con la satisfacción completa de cada uno de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Horus Optic nació en 2003 con la visión de democratizar el acceso a productos 
                  ópticos de alta calidad. Fundada por un grupo de especialistas en óptica, 
                  comenzamos como una pequeña tienda local que rápidamente se ganó la confianza 
                  de la comunidad.
                </p>
                <p>
                  A lo largo de los años, hemos crecido hasta convertirnos en una referencia 
                  nacional en el sector óptico, manteniendo siempre nuestros valores fundamentales: 
                  calidad, innovación y servicio al cliente excepcional.
                </p>
                <p>
                  Hoy, con más de 50,000 clientes satisfechos y una presencia en todo el país, 
                  seguimos comprometidos con nuestra misión original de mejorar la vida de las 
                  personas a través de una visión perfecta.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                alt="Historia de Horus Optic"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los especialistas que hacen posible la experiencia Horus Optic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face" 
              alt="Dr. María González"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Dr. María González</h3>
            <p className="text-primary-600 mb-3">Optometrista Jefe</p>
            <p className="text-gray-600 text-sm">
              Especialista en optometría con 15 años de experiencia en corrección visual 
              y adaptación de lentes de contacto.
            </p>
          </div>

          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" 
              alt="Ing. Carlos Rodríguez"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Ing. Carlos Rodríguez</h3>
            <p className="text-primary-600 mb-3">Director Técnico</p>
            <p className="text-gray-600 text-sm">
              Ingeniero óptico especializado en diseño y desarrollo de sistemas 
              ópticos avanzados y tecnología láser.
            </p>
          </div>

          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" 
              alt="Ana Martínez"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Ana Martínez</h3>
            <p className="text-primary-600 mb-3">Gerente de Atención al Cliente</p>
            <p className="text-gray-600 text-sm">
              Experta en servicio al cliente con más de 10 años asegurando 
              la satisfacción y experiencia excepcional de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres ser parte de nuestra historia?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a los miles de clientes que han confiado en nosotros para mejorar su visión y calidad de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              Conocer Productos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Contactar Equipo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
