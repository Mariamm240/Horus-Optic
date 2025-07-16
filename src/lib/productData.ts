import type { Product, ProductFilters, ProductCategory, FilterGroup } from '../types/product';

// Datos de productos robustos con diferentes categorías
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Ray-Ban Wayfarer Classic',
    description: 'Las icónicas gafas de sol Wayfarer han sido rediseñadas con la marca Ray-Ban. Estas gafas ofrecen un look atemporal que nunca pasa de moda.',
    price: 150,
    originalPrice: 180,
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    imageUrls: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop'
    ],
    category: 'gafas-sol',
    brand: 'Ray-Ban',
    inStock: true,
    stockQuantity: 15,
    rating: 4.8,
    reviewCount: 324,
    features: ['Protección UV 100%', 'Lentes polarizadas', 'Marco acetato', 'Estuche incluido'],
    specifications: {
      'Material del marco': 'Acetato',
      'Material de las lentes': 'Cristal',
      'Protección UV': '100%',
      'Ancho de lente': '50mm',
      'Ancho del puente': '22mm',
      'Longitud de varilla': '150mm'
    },
    colors: [
      { id: 'black', name: 'Negro', hexCode: '#000000' },
      { id: 'brown', name: 'Marrón', hexCode: '#8B4513' },
      { id: 'blue', name: 'Azul', hexCode: '#1E3A8A' }
    ],
    material: 'Acetato',
    gender: 'unisex',
    tags: ['clásico', 'elegante', 'urbano'],
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Oakley Holbrook Sport',
    description: 'Gafas deportivas de alto rendimiento con tecnología PRIZM para una visión mejorada durante actividades al aire libre.',
    price: 220,
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
    imageUrls: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&h=500&fit=crop'
    ],
    category: 'gafas-sol',
    brand: 'Oakley',
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 187,
    features: ['Tecnología PRIZM', 'Marco O-Matter', 'Lentes Plutonite', 'Resistente al impacto'],
    specifications: {
      'Material del marco': 'O-Matter',
      'Material de las lentes': 'Plutonite',
      'Tecnología': 'PRIZM',
      'Ancho de lente': '55mm',
      'Ancho del puente': '18mm',
      'Longitud de varilla': '137mm'
    },
    colors: [
      { id: 'matte-black', name: 'Negro Mate', hexCode: '#2D2D2D' },
      { id: 'olive', name: 'Verde Oliva', hexCode: '#556B2F' },
      { id: 'red', name: 'Rojo', hexCode: '#DC2626' }
    ],
    material: 'O-Matter',
    gender: 'unisex',
    tags: ['deportivo', 'tecnología', 'resistente'],
    isNew: true,
    isBestseller: false,
    isOnSale: false,
    createdAt: '2024-11-01T00:00:00Z',
    updatedAt: '2024-12-15T00:00:00Z'
  },
  {
    id: '3',
    name: 'Gafas de Lectura Premium',
    description: 'Gafas de lectura elegantes con diseño ergonómico y lentes antirreflejantes para máximo confort.',
    price: 85,
    originalPrice: 120,
    imageUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&h=500&fit=crop',
    imageUrls: [
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1592318043416-44ae1223f5e1?w=500&h=500&fit=crop'
    ],
    category: 'gafas-lectura',
    brand: 'OptiFocus',
    inStock: true,
    stockQuantity: 25,
    rating: 4.6,
    reviewCount: 89,
    features: ['Lentes antirreflejantes', 'Marco ligero', 'Diseño ergonómico', 'Estuche premium'],
    specifications: {
      'Material del marco': 'Titanio',
      'Material de las lentes': 'CR-39',
      'Tratamiento': 'Antirreflejante',
      'Graduación': '+1.0 a +3.5',
      'Peso': '18g'
    },
    colors: [
      { id: 'silver', name: 'Plateado', hexCode: '#C0C0C0' },
      { id: 'gold', name: 'Dorado', hexCode: '#FFD700' }
    ],
    sizes: ['+1.0', '+1.5', '+2.0', '+2.5', '+3.0', '+3.5'],
    material: 'Titanio',
    gender: 'unisex',
    tags: ['lectura', 'elegante', 'cómodo'],
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    createdAt: '2024-03-10T00:00:00Z',
    updatedAt: '2024-11-20T00:00:00Z'
  },
  {
    id: '4',
    name: 'Acuvue Oasys Daily',
    description: 'Lentillas diarias con tecnología HydraLuxe para una comodidad excepcional durante todo el día.',
    price: 45,
    imageUrl: 'https://images.unsplash.com/photo-1582559062969-8c13c3dc3e5b?w=500&h=500&fit=crop',
    imageUrls: [
      'https://images.unsplash.com/photo-1582559062969-8c13c3dc3e5b?w=500&h=500&fit=crop'
    ],
    category: 'lentes-contacto',
    brand: 'Acuvue',
    inStock: true,
    stockQuantity: 50,
    rating: 4.7,
    reviewCount: 156,
    features: ['Tecnología HydraLuxe', 'Protección UV', 'Uso diario', 'Caja 30 unidades'],
    specifications: {
      'Tipo': 'Diarias',
      'Material': 'Senofilcon A',
      'Contenido de agua': '38%',
      'Protección UV': 'Clase 1',
      'Graduación': '-10.00 a +6.00'
    },
    material: 'Hidrogel de silicona',
    gender: 'unisex',
    tags: ['diarias', 'confort', 'tecnología'],
    isNew: false,
    isBestseller: true,
    isOnSale: false,
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-10-15T00:00:00Z'
  },
  {
    id: '5',
    name: 'Biofinity Monthly',
    description: 'Lentillas mensuales de hidrogel de silicona con tecnología Aquaform para una hidratación natural.',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1631287709442-3afd49c15389?w=500&h=500&fit=crop',
    category: 'lentes-contacto',
    brand: 'CooperVision',
    inStock: true,
    stockQuantity: 30,
    rating: 4.5,
    reviewCount: 92,
    features: ['Tecnología Aquaform', 'Uso mensual', 'Alta permeabilidad', 'Caja 6 unidades'],
    specifications: {
      'Tipo': 'Mensuales',
      'Material': 'Comfilcon A',
      'Contenido de agua': '48%',
      'Dk/t': '160',
      'Graduación': '-12.00 a +8.00'
    },
    material: 'Hidrogel de silicona',
    gender: 'unisex',
    tags: ['mensuales', 'permeables', 'económicas'],
    isNew: false,
    isBestseller: false,
    isOnSale: false,
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-09-10T00:00:00Z'
  },
  {
    id: '6',
    name: 'Estuche Premium Cuero',
    description: 'Estuche de cuero genuino para gafas con forro de microfibra y cierre magnético.',
    price: 25,
    imageUrl: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=500&h=500&fit=crop',
    category: 'accesorios',
    brand: 'LuxCase',
    inStock: true,
    stockQuantity: 40,
    rating: 4.4,
    reviewCount: 67,
    features: ['Cuero genuino', 'Forro microfibra', 'Cierre magnético', 'Diseño compacto'],
    specifications: {
      'Material': 'Cuero genuino',
      'Forro': 'Microfibra',
      'Dimensiones': '16x7x4 cm',
      'Peso': '80g'
    },
    colors: [
      { id: 'black-leather', name: 'Negro', hexCode: '#000000' },
      { id: 'brown-leather', name: 'Marrón', hexCode: '#8B4513' },
      { id: 'navy-leather', name: 'Azul Marino', hexCode: '#000080' }
    ],
    material: 'Cuero',
    gender: 'unisex',
    tags: ['elegante', 'protección', 'premium'],
    isNew: false,
    isBestseller: false,
    isOnSale: false,
    createdAt: '2024-05-01T00:00:00Z',
    updatedAt: '2024-08-15T00:00:00Z'
  },
  {
    id: '7',
    name: 'Tom Ford Butterfly',
    description: 'Gafas de sol de lujo con diseño butterfly y detalles dorados. Perfectas para ocasiones especiales.',
    price: 380,
    imageUrl: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&h=500&fit=crop',
    imageUrls: [
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop'
    ],
    category: 'gafas-sol',
    brand: 'Tom Ford',
    inStock: true,
    stockQuantity: 3,
    rating: 4.9,
    reviewCount: 45,
    features: ['Diseño de lujo', 'Detalles dorados', 'Lentes gradient', 'Estuche de lujo'],
    specifications: {
      'Material del marco': 'Acetato premium',
      'Material de las lentes': 'Cristal',
      'Protección UV': '100%',
      'Origen': 'Italia',
      'Ancho de lente': '58mm'
    },
    colors: [
      { id: 'tortoise-gold', name: 'Carey con Oro', hexCode: '#8B4513' },
      { id: 'black-gold', name: 'Negro con Oro', hexCode: '#000000' }
    ],
    material: 'Acetato premium',
    gender: 'mujer',
    tags: ['lujo', 'elegante', 'diseñador'],
    isNew: true,
    isBestseller: false,
    isOnSale: false,
    createdAt: '2024-12-01T00:00:00Z',
    updatedAt: '2024-12-15T00:00:00Z'
  },
  {
    id: '8',
    name: 'Persol Vintage Classic',
    description: 'Gafas vintage inspiradas en el estilo italiano clásico con cristales de alta calidad.',
    price: 290,
    originalPrice: 350,
    imageUrl: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&h=500&fit=crop',
    category: 'gafas-sol',
    brand: 'Persol',
    inStock: true,
    stockQuantity: 6,
    rating: 4.8,
    reviewCount: 78,
    features: ['Diseño vintage', 'Cristales superiores', 'Marco flexible', 'Bisagras patentadas'],
    specifications: {
      'Material del marco': 'Acetato italiano',
      'Material de las lentes': 'Cristal superior',
      'Origen': 'Italia',
      'Año de diseño': '1960',
      'Ancho de lente': '52mm'
    },
    colors: [
      { id: 'havana', name: 'Habana', hexCode: '#D2691E' },
      { id: 'vintage-black', name: 'Negro Vintage', hexCode: '#2F2F2F' }
    ],
    material: 'Acetato italiano',
    gender: 'hombre',
    tags: ['vintage', 'italiano', 'clásico'],
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    createdAt: '2024-04-15T00:00:00Z',
    updatedAt: '2024-11-30T00:00:00Z'
  },
  {
    id: '9',
    name: 'Gafas Gaming Blue Light',
    description: 'Gafas especializadas para gaming con filtro de luz azul y diseño ergonómico para largas sesiones.',
    price: 65,
    imageUrl: 'https://images.unsplash.com/photo-1592318043416-44ae1223f5e1?w=500&h=500&fit=crop',
    category: 'gafas-lectura',
    brand: 'GameVision',
    inStock: true,
    stockQuantity: 20,
    rating: 4.3,
    reviewCount: 134,
    features: ['Filtro luz azul', 'Reducción fatiga', 'Marco ultraligero', 'Almohadillas confort'],
    specifications: {
      'Filtro luz azul': '40%',
      'Material del marco': 'TR90',
      'Peso': '22g',
      'Ancho de lente': '54mm',
      'Para gaming': 'Sí'
    },
    colors: [
      { id: 'gaming-black', name: 'Negro Gaming', hexCode: '#1F1F1F' },
      { id: 'gaming-blue', name: 'Azul Gaming', hexCode: '#0066CC' }
    ],
    material: 'TR90',
    gender: 'unisex',
    tags: ['gaming', 'tecnología', 'confort'],
    isNew: true,
    isBestseller: false,
    isOnSale: false,
    createdAt: '2024-10-01T00:00:00Z',
    updatedAt: '2024-12-10T00:00:00Z'
  },
  {
    id: '10',
    name: 'Kit Limpieza Professional',
    description: 'Kit completo de limpieza profesional para gafas y lentillas con spray, paños y herramientas.',
    price: 18,
    imageUrl: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=500&h=500&fit=crop',
    category: 'accesorios',
    brand: 'CleanOptic',
    inStock: true,
    stockQuantity: 75,
    rating: 4.6,
    reviewCount: 203,
    features: ['Spray limpiador', 'Paños microfibra', 'Destornillador', 'Estuche portátil'],
    specifications: {
      'Contenido': 'Spray 50ml, 3 paños, destornillador',
      'Tipo spray': 'Sin alcohol',
      'Paños': 'Microfibra premium',
      'Garantía': '1 año'
    },
    material: 'Varios',
    gender: 'unisex',
    tags: ['limpieza', 'mantenimiento', 'kit'],
    isNew: false,
    isBestseller: true,
    isOnSale: false,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-07-20T00:00:00Z'
  }
];

// Categorías de productos
export const productCategories: ProductCategory[] = [
  {
    id: 'gafas-sol',
    name: 'Gafas de Sol',
    slug: 'gafas-sol',
    description: 'Protección y estilo para tus ojos',
    productCount: mockProducts.filter(p => p.category === 'gafas-sol').length
  },
  {
    id: 'gafas-lectura',
    name: 'Gafas de Lectura',
    slug: 'gafas-lectura',
    description: 'Confort visual para lectura y trabajo',
    productCount: mockProducts.filter(p => p.category === 'gafas-lectura').length
  },
  {
    id: 'lentes-contacto',
    name: 'Lentes de Contacto',
    slug: 'lentes-contacto',
    description: 'Libertad visual sin límites',
    productCount: mockProducts.filter(p => p.category === 'lentes-contacto').length
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    slug: 'accesorios',
    description: 'Cuidado y mantenimiento',
    productCount: mockProducts.filter(p => p.category === 'accesorios').length
  }
];

// Grupos de filtros para el sistema de filtrado
export const filterGroups: FilterGroup[] = [
  {
    id: 'search',
    name: 'Buscar',
    type: 'search'
  },
  {
    id: 'category',
    name: 'Categoría',
    type: 'checkbox',
    options: productCategories.map(cat => ({
      id: cat.id,
      name: cat.name,
      value: cat.id,
      count: cat.productCount
    }))
  },
  {
    id: 'brand',
    name: 'Marca',
    type: 'checkbox',
    options: Array.from(new Set(mockProducts.map(p => p.brand)))
      .map(brand => ({
        id: brand.toLowerCase(),
        name: brand,
        value: brand,
        count: mockProducts.filter(p => p.brand === brand).length
      }))
  },
  {
    id: 'price',
    name: 'Precio',
    type: 'range',
    min: Math.min(...mockProducts.map(p => p.price)),
    max: Math.max(...mockProducts.map(p => p.price)),
    step: 5
  },
  {
    id: 'color',
    name: 'Color',
    type: 'color',
    options: Array.from(
      new Map(
        mockProducts
          .flatMap(p => p.colors || [])
          .map(color => [color.name, color])
      ).values()
    ).map(color => ({
      id: color.id,
      name: color.name,
      value: color.id,
      count: mockProducts.filter(p => p.colors?.some(c => c.id === color.id)).length,
      color: color.hexCode
    }))
  },
  {
    id: 'material',
    name: 'Material',
    type: 'checkbox',
    options: Array.from(new Set(mockProducts.map(p => p.material).filter(Boolean)))
      .map(material => ({
        id: material!.toLowerCase(),
        name: material!,
        value: material!,
        count: mockProducts.filter(p => p.material === material).length
      }))
  },
  {
    id: 'gender',
    name: 'Género',
    type: 'radio',
    options: [
      { id: 'all', name: 'Todos', value: '', count: mockProducts.length },
      { id: 'unisex', name: 'Unisex', value: 'unisex', count: mockProducts.filter(p => p.gender === 'unisex').length },
      { id: 'hombre', name: 'Hombre', value: 'hombre', count: mockProducts.filter(p => p.gender === 'hombre').length },
      { id: 'mujer', name: 'Mujer', value: 'mujer', count: mockProducts.filter(p => p.gender === 'mujer').length }
    ]
  }
];

// Funciones utilitarias
export function getProductById(id: string): Product | undefined {
  return mockProducts.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return mockProducts.filter(product => product.category === category);
}

export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  
  return mockProducts
    .filter(p => p.id !== productId && (p.category === product.category || p.brand === product.brand))
    .slice(0, limit);
}

export function getFeaturedProducts(limit: number = 6): Product[] {
  return mockProducts
    .filter(product => product.isBestseller || product.isNew)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase();
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

export function filterProducts(filters: ProductFilters): Product[] {
  return mockProducts.filter(product => {
    // Filtro por categoría
    if (filters.category && filters.category.length > 0) {
      if (!filters.category.includes(product.category)) return false;
    }
    
    // Filtro por marca
    if (filters.brand && filters.brand.length > 0) {
      if (!filters.brand.includes(product.brand)) return false;
    }
    
    // Filtro por precio
    if (filters.minPrice !== undefined && product.price < filters.minPrice) return false;
    if (filters.maxPrice !== undefined && product.price > filters.maxPrice) return false;
    
    // Filtro por disponibilidad
    if (filters.inStock !== undefined && product.inStock !== filters.inStock) return false;
    
    // Filtro por búsqueda
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
      if (!matchesSearch) return false;
    }
    
    // Filtro por colores
    if (filters.colors && filters.colors.length > 0) {
      if (!product.colors?.some(color => filters.colors!.includes(color.id))) return false;
    }
    
    // Filtro por material
    if (filters.material && filters.material.length > 0) {
      if (!product.material || !filters.material.includes(product.material)) return false;
    }
    
    // Filtro por género
    if (filters.gender && filters.gender.length > 0) {
      if (!product.gender || !filters.gender.includes(product.gender)) return false;
    }
    
    // Filtro por tags
    if (filters.tags && filters.tags.length > 0) {
      if (!product.tags?.some(tag => filters.tags!.includes(tag))) return false;
    }
    
    return true;
  });
}

export function sortProducts(products: Product[], sortBy: string, sortOrder: 'asc' | 'desc' = 'asc'): Product[] {
  const sorted = [...products].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'rating':
        comparison = a.rating - b.rating;
        break;
      case 'newest':
        comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        break;
      case 'bestseller':
        comparison = (a.isBestseller ? 1 : 0) - (b.isBestseller ? 1 : 0);
        break;
      default:
        return 0;
    }
    
    return sortOrder === 'desc' ? -comparison : comparison;
  });
  
  return sorted;
}

export function getFilteredAndSortedProducts(
  products: Product[], 
  filters: ProductFilters, 
  sortBy?: string
): Product[] {
  // First filter the provided products
  let filteredProducts = products.filter(product => {
    // Apply the same filtering logic but to the provided products array
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase()) && 
        !product.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }

    if (filters.category && filters.category.length > 0 && !filters.category.includes(product.category)) {
      return false;
    }

    if (filters.brand && filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
      return false;
    }

    if (filters.colors && filters.colors.length > 0) {
      const hasMatchingColor = product.colors?.some(color => filters.colors?.includes(color.id));
      if (!hasMatchingColor) return false;
    }

    if (filters.material && filters.material.length > 0) {
      const hasMatchingMaterial = product.material && filters.material.includes(product.material);
      if (!hasMatchingMaterial) return false;
    }

    if (filters.gender && filters.gender.length > 0 && !filters.gender.includes(product.gender || '')) {
      return false;
    }

    if (filters.minPrice !== undefined && product.price < filters.minPrice) {
      return false;
    }

    if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
      return false;
    }

    if (filters.inStock && !product.inStock) {
      return false;
    }

    return true;
  });
  
  // Then sort if needed
  if (sortBy) {
    filteredProducts = sortProducts(filteredProducts, sortBy, filters.sortOrder);
  }
  
  return filteredProducts;
}
