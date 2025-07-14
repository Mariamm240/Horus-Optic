import { useState } from 'react';
import { Button, Input } from '../components/ui';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo 
              de especialistas para cualquier consulta o asistencia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
              <p className="text-gray-600 mb-8">
                Nuestro equipo está disponible para ayudarte con cualquier pregunta 
                sobre nuestros productos y servicios. No dudes en contactarnos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                  <p className="text-gray-600">
                    Av. Principal 123, Centro Comercial Plaza Óptica<br />
                    Ciudad de México, CDMX 01234
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                  <p className="text-gray-600">
                    +52 (55) 1234-5678<br />
                    +52 (55) 8765-4321
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    info@horusoptic.com<br />
                    ventas@horusoptic.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horarios</h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                    Sábados: 9:00 AM - 5:00 PM<br />
                    Domingos: 10:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Contacto Rápido</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat en Vivo
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar Ahora
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+52 (55) 1234-5678"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos más detalles sobre tu consulta..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  Acepto los <a href="#" className="text-primary-600 hover:text-primary-500">términos y condiciones</a> y la <a href="#" className="text-primary-600 hover:text-primary-500">política de privacidad</a>
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visítanos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ven a conocer nuestras instalaciones y experimenta nuestro servicio personalizado.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Mapa interactivo (integrar con Google Maps)</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas rápidas a las preguntas más comunes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">¿Ofrecen exámenes de la vista?</h3>
              <p className="text-gray-600">
                Sí, contamos con optometristas certificados que realizan exámenes completos de la vista 
                con equipos de última generación.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">¿Cuál es el tiempo de entrega?</h3>
              <p className="text-gray-600">
                El tiempo de entrega varía según el producto. Generalmente, las gafas graduadas 
                están listas en 3-5 días hábiles.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">¿Tienen garantía los productos?</h3>
              <p className="text-gray-600">
                Todos nuestros productos cuentan con garantía del fabricante. Además, ofrecemos 
                una garantía adicional de 6 meses en monturas.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">¿Aceptan seguros médicos?</h3>
              <p className="text-gray-600">
                Trabajamos con los principales seguros médicos. Consulta con nuestro equipo 
                para verificar la cobertura de tu seguro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
