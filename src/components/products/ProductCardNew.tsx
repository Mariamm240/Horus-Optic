import React, { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    
    try {
      await addToCart({
        productId: product.id,
        quantity: 1,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-zinc-300'
        }`}
      />
    ));
  };

  if (viewMode === 'list') {
    return (
      <Link 
        to={`/product/${product.id}`}
        className="block bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
      >
        <div className="flex p-6 gap-6">
          <div className="relative flex-shrink-0">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-lg"
            />
            {product.isOnSale && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Oferta
              </span>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-zinc-900 text-lg line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-zinc-600">{product.brand}</p>
              </div>
              <button
                onClick={toggleFavorite}
                className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
              </button>
            </div>
            
            <p className="text-sm text-zinc-600 mb-3 line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center gap-1 mb-3">
              {renderStars(product.rating)}
              <span className="text-sm text-zinc-600 ml-1">
                ({product.reviewCount})
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-zinc-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-zinc-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || isLoading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-zinc-300 disabled:cursor-not-allowed transition-colors"
              >
                <ShoppingCart className="h-4 w-4" />
                {isLoading ? 'Agregando...' : 'Agregar'}
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Nuevo
            </span>
          )}
          {product.isOnSale && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Oferta
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Bestseller
            </span>
          )}
        </div>

        {/* Acciones hover */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={toggleFavorite}
            className="p-2 bg-white rounded-full shadow-md text-zinc-600 hover:text-red-500 transition-colors"
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
          </button>
        </div>

        {/* Stock badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-zinc-900 px-3 py-1 rounded-full text-sm font-medium">
              Agotado
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-2">
          <h3 className="font-semibold text-zinc-900 text-lg line-clamp-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-zinc-600">{product.brand}</p>
        </div>

        <p className="text-sm text-zinc-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {renderStars(product.rating)}
          <span className="text-sm text-zinc-600 ml-1">
            ({product.reviewCount})
          </span>
        </div>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1 mb-4">
            {product.colors.slice(0, 4).map((color) => (
              <div
                key={color.id}
                className="w-6 h-6 rounded-full border-2 border-zinc-200"
                style={{ backgroundColor: color.hexCode }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-zinc-500 ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price and actions */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-zinc-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-zinc-500 line-through ml-2">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock || isLoading}
          className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-zinc-300 disabled:cursor-not-allowed transition-colors opacity-0 group-hover:opacity-100"
        >
          <ShoppingCart className="h-4 w-4" />
          {isLoading ? 'Agregando...' : product.inStock ? 'Agregar al Carrito' : 'No Disponible'}
        </button>
      </div>
    </Link>
  );
}
