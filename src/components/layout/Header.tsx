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

  const featuredProducts = [
    { name: 'Ray-Ban Aviator', price: '$149.99', category: 'Clásico atemporal', badge: 'Popular' },
    { name: 'Oakley Holbrook', price: '$129.99', category: 'Estilo deportivo' },
    { name: 'Gucci GG0396S', price: '$299.99', category: 'Elegancia premium', badge: 'Nuevo' }
  ];

  const popularBrands = [
    ['Ray-Ban', 'Oakley', 'Gucci'],
    ['Prada', 'Tom Ford', 'Versace']
  ];

  return (
    <>
    <header style={{ background: 'linear-gradient(135deg, #B892D5, #E29AEE)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} className="border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white hover:opacity-90 transition-opacity">
              <img src="/Logo.png" alt="Horus Optic" className="h-10 w-auto" />
              <span>HORUS OPTIC</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
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
                className={`flex items-center space-x-1 text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                  isActive('/products') 
                    ? 'text-white font-semibold' 
                    : 'text-white opacity-90 hover:opacity-100 hover:bg-white hover:bg-opacity-10'
                }`}
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
                    
                    {/* Featured Products */}
                    <div>
                      <h3 className="text-sm font-semibold mb-3" style={{ color: '#B892D5' }}>Productos Destacados</h3>
                      <div className="space-y-3">
                        {featuredProducts.map((product, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center space-x-2">
                                <h4 className="text-sm font-medium" style={{ color: '#B892D5' }}>{product.name}</h4>
                                {product.badge && (
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    product.badge === 'Popular' ? 'text-white' : 'text-white'
                                  }`} style={{ 
                                    backgroundColor: product.badge === 'Popular' ? '#B892D5' : '#E29AEE' 
                                  }}>
                                    {product.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs" style={{ color: '#9C989F' }}>{product.category}</p>
                            </div>
                            <span className="text-sm font-semibold" style={{ color: '#B892D5' }}>{product.price}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Popular Brands */}
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold mb-2" style={{ color: '#B892D5' }}>Marcas Populares</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {popularBrands.flat().map((brand, index) => (
                            <div key={index} className="text-xs cursor-pointer transition-colors" style={{ color: '#9C989F' }}>
                              {brand}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link 
                        to="/products"
                        className="mt-4 flex items-center justify-center w-full px-4 py-2 rounded-lg transition-colors text-sm font-medium text-white"
                        style={{ background: 'linear-gradient(135deg, #B892D5, #E29AEE)' }}
                      >
                        <Glasses className="h-4 w-4 mr-2" />
                        Ver todos los productos
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-white font-semibold' 
                  : 'text-white opacity-90 hover:opacity-100'
              }`}
            >
              Servicios
            </Link>
            
            <Link
              to="/testimonials"
              className={`text-sm font-medium transition-colors ${
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
              className="hidden sm:flex border-white text-white hover:bg-white hover:text-purple-600"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contacto
            </Button>

            {/* User Authentication */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
                  <User className="h-5 w-5 text-white" />
                  <span className="text-sm text-white font-medium">
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
                      className="flex items-center space-x-2 px-2 py-1 text-sm text-gray-600 hover:text-horus-purple"
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
                    ? 'text-horus-purple bg-horus-purple/10' 
                    : 'text-horus-gray hover:text-horus-purple hover:bg-horus-purple/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              
              <Link
                to="/testimonials"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/testimonials') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
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
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/contact') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                } w-full text-left`}
              >
                Contacto
              </button>

              {/* User Actions - Mobile */}
              {user ? (
                <div className="border-t pt-3 mt-3">
                  <div className="flex items-center px-3 py-2">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-700 font-medium">
                      {user.firstName || user.email}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="border-t pt-3 mt-3">
                  <Link
                    to="/auth"
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50"
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
