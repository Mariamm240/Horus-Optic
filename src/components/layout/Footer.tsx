import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #B892D5 0%, #E29AEE 50%, #B892D5 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>Horus Optic</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#FFFFFF', opacity: '0.9' }}>
              Tu óptica de confianza especializada en gafas, lentes de contacto y productos de salud visual. 
              Ofrecemos la mejor calidad y atención personalizada para cuidar tu visión.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/horus_optic_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-75"
                style={{ color: '#FFFFFF' }}
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-75" style={{ color: '#FFFFFF' }}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-75" style={{ color: '#FFFFFF' }}>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.9' }}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.9' }}>
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.9' }}>
                  Categorías
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.9' }}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>Categorías</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=gafas-sol" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.9' }}>
                  Gafas de Sol
                </Link>
              </li>
              <li>
                <Link to="/products?category=monturas" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.9' }}>
                  Monturas
                </Link>
              </li>
              <li>
                <Link to="/products?category=lentes-contacto" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.9' }}>
                  Lentes de Contacto
                </Link>
              </li>
              <li>
                <Link to="/products?category=accesorios" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.9' }}>
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: '#FFFFFF' }} />
                <span className="text-gray-300 text-sm">info@horusoptic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-horus-pink flex-shrink-0" />
                <span className="text-gray-300 text-sm">317 492 3832</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-horus-pink flex-shrink-0" />
                <span className="text-gray-300 text-sm">Carrera 33 # 47 - 64, Barrio Cabecera, Bucaramanga</span>
              </div>
              <div className="text-sm" style={{ color: '#FFFFFF', opacity: '0.9' }}>
                <div className="font-medium mb-1">Horarios de atención:</div>
                <div>Lunes a viernes: 8:00 a.m. a 6:00 p.m.</div>
                <div>Sábados: 9:00 a.m. a 4:00 p.m.</div>
                <div className="font-medium" style={{ color: '#FFFFFF' }}>¡Jornada continua todos los días!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm" style={{ color: '#FFFFFF', opacity: '0.8' }}>
              © 2025 Horus Optic. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.8' }}>
                Política de Privacidad
              </Link>
              <Link to="/terms" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.8' }}>
                Términos de Servicio
              </Link>
              <Link to="/shipping" className="text-sm transition-opacity hover:opacity-75" style={{ color: '#FFFFFF', opacity: '0.8' }}>
                Envíos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
