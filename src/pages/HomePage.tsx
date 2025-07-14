import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '../components/ui';
import { ShoppingBag, Star, Truck, Clock, Eye, CheckCircle, Users, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { testSupabaseConnection } from '../utils/testSupabase';

export function HomePage() {
  // Test Supabase connection on component mount
  useEffect(() => {
    testSupabaseConnection();
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: 'Ray-Ban Aviator',
      price: 149.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=400&fit=crop',
      category: 'Gafas de Sol',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Oakley Holbrook',
      price: 129.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1556306303-76ce7ce1ec0d?w=600&h=400&fit=crop',
      category: 'Gafas de Sol',
      badge: 'Nuevo'
    },
    {
      id: 3,
      name: 'Gucci GG0396S',
      price: 299.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
      category: 'Gafas de Sol',
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Tom Ford FT5634-B',
      price: 249.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop',
      category: 'Monturas',
      badge: 'Elegante'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      role: 'Cliente desde 2020',
      content: 'La atención en Horus Optic es excelente. Me ayudaron a encontrar las gafas perfectas para mi rostro y estilo. Totalmente recomendado.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'Cliente desde 2019',
      content: 'El examen visual fue muy profesional y detallado. Me explicaron todo el proceso y me asesoraron sobre las mejores opciones para mi caso.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      id: 3,
      name: 'Laura Martínez',
      role: 'Cliente desde 2021',
      content: 'Excelente servicio y variedad de productos. Los precios son competitivos y la calidad de los lentes es superior.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5
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
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-800/20"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1200&h=800&fit=crop" 
            alt="Gafas elegantes" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Cuida tu visión con
                <span className="block text-primary-400">Horus Optic</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Descubre nuestra colección exclusiva de lentes y monturas de las mejores marcas. 
                Ofrecemos exámenes visuales profesionales y asesoramiento personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg">
                    <ShoppingBag className="mr-2 h-6 w-6" />
                    Ver Catálogo
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
                >
                  <Calendar className="mr-2 h-6 w-6" />
                  Agendar Cita
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=800&fit=crop" 
                  alt="Gafas de sol elegantes" 
                  className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">+10 años</div>
                  <div className="text-sm opacity-90">de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Suscripción de Lentes de Contacto
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Descubre la comodidad de recibir tus lentes de contacto mensualmente en tu puerta
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-lg">Entrega gratuita mensual</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-lg">Ahorra hasta un 20% comparado con compras individuales</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-lg">Flexibilidad para cambiar o cancelar tu plan</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-lg">Lentes frescos y de alta calidad cada mes</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-2">Plan Básico</h4>
                    <div className="text-3xl font-bold text-primary-600 mb-2">29,99€/mes</div>
                    <ul className="text-sm space-y-1 mb-4">
                      <li>• Lentes mensuales</li>
                      <li>• 1 par al mes</li>
                      <li>• Solución de limpieza incluida</li>
                    </ul>
                    <Button className="w-full">Seleccionar plan</Button>
                  </div>
                  
                  <div className="bg-primary-600 text-white p-6 rounded-xl shadow-md relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      Más Popular
                    </div>
                    <h4 className="font-bold text-lg mb-2">Plan Premium</h4>
                    <div className="text-3xl font-bold mb-2">39,99€/mes</div>
                    <ul className="text-sm space-y-1 mb-4 opacity-90">
                      <li>• Lentes quincenales</li>
                      <li>• 2 pares al mes</li>
                      <li>• Solución premium</li>
                      <li>• Estuche de viaje gratis</li>
                    </ul>
                    <Button className="w-full bg-white text-primary-600 hover:bg-gray-100">Seleccionar plan</Button>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-2">Plan Familiar</h4>
                    <div className="text-3xl font-bold text-primary-600 mb-2">69,99€/mes</div>
                    <ul className="text-sm space-y-1 mb-4">
                      <li>• Ideal para parejas</li>
                      <li>• 4 pares al mes</li>
                      <li>• Personaliza cada par</li>
                      <li>• Descuento adicional 10%</li>
                    </ul>
                    <Button className="w-full">Seleccionar plan</Button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop" 
                  alt="Lentes de contacto" 
                  className="rounded-2xl shadow-2xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra selección de productos premium
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-medium mb-1">{product.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <div className="flex items-center mb-4">
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
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">${product.price}</span>
                    <Button className="bg-primary-600 hover:bg-primary-700">Añadir al carrito</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Ver todos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En Horus Optic ofrecemos servicios profesionales para el cuidado completo de tu salud visual
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre por qué nuestros clientes confían en nosotros para el cuidado de su salud visual
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/testimonials">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 px-8 py-4 text-lg">
                Ver todos los testimonios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
              <p className="text-xl text-gray-300 mb-8">
                Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos a la brevedad
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-gray-300">Av. Principal 123, Ciudad</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-gray-300">+34 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">info@horusoptic.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horario</h4>
                    <p className="text-gray-300">Lunes a Viernes: 9:00 - 20:00</p>
                    <p className="text-gray-300">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nombre completo*" 
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Correo electrónico*" 
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Teléfono" 
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Mensaje*" 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary-600 hover:bg-primary-700 py-3 text-lg">
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
