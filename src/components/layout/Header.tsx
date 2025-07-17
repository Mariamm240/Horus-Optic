import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui';
import { ContactModal } from '../ContactModal';
import { ShoppingCart, User, Menu, X, Eye, ChevronDown, Sun, Circle, Target } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export function Header() {
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleMouseEnterProducts = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 150); // 150ms delay antes de cerrar
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  const productCategories = [
    { 
      name: 'Gafas de Sol', 
      icon: Sun, 
      href: '/products?category=gafas-sol',
      description: 'Protección UV y estilo',
      count: 4
    },
    { 
      name: 'Gafas de Lectura', 
      icon: Eye, 
      href: '/products?category=gafas-lectura',
      description: 'Cómoda lectura y trabajo',
      count: 2
    },
    { 
      name: 'Lentes de Contacto', 
      icon: Circle, 
      href: '/products?category=lentes-contacto',
      description: 'Visión clara y libertad',
      count: 2
    },
    { 
      name: 'Accesorios', 
      icon: Target, 
      href: '/products?category=accesorios',
      description: 'Cuidado y mantenimiento',
      count: 2
    }
  ];

  return (
    <>
    <header className="bg-gradient-to-r from-horus-purple to-horus-pink shadow-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img src="/Logo.png?v=2" alt="Horus Optic" className="h-14 w-auto object-contain" />
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-xl font-medium transition-colors ${
                isActive('/') 
                  ? 'text-white font-semibold' 
                  : 'text-white opacity-90 hover:opacity-100'
              }`}
            >
              Inicio
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnterProducts}
              onMouseLeave={handleMouseLeaveProducts}
            >
              <Link
                href="/products"
                className={`flex items-center space-x-1 text-xl font-medium transition-colors px-3 py-2 rounded-md ${
                  isActive('/products') 
                    ? 'text-white font-semibold bg-white/10' 
                    : 'text-white opacity-90 hover:opacity-100'
                }`}
              >
                <span>Productos</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Nuestros Productos</h3>
                    <div className="space-y-3">
                      {productCategories.map((category, index) => (
                        <Link
                          key={index}
                          href={category.href}
                          className="group flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 border border-transparent hover:border-blue-200"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <category.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-blue-900">
                                {category.name}
                              </div>
                              <div className="text-sm text-gray-500 group-hover:text-blue-600">
                                {category.description}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-blue-100 group-hover:text-blue-700">
                              {category.count}
                            </span>
                            <ChevronDown className="h-4 w-4 text-gray-400 rotate-[-90deg] group-hover:text-blue-600" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                    <div className="text-center">
                      <Link
                        href="/products"
                        className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      >
                        Ver todo el catálogo
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              href="/services"
              className={`text-xl font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-white font-semibold' 
                  : 'text-white opacity-90 hover:opacity-100'
              }`}
            >
              Servicios
            </Link>
            
            <Link
              href="/lentes-contacto"
              className={`text-xl font-medium transition-colors ${
                isActive('/lentes-contacto') || isActive('/subscription')
                  ? 'text-white font-semibold' 
                  : 'text-white opacity-90 hover:opacity-100'
              }`}
            >
              Suscripción
            </Link>
            
            <Link
              href="/testimonials"
              className={`text-xl font-medium transition-colors ${
                isActive('/testimonials') 
                  ? 'text-white font-semibold' 
                  : 'text-white opacity-90 hover:opacity-100'
              }`}
            >
              Testimonios
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Contact Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex border-white text-white bg-white/10 hover:bg-white/20 transition-all duration-200"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contacto
            </Button>

            {/* User Authentication */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/15">
                  <User className="h-5 w-5 text-white" />
                  <span className="text-xl text-white font-medium">
                    Hola, {user.firstName || user.email.split('@')[0]}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="hidden sm:flex text-red-300 border-red-300 hover:bg-red-100 hover:text-red-600 hover:border-red-400"
                >
                  Cerrar Sesión
                </Button>
              </div>
            ) : (
              <Link href="/auth">
                <Button size="sm" className="bg-gradient-to-r from-horus-purple to-horus-pink text-white shadow-sm transition-colors border-none">
                  <User className="h-4 w-4 mr-2" />
                  Iniciar Sesión
                </Button>
              </Link>
            )}

            {/* Cart */}
            <Link href="/cart" className="relative">
              <button className="p-2 text-white hover:opacity-80 transition-opacity rounded-lg bg-white/10">
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-horus-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-sm">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-white hover:opacity-80"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/20">
              {/* Navigation Links */}
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') 
                    ? 'text-white font-semibold bg-white/10' 
                    : 'text-white opacity-90 hover:opacity-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              
              {/* Products with Categories */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-white mb-2">Productos</div>
                <div className="ml-4 space-y-1">
                  {productCategories.map((category, index) => (
                    <Link
                      key={index}
                      href={category.href}
                      className="flex items-center space-x-2 px-2 py-1 text-sm text-white opacity-90 hover:opacity-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <category.icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                href="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/services') 
                    ? 'text-white font-semibold bg-white/10' 
                    : 'text-white opacity-90 hover:opacity-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              
              <Link
                href="/lentes-contacto"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/lentes-contacto') || isActive('/subscription')
                    ? 'text-white font-semibold bg-white/10' 
                    : 'text-white opacity-90 hover:opacity-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Suscripción
              </Link>
              
              <Link
                href="/testimonials"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/testimonials') 
                    ? 'text-white font-semibold bg-white/10' 
                    : 'text-white opacity-90 hover:opacity-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </Link>
              
              <button
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-white opacity-90 hover:opacity-100 w-full text-left"
              >
                Contacto
              </button>

              {/* User Actions - Mobile */}
              {user ? (
                <div className="border-t border-white/20 pt-3 mt-3">
                  <div className="flex items-center px-3 py-2">
                    <User className="h-5 w-5 text-white mr-2" />
                    <span className="text-sm text-white font-medium">
                      {user.firstName || user.email}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white opacity-90 hover:opacity-100"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="border-t border-white/20 pt-3 mt-3">
                  <Link
                    href="/auth"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white opacity-90 hover:opacity-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>

    {/* Contact Modal */}
    <ContactModal 
      isOpen={isContactModalOpen} 
      onClose={() => setIsContactModalOpen(false)} 
    />
    </>
  );
}
