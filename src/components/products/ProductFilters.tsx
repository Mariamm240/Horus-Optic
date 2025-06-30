import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button, Input, Card, CardContent } from '../ui';
import type { Product, ProductFilters as ProductFiltersType } from '../../types';

interface ProductFiltersProps {
  filters: ProductFiltersType;
  onFiltersChange: (filters: ProductFiltersType) => void;
  products: Product[];
}

export function ProductFilters({ filters, onFiltersChange, products }: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brand: true,
    price: true,
    availability: true,
  });

  // Extract unique categories and brands from products
  const categories = Array.from(new Set(products.map(p => p.category)));
  const brands = Array.from(new Set(products.map(p => p.brand)));

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (key: keyof ProductFiltersType, value: string | number | boolean | undefined) => {
    const newFilters = { ...filters, [key]: value };
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    onFiltersChange({});
  };

  const FilterSection = ({ 
    title, 
    section, 
    children 
  }: { 
    title: string; 
    section: keyof typeof expandedSections; 
    children: React.ReactNode;
  }) => (
    <Card className="mb-4">
      <div 
        className="cursor-pointer p-4 border-b border-gray-200"
        onClick={() => toggleSection(section)}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">{title}</h3>
          {expandedSections[section] ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>
      </div>
      {expandedSections[section] && (
        <CardContent>
          {children}
        </CardContent>
      )}
    </Card>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllFilters}
          className="text-primary-600 hover:text-primary-700"
        >
          Limpiar todo
        </Button>
      </div>

      {/* Category Filter */}
      <FilterSection title="Categoría" section="category">
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              checked={!filters.category}
              onChange={() => handleFilterChange('category', undefined)}
              className="mr-2"
            />
            <span className="text-sm">Todas las categorías</span>
          </label>
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={filters.category === category}
                onChange={() => handleFilterChange('category', category)}
                className="mr-2"
              />
              <span className="text-sm capitalize">{category}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Brand Filter */}
      <FilterSection title="Marca" section="brand">
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="brand"
              checked={!filters.brand}
              onChange={() => handleFilterChange('brand', undefined)}
              className="mr-2"
            />
            <span className="text-sm">Todas las marcas</span>
          </label>
          {brands.map((brand) => (
            <label key={brand} className="flex items-center">
              <input
                type="radio"
                name="brand"
                checked={filters.brand === brand}
                onChange={() => handleFilterChange('brand', brand)}
                className="mr-2"
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection title="Precio" section="price">
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio mínimo
            </label>
            <Input
              type="number"
              placeholder="$0"
              value={filters.minPrice || ''}
              onChange={(e) => handleFilterChange('minPrice', 
                e.target.value ? parseFloat(e.target.value) : undefined
              )}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio máximo
            </label>
            <Input
              type="number"
              placeholder="$1000"
              value={filters.maxPrice || ''}
              onChange={(e) => handleFilterChange('maxPrice', 
                e.target.value ? parseFloat(e.target.value) : undefined
              )}
            />
          </div>
          
          {/* Quick Price Ranges */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Rangos rápidos:</p>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleFilterChange('minPrice', 0);
                  handleFilterChange('maxPrice', 100);
                }}
              >
                $0 - $100
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleFilterChange('minPrice', 100);
                  handleFilterChange('maxPrice', 300);
                }}
              >
                $100 - $300
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleFilterChange('minPrice', 300);
                  handleFilterChange('maxPrice', 500);
                }}
              >
                $300 - $500
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleFilterChange('minPrice', 500);
                  handleFilterChange('maxPrice', undefined);
                }}
              >
                $500+
              </Button>
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Availability Filter */}
      <FilterSection title="Disponibilidad" section="availability">
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.inStock === true}
              onChange={(e) => handleFilterChange('inStock', 
                e.target.checked ? true : undefined
              )}
              className="mr-2"
            />
            <span className="text-sm">Solo productos en stock</span>
          </label>
        </div>
      </FilterSection>
    </div>
  );
}
