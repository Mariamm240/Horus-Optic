import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Product } from '../types';

interface UseProductsOptions {
  category?: string;
  search?: string;
  sortBy?: string;
  limit?: number;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { category, search, sortBy = 'created_at', limit } = options;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        let query = supabase
          .from('products')
          .select('*');

        // Apply filters
        if (category && category !== 'all') {
          query = query.eq('category', category);
        }

        if (search) {
          query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%,brand.ilike.%${search}%`);
        }

        // Apply sorting
        switch (sortBy) {
          case 'price-low':
            query = query.order('price', { ascending: true });
            break;
          case 'price-high':
            query = query.order('price', { ascending: false });
            break;
          case 'rating':
            query = query.order('rating', { ascending: false });
            break;
          case 'newest':
            query = query.order('created_at', { ascending: false });
            break;
          default:
            query = query.order('created_at', { ascending: false });
        }

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) {
          throw error;
        }

        // Map database products to our Product type
        const mappedProducts: Product[] = (data || []).map(product => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          imageUrl: product.image_url,
          category: product.category,
          brand: product.brand,
          inStock: product.in_stock,
          stockQuantity: product.stock_quantity,
          rating: product.rating,
          reviewCount: product.review_count,
          features: [], // Add features if available in your database
          createdAt: product.created_at,
          updatedAt: product.updated_at,
        }));

        setProducts(mappedProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Error al cargar productos');
        
        // Fallback to static products if database fails
        setProducts(getStaticProducts());
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, search, sortBy, limit]);

  const refetch = async () => {
  };

  return {
    products,
    loading,
    error,
    refetch,
  };
}

// Static fallback products
function getStaticProducts(): Product[] {
  return [
    {
      id: '1',
      name: 'Lentes de Contacto Acuvue Oasys',
      description: 'Hidrogel de silicona para máxima comodidad durante todo el día',
      price: 149900,
      imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop',
      category: 'lentes-contacto',
      brand: 'Acuvue',
      inStock: true,
      stockQuantity: 50,
      rating: 4.8,
      reviewCount: 324,
      features: ['Hidratación duradera', 'Uso mensual', 'UV Protection'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Lentes de Contacto Biofinity',
      description: 'Uso mensual con alta respirabilidad para ojos sensibles',
      price: 129900,
      imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop',
      category: 'lentes-contacto',
      brand: 'Biofinity',
      inStock: true,
      stockQuantity: 30,
      rating: 4.7,
      reviewCount: 256,
      features: ['Alta respirabilidad', 'Uso extendido', 'Confort superior'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      name: 'Lentes de Contacto Air Optix Colors',
      description: 'Cambia el color de tus ojos con estilo natural',
      price: 169900,
      imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop',
      category: 'lentes-contacto',
      brand: 'Air Optix',
      inStock: true,
      stockQuantity: 25,
      rating: 4.9,
      reviewCount: 189,
      features: ['Cambio de color', 'Natural look', 'Uso mensual'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '4',
      name: 'Gafas Ray-Ban Aviator',
      description: 'El clásico atemporal que nunca pasa de moda',
      price: 299900,
      imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
      category: 'gafas-sol',
      brand: 'Ray-Ban',
      inStock: true,
      stockQuantity: 15,
      rating: 4.9,
      reviewCount: 445,
      features: ['Lentes polarizadas', 'Protección UV', 'Marco de metal'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '5',
      name: 'Gafas Oakley Holbrook',
      description: 'Estilo deportivo con tecnología avanzada',
      price: 259900,
      imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop',
      category: 'gafas-sol',
      brand: 'Oakley',
      inStock: true,
      stockQuantity: 20,
      rating: 4.7,
      reviewCount: 312,
      features: ['Lentes Prizm', 'Marco ligero', 'Diseño deportivo'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '6',
      name: 'Gafas Graduadas Gucci',
      description: 'Elegancia premium para el uso diario',
      price: 899900,
      imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop',
      category: 'gafas-graduadas',
      brand: 'Gucci',
      inStock: true,
      stockQuantity: 8,
      rating: 4.8,
      reviewCount: 127,
      features: ['Marco acetato', 'Diseño italiano', 'Calidad premium'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  ];
}
