import { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  ChevronDown, 
  ChevronUp,
  Filter,
  Eye,
  Sun,
  Circle,
  Target,
  Palette,
  DollarSign,
  StarIcon,
  Award
} from 'lucide-react';
import type { ProductFilters } from '../../types/product';

interface ModernFiltersProps {
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
  resultCount: number;
}

export function ModernFilters({ filters, onFiltersChange, resultCount }: ModernFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    categories: true,
    brands: true,
    price: true,
    features: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, search: value });
  };

  const handleFilterChange = (
    filterType: string, 
    value: string | number | boolean | undefined, 
    checked?: boolean
  ) => {
    const newFilters = { ...filters };

    switch (filterType) {
      case 'category':
        if (checked !== undefined && typeof value === 'string') {
          const current = newFilters.category || [];
          newFilters.category = checked 
            ? [...current, value]
            : current.filter(item => item !== value);
        }
        break;
      case 'brand':
        if (checked !== undefined && typeof value === 'string') {
          const current = newFilters.brand || [];
          newFilters.brand = checked 
            ? [...current, value]
            : current.filter(item => item !== value);
        }
        break;
      case 'color':
        if (checked !== undefined && typeof value === 'string') {
          const current = newFilters.colors || [];
          newFilters.colors = checked 
            ? [...current, value]
            : current.filter(item => item !== value);
        }
        break;
      case 'material':
        if (checked !== undefined && typeof value === 'string') {
          const current = newFilters.material || [];
          newFilters.material = checked 
            ? [...current, value]
            : current.filter(item => item !== value);
        }
        break;
      case 'gender':
        if (typeof value === 'string') {
          newFilters.gender = value === '' ? undefined : [value];
        }
        break;
      case 'minPrice':
        if (typeof value === 'number' || value === undefined) {
          newFilters.minPrice = value;
        }
        break;
      case 'maxPrice':
        if (typeof value === 'number' || value === undefined) {
          newFilters.maxPrice = value;
        }
        break;
      case 'inStock':
        if (typeof value === 'boolean') {
          newFilters.inStock = value;
        }
        break;
    }

    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.category?.length) count += filters.category.length;
    if (filters.brand?.length) count += filters.brand.length;
    if (filters.colors?.length) count += filters.colors.length;
    if (filters.material?.length) count += filters.material.length;
    if (filters.gender?.length) count += filters.gender.length;
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) count += 1;
    if (filters.inStock !== undefined) count += 1;
    return count;
  };

  const categoryIcons = {
    'gafas-sol': Sun,
    'gafas-lectura': Eye,
    'lentes-contacto': Circle,
    'accesorios': Target
  };

  const categories = [
    { id: 'gafas-sol', name: 'Gafas de Sol', count: 4 },
    { id: 'gafas-lectura', name: 'Gafas de Lectura', count: 2 },
    { id: 'lentes-contacto', name: 'Lentes de Contacto', count: 2 },
    { id: 'accesorios', name: 'Accesorios', count: 2 }
  ];

  const brands = [
    { id: 'ray-ban', name: 'Ray-Ban', count: 2 },
    { id: 'oakley', name: 'Oakley', count: 1 },
    { id: 'acuvue', name: 'Acuvue', count: 1 },
    { id: 'tom-ford', name: 'Tom Ford', count: 1 },
    { id: 'persol', name: 'Persol', count: 1 },
    { id: 'coopervision', name: 'CooperVision', count: 1 },
    { id: 'otros', name: 'Otros', count: 3 }
  ];

  const colors = [
    { id: 'black', name: 'Negro', hex: '#000000', count: 6 },
    { id: 'brown', name: 'Marrón', hex: '#8B4513', count: 4 },
    { id: 'blue', name: 'Azul', hex: '#1E3A8A', count: 3 },
    { id: 'silver', name: 'Plateado', hex: '#C0C0C0', count: 2 },
    { id: 'gold', name: 'Dorado', hex: '#FFD700', count: 2 },
    { id: 'red', name: 'Rojo', hex: '#DC2626', count: 1 }
  ];

  const materials = [
    { id: 'acetato', name: 'Acetato', count: 4 },
    { id: 'titanio', name: 'Titanio', count: 2 },
    { id: 'metal', name: 'Metal', count: 2 },
    { id: 'tr90', name: 'TR90', count: 1 },
    { id: 'hidrogel', name: 'Hidrogel de Silicona', count: 2 }
  ];

  // Mobile Filter Modal
  const FilterModal = () => (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 transition-all duration-200"
      >
        <SlidersHorizontal className="h-4 w-4 text-gray-600" />
        <span className="font-medium text-gray-700">Filtros</span>
        {getActiveFilterCount() > 0 && (
          <span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full font-medium">
            {getActiveFilterCount()}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Filtrar productos</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="overflow-y-auto p-6 pb-20">
              {renderFilterSections()}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700"
              >
                Limpiar todo
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
              >
                Ver {resultCount} productos
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderFilterSections = () => (
    <div className="space-y-8">
      {/* Quick Search */}
      <div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={filters.search || ''}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500 bg-gray-50 focus:bg-white"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full mb-4 group"
        >
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-600" />
            Categorías
          </h3>
          {expandedSections.categories ? (
            <ChevronUp className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          )}
        </button>
        
        {expandedSections.categories && (
          <div className="grid grid-cols-1 gap-3">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id as keyof typeof categoryIcons] || Target;
              const isChecked = filters.category?.includes(category.id);
              
              return (
                <label
                  key={category.id}
                  className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    isChecked 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => handleFilterChange('category', category.id, e.target.checked)}
                    className="sr-only"
                  />
                  <Icon className={`h-5 w-5 mr-3 ${isChecked ? 'text-blue-600' : 'text-gray-400'}`} />
                  <div className="flex-1">
                    <div className={`font-medium ${isChecked ? 'text-blue-900' : 'text-gray-900'}`}>
                      {category.name}
                    </div>
                    <div className={`text-sm ${isChecked ? 'text-blue-600' : 'text-gray-500'}`}>
                      {category.count} productos
                    </div>
                  </div>
                  {isChecked && (
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Brands */}
      <div>
        <button
          onClick={() => toggleSection('brands')}
          className="flex items-center justify-between w-full mb-4 group"
        >
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-600" />
            Marcas
          </h3>
          {expandedSections.brands ? (
            <ChevronUp className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          )}
        </button>
        
        {expandedSections.brands && (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {brands.map((brand) => {
              const isChecked = filters.brand?.includes(brand.name);
              
              return (
                <label
                  key={brand.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all duration-200"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => handleFilterChange('brand', brand.name, e.target.checked)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 font-medium text-gray-900">{brand.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">({brand.count})</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-4 group"
        >
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            Precio
          </h3>
          {expandedSections.price ? (
            <ChevronUp className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          )}
        </button>
        
        {expandedSections.price && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mínimo</label>
                <input
                  type="number"
                  min="0"
                  placeholder="$0"
                  value={filters.minPrice || ''}
                  onChange={(e) => handleFilterChange('minPrice', Number(e.target.value) || undefined)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Máximo</label>
                <input
                  type="number"
                  min="0"
                  placeholder="$1000"
                  value={filters.maxPrice || ''}
                  onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value) || undefined)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
            
            {/* Quick price filters */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Hasta $50', min: 0, max: 50 },
                { label: '$50 - $150', min: 50, max: 150 },
                { label: '$150 - $300', min: 150, max: 300 },
                { label: 'Más de $300', min: 300, max: undefined }
              ].map((range, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleFilterChange('minPrice', range.min);
                    handleFilterChange('maxPrice', range.max);
                  }}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Colors */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
          <Palette className="h-5 w-5 text-pink-600" />
          Colores
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {colors.map((color) => {
            const isSelected = filters.colors?.includes(color.id);
            
            return (
              <button
                key={color.id}
                onClick={() => handleFilterChange('color', color.id, !isSelected)}
                className={`relative flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-200 ${
                  isSelected 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 mb-2 ${
                    isSelected ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
                <span className={`text-xs font-medium text-center ${
                  isSelected ? 'text-blue-900' : 'text-gray-700'
                }`}>
                  {color.name}
                </span>
                <span className={`text-xs ${
                  isSelected ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  ({color.count})
                </span>
                {isSelected && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Additional Features */}
      <div>
        <button
          onClick={() => toggleSection('features')}
          className="flex items-center justify-between w-full mb-4 group"
        >
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <StarIcon className="h-5 w-5 text-yellow-600" />
            Características
          </h3>
          {expandedSections.features ? (
            <ChevronUp className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          )}
        </button>
        
        {expandedSections.features && (
          <div className="space-y-4">
            <label className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-3 font-medium text-gray-900">Solo productos en stock</span>
            </label>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Material</h4>
              <div className="space-y-2">
                {materials.map((material) => {
                  const isChecked = filters.material?.includes(material.name);
                  
                  return (
                    <label
                      key={material.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => handleFilterChange('material', material.name, e.target.checked)}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-900">{material.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">({material.count})</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <FilterModal />
      
      {/* Desktop Filters */}
      <div className="hidden lg:block w-80 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Filter className="h-6 w-6 text-blue-600" />
              Filtros
            </h2>
            {getActiveFilterCount() > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium px-3 py-1 rounded-lg hover:bg-blue-100 transition-colors"
              >
                Limpiar todo
              </button>
            )}
          </div>
          
          {getActiveFilterCount() > 0 && (
            <div className="text-sm text-gray-600 bg-white px-3 py-2 rounded-lg">
              <span className="font-medium text-blue-600">{getActiveFilterCount()}</span> filtros activos
            </div>
          )}
        </div>

        <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {renderFilterSections()}
        </div>

        {resultCount > 0 && (
          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Mostrando <span className="font-bold text-gray-900">{resultCount}</span> productos
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
