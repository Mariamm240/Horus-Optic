import { useState, useMemo } from 'react';
import { Grid, List, ChevronDown, ArrowUpDown, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from './ProductCardNew';
import { ModernFilters } from './ModernFilters';
import { mockProducts, getFilteredAndSortedProducts } from '../../lib/productData';
import type { ProductFilters, SortOption } from '../../types/product';

export function ModernProductCatalog() {
  const [filters, setFilters] = useState<ProductFilters>({});
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'relevance', label: 'Relevancia' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
    { value: 'name', label: 'Nombre A-Z' },
    { value: 'newest', label: 'Más Recientes' },
    { value: 'popular', label: 'Más Populares' }
  ];

  const filteredProducts = useMemo(() => {
    return getFilteredAndSortedProducts(mockProducts, filters, sortBy);
  }, [filters, sortBy]);

  const handleFiltersChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({});
  };

  const getActiveFilterTags = () => {
    const tags: { type: string; value: string; label: string }[] = [];
    
    if (filters.category?.length) {
      filters.category.forEach(cat => {
        const categoryNames: Record<string, string> = {
          'gafas-sol': 'Gafas de Sol',
          'gafas-lectura': 'Gafas de Lectura',
          'lentes-contacto': 'Lentes de Contacto',
          'accesorios': 'Accesorios'
        };
        tags.push({ type: 'category', value: cat, label: categoryNames[cat] || cat });
      });
    }

    if (filters.brand?.length) {
      filters.brand.forEach(brand => {
        tags.push({ type: 'brand', value: brand, label: brand });
      });
    }

    if (filters.colors?.length) {
      filters.colors.forEach(color => {
        const colorNames: Record<string, string> = {
          'black': 'Negro',
          'brown': 'Marrón',
          'blue': 'Azul',
          'silver': 'Plateado',
          'gold': 'Dorado',
          'red': 'Rojo'
        };
        tags.push({ type: 'color', value: color, label: colorNames[color] || color });
      });
    }

    if (filters.material?.length) {
      filters.material.forEach(material => {
        tags.push({ type: 'material', value: material, label: material });
      });
    }

    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      const min = filters.minPrice || 0;
      const max = filters.maxPrice || '∞';
      tags.push({ 
        type: 'price', 
        value: 'price-range', 
        label: `$${min} - $${max}` 
      });
    }

    if (filters.inStock) {
      tags.push({ type: 'stock', value: 'in-stock', label: 'En Stock' });
    }

    return tags;
  };

  const removeFilterTag = (type: string, value: string) => {
    const newFilters = { ...filters };

    switch (type) {
      case 'category':
        newFilters.category = newFilters.category?.filter(item => item !== value);
        if (!newFilters.category?.length) delete newFilters.category;
        break;
      case 'brand':
        newFilters.brand = newFilters.brand?.filter(item => item !== value);
        if (!newFilters.brand?.length) delete newFilters.brand;
        break;
      case 'color':
        newFilters.colors = newFilters.colors?.filter(item => item !== value);
        if (!newFilters.colors?.length) delete newFilters.colors;
        break;
      case 'material':
        newFilters.material = newFilters.material?.filter(item => item !== value);
        if (!newFilters.material?.length) delete newFilters.material;
        break;
      case 'price':
        delete newFilters.minPrice;
        delete newFilters.maxPrice;
        break;
      case 'stock':
        delete newFilters.inStock;
        break;
    }

    setFilters(newFilters);
  };

  const activeFilterTags = getActiveFilterTags();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Catálogo de Productos</h1>
              <p className="text-gray-600 mt-1">
                Descubre nuestra colección completa de productos ópticos
              </p>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filtros
                {activeFilterTags.length > 0 && (
                  <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">
                    {activeFilterTags.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block flex-shrink-0`}>
            <ModernFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              resultCount={filteredProducts.length}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">
                  <span className="font-bold text-gray-900">{filteredProducts.length}</span> de {mockProducts.length} productos
                </span>
                
                {/* View Mode Toggle - Desktop */}
                <div className="hidden sm:flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2.5 pr-10 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Active Filter Tags */}
            {activeFilterTags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <span className="text-sm font-medium text-blue-900">Filtros activos:</span>
                {activeFilterTags.map((tag, index) => (
                  <button
                    key={`${tag.type}-${tag.value}-${index}`}
                    onClick={() => removeFilterTag(tag.type, tag.value)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors group"
                  >
                    {tag.label}
                    <span className="text-blue-600 group-hover:text-blue-800">×</span>
                  </button>
                ))}
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium underline ml-2"
                >
                  Limpiar todo
                </button>
              </div>
            )}

            {/* Products Grid/List */}
            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-6'
              }>
                {filteredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <ArrowUpDown className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No se encontraron productos
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Intenta ajustar los filtros o búsqueda para encontrar lo que buscas.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>
            )}

            {/* Load More Button (for future pagination) */}
            {filteredProducts.length > 0 && filteredProducts.length >= 12 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                  Cargar más productos
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
