import { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button, Input, Card, CardContent } from '../ui';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import type { Product, ProductFilters as ProductFiltersType } from '../../types';

// Mock data for demonstration
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Telescopio Refractor 70mm',
    description: 'Telescopio refractor ideal para principiantes en astronomía.',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=400&fit=crop',
    category: 'telescopios',
    brand: 'Celestron',
    inStock: true,
    stockQuantity: 15,
    rating: 4.5,
    reviewCount: 128,
    features: ['Apertura 70mm', 'Focal 900mm', 'Incluye trípode', 'Oculares incluidos'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Binoculares 10x42',
    description: 'Binoculares profesionales con excelente calidad óptica.',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1509715513011-e394f0cb20c4?w=400&h=400&fit=crop',
    category: 'binoculares',
    brand: 'Nikon',
    inStock: true,
    stockQuantity: 23,
    rating: 4.8,
    reviewCount: 95,
    features: ['Magnificación 10x', 'Objetivo 42mm', 'Resistente al agua', 'Antirreflejos'],
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
  },
  {
    id: '3',
    name: 'Microscopio Digital USB',
    description: 'Microscopio digital con conectividad USB para análisis detallado.',
    price: 399.99,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop',
    category: 'microscopios',
    brand: 'Amscope',
    inStock: true,
    stockQuantity: 8,
    rating: 4.3,
    reviewCount: 67,
    features: ['Resolución 1080p', 'Zoom 50x-1000x', 'Software incluido', 'LED ajustable'],
    createdAt: '2024-01-25T10:00:00Z',
    updatedAt: '2024-01-25T10:00:00Z',
  },
  {
    id: '4',
    name: 'Filtro Solar Universal',
    description: 'Filtro solar seguro para observación del sol con telescopios.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    category: 'accesorios',
    brand: 'Baader',
    inStock: true,
    stockQuantity: 12,
    rating: 4.7,
    reviewCount: 34,
    features: ['Filtro ND 5.0', 'Diámetro ajustable', 'Certificado ISO', 'Fácil instalación'],
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z',
  },
];

export function ProductCatalog() {
  const [products] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<ProductFiltersType>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    applyFilters({ ...filters, search: term });
  };

  const handleFiltersChange = (newFilters: ProductFiltersType) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters: ProductFiltersType) => {
    let filtered = [...products];

    // Search filter
    if (currentFilters.search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(currentFilters.search!.toLowerCase()) ||
        product.description.toLowerCase().includes(currentFilters.search!.toLowerCase()) ||
        product.brand.toLowerCase().includes(currentFilters.search!.toLowerCase())
      );
    }

    // Category filter
    if (currentFilters.category) {
      filtered = filtered.filter(product => product.category === currentFilters.category);
    }

    // Brand filter
    if (currentFilters.brand) {
      filtered = filtered.filter(product => product.brand === currentFilters.brand);
    }

    // Price range filter
    if (currentFilters.minPrice !== undefined) {
      filtered = filtered.filter(product => product.price >= currentFilters.minPrice!);
    }
    if (currentFilters.maxPrice !== undefined) {
      filtered = filtered.filter(product => product.price <= currentFilters.maxPrice!);
    }

    // Stock filter
    if (currentFilters.inStock !== undefined) {
      filtered = filtered.filter(product => product.inStock === currentFilters.inStock);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Catálogo de Productos</h1>
          <p className="text-gray-600">
            Encuentra los mejores equipos de óptica y tecnología
          </p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Button
            variant={viewMode === 'grid' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <ProductFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            products={products}
          />
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">
                  No se encontraron productos que coincidan con tus criterios de búsqueda.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setFilters({});
                    setFilteredProducts(products);
                  }}
                >
                  Limpiar filtros
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
