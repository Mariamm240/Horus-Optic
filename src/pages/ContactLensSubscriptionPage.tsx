import { useState } from 'react';
import { Check, Eye, Truck, Calendar, Shield, Heart, Users } from 'lucide-react';
import { Button } from '../components/ui';
import { SubscriptionModal } from '../components/SubscriptionModal';

export function ContactLensSubscriptionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const handleSubscribe = (plan: any) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const plans = [
    {
      id: 'daily',
      name: 'Plan Diario',
      price: 25,
      period: 'mes',
      description: 'Lentes de contacto diarios para máxima comodidad',
      features: [
        'Lentes nuevos cada día',
        'Máxima higiene y salud ocular',
        'Sin limpieza ni mantenimiento',
        'Perfecto para uso ocasional',
        'Envío gratuito mensual'
      ],
      popular: false
    },
    {
      id: 'monthly',
      name: 'Plan Mensual',
      price: 15,
      period: 'mes',
      description: 'La opción más popular para uso regular',
      features: [
        'Lentes mensuales de alta calidad',
        '20% descuento vs compra individual',
        'Solución de limpieza incluida',
        'Estuche de regalo',
        'Envío gratuito automático',
        'Soporte técnico 24/7'
      ],
      popular: true
    },
    {
      id: 'yearly',
      name: 'Plan Anual',
      price: 12,
      period: 'mes',
      description: 'El mejor valor con pago anual',
      features: [
        'Máximo ahorro: 35% descuento',
        'Suministro completo por 12 meses',
        'Examen visual gratuito incluido',
        'Consultas ilimitadas',
        'Envío express sin costo',
        'Garantía de satisfacción'
      ],
      popular: false
    }
  ];

  const contactLensTypes = [
    {
      name: 'Lentes Diarios',
      image: '/Media/Lentes de contacto/24.png',
      brands: ['Acuvue One Day', 'Dailies Total 1', 'Biotrue ONEday'],
      features: ['Uso único', 'Máxima higiene', 'Sin mantenimiento'],
      description: 'Perfectos para uso ocasional o para quienes prefieren la máxima comodidad sin preocuparse por la limpieza.'
    },
    {
      name: 'Lentes Mensuales',
      image: '/Media/Lentes de contacto/25.png',
      brands: ['Air Optix Plus', 'Biofinity', 'PureVision 2'],
      features: ['Larga duración', 'Económicos', 'Transpirables'],
      description: 'La opción más popular y económica para uso diario regular con excelente comodidad.'
    },
    {
      name: 'Lentes Tóricos',
      image: '/Media/Lentes de contacto/26.png',
      brands: ['Acuvue Oasys for Astigmatism', 'Air Optix for Astigmatism', 'Biotrue for Astigmatism'],
      features: ['Para astigmatismo', 'Visión estable', 'Tecnología de estabilización'],
      description: 'Diseñados específicamente para corregir el astigmatismo con máxima estabilidad visual.'
    },
    {
      name: 'Lentes Multifocales',
      image: '/Media/Lentes de contacto/27.png',
      brands: ['Acuvue Oasys Multifocal', 'Air Optix Aqua Multifocal', 'Biofinity Multifocal'],
      features: ['Visión cercana y lejana', 'Transición suave', 'Para presbicia'],
      description: 'Ideales para personas con presbicia que necesitan corrección para visión de cerca y lejos.'
    },
    {
      name: 'Lentes de Color',
      image: '/Media/Lentes de contacto/28.png',
      brands: ['Acuvue Define', 'FreshLook', 'Air Optix Colors'],
      features: ['Cambio de color natural', 'Cómodos', 'Seguros'],
      description: 'Realza o cambia el color de tus ojos manteniendo una apariencia natural y cómoda.'
    },
    {
      name: 'Lentes de Silicona',
      image: '/Media/Lentes de contacto/29.png',
      brands: ['Air Optix Night & Day', 'PureVision 2 HD', 'Biofinity XR'],
      features: ['Alta permeabilidad', 'Uso extendido', 'Máximo oxígeno'],
      description: 'Fabricados con hidrogel de silicona para máxima oxigenación y comodidad todo el día.'
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Envío Gratuito',
      description: 'Recibe tus lentes directamente en casa sin costo adicional'
    },
    {
      icon: Calendar,
      title: 'Entrega Automática',
      description: 'Nunca te quedes sin lentes con nuestro sistema automático'
    },
    {
      icon: Shield,
      title: 'Garantía Total',
      description: 'Satisfacción garantizada o te devolvemos tu dinero'
    },
    {
      icon: Heart,
      title: 'Salud Ocular',
      description: 'Seguimiento profesional de tu salud visual incluido'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32" style={{ background: 'linear-gradient(135deg, #B892D5 0%, #E29AEE 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 h-full">
            <div className="relative overflow-hidden">
              <img src="/Media/Lentes de contacto/30.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <img src="/Media/Lentes de contacto/31.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <img src="/Media/Lentes de contacto/32.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <img src="/Media/Lentes de contacto/33.png" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Suscripción de Lentes de Contacto
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              La forma más cómoda y económica de tener siempre tus lentes de contacto. 
              Sin olvidos, sin preocupaciones, con la mejor calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                style={{ backgroundColor: '#FFFFFF', color: '#B892D5' }}
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => handleSubscribe(plans[1])} // Plan más popular por defecto
              >
                Comenzar Suscripción
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
                className="hover:bg-white hover:bg-opacity-10 px-8 py-4 text-lg"
              >
                <Eye className="mr-2 h-6 w-6" />
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Gallery */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#B892D5' }}>Productos Destacados</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9C989F' }}>
              Descubre nuestra amplia selección de lentes de contacto de las mejores marcas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {[34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44].map((num, index) => (
              <div key={index} className="group relative">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                  <img
                    src={`/Media/Lentes de contacto/${num}.png`}
                    alt={`Lentes de contacto ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
                  <div className="p-3 text-white text-sm font-medium">
                    Lentes Premium {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              style={{ backgroundColor: '#B892D5', color: '#FFFFFF' }}
              onClick={() => handleSubscribe(plans[1])}
            >
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#B892D5' }}>¿Por qué elegir nuestra suscripción?</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9C989F' }}>
              Más que lentes de contacto, es comodidad y tranquilidad para tu día a día
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(184, 146, 213, 0.1)' }}>
                  <benefit.icon className="h-8 w-8" style={{ color: '#B892D5' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#B892D5' }}>{benefit.title}</h3>
                <p className="leading-relaxed" style={{ color: '#9C989F' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(156, 152, 159, 0.05) 0%, rgba(255, 255, 255, 1) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#B892D5' }}>Elige tu Plan de Suscripción</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9C989F' }}>
              Planes flexibles que se adaptan a tu estilo de vida y necesidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-400 transform scale-105' : ''
                }`}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 rounded-full text-white text-sm font-bold" style={{ backgroundColor: '#E29AEE' }}>
                      Más Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#B892D5' }}>{plan.name}</h3>
                  <p className="mb-4" style={{ color: '#9C989F' }}>{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold" style={{ color: '#B892D5' }}>${plan.price}</span>
                    <span className="text-lg" style={{ color: '#9C989F' }}>/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#B892D5' }} />
                      <span style={{ color: '#9C989F' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full py-3"
                  style={{ 
                    backgroundColor: plan.popular ? '#B892D5' : 'transparent',
                    color: plan.popular ? '#FFFFFF' : '#B892D5',
                    borderColor: '#B892D5'
                  }}
                  variant={plan.popular ? 'primary' : 'outline'}
                  onClick={() => handleSubscribe(plan)}
                >
                  Seleccionar Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Lens Types */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#B892D5' }}>Tipos de Lentes Disponibles</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#9C989F' }}>
              Tenemos la solución perfecta para cada necesidad visual
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactLensTypes.map((type, index) => (
              <div key={index} className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="relative">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#B892D5' }}>{type.name}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#9C989F' }}>{type.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#9C989F' }}>Marcas disponibles:</h4>
                    <div className="flex flex-wrap gap-1">
                      {type.brands.map((brand, brandIndex) => (
                        <span 
                          key={brandIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: 'rgba(184, 146, 213, 0.15)', color: '#B892D5' }}
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#9C989F' }}>Características:</h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Check className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: '#B892D5' }} />
                          <span style={{ color: '#9C989F' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full mt-4"
                    variant="outline"
                    style={{ borderColor: '#B892D5', color: '#B892D5' }}
                    onClick={() => handleSubscribe(plans[1])}
                  >
                    Ver Opciones
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #B892D5 0%, #E29AEE 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            ¿Listo para comenzar tu suscripción?
          </h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Únete a más de 1,000 clientes satisfechos que ya disfrutan de la comodidad 
            de recibir sus lentes de contacto automáticamente cada mes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              style={{ backgroundColor: '#FFFFFF', color: '#B892D5' }}
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => handleSubscribe(plans[1])} // Plan más popular por defecto
            >
              <Users className="mr-2 h-6 w-6" />
              Comenzar Ahora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
              className="hover:bg-white hover:bg-opacity-10 px-8 py-4 text-lg"
            >
              Hablar con un Experto
            </Button>
          </div>
        </div>
      </section>

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </div>
  );
}
