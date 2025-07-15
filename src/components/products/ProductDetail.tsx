import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Plus, Minus, Maximize2, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { SimilarProducts } from './SimilarProducts';
import { useCart } from '../../hooks/useCart';
// import { useAuth } from '../../hooks/useAuth'; // Deshabilitado temporalmente para testing
import toast from 'react-hot-toast';

type TabType = 'specs' | 'shipping' | 'reviews';

interface ProductDetailProps {
  product?: {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    image: string;
    images?: string[];
    category: string;
    brand: string;
    stockQuantity: number;
    colors?: Array<{ id: string; name: string; class: string }>;
    specifications?: Record<string, string>;
  };
}

export function ProductDetail({ product: propProduct }: ProductDetailProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  // const { user } = useAuth(); // Deshabilitado temporalmente para testing
  
  // Estado local
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('specs');

  // Producto de ejemplo (en un caso real, esto vendría de una API o estado global)
  const defaultProduct = {
    id: 1,
    name: 'Ray-Ban Aviator',
    description: 'Las gafas de sol Ray-Ban Aviator son un clásico atemporal que combina gran estilo con un rendimiento excepcional. Diseñadas originalmente para los pilotos de la Fuerza Aérea de EE.UU., estas gafas de sol presentan el diseño teardrop característico que está pensado para cubrir todo el ojo.',
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviewCount: 124,
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556306303-76ce7ce1ec0d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop'
    ],
    category: 'Gafas de Sol',
    brand: 'Ray-Ban',
    stockQuantity: 50,
    colors: [
      { id: 'black', name: 'Negro', class: 'bg-black' },
      { id: 'gold', name: 'Dorado', class: 'bg-amber-400' },
      { id: 'silver', name: 'Plateado', class: 'bg-gray-300' },
    ],
    specifications: {
      'Material': 'Metal',
      'Protección UV': '100% UVA/UVB',
      'Forma': 'Aviador',
      'Garantía': '2 años'
    }
  };

  const product = propProduct || defaultProduct;
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  const handleIncrement = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product.id.toString(),
      quantity: quantity
    });
    
    toast.success(`${product.name} añadido al carrito`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-white rounded-lg overflow-hidden border border-gray-200">
            <img
              src={product.images?.[selectedImage] || product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white/90 transition-colors"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
          
          {/* Thumbnails */}
          {product.images && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-gray-500 text-sm">({product.reviewCount} reseñas)</span>
              </div>
            </div>
            <p className="text-gray-600 mt-1">{product.category}</p>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          <hr className="border-gray-200" />

          <div>
            <h3 className="text-sm font-medium mb-2">Descripción</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Colors */}
          {product.colors && (
            <div>
              <h3 className="text-sm font-medium mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-8 h-8 rounded-full border-2 ${color.class} ${
                      selectedColor === color.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium mb-3">Cantidad</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDecrement}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                disabled={quantity >= product.stockQuantity}
              >
                <Plus className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-500 ml-2">
                {product.stockQuantity} disponibles
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Añadir a favoritos
            </Button>
            <Button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <ShoppingCart className="w-5 h-5" />
              Añadir al carrito
            </Button>
          </div>

          <Button
            onClick={handleBuyNow}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
          >
            Comprar ahora
          </Button>

          <hr className="border-gray-200" />

          {/* Tabs */}
          <div>
            <div className="flex border-b border-gray-200">
              {[
                { key: 'specs', label: 'Especificaciones' },
                { key: 'shipping', label: 'Envío y devoluciones' },
                { key: 'reviews', label: 'Reseñas' }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as TabType)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 ${
                    activeTab === tab.key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="py-4">
              {activeTab === 'specs' && (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                    <React.Fragment key={key}>
                      <div className="text-gray-500">{key}</div>
                      <div className="font-medium">{value}</div>
                    </React.Fragment>
                  ))}
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• Envío gratuito en pedidos superiores a $100.</p>
                  <p>• Tiempo estimado de entrega: 3-5 días hábiles.</p>
                  <p>• Devoluciones gratuitas dentro de los 30 días posteriores a la recepción.</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  {/* Rating Overview */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-6 h-6 ${
                              star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-2xl font-bold text-gray-900">{product.rating}</span>
                      <span className="text-gray-600">de 5 estrellas</span>
                    </div>
                    <p className="text-gray-600">Basado en {product.reviewCount} reseñas</p>
                  </div>

                  {/* Customer Reviews */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Comentarios de Clientes</h3>
                    
                    {/* Review 1 */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face"
                          alt="María González"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-gray-900">María González</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  ✓ Compra verificada
                                </span>
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">15 Dic 2024</span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed mb-2">
                            Absolutamente perfectas! Las he estado usando durante 3 meses y siguen como nuevas. 
                            La calidad es incomparable. El color negro clásico combina con todo y la protección UV es excelente.
                          </p>
                          <button className="text-sm text-gray-500 hover:text-purple-600">👍 Útil (23)</button>
                        </div>
                      </div>
                    </div>

                    {/* Review 2 */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                          alt="Carlos Rodríguez"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-gray-900">Carlos Rodríguez</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[1, 2, 3, 4].map((star) => (
                                    <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                                  ))}
                                  <Star className="w-3 h-3 text-gray-300" />
                                </div>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  ✓ Compra verificada
                                </span>
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">10 Dic 2024</span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed mb-2">
                            Muy buena calidad y diseño clásico que nunca pasa de moda. El único detalle es que el estuche 
                            podría ser un poco más resistente, pero las gafas en sí son excelentes.
                          </p>
                          <button className="text-sm text-gray-500 hover:text-purple-600">👍 Útil (15)</button>
                        </div>
                      </div>
                    </div>

                    {/* Review 3 */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                          alt="Ana López"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-gray-900">Ana López</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  ✓ Compra verificada
                                </span>
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">8 Dic 2024</span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed mb-2">
                            Mi segunda compra aquí y como siempre, excelente servicio. Estas gafas son originales, 
                            se nota en cada detalle. La atención al cliente fue súper profesional.
                          </p>
                          <button className="text-sm text-gray-500 hover:text-purple-600">👍 Útil (31)</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Write Review Section */}
                  <div className="border-t pt-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600 mb-3">
                        <span className="font-medium">¿Ya compraste este producto?</span><br />
                        Comparte tu experiencia con otros clientes
                      </p>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        Escribir reseña
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white/90 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={product.images?.[selectedImage] || product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Productos similares */}
      <div className="mt-16">
        <SimilarProducts />
      </div>
    </div>
  );
}
