export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  imageUrls?: string[];
  category: string;
  brand: string;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  features?: string[];
  specifications?: Record<string, string>;
  colors?: ProductColor[];
  sizes?: string[];
  material?: string;
  gender?: 'unisex' | 'hombre' | 'mujer';
  tags?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  isOnSale?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductColor {
  id: string;
  name: string;
  hexCode: string;
  imageUrl?: string;
}

export interface ProductFilters {
  category?: string[];
  brand?: string[];
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
  colors?: string[];
  material?: string[];
  gender?: string[];
  tags?: string[];
  sortBy?: 'name' | 'price' | 'rating' | 'newest' | 'bestseller';
  sortOrder?: 'asc' | 'desc';
}

export interface FilterOption {
  id: string;
  name: string;
  value: string;
  count: number;
  color?: string;
}

export interface FilterGroup {
  id: string;
  name: string;
  type: 'checkbox' | 'radio' | 'range' | 'color' | 'search';
  options?: FilterOption[];
  min?: number;
  max?: number;
  step?: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  productCount: number;
  subcategories?: ProductCategory[];
}

export type SortOption = 
  | 'relevance' 
  | 'price-low' 
  | 'price-high' 
  | 'name' 
  | 'newest' 
  | 'popular';
