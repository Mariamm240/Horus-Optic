import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Eye, 
  Grid3X3, 
  List,
  Search,
  Filter,
  SlidersHorizontal
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { EnhancedProductFilters } from './EnhancedProductFilters';
import type { Product, ProductFilters, SortOption } from '../../types/product';
import { products, filterProducts, sortProducts, sortOptions } from '../../lib/productData';
import { useCart } from '../../hooks/useCart';

interface EnhancedProductGridProps {
  initialFilters?: ProductFilters;
  showFilters?: boolean;
  title?: string;
  description?: string;
}

export function EnhancedProductGrid({ 
  initialFilters = {}, 
  showFilters = true,
  title = "Catálogo de Productos",
  description = "Descubre nuestra amplia selección de productos ópticos"
}: EnhancedProductGridProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // State
  const [filters, setFilters] = useState<ProductFilters>(initialFilters);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Computed values
  const allFilters = { ...filters, search: searchTerm || undefined };
  const filteredProducts = filterProducts(products, allFilters);
  const sortedProducts = sortProducts(filteredProducts, sortBy);

  // Handlers
  const handleFiltersChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchTerm('');
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      productId: product.id,
      quantity: 1
    });
  };

  const toggleFavorite = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const renderProductCard = (product: Product) => (
    <div
      key={product.id}
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={() => handleProductClick(product.id)}
    >
      <Card className="h-full">
      <div className="relative overflow-hidden rounded-t-lg">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {product.originalPrice && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              OFERTA
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              NUEVO
            </span>
          )}
          {product.tags?.includes('bestseller') && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              BESTSELLER
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => toggleFavorite(product.id, e)}
            className={`p-2 rounded-full shadow-lg transition-colors duration-200 ${
              favorites.has(product.id)
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className="w-4 h-4" fill={favorites.has(product.id) ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleProductClick(product.id);
            }}
            className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:text-blue-500 transition-colors duration-200"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={(e) => handleAddToCart(product, e)}
            className="w-full bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Agregar al Carrito
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {product.brand}
          </span>
          {product.colors && product.colors.length > 0 && (
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map(color => (
                <div
                  key={color.id}
                  className={`w-3 h-3 rounded-full border border-gray-300 ${color.class}`}
                  title={color.name}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
              )}
            </div>
          )}
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {!product.inStock && (
            <span className="text-xs text-red-500 font-medium">
              Sin Stock
            </span>
          )}
        </div>
      </div>
      </Card>
    </div>
  );

  const renderListItem = (product: Product) => (
    <div
      key={product.id}
      className="group cursor-pointer hover:shadow-md transition-shadow duration-200"
      onClick={() => handleProductClick(product.id)}
    >
      <Card>
      <div className="flex gap-4 p-4">
        {/* Product Image */}
        <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-gray-500 font-medium uppercase">
                  {product.brand}
                </span>
                {product.tags?.includes('bestseller') && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Bestseller
                  </span>
                )}
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{product.rating} ({product.reviewCount})</span>
                </div>
                {product.category && (
                  <span className="capitalize">{product.category}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </div>
                {product.originalPrice && (
                  <div className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={(e) => toggleFavorite(product.id, e)}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    favorites.has(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={favorites.has(product.id) ? 'currentColor' : 'none'} />
                </button>
                <Button
                  onClick={(e) => handleAddToCart(product, e)}
                  size="sm"
                  variant="outline"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Card>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filters Sidebar */}
        {showFilters && (
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-4">
              <EnhancedProductFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onClearFilters={handleClearFilters}
              />
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {/* Search and Controls */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                {showFilters && (
                  <Button
                    onClick={() => setShowMobileFilters(true)}
                    variant="outline"
                    className="lg:hidden"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                )}

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${
                      viewMode === 'grid'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${
                      viewMode === 'list'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>
                Mostrando {sortedProducts.length} de {products.length} productos
              </span>
              {Object.keys(allFilters).filter(key => allFilters[key as keyof ProductFilters]).length > 0 && (
                <button
                  onClick={handleClearFilters}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Limpiar todos los filtros
                </button>
              )}
            </div>
          </div>

          {/* Products Grid/List */}
          {sortedProducts.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
            }>
              {sortedProducts.map(product => 
                viewMode === 'grid' ? renderProductCard(product) : renderListItem(product)
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <SlidersHorizontal className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-600 mb-4">
                Intenta ajustar tus filtros o búsqueda
              </p>
              <Button onClick={handleClearFilters} variant="outline">
                Limpiar filtros
              </Button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Modal */}
      {showMobileFilters && showFilters && (
        <EnhancedProductFilters
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onClearFilters={handleClearFilters}
          showMobile={true}
          onCloseMobile={() => setShowMobileFilters(false)}
        />
      )}
    </div>
  );
}
