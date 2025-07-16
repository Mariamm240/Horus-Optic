'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HeartIcon, ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { Button } from '../ui/Button';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  badge?: string;
  description: string;
}

interface ModernProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  isWishlisted?: boolean;
}

export function ModernProductCard({ 
  product, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted = false 
}: ModernProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
      {/* Badge */}
      {(product.badge || product.isNew || product.isSale) && (
        <div className="absolute top-4 left-4 z-20">
          <span className={`
            inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
            ${product.isSale 
              ? 'bg-red-100 text-red-800' 
              : product.isNew 
                ? 'bg-green-100 text-green-800'
                : 'bg-primary/10 text-primary'
            }
          `}>
            {product.badge || (product.isSale ? `${discountPercentage}% OFF` : 'Nuevo')}
          </span>
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={() => onToggleWishlist?.(product)}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-sm"
      >
        {isWishlisted ? (
          <HeartIconSolid className="w-5 h-5 text-red-500" />
        ) : (
          <HeartIcon className="w-5 h-5 text-gray-600 hover:text-red-500" />
        )}
      </button>

      {/* Product Image */}
      <div 
        className="relative aspect-square overflow-hidden bg-gray-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className={`
            w-full h-full object-cover transition-transform duration-700
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
        />
        
        {/* Quick View Overlay */}
        <div className={`
          absolute inset-0 bg-black/20 flex items-center justify-center
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          <Button
            variant="secondary"
            size="sm"
            className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 shadow-lg"
          >
            <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
            Vista Rápida
          </Button>
        </div>

        {/* Image Indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-200
                  ${index === currentImageIndex 
                    ? 'bg-white shadow-md' 
                    : 'bg-white/50 hover:bg-white/75'
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-horus-purple-500 uppercase tracking-wide">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIconSolid
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400' 
                      : 'text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviewCount})</span>
          </div>
        </div>

        {/* Product Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200 line-clamp-2 mb-3">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => onAddToCart?.(product)}
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <ShoppingBagIcon className="w-5 h-5 mr-2" />
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
}

// Componente de lista de productos moderno
interface ModernProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  wishlistedProducts?: number[];
}

export function ModernProductGrid({ 
  products, 
  onAddToCart, 
  onToggleWishlist, 
  wishlistedProducts = [] 
}: ModernProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ModernProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          isWishlisted={wishlistedProducts.includes(product.id)}
        />
      ))}
    </div>
  );
}
