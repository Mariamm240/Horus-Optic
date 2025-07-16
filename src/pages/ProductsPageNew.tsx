import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { EnhancedProductGrid } from '../components/products/EnhancedProductGrid';
import { AdvancedFilters } from '../components/products/AdvancedFilters';
import { 
  enhancedProducts, 
  productFilters, 
  filterProducts, 
  sortProducts, 
  searchProducts 
} from '../lib/mockDataEnhanced';
import type { ProductFilters } from '../lib/mockDataEnhanced';

export function ProductsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  
  // Initialize filters from URL params
  const [filters, setFilters] = useState<ProductFilters>(() => {
    const categoryParam = searchParams.get('category');
    return {
      category: categoryParam ? [categoryParam] : [],
      brand: [],
      material: [],
      gender: [],
      priceRange: [0, 500]
    };
  });

  // Update filters when URL changes
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && !filters.category.includes(categoryParam)) {
      setFilters(prev => ({
        ...prev,
        category: [categoryParam]
      }));
    }
  }, [searchParams]);

  const handleProductClick = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  const handleFiltersChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      category: [],
      brand: [],
      material: [],
      gender: [],
      priceRange: [0, 500]
    });
    setSearchQuery('');
    setSearchParams({});
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  // Filter and sort products
  const processedProducts = useMemo(() => {
    let result = enhancedProducts;
    
    // Apply search
    if (searchQuery) {
      result = searchProducts(result, searchQuery);
    }
    
    // Apply filters
    result = filterProducts(result, filters);
    
    // Apply sorting
    result = sortProducts(result, sortBy);
    
    return result;
  }, [filters, searchQuery, sortBy]);

  const sortOptions = [
    { value: 'featured', label: 'Destacados' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
    { value: 'rating', label: 'Mejor Valorados' },
    { value: 'newest', label: 'Más Recientes' },
    { value: 'name', label: 'Nombre A-Z' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Productos</h1>
                <p className="mt-1 text-sm text-gray-500">
                  {processedProducts.length} productos encontrados
                </p>
              </div>
              
              {/* Search Bar */}
              <div className="relative max-w-md w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Buscar productos..."
                />
              </div>
            </div>
            
            {/* Controls */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <FunnelIcon className="h-4 w-4 mr-2" />
                  Filtros
                  {Object.values(filters).some(f => Array.isArray(f) ? f.length > 0 : f[0] > 0 || f[1] < 500) && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Activos
                    </span>
                  )}
                </button>
                
                {/* Clear Filters */}
                {Object.values(filters).some(f => Array.isArray(f) ? f.length > 0 : f[0] > 0 || f[1] < 500) && (
                  <button
                    onClick={handleClearFilters}
                    className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
                  >
                    <XMarkIcon className="h-4 w-4 mr-1" />
                    Limpiar filtros
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                
                {/* View Mode Toggle */}
                <div className="flex rounded-md shadow-sm">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 text-sm font-medium rounded-l-md border ${
                      viewMode === 'grid'
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700 z-10'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <Squares2X2Icon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 text-sm font-medium rounded-r-md border-l-0 border ${
                      viewMode === 'list'
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700 z-10'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <ListBulletIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-64 flex-shrink-0">
              <AdvancedFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onClearFilters={handleClearFilters}
              />
            </div>
          )}
          
          {/* Products Grid */}
          <div className="flex-1">
            {processedProducts.length > 0 ? (
              <EnhancedProductGrid
                products={processedProducts}
                viewMode={viewMode}
                onProductClick={handleProductClick}
              />
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
                  <MagnifyingGlassIcon className="w-full h-full" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-500 mb-4">
                  Intenta ajustar tus filtros o términos de búsqueda
                </p>
                <button
                  onClick={handleClearFilters}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
