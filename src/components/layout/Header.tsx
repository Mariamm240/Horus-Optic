import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui';
import { ContactModal } from '../ContactModal';
import { ShoppingCart, User, Menu, X, Eye, ChevronDown, Sun, Circle, Target, Users, Glasses } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export function Header() {
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const location = useLocation();
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

  const isActive = (path: string) => location.pathname === path;

  const productCategories = [
    { name: 'Gafas de Sol', icon: Sun, href: '/products?category=gafas-sol' },
    { name: 'Gafas Graduadas', icon: Eye, href: '/products?category=gafas-graduadas' },
    { name: 'Lentes de Contacto', icon: Circle, href: '/products?category=lentes-contacto' },
    { name: 'Accesorios', icon: Target, href: '/products?category=accesorios' },
    { name: 'Gafas para Niños', icon: Users, href: '/products?category=gafas-ninos' },
    { name: 'Gafas Deportivas', icon: Glasses, href: '/products?category=gafas-deportivas' }
  ];

  return (
    <>
    <header style={{ background: 'linear-gradient(135deg, #B892D5, #E29AEE)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} className="border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img src="/Logo.png?v=2" alt="Horus Optic" className="h-14 w-auto object-contain" />
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
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
                to="/products"
                className={`flex items-center space-x-1 text-xl font-medium transition-colors px-3 py-2 rounded-md ${
                  isActive('/products') 
                    ? 'text-white font-semibold' 
                    : 'text-white opacity-90 hover:opacity-100'
                }`}
                style={isActive('/products') ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' } : {}}
              >
                <span>Productos</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Categories */}
                    <div>
                      <h3 className="text-sm font-semibold mb-3" style={{ color: '#B892D5' }}>Categorías</h3>
                      <div className="space-y-2">
                        {productCategories.map((category, index) => (
                          <Link
                            key={index}
                            to={category.href}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 text-sm transition-colors"
                          >
                            <div style={{ background: 'rgba(184, 146, 213, 0.1)' }} className="w-8 h-8 rounded-lg flex items-center justify-center">
                              <category.icon className="h-4 w-4" style={{ color: '#B892D5' }} />
                            </div>
                            <span style={{ color: '#9C989F' }} className="hover:text-gray-700">{category.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Suscripción Destacada */}
                    <div style={{ background: 'linear-gradient(135deg, #B892D5, #E29AEE)' }} className="rounded-lg p-4 text-white">
                      <h3 className="text-lg font-bold mb-2">Suscripción a Lentes de Contacto</h3>
                      <p className="text-sm opacity-90 mb-3">
                        Recibe tus lentes de contacto mensualmente con descuentos exclusivos
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <Circle className="h-3 w-3 fill-current" />
                          <span className="text-xs">Envío gratuito mensual</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Circle className="h-3 w-3 fill-current" />
                          <span className="text-xs">20% descuento garantizado</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Circle className="h-3 w-3 fill-current" />
                          <span className="text-xs">Cancela cuando quieras</span>
                        </div>
                      </div>
                      <Link 
                        to="/lentes-contacto"
                        className="inline-block w-full px-3 py-2 bg-white text-purple-600 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors text-center"
                      >
                        ¡Suscríbete Ahora!
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/services"
              className={`text-xl font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-white font-semibold' 
                  : 'text-white opacity-90 hover:opacity-100'
              }`}
            >
              Servicios
            </Link>
            
            <Link
              to="/lentes-contacto"
              className={`text-xl font-medium transition-colors ${
                isActive('/lentes-contacto') || isActive('/subscription')
                  ? 'text-white font-semibold' 
                  : 'text-white opacity-90 hover:opacity-100'
              }`}
            >
              Suscripción
            </Link>
            
            <Link
              to="/testimonials"
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
              className="hidden sm:flex border-white text-white"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onClick={() => setIsContactModalOpen(true)}
            >
              Contacto
            </Button>

            {/* User Authentication */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
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
              <Link to="/auth">
                <Button size="sm" className="text-white shadow-sm transition-colors" style={{ background: 'linear-gradient(135deg, #B892D5, #E29AEE)', border: 'none' }}>
                  <User className="h-4 w-4 mr-2" />
                  Iniciar Sesión
                </Button>
              </Link>
            )}

            {/* Cart */}
            <Link to="/cart" className="relative">
              <button className="p-2 text-white hover:opacity-80 transition-opacity rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-sm" style={{ backgroundColor: '#E29AEE' }}>
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
            <div className="px-2 pt-2 pb-3 space-y-1" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
              {/* Navigation Links */}
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') 
                    ? 'text-white font-semibold' 
                    : 'text-white opacity-90 hover:opacity-100'
                }`}
                style={isActive('/') ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' } : {}}
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
                      to={category.href}
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
                to="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/services') 
                    ? 'text-white font-semibold' 
                    : 'text-white opacity-90 hover:opacity-100'
                }`}
                style={isActive('/services') ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' } : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              
              <Link
                to="/lentes-contacto"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/lentes-contacto') || isActive('/subscription')
                    ? 'text-white font-semibold' 
                    : 'text-white opacity-90 hover:opacity-100'
                }`}
                style={isActive('/lentes-contacto') || isActive('/subscription') ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' } : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                Suscripción
              </Link>
              
              <Link
                to="/testimonials"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/testimonials') 
                    ? 'text-white font-semibold' 
                    : 'text-white opacity-90 hover:opacity-100'
                }`}
                style={isActive('/testimonials') ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' } : {}}
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
                <div className="border-t pt-3 mt-3" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
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
                <div className="border-t pt-3 mt-3" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <Link
                    to="/auth"
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
