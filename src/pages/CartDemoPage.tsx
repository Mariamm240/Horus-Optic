import { useState } from 'react';
import { Button, Card, CardContent } from '../components/ui';
import { Minus, Plus, Trash2, ShoppingBag, Heart, Star, Gift, Truck } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { Link } from 'react-router-dom';

// Datos de ejemplo para mostrar la experiencia del cliente
const mockCartItems = [
  {
    id: '1',
    product: {
      id: '1',
      name: 'Ray-Ban Wayfarer Classic',
      brand: 'Ray-Ban',
      imageUrl: '/Media/CATALOGO WEB 600 x400/_MG_2505.jpg',
      category: 'Gafas de Sol',
      price: 189.99,
      rating: 4.8,
      reviewCount: 2456
    },
    quantity: 1,
    price: 189.99
  },
  {
    id: '2',
    product: {
      id: '2',
      name: 'Oakley Holbrook Polarizadas',
      brand: 'Oakley',
      imageUrl: '/Media/CATALOGO WEB 600 x400/_MG_2507.jpg',
      category: 'Gafas de Sol',
      price: 245.00,
      rating: 4.9,
      reviewCount: 1823
    },
    quantity: 2,
    price: 245.00
  },
  {
    id: '3',
    product: {
      id: '3',
      name: 'Lentes de Contacto Diarios',
      brand: 'Acuvue',
      imageUrl: '/Media/CATALOGO WEB 600 x400/_MG_2508.jpg',
      category: 'Lentes de Contacto',
      price: 35.99,
      rating: 4.7,
      reviewCount: 892
    },
    quantity: 3,
    price: 35.99
  }
];

export function CartDemoPage() {
  const [cartItems, setCartItems] = useState(mockCartItems);

  // Calcular totales
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.16 * 100) / 100; // 16% IVA
  const shipping = subtotal >= 150 ? 0 : 15.99;
  const total = subtotal + tax + shipping;

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== itemId));
    } else {
      setCartItems(prev => prev.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <div className="mb-6">
            <ShoppingBag className="h-24 w-24 mx-auto mb-4 text-gray-300" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Tu carrito está vacío</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            ¡Descubre nuestra increíble colección de gafas y lentes de contacto!
          </p>
          <Link to="/products">
            <Button size="lg" className="px-8 py-4 text-lg" style={{ background: 'linear-gradient(135deg, #B892D5, #E29AEE)' }}>
              <ShoppingBag className="mr-2 h-5 w-5" />
              Explorar Productos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Carrito de Compras</h1>
          <p className="text-gray-600">{cartItems.length} producto{cartItems.length !== 1 ? 's' : ''} en tu carrito</p>
        </div>
        <Button
          variant="outline"
          onClick={clearCart}
          className="text-red-600 border-red-200 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Vaciar Carrito
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  {/* Product Image */}
                  <Link to={`/products/${item.product.id}`} className="relative block">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-32 h-32 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    />
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                      <Heart className="h-4 w-4 text-gray-400 hover:text-red-500" />
                    </button>
                  </Link>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <Link to={`/products/${item.product.id}`}>
                          <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-purple-600 transition-colors cursor-pointer">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mb-2">
                          {item.product.brand} • {item.product.category}
                        </p>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(item.product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            ({item.product.reviewCount} reseñas)
                          </span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border-2 rounded-xl overflow-hidden">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-3 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-3 min-w-[4rem] text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-3 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-2xl font-bold" style={{ color: '#B892D5' }}>
                            {formatPrice(item.price * item.quantity)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {formatPrice(item.price)} c/u
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Continue Shopping */}
          <Link to="/products">
            <Card className="border-2 border-dashed border-gray-300 hover:border-purple-300 transition-colors cursor-pointer">
              <CardContent className="p-8 text-center">
                <Plus className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Agregar más productos</h3>
                <p className="text-gray-500">Continúa explorando nuestra colección</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Card className="overflow-hidden">
              <div className="p-6 text-white" style={{ background: 'linear-gradient(135deg, #B892D5, #E29AEE)' }}>
                <h2 className="text-2xl font-bold">
                  Resumen del Pedido
                </h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IVA (16%):</span>
                    <span className="font-semibold">{formatPrice(tax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío:</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-green-600 font-bold">¡Gratis!</span>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total:</span>
                      <span className="text-2xl font-bold" style={{ color: '#B892D5' }}>
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Free Shipping Progress */}
                {subtotal < 150 && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Truck className="h-5 w-5 text-yellow-600 mr-2" />
                      <span className="text-sm font-semibold text-yellow-800">
                        Envío Gratis
                      </span>
                    </div>
                    <p className="text-sm text-yellow-700 mb-3">
                      Agrega {formatPrice(150 - subtotal)} más para obtener envío gratuito
                    </p>
                    <div className="w-full bg-yellow-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(subtotal / 150) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Checkout Buttons */}
                <div className="space-y-3">
                  <Button className="w-full text-lg py-4" size="lg" style={{ background: 'linear-gradient(135deg, #B892D5, #E29AEE)' }}>
                    <Gift className="mr-2 h-5 w-5" />
                    Proceder al Pago
                  </Button>
                  <Link to="/products">
                    <Button variant="outline" className="w-full py-3">
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>

                {/* Security Badge */}
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Compra 100% segura</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-gray-900">¿Por qué elegir Horus Optic?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Truck className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700">Envío gratis desde $150</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700">Garantía de calidad</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-purple-600" />
                    </div>
                    <span className="text-sm text-gray-700">30 días de devolución</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
