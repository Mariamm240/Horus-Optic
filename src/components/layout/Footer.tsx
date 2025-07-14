import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">Horus Optic</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tu tienda especializada en equipos de óptica y tecnología de precisión. 
              Ofrecemos los mejores productos para explorar el universo y el mundo microscópico.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Categorías
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=telescopios" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Telescopios
                </Link>
              </li>
              <li>
                <Link to="/products?category=binoculares" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Binoculares
                </Link>
              </li>
              <li>
                <Link to="/products?category=microscopios" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Microscopios
                </Link>
              </li>
              <li>
                <Link to="/products?category=accesorios" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@horusoptic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Science Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Horus Optic. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </Link>
              <Link to="/shipping" className="text-gray-400 hover:text-white text-sm transition-colors">
                Envíos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
