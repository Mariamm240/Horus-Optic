import { useState } from 'react';
import { Star, ShoppingCart, Filter, Grid, List, ChevronDown, Truck, Shield, Award, Users } from 'lucide-react';
import { Button } from '../components/ui';

export function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: 'Lentes de Contacto Acuvue Oasys',
      description: 'Hidrogel de silicona para máxima comodidad',
      price: 149900,
      originalPrice: 179900,
      image: '/Media/Lentes de contacto/34.png',
      badge: 'Más vendido',
      badgeColor: 'red',
      rating: 4.8,
      reviews: 324,
      category: 'lentes-contacto',
      features: ['Hidratación duradera', 'Uso mensual', 'UV Protection']
    },
    {
      id: 2,
      name: 'Lentes de Contacto Biofinity',
      description: 'Uso mensual con alta respirabilidad',
      price: 129900,
      image: '/Media/Lentes de contacto/35.png',
      badge: 'Recomendado',
      badgeColor: 'blue',
      rating: 4.7,
      reviews: 256,
      category: 'lentes-contacto',
      features: ['Alta respirabilidad', 'Uso extendido', 'Confort superior']
    },
    {
      id: 3,
      name: 'Lentes de Contacto Air Optix Colors',
      description: 'Cambia el color de tus ojos con estilo',
      price: 169900,
      image: '/Media/Lentes de contacto/36.png',
      badge: 'Nuevo',
      badgeColor: 'green',
      rating: 4.9,
      reviews: 189,
      category: 'lentes-contacto',
      features: ['Cambio de color', 'Natural look', 'Uso mensual']
    }
  ];

  const allProducts = [
    {
      id: 4,
      name: 'Lentes de Contacto Diarios Acuvue Moist',
      description: 'Hidratación duradera para todo el día',
      price: 119900,
      image: '/Media/Lentes de contacto/24.png',
      category: 'lentes-contacto',
      subCategory: 'Hidratación',
      rating: 4.6,
      reviews: 412,
      type: 'Diarios'
    },
    {
      id: 5,
      name: 'Lentes de Contacto Freshlook Colorblends',
      description: 'Colores naturales para tus ojos',
      price: 139900,
      image: '/Media/Lentes de contacto/28.png',
      category: 'lentes-contacto',
      subCategory: 'Mensual',
      rating: 4.5,
      reviews: 298,
      type: 'Colores'
    },
    {
      id: 6,
      name: 'Lentes de Contacto Dailies Total 1',
      description: 'Confort premium durante todo el día',
      price: 159900,
      image: '/Media/Lentes de contacto/37.png',
      category: 'lentes-contacto',
      subCategory: 'Premium',
      rating: 4.8,
      reviews: 367,
      type: 'Diarios'
    },
    {
      id: 7,
      name: 'Lentes de Contacto Biofinity Toric',
      description: 'Para astigmatismo con uso extendido',
      price: 179900,
      image: '/Media/Lentes de contacto/26.png',
      category: 'lentes-contacto',
      subCategory: 'Mensual',
      rating: 4.7,
      reviews: 203,
      type: 'Astigmatismo'
    },
    {
      id: 8,
      name: 'Lentes de Contacto Air Optix Aqua',
      description: 'Alta respirabilidad para ojos sensibles',
      price: 129900,
      image: '/Media/Lentes de contacto/38.png',
      category: 'lentes-contacto',
      subCategory: 'Sensibles',
      rating: 4.6,
      reviews: 445,
      type: 'Mensual'
    },
    {
      id: 9,
      name: 'Lentes de Contacto Acuvue Oasys 1-Day',
      description: 'Tecnología HydraLuxe para máxima comodidad',
      price: 189900,
      image: '/Media/Lentes de contacto/39.png',
      category: 'lentes-contacto',
      subCategory: 'Premium',
      rating: 4.9,
      reviews: 156,
      type: 'Diarios'
    },
    // Gafas de Sol
    {
      id: 10,
      name: 'Ray-Ban Aviator Classic',
      description: 'El clásico atemporal que nunca pasa de moda',
      price: 649900,
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=600&fit=crop&u=10',
      category: 'gafas-sol',
      subCategory: 'Clásico',
      rating: 4.8,
      reviews: 890,
      type: 'Aviador'
    },
    {
      id: 11,
      name: 'Oakley Holbrook',
      description: 'Estilo deportivo con protección superior',
      price: 729900,
      image: 'https://images.unsplash.com/photo-1556306303-76ce7ce1ec0d?w=600&h=600&fit=crop&u=11',
      category: 'gafas-sol',
      subCategory: 'Deportivo',
      rating: 4.7,
      reviews: 650,
      type: 'Cuadradas'
    },
    {
      id: 12,
      name: 'Gucci GG0061S',
      description: 'Elegancia italiana en cada detalle',
      price: 899900,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop&u=12',
      category: 'gafas-sol',
      subCategory: 'Lujo',
      rating: 4.9,
      reviews: 234,
      type: 'Oversized'
    },
    {
      id: 13,
      name: 'Tom Ford FT0237',
      description: 'Sofisticación contemporánea',
      price: 1299900,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop&u=13',
      category: 'gafas-sol',
      subCategory: 'Premium',
      rating: 4.8,
      reviews: 167,
      type: 'Cat Eye'
    },
    // Gafas Graduadas
    {
      id: 14,
      name: 'Ray-Ban RX5228',
      description: 'Montura clásica para uso diario',
      price: 449900,
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop&u=14',
      category: 'gafas-graduadas',
      subCategory: 'Clásico',
      rating: 4.6,
      reviews: 445,
      type: 'Rectangular'
    },
    {
      id: 15,
      name: 'Oakley Crosslink Zero',
      description: 'Ligereza y resistencia para deportistas',
      price: 559900,
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop&u=15',
      category: 'gafas-graduadas',
      subCategory: 'Deportivo',
      rating: 4.7,
      reviews: 298,
      type: 'Sin Marco'
    },
    {
      id: 16,
      name: 'Gucci GG0036O',
      description: 'Elegancia y estilo en cada ocasión',
      price: 789900,
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop&u=16',
      category: 'gafas-graduadas',
      subCategory: 'Lujo',
      rating: 4.8,
      reviews: 189,
      type: 'Redondas'
    },
    // Accesorios
    {
      id: 17,
      name: 'Cordón para Gafas Premium',
      description: 'Cordón ajustable de alta calidad',
      price: 29900,
      image: 'https://images.unsplash.com/photo-1556306303-76ce7ce1ec0d?w=600&h=600&fit=crop&u=17',
      category: 'accesorios',
      subCategory: 'Cordones',
      rating: 4.4,
      reviews: 567,
      type: 'Ajustable'
    },
    {
      id: 18,
      name: 'Estuche Rígido Premium',
      description: 'Protección máxima para tus gafas',
      price: 59900,
      image: 'https://images.unsplash.com/photo-1556306303-76ce7ce1ec0d?w=600&h=600&fit=crop&u=18',
      category: 'accesorios',
      subCategory: 'Estuches',
      rating: 4.5,
      reviews: 234,
      type: 'Rígido'
    },
    {
      id: 19,
      name: 'Líquido Limpiador Especializado',
      description: 'Limpieza profesional para lentes',
      price: 24900,
      image: 'https://images.unsplash.com/photo-1556306303-76ce7ce1ec0d?w=600&h=600&fit=crop&u=19',
      category: 'accesorios',
      subCategory: 'Limpieza',
      rating: 4.3,
      reviews: 789,
      type: 'Spray'
    },
    {
      id: 20,
      name: 'Paño Microfibra Professional',
      description: 'Limpieza sin rayones garantizada',
      price: 19900,
      image: 'https://images.unsplash.com/photo-1556306303-76ce7ce1ec0d?w=600&h=600&fit=crop&u=20',
      category: 'accesorios',
      subCategory: 'Limpieza',
      rating: 4.6,
      reviews: 445,
      type: 'Microfibra'
    }
  ];

  const bestSellers = [
    {
      id: 1,
      name: 'Lentes de Contacto Acuvue Oasys',
      price: 149900,
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop&u=10',
      sales: 1240,
      position: 1
    },
    {
      id: 2,
      name: 'Ray-Ban Aviator Classic',
      price: 649900,
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&h=400&fit=crop&u=11',
      sales: 890,
      position: 2
    },
    {
      id: 3,
      name: 'Lentes de Contacto Air Optix Colors',
      price: 169900,
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop&u=12',
      sales: 780,
      position: 3
    },
    {
      id: 4,
      name: 'Oakley Holbrook',
      price: 729900,
      image: 'https://images.unsplash.com/photo-1556306303-76ce7ce1ec0d?w=400&h=400&fit=crop&u=13',
      sales: 650,
      position: 4
    }
  ];

  const brands = [
    { name: 'Ray-Ban', description: 'Icónicos desde 1937', logo: '🕶️' },
    { name: 'Oakley', description: 'Innovación deportiva', logo: '🏃' },
    { name: 'Acuvue', description: 'Confort visual superior', logo: '👁️' },
    { name: 'Gucci', description: 'Lujo italiano', logo: '💎' },
    { name: 'Tom Ford', description: 'Elegancia contemporánea', logo: '🎩' },
    { name: 'Versace', description: 'Diseño distintivo', logo: '👑' }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Productos Certificados',
      description: 'Todos nuestros productos cuentan con certificaciones internacionales de calidad.'
    },
    {
      icon: Truck,
      title: 'Envío a Todo Colombia',
      description: 'Hacemos envíos a todo el país con seguimiento en tiempo real.'
    },
    {
      icon: Shield,
      title: 'Garantía Asegurada',
      description: 'Todos nuestros productos cuentan con garantía del fabricante.'
    },
    {
      icon: Users,
      title: 'Asesoría Especializada',
      description: 'Contamos con profesionales que te ayudarán a elegir el producto ideal.'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', count: allProducts.length },
    { id: 'lentes-contacto', name: 'Lentes de Contacto', count: allProducts.filter(p => p.category === 'lentes-contacto').length },
    { id: 'gafas-sol', name: 'Gafas de Sol', count: allProducts.filter(p => p.category === 'gafas-sol').length },
    { id: 'gafas-graduadas', name: 'Gafas Graduadas', count: allProducts.filter(p => p.category === 'gafas-graduadas').length },
    { id: 'accesorios', name: 'Accesorios', count: allProducts.filter(p => p.category === 'accesorios').length }
  ];

  // Función para filtrar productos
  const getFilteredProducts = () => {
    let filtered = selectedCategory === 'all' 
      ? allProducts 
      : allProducts.filter(product => product.category === selectedCategory);

    // Aplicar ordenamiento
    switch (sortBy) {
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => b.id - a.id);
        break;
      case 'featured':
      default:
        // Mantener orden original para destacados
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #B892D5 0%, #E29AEE 100%)' }}>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&h=600&fit=crop" 
            alt="Lentes de contacto premium" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Los mejores lentes de contacto en Colombia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: '#FFFFFF', opacity: '0.9' }}>
            Descubre nuestra colección premium de lentes de contacto y gafas de las mejores marcas internacionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold hover:opacity-90" style={{ backgroundColor: '#FFFFFF', color: '#B892D5' }}>
              Ver lentes de contacto
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold hover:opacity-90"
              style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
            >
              Explorar gafas
            </Button>
          </div>
        </div>
      </section>

      {/* Filters and Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={selectedCategory === category.id ? { backgroundColor: '#B892D5' } : {}}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="newest">Más Nuevos</option>
                  <option value="rating">Mejor Valorados</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              {/* View Mode */}
              <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${
                    viewMode === 'grid' 
                      ? 'text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  style={viewMode === 'grid' ? { backgroundColor: '#B892D5' } : {}}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${
                    viewMode === 'list' 
                      ? 'text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  style={viewMode === 'list' ? { backgroundColor: '#B892D5' } : {}}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filtrar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold" style={{ color: '#B892D5' }}>Productos Destacados</h2>
            <Button variant="outline" style={{ borderColor: '#B892D5', color: '#B892D5' }}>Ver todos</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium text-white ${
                    product.badgeColor === 'red' ? 'bg-red-500' :
                    product.badgeColor === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                  }`}>
                    {product.badge}
                  </span>
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <Button className="bg-primary-600 hover:bg-primary-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Añadir
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Todos los Productos' : 
               selectedCategory === 'lentes-contacto' ? 'Lentes de Contacto' :
               selectedCategory === 'gafas-sol' ? 'Gafas de Sol' :
               selectedCategory === 'gafas-graduadas' ? 'Gafas Graduadas' :
               selectedCategory === 'accesorios' ? 'Accesorios' : 'Productos'}
            </h2>
            <span className="text-gray-600">Mostrando {filteredProducts.length} productos</span>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                viewMode === 'list' ? 'flex' : ''
              }`}>
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`object-cover ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                    }`}
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-primary-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
                      {product.type}
                    </span>
                    <span className="bg-gray-600 text-white px-2 py-1 rounded-lg text-xs">
                      {product.subCategory}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary-600">{formatPrice(product.price)}</span>
                    <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                      Comprar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje cuando no hay productos */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron productos</h3>
              <p className="text-gray-600">Intenta con una categoría diferente o cambia los filtros.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedCategory('all')}
              >
                Ver todos los productos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Los Más Vendidos</h2>
            <p className="text-xl text-gray-600">Productos favoritos de nuestros clientes</p>
            <Button variant="outline" className="mt-6">Ver todos los productos</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
                <div className="absolute top-4 left-4 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10">
                  #{product.position}
                </div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">{formatPrice(product.price)}</span>
                    <span className="text-sm text-gray-500">{product.sales} vendidos</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Marcas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con las mejores marcas del mundo para ofrecerte productos de la más alta calidad y diseño.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{brand.logo}</div>
                <h3 className="font-bold text-gray-900 mb-1">{brand.name}</h3>
                <p className="text-sm text-gray-600">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
            <p className="text-xl text-gray-600">
              En Horus Optic nos comprometemos a ofrecerte la mejor experiencia visual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Mantente al día con nuestras novedades</h2>
          <p className="text-xl mb-8 opacity-90">
            Suscríbete a nuestro boletín y recibe ofertas exclusivas, lanzamientos de productos y consejos para el cuidado de tus ojos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3">
              Suscribirse
            </Button>
          </div>
          
          <p className="text-sm mt-4 opacity-75">
            Al suscribirte, aceptas nuestra política de privacidad y términos de servicio.
          </p>
        </div>
      </section>
    </div>
  );
}
