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
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary-600 hover:text-primary-700">
              <Eye className="h-8 w-8" />
              <span>HORUS OPTIC</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
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
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
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
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Categorías</h3>
                      <div className="space-y-2">
                        {productCategories.map((category, index) => (
                          <Link
                            key={index}
                            to={category.href}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 text-sm"
                          >
                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                              <category.icon className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{category.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Featured Products */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Productos Destacados</h3>
                      <div className="space-y-3">
                        {featuredProducts.map((product, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center space-x-2">
                                <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                                {product.badge && (
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    product.badge === 'Popular' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                                  }`}>
                                    {product.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500">{product.category}</p>
                            </div>
                            <span className="text-sm font-semibold text-primary-600">{product.price}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Popular Brands */}
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Marcas Populares</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {popularBrands.flat().map((brand, index) => (
                            <div key={index} className="text-xs text-gray-600 hover:text-primary-600 cursor-pointer">
                              {brand}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link 
                        to="/products"
                        className="mt-4 flex items-center justify-center w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
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
                  ? 'text-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Servicios
            </Link>
            
            <Link
              to="/testimonials"
              className={`text-sm font-medium transition-colors ${
                isActive('/testimonials') 
                  ? 'text-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
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
              className="hidden sm:flex"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contacto
            </Button>

            {/* User Authentication */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-lg">
                  <User className="h-5 w-5 text-primary-600" />
                  <span className="text-sm text-gray-700 font-medium">
                    Hola, {user.firstName || user.email.split('@')[0]}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="hidden sm:flex text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                >
                  Cerrar Sesión
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                  <User className="h-4 w-4 mr-2" />
                  Iniciar Sesión
                </Button>
              </Link>
            )}

            {/* Cart */}
            <Link to="/cart" className="relative">
              <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors hover:bg-gray-50 rounded-lg">
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-sm">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-gray-500"
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
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {/* Navigation Links */}
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              
              {/* Products with Categories */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-700 mb-2">Productos</div>
                <div className="ml-4 space-y-1">
                  {productCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.href}
                      className="flex items-center space-x-2 px-2 py-1 text-sm text-gray-600 hover:text-primary-600"
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
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
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
