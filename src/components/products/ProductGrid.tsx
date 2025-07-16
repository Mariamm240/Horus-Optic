import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Grid3X3, 
  List, 
  SlidersHorizontal, 
  Search, 
  Star, 
  Heart, 
  ShoppingCart,
  Eye,
  X
} from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { AdvancedFilters } from './AdvancedFilters';
import { products, filterProducts, sortProducts } from '../../lib/productData';
import type { Product, ProductFilters } from '../../types/product';

interface ProductGridProps {
  title?: string;
  description?: string;
  showFilters?: boolean;
  limit?: number;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  title = "Productos",
  description,
  showFilters = true,
  limit
}) => {
  const { addToCart } = useCart();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [quickSearch, setQuickSearch] = useState('');
  
  const [filters, setFilters] = useState<ProductFilters>({
    sortBy: 'bestseller',
    sortOrder: 'desc'
  });

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    let filtered = filterProducts({...filters, search: quickSearch || filters.search});
    filtered = sortProducts(filtered, filters.sortBy || 'bestseller', filters.sortOrder);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filters, quickSearch, limit]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1
    });
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const isFavorite = favorites.includes(product.id);
    const discountPercentage = product.originalPrice 
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

    if (viewMode === 'list') {
      return (
        <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="flex">
            {/* Imagen */}
            <div className="relative w-48 h-48 flex-shrink-0">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isOnSale && discountPercentage > 0 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  -{discountPercentage}%
                </div>
              )}
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  Nuevo
                </div>
              )}
              {product.isBestseller && !product.isNew && (
                <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  Bestseller
                </div>
              )}
            </div>

            {/* Contenido */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

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
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviewCount} reseñas)
                  </span>
                </div>

                {product.colors && product.colors.length > 0 && (
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-gray-600 mr-2">Colores:</span>
                    <div className="flex space-x-1">
                      {product.colors.slice(0, 4).map((color) => (
                        <div
                          key={color.id}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.hexCode }}
                          title={color.name}
                        />
                      ))}
                      {product.colors.length > 4 && (
                        <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/products/${product.id}`}
                    className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">Ver</span>
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span className="text-sm">Agregar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Vista de grilla
    return (
      <div className="group relative bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Imagen */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {product.isOnSale && discountPercentage > 0 && (
              <div className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                -{discountPercentage}%
              </div>
            )}
            {product.isNew && (
              <div className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                Nuevo
              </div>
            )}
            {product.isBestseller && !product.isNew && (
              <div className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                Bestseller
              </div>
            )}
          </div>

          {/* Favorite button */}
          <button
            onClick={() => toggleFavorite(product.id)}
            className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </button>

          {/* Quick actions */}
          <div className="absolute bottom-2 left-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link
              to={`/products/${product.id}`}
              className="flex-1 bg-white/90 hover:bg-white text-gray-900 py-2 px-3 rounded-md text-sm font-medium text-center transition-colors"
            >
              Ver detalles
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={!product.inStock}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-md transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.brand}</p>
          </div>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-1 text-xs text-gray-600">({product.reviewCount})</span>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center mb-3">
              <div className="flex space-x-1">
                {product.colors.slice(0, 3).map((color) => (
                  <div
                    key={color.id}
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.hexCode }}
                    title={color.name}
                  />
                ))}
                {product.colors.length > 3 && (
                  <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              {product.originalPrice && (
                <span className="text-xs text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className="text-xs text-gray-600">
              {product.inStock ? (
                <span className="text-green-600">En stock</span>
              ) : (
                <span className="text-red-600">Agotado</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {description && (
              <p className="mt-2 text-lg text-gray-600">{description}</p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros Desktop */}
          {showFilters && (
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-8">
                <AdvancedFilters
                  filters={filters}
                  onFiltersChange={setFilters}
                />
              </div>
            </div>
          )}

          {/* Contenido Principal */}
          <div className="flex-1">
            {/* Barra de herramientas */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
              {/* Búsqueda rápida */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Búsqueda rápida..."
                  value={quickSearch}
                  onChange={(e) => setQuickSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {quickSearch && (
                  <button
                    onClick={() => setQuickSearch('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {/* Filtros móvil */}
                {showFilters && (
                  <button
                    onClick={() => setShowMobileFilters(true)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    <span>Filtros</span>
                  </button>
                )}

                {/* Ordenamiento */}
                <select
                  value={`${filters.sortBy}-${filters.sortOrder}`}
                  onChange={(e) => {
                    const [sortBy, sortOrder] = e.target.value.split('-') as [string, 'asc' | 'desc'];
                    setFilters(prev => ({ ...prev, sortBy, sortOrder }));
                  }}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="bestseller-desc">Más populares</option>
                  <option value="newest-desc">Más recientes</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="rating-desc">Mejor valorados</option>
                  <option value="name-asc">Nombre A-Z</option>
                </select>

                {/* Vista */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Mostrando {filteredProducts.length} de {products.length} productos
              </p>
            </div>

            {/* Grid/Lista de productos */}
            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-6"
              }>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-600 mb-4">
                  Intenta ajustar tus filtros o términos de búsqueda
                </p>
                <button
                  onClick={() => {
                    setFilters({ sortBy: 'bestseller', sortOrder: 'desc' });
                    setQuickSearch('');
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de filtros móvil */}
      {showMobileFilters && (
        <div className="lg:hidden">
          <AdvancedFilters
            filters={filters}
            onFiltersChange={setFilters}
            onClose={() => setShowMobileFilters(false)}
            isMobile={true}
          />
        </div>
      )}
    </div>
  );
};
