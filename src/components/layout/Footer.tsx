import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-horus-purple via-horus-pink to-horus-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-horus-purple font-bold text-lg">H</span>
              </div>
              <h3 className="text-xl font-bold text-white">Horus Optic</h3>
            </div>
            <p className="text-white text-sm opacity-90">
              Tu visión, nuestra pasión. Especialistas en óptica con más de 10 años de experiencia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white opacity-90 hover:opacity-75 transition-opacity">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-white opacity-90 hover:opacity-75 transition-opacity">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white opacity-90 hover:opacity-75 transition-opacity">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white opacity-90 hover:opacity-75 transition-opacity">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=gafas-sol" className="text-sm text-white opacity-90 hover:opacity-75 transition-opacity">
                  Gafas de Sol
                </Link>
              </li>
              <li>
                <Link href="/products?category=monturas" className="text-sm text-white opacity-90 hover:opacity-75 transition-opacity">
                  Monturas
                </Link>
              </li>
              <li>
                <Link href="/products?category=lentes-contacto" className="text-sm text-white opacity-90 hover:opacity-75 transition-opacity">
                  Lentes de Contacto
                </Link>
              </li>
              <li>
                <Link href="/products?category=accesorios" className="text-sm text-white opacity-90 hover:opacity-75 transition-opacity">
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-white" />
                <span className="text-sm text-white opacity-90">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-white" />
                <span className="text-sm text-white opacity-90">
                  info@horusoptic.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-white" />
                <span className="text-sm text-white opacity-90">
                  123 Calle Principal, Ciudad
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white border-opacity-20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-white opacity-80">
                © 2024 Horus Optic. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-white opacity-80 hover:opacity-75 transition-opacity">
                Privacidad
              </Link>
              <Link href="/terms" className="text-sm text-white opacity-80 hover:opacity-75 transition-opacity">
                Términos
              </Link>
              <Link href="/shipping" className="text-sm text-white opacity-80 hover:opacity-75 transition-opacity">
                Envíos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
