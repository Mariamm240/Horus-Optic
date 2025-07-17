'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { OptimizedProductCard } from './OptimizedProductCard';
import { ProductCardSkeleton } from '../ui/LoadingSkeleton';
import { staggerContainer } from '../../lib/animations';
import type { Product } from '../../types';

interface OptimizedProductGridProps {
  products: Product[];
  loading?: boolean;
  columns?: 2 | 3 | 4;
  showQuickView?: boolean;
}

export const OptimizedProductGrid = memo<OptimizedProductGridProps>(({
  products,
  loading = false,
  columns = 4,
  showQuickView = true
}) => {
  const gridClasses = useMemo(() => {
    const columnClasses = {
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
    };
    
    return `grid gap-6 ${columnClasses[columns]}`;
  }, [columns]);

  if (loading) {
    return (
      <div className={gridClasses}>
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 max-w-md mx-auto">
          <div className="w-16 h-16 bg-gradient-to-r from-horus-purple to-horus-pink rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No se encontraron productos
          </h3>
          <p className="text-gray-600">
            Intenta ajustar los filtros o buscar con otros términos.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className={gridClasses}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          layout
        >
          <OptimizedProductCard
            product={product}
            showQuickView={showQuickView}
            priority={index < 4} // Prioritize first 4 images for LCP
          />
        </motion.div>
      ))}
    </motion.div>
  );
});

OptimizedProductGrid.displayName = 'OptimizedProductGrid';
