import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import { Button } from '../components/ui';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Horus Optic</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Buscar productos..."
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <ShoppingCart className="h-6 w-6" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </Link>
              
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700">
                      {user.firstName} {user.lastName}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </Button>
                </div>
              ) : (
                <Link to="/auth">
                  <Button size="sm">
                    Iniciar Sesión
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 mb-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bienvenido a Horus Optic</h2>
            <p className="text-xl mb-6">
              Encuentra los mejores productos de óptica y tecnología
            </p>
            <Link to="/products">
              <Button variant="secondary" size="lg">
                Explorar Productos
              </Button>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Categorías</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Telescopios', image: 'https://via.placeholder.com/300x200?text=Telescopios' },
              { name: 'Binoculares', image: 'https://via.placeholder.com/300x200?text=Binoculares' },
              { name: 'Microscopios', image: 'https://via.placeholder.com/300x200?text=Microscopios' },
              { name: 'Accesorios', image: 'https://via.placeholder.com/300x200?text=Accesorios' },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900">{category.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Productos Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: '1',
                name: 'Telescopio Refractor 70mm',
                price: 299.99,
                image: 'https://via.placeholder.com/300x300?text=Telescopio',
                rating: 4.5,
              },
              {
                id: '2',
                name: 'Binoculares 10x42',
                price: 199.99,
                image: 'https://via.placeholder.com/300x300?text=Binoculares',
                rating: 4.8,
              },
              {
                id: '3',
                name: 'Microscopio Digital',
                price: 399.99,
                image: 'https://via.placeholder.com/300x300?text=Microscopio',
                rating: 4.3,
              },
              {
                id: '4',
                name: 'Filtro Solar',
                price: 89.99,
                image: 'https://via.placeholder.com/300x300?text=Filtro',
                rating: 4.7,
              },
            ].map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">
                      ${product.price}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-3" size="sm">
                    Agregar al Carrito
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold mb-4">Horus Optic</h5>
              <p className="text-gray-300">
                Tu tienda especializada en equipos de óptica y tecnología de precisión.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Productos</a></li>
                <li><a href="#" className="hover:text-white">Ofertas</a></li>
                <li><a href="#" className="hover:text-white">Soporte</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <p className="text-gray-300">
                Email: info@horusoptic.com<br />
                Teléfono: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Horus Optic. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
