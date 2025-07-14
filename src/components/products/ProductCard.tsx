import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../lib/utils';
import type { Product } from '../../types';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const { addToCart, loading } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      await addToCart({
        productId: product.id,
        quantity: 1,
      });
      toast.success(`${product.name} agregado al carrito`);
    } catch {
      toast.error('Error al agregar al carrito');
    }
  };

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex">
          <div className="w-48 h-48 flex-shrink-0 cursor-pointer" onClick={handleProductClick}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 
                  className="text-xl font-semibold text-horus-purple mb-2 cursor-pointer hover:text-horus-pink transition-colors"
                  onClick={handleProductClick}
                >
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                <p className="text-gray-700 mb-4">{product.description}</p>
                
                {product.features && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-horus-purple mb-2">
                      Características:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-horus-purple rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="ml-6 text-right">
                <div className="text-2xl font-bold text-horus-purple mb-2">
                  {formatPrice(product.price)}
                </div>
                <div className="flex items-center justify-end mb-2">
                  <div className="flex items-center mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.reviewCount})
                  </span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleAddToCart}
                    loading={loading}
                    disabled={!product.inStock}
                    className="flex items-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Agregar' : 'Agotado'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative cursor-pointer" onClick={handleProductClick}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button 
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Agotado
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2 cursor-pointer" onClick={handleProductClick}>
          <h3 className="font-semibold text-horus-purple text-lg mb-1 line-clamp-2 hover:text-horus-pink transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">{product.brand}</p>
        </div>

        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-horus-purple">
            {formatPrice(product.price)}
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            loading={loading}
            disabled={!product.inStock}
            className="flex items-center"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            {product.inStock ? 'Agregar' : 'Agotado'}
          </Button>
        </div>

        {product.stockQuantity <= 5 && product.inStock && (
          <div className="mt-2">
            <span className="text-xs text-orange-600 font-medium">
              ¡Solo quedan {product.stockQuantity}!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
