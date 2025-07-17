'use client';

import { memo, useState, useCallback } from 'react';
import { Heart, ShoppingCart, Eye, Star, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '../ui/design-system/Card';
import { Button } from '../ui/design-system/Button';
import { cn } from '../../lib/utils';
import { useCart } from '../../hooks/useCart';
import { toast } from 'react-hot-toast';
import type { Product } from '../../types';

interface OptimizedProductCardProps {
  product: Product;
  className?: string;
  showQuickView?: boolean;
  priority?: boolean;
}

export const OptimizedProductCard = memo<OptimizedProductCardProps>(({
  product,
  className,
  showQuickView = true,
  priority = false
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(() => {
    if (!product.inStock) {
      toast.error('Producto agotado');
      return;
    }
    
    addToCart({
      productId: product.id,
      quantity: 1
    });
    toast.success(`${product.name} agregado al carrito`, {
      icon: '🛒',
      duration: 3000,
    });
  }, [addToCart, product.id, product.name, product.inStock]);

  const handleWishlistToggle = useCallback(() => {
    setIsWishlisted(prev => !prev);
    toast.success(
      isWishlisted ? 'Removido de favoritos' : 'Agregado a favoritos',
      {
        icon: isWishlisted ? '💔' : '❤️',
        duration: 2000,
      }
    );
  }, [isWishlisted]);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const ratingStars = Math.floor(product.rating || 0);

  return (
    <Card
      variant="elevated"
      padding="none"
      className={cn(
        'group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl',
        !product.inStock && 'opacity-60 grayscale',
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
        {!imageError ? (
          <Image
            src={product.imageUrl || '/placeholder-product.jpg'}
            alt={product.name}
            fill
            className={cn(
              'object-cover transition-all duration-700 group-hover:scale-110',
              imageLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'
            )}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <div className="text-center">
              <Eye className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Imagen no disponible</p>
            </div>
          </div>
        )}
        
        {imageLoading && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-purple-50 to-pink-100 animate-pulse" />
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg backdrop-blur-sm">
              ✨ Nuevo
            </span>
          )}
          {product.isOnSale && discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg flex items-center gap-1">
              <Zap className="h-3 w-3" />
              -{discountPercentage}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
              Agotado
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-10"
          aria-label={isWishlisted ? 'Remover de favoritos' : 'Agregar a favoritos'}
        >
          <Heart 
            className={cn(
              'h-4 w-4 transition-all duration-300',
              isWishlisted ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-600 hover:text-red-500'
            )} 
          />
        </button>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-10">
          {showQuickView && (
            <Button
              variant="glass"
              size="sm"
              className="flex-1"
              asChild
            >
              <Link href={`/products/${product.id}`}>
                <Eye className="h-4 w-4" />
                Vista Rápida
              </Link>
            </Button>
          )}
          
          <Button
            variant={product.inStock ? 'default' : 'secondary'}
            size="sm"
            className="flex-1"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4" />
            {product.inStock ? 'Agregar' : 'Agotado'}
          </Button>
        </div>
      </div>

      {/* Content */}
      <CardContent className="space-y-3 p-4">
        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-horus-purple font-medium bg-purple-50 px-2 py-1 rounded-lg">
            {product.category}
          </span>
          {product.rating > 0 && (
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-600">{product.rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-horus-purple transition-colors duration-300 cursor-pointer">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {product.rating > 0 && (
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-3 w-3',
                    i < ratingStars
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  )}
                />
              ))}
            </div>
            {product.reviewCount > 0 && (
              <span className="text-xs text-gray-500">({product.reviewCount})</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Features Preview */}
        {product.features && product.features.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-2">
            {product.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 2 && (
              <span className="text-xs text-gray-500">
                +{product.features.length - 2} más
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
});

OptimizedProductCard.displayName = 'OptimizedProductCard';
