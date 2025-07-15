import { Eye, Truck, Users, ShoppingBag, Calendar, Star, MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui';

export function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Ray-Ban Wayfarer Classic',
      price: 149.99,
      rating: 4.8,
      image: '/Media/CATALOGO WEB 600 x400/1.png',
      category: 'Gafas de Sol',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Lentes de Contacto Acuvue Oasys',
      price: 149.99,
      rating: 4.9,
      image: '/Media/Lentes de contacto/34.png',
      category: 'Lentes de Contacto',
      badge: 'Más Vendido'
    },
    {
      id: 3,
      name: 'Gafas de Sol Premium',
      price: 299.99,
      rating: 4.7,
      image: '/Media/CATALOGO WEB 600 x400/3.png',
      category: 'Gafas de Sol',
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Lentes de Contacto de Color',
      price: 169.99,
      rating: 4.8,
      image: '/Media/Lentes de contacto/28.png',
      category: 'Lentes de Contacto',
      badge: 'Nuevo'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      role: 'Cliente desde 2020',
      content: 'La atención en Horus Optic es excelente. Me ayudaron a encontrar las gafas perfectas para mi rostro y estilo. Totalmente recomendado.',
      rating: 5,
      avatar: '/Media/CATALOGO WEB 600 x400/_MG_2505.jpg'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'Cliente desde 2019',
      content: 'El servicio técnico es increíble. Siempre arreglan mis gafas rápidamente y con la mejor calidad. Muy profesionales.',
      rating: 5,
      avatar: '/Media/CATALOGO WEB 600 x400/_MG_2507.jpg'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      role: 'Cliente desde 2021',
      content: 'Tienen una gran variedad de monturas y marcas. Los precios son justos y la calidad es excelente. Mi óptica de confianza.',
      rating: 5,
      avatar: '/Media/CATALOGO WEB 600 x400/_MG_2508.jpg'
    }
  ];

  const services = [
    {
      icon: Eye,
      title: 'Examen Visual Completo',
      description: 'Realizamos revisiones oftalmológicas completas para cuidar tu salud visual.'
    },
    {
      icon: Truck,
      title: 'Reparación y Mantenimiento',
      description: 'Servicio técnico especializado para el cuidado y reparación de tus gafas.'
    },
    {
      icon: Users,
      title: 'Asesoramiento Personalizado',
      description: 'Te ayudamos a elegir las monturas que mejor se adapten a tu rostro y estilo.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32" style={{ background: 'linear-gradient(135deg, #9C989F 0%, #FFFFFF 50%, #9C989F 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(184, 146, 213, 0.2) 0%, rgba(226, 154, 238, 0.2) 100%)' }}></div>
        <div className="absolute inset-0">
          <img 
            src="/Media/BANNER PAGINA WEB/1.png" 
            alt="Gafas elegantes Horus Optic" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: '#B892D5' }}>
                Cuida tu visión con
                <span className="block" style={{ color: '#E29AEE' }}>Horus Optic</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed" style={{ color: '#9C989F' }}>
                Descubre nuestra colección exclusiva de lentes y monturas de las mejores marcas. 
                Ofrecemos exámenes visuales profesionales y asesoramiento personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" style={{ backgroundColor: '#B892D5', color: '#FFFFFF' }} className="hover:opacity-90 px-8 py-4 text-lg">
                    <ShoppingBag className="mr-2 h-6 w-6" />
                    Ver Catálogo
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  style={{ borderColor: '#B892D5', color: '#B892D5' }}
                  className="hover:bg-opacity-10 px-8 py-4 text-lg"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#B892D5';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#B892D5';
                  }}
                >
                  <Calendar className="mr-2 h-6 w-6" />
                  Agendar Cita
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <img 
                  src="/Media/BANNER PAGINA WEB/2.png" 
                  alt="Gafas de sol elegantes Horus Optic" 
                  className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#B892D5', color: '#FFFFFF' }}>
                  <div className="text-3xl font-bold">+10 años</div>
                  <div className="text-sm opacity-90">de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Lens Subscription Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #B892D5 0%, #E29AEE 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Suscripción de Lentes de Contacto
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Recibe tus lentes de contacto directamente en casa cada mes. 
                Sin preocupaciones, sin olvidos, con la mejor calidad y precio garantizado.
              </p>
              
              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                    <Truck className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">Envío gratuito a domicilio</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">Entrega automática mensual</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">20% de descuento vs compra individual</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">Cancela o modifica cuando quieras</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/lentes-contacto">
                  <Button 
                    size="lg" 
                    style={{ backgroundColor: '#FFFFFF', color: '#B892D5' }}
                    className="hover:opacity-90 px-8 py-4 text-lg font-semibold"
                  >
                    Suscribirme Ahora
                  </Button>
                </Link>
                <Link to="/lentes-contacto">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
                    className="hover:bg-white hover:bg-opacity-10 px-8 py-4 text-lg"
                  >
                    Ver Planes
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                    <img 
                      src="/Media/Lentes de contacto/24.png" 
                      alt="Lentes de contacto diarios" 
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-white font-bold text-lg mb-2">Lentes Diarios</h3>
                    <p className="text-white text-sm opacity-90">Comodidad y practicidad para uso diario</p>
                    <div className="mt-3 text-white font-bold text-xl">$25/mes</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                    <img 
                      src="/Media/Lentes de contacto/25.png" 
                      alt="Lentes de contacto mensuales" 
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-white font-bold text-lg mb-2">Lentes Mensuales</h3>
                    <p className="text-white text-sm opacity-90">Durabilidad y economía para uso prolongado</p>
                    <div className="mt-3 text-white font-bold text-xl">$15/mes</div>
                  </div>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#B892D5' }}>50+</div>
                  <div className="text-sm" style={{ color: '#9C989F' }}>Marcas disponibles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#B892D5' }}>Productos Destacados</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9C989F' }}>
              Descubre nuestra selección de productos premium
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#E29AEE', color: '#FFFFFF' }}>
                    {product.badge}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1" style={{ color: '#B892D5' }}>{product.name}</h3>
                  <p className="text-sm mb-3" style={{ color: '#9C989F' }}>{product.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold" style={{ color: '#B892D5' }}>
                      ${product.price}
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Lens Gallery */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#B892D5' }}>Catálogo de Lentes de Contacto</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9C989F' }}>
              Descubre nuestra amplia selección de lentes de contacto de las mejores marcas mundiales
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {[
              { image: '/Media/Lentes de contacto/30.png', name: 'Acuvue Oasys', type: 'Mensuales' },
              { image: '/Media/Lentes de contacto/31.png', name: 'Dailies Total 1', type: 'Diarios' },
              { image: '/Media/Lentes de contacto/32.png', name: 'Biofinity', type: 'Mensuales' },
              { image: '/Media/Lentes de contacto/33.png', name: 'Air Optix', type: 'Mensuales' },
              { image: '/Media/Lentes de contacto/40.png', name: 'Acuvue Moist', type: 'Diarios' },
              { image: '/Media/Lentes de contacto/41.png', name: 'PureVision 2', type: 'Mensuales' },
              { image: '/Media/Lentes de contacto/42.png', name: 'FreshLook', type: 'Color' },
              { image: '/Media/Lentes de contacto/43.png', name: 'Proclear', type: 'Mensuales' },
              { image: '/Media/Lentes de contacto/44.png', name: 'Avaira', type: 'Mensuales' },
              { image: '/Media/Lentes de contacto/WhatsApp Image 2025-04-28 at 10.37.27_e7f19a8e.jpg', name: 'Premium Collection', type: 'Especiales' }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="aspect-square overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-semibold text-sm" style={{ color: '#B892D5' }}>{product.name}</h3>
                  <p className="text-xs mt-1" style={{ color: '#9C989F' }}>{product.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              style={{ backgroundColor: '#B892D5', color: '#FFFFFF' }}
              className="mr-4"
            >
              Ver Catálogo Completo
            </Button>
            <Button 
              size="lg"
              variant="outline"
              style={{ borderColor: '#B892D5', color: '#B892D5' }}
            >
              Iniciar Suscripción
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(156, 152, 159, 0.05) 0%, rgba(255, 255, 255, 1) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#B892D5' }}>Nuestros Servicios</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9C989F' }}>
              En Horus Optic ofrecemos servicios profesionales para el cuidado completo de tu salud visual
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(184, 146, 213, 0.1)' }}>
                  <service.icon className="h-8 w-8" style={{ color: '#B892D5' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#B892D5' }}>{service.title}</h3>
                <p className="leading-relaxed" style={{ color: '#9C989F' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#B892D5' }}>Lo que dicen nuestros clientes</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9C989F' }}>
              Descubre por qué nuestros clientes confían en nosotros para el cuidado de su salud visual
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold" style={{ color: '#B892D5' }}>{testimonial.name}</h4>
                    <p className="text-sm" style={{ color: '#9C989F' }}>{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="leading-relaxed italic" style={{ color: '#9C989F' }}>"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{ backgroundColor: '#B892D5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Contáctanos</h2>
              <p className="text-xl mb-8" style={{ color: '#FFFFFF', opacity: '0.9' }}>
                Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos a la brevedad
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#E29AEE' }}>
                    <MapPin className="h-6 w-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#FFFFFF' }}>Dirección</h4>
                    <p style={{ color: '#FFFFFF', opacity: '0.8' }}>Carrera 33 # 47 - 64, Barrio Cabecera, Bucaramanga</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#E29AEE' }}>
                    <Phone className="h-6 w-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#FFFFFF' }}>Teléfono</h4>
                    <p style={{ color: '#FFFFFF', opacity: '0.8' }}>317 492 3832</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#E29AEE' }}>
                    <Mail className="h-6 w-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#FFFFFF' }}>Email</h4>
                    <p style={{ color: '#FFFFFF', opacity: '0.8' }}>info@horusoptic.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#E29AEE' }}>
                    <Clock className="h-6 w-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#FFFFFF' }}>Horario</h4>
                    <p style={{ color: '#FFFFFF', opacity: '0.8' }}>Lunes a Viernes: 8:00 - 18:00</p>
                    <p style={{ color: '#FFFFFF', opacity: '0.8' }}>Sábados: 9:00 - 16:00</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#E29AEE' }}>
                    <Instagram className="h-6 w-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#FFFFFF' }}>Instagram</h4>
                    <a 
                      href="https://www.instagram.com/horus_optic_/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#E29AEE', opacity: '0.9' }}
                      className="hover:opacity-75 transition-opacity"
                    >
                      @horus_optic_
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#E29AEE' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nombre completo*" 
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                    style={{ backgroundColor: '#FFFFFF', color: '#B892D5', borderColor: '#B892D5' }}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Correo electrónico*" 
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                    style={{ backgroundColor: '#FFFFFF', color: '#B892D5', borderColor: '#B892D5' }}
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Teléfono" 
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                    style={{ backgroundColor: '#FFFFFF', color: '#B892D5', borderColor: '#B892D5' }}
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Mensaje*" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                    style={{ backgroundColor: '#FFFFFF', color: '#B892D5', borderColor: '#B892D5' }}
                  ></textarea>
                </div>
                <Button className="w-full py-3 text-lg" style={{ backgroundColor: '#FFFFFF', color: '#B892D5' }}>
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
