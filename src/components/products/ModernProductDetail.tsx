import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Minus, 
  Plus,
  ChevronRight,
  Truck,
  Shield,
  RefreshCw
} from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/Button';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  imageUrl: string;
  imageUrls?: string[];
  category: string;
  rating: number;
  reviews: number;
  stock: number;
  colors?: string[];
  sizes?: string[];
  features?: string[];
}

const mockProduct: Product = {
  id: 1,
  name: "Telescopio Astronómico Profesional 150mm",
  price: 899.99,
  originalPrice: 1199.99,
  description: "Telescopio refractor de alta calidad con apertura de 150mm, perfecto para observación astronómica avanzada. Incluye montura ecuatorial motorizada y accesorios profesionales.",
  imageUrl: "/api/placeholder/600/600",
  imageUrls: [
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600"
  ],
  category: "Telescopios",
  rating: 4.8,
  reviews: 247,
  stock: 12,
  colors: ["Negro", "Blanco", "Gris"],
  features: [
    "Apertura de 150mm para máxima captación de luz",
    "Montura ecuatorial motorizada con seguimiento automático",
    "Oculares de alta calidad incluidos",
    "Compatible con fotografía astronómica",
    "Construcción robusta y duradera"
  ]
};

export function ModernProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product] = useState<Product>(mockProduct);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    console.log('Cargando producto con ID:', id);
  }, [id]);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id.toString(),
      quantity
    });
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <Link to="/productos" className="ml-4 text-gray-400 hover:text-gray-500 transition-colors">
                  Productos
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="ml-4 text-gray-900 font-medium">{product.category}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse">
            {/* Image Thumbnails */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-4">
                {product.imageUrls?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 bg-white rounded-lg flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${
                      selectedImage === index ? 'ring-2 ring-blue-500 ring-offset-2' : 'border border-gray-200'
                    }`}
                  >
                    <span className="sr-only">Imagen {index + 1}</span>
                    <img 
                      src={image} 
                      alt={`Vista ${index + 1}`}
                      className="h-full w-full object-center object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full aspect-square">
              <img
                src={product.imageUrls?.[selectedImage] || product.imageUrl}
                alt={product.name}
                className="w-full h-full object-center object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="ml-3 text-sm text-gray-600">
                {product.rating} de 5 estrellas ({product.reviews} reseñas)
              </p>
            </div>

            {/* Price */}
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                      -{discountPercentage}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Descripción</h3>
              <p className="text-base text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            {product.features && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Características principales
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Color disponible</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-sm border rounded-lg transition-all ${
                        selectedColor === color
                          ? 'border-blue-600 bg-blue-50 text-blue-600 ring-2 ring-blue-600 ring-offset-2'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="mt-10">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-3 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 py-3 text-gray-900 font-medium min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock}
                    className="p-3 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex-1">
                  <Button
                    onClick={handleAddToCart}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Agregar al Carrito</span>
                  </Button>
                </div>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 border border-gray-300 rounded-lg transition-all ${
                    isWishlisted
                      ? 'text-red-600 border-red-300 bg-red-50'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>

                <button className="p-3 border border-gray-300 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-4 text-sm">
                {product.stock > 0 ? (
                  <span className="text-green-600 font-medium">
                    ✓ En stock ({product.stock} disponibles)
                  </span>
                ) : (
                  <span className="text-red-600 font-medium">Agotado</span>
                )}
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Beneficios</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Envío gratis</p>
                    <p className="text-sm text-gray-500">En compras mayores a $500</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Garantía extendida</p>
                    <p className="text-sm text-gray-500">2 años de garantía completa</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Devoluciones fáciles</p>
                    <p className="text-sm text-gray-500">30 días sin costo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
