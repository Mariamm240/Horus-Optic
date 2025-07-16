import { Metadata } from 'next';
import Link from 'next/link';
import { 
  EyeIcon, 
  HeartIcon, 
  LightBulbIcon, 
  StarIcon,
  CheckCircleIcon,
  CalendarIcon,
  UserGroupIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import { Button } from '../../src/components/ui/Button';

export const metadata: Metadata = {
  title: 'Nosotros | Horus Optic - Más de 15 años cuidando tu visión',
  description: 'Conoce la historia de Horus Optic, nuestro equipo de expertos y nuestro compromiso con la excelencia en el cuidado visual.',
};

const values = [
  {
    icon: EyeIcon,
    title: 'Visión Experta',
    description: 'Más de 15 años de experiencia en el sector óptico, brindando soluciones visuales personalizadas.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: HeartIcon,
    title: 'Pasión por el Servicio',
    description: 'Cada cliente es único. Nos dedicamos a entender sus necesidades específicas y superamos sus expectativas.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: LightBulbIcon,
    title: 'Innovación Continua',
    description: 'Adoptamos las últimas tecnologías y tendencias para ofrecer productos y servicios de vanguardia.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: StarIcon,
    title: 'Calidad Premium',
    description: 'Solo trabajamos con las mejores marcas y materiales para garantizar productos de máxima calidad.',
    color: 'from-horus-purple-500 to-horus-pink-500'
  }
];

const stats = [
  { label: 'Clientes Satisfechos', value: '10,000+', icon: UserGroupIcon },
  { label: 'Años de Experiencia', value: '15+', icon: CalendarIcon },
  { label: 'Productos Premium', value: '500+', icon: TrophyIcon },
  { label: 'Satisfacción Media', value: '4.9/5', icon: StarIcon }
];

const team = [
  {
    name: 'Dr. Carlos Mendoza',
    role: 'Optometrista Senior',
    image: '/api/placeholder/300/400',
    bio: 'Especialista en optometría con más de 20 años de experiencia. Experto en lentes de contacto especializados.',
    specialties: ['Optometría Clínica', 'Lentes de Contacto', 'Terapia Visual']
  },
  {
    name: 'Ana García',
    role: 'Asesora de Moda Óptica',
    image: '/api/placeholder/300/400',
    bio: 'Especialista en tendencias y diseño de gafas. Te ayuda a encontrar el estilo perfecto para ti.',
    specialties: ['Diseño de Monturas', 'Tendencias', 'Asesoría de Estilo']
  },
  {
    name: 'Dr. Miguel Torres',
    role: 'Director Técnico',
    image: '/api/placeholder/300/400',
    bio: 'Líder en tecnología óptica avanzada. Responsable de nuestros equipos de diagnóstico de última generación.',
    specialties: ['Tecnología Óptica', 'Diagnóstico', 'Innovación']
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-horus-purple-50 to-horus-pink-50"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-horus-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-horus-pink-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <span>Nuestra Historia</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="block">Cuidando tu</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                visión desde 2008
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              En Horus Optic, combinamos más de 15 años de experiencia con las últimas innovaciones 
              en tecnología óptica para ofrecerte el mejor cuidado visual personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
                  Agendar Cita
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-8 py-4">
                  Contactanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo diario y definen la experiencia Horus Optic.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className={`
                  w-20 h-20 rounded-3xl bg-gradient-to-r ${value.color} 
                  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
                `}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales apasionados y altamente capacitados, dedicados a cuidar tu visión 
              con la máxima excelencia y atención personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Nuestra Misión
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12 leading-relaxed">
            "Proporcionar soluciones visuales excepcionales que mejoren la calidad de vida de nuestros clientes, 
            combinando tecnología avanzada, productos premium y un servicio personalizado incomparable."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircleIcon className="w-8 h-8 text-white" />
              <span className="text-lg font-semibold">Excelencia Garantizada</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircleIcon className="w-8 h-8 text-white" />
              <span className="text-lg font-semibold">Atención Personalizada</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircleIcon className="w-8 h-8 text-white" />
              <span className="text-lg font-semibold">Tecnología Avanzada</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Listo para una nueva experiencia visual?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Agenda tu cita hoy mismo y descubre por qué miles de clientes confían en Horus Optic 
            para el cuidado de su visión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
                Agendar Examen Visual
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg" className="px-8 py-4">
                Ver Productos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
