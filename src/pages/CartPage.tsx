import { useCart } from '../hooks/useCart';
import { Button, Card, CardContent, CardHeader } from '../components/ui';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import Link from 'next/link';

export function CartPage() {
  const { cart, updateCartItem, removeFromCart, clearCart, loading } = useCart();

  if (!cart || cart.items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-4" style={{ color: '#B892D5' }} />
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#B892D5' }}>Tu carrito está vacío</h2>
          <p className="mb-8" style={{ color: '#9C989F' }}>
            Agrega algunos productos a tu carrito para comenzar a comprar.
          </p>
          <Link href="/products">
            <Button size="lg" style={{ backgroundColor: '#B892D5', color: '#FFFFFF' }}>
              Explorar Productos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      await removeFromCart(itemId);
    } else {
      await updateCartItem({ itemId, quantity: newQuantity });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold" style={{ color: '#B892D5' }}>Carrito de Compras</h1>
        <Button
          variant="outline"
          onClick={clearCart}
          className="hover:opacity-80"
          style={{ color: '#E29AEE', borderColor: '#E29AEE' }}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Vaciar Carrito
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {item.product.brand}
                    </p>
                    <p className="text-lg font-bold text-horus-purple">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={loading}
                        className="p-2 hover:bg-gray-100 disabled:opacity-50"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 py-2 min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        disabled={loading}
                        className="p-2 hover:bg-gray-100 disabled:opacity-50"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      disabled={loading}
                      className="p-2 text-red-600 hover:text-red-700 disabled:opacity-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-900">
                Resumen del Pedido
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">
                    {formatPrice(cart.subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Impuestos:</span>
                  <span className="font-medium">
                    {formatPrice(cart.tax)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío:</span>
                  <span className="font-medium">
                    {cart.subtotal >= 100 ? 'Gratis' : formatPrice(9.99)}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Total:
                    </span>
                    <span className="text-lg font-bold text-horus-purple">
                      {formatPrice(cart.total + (cart.subtotal >= 100 ? 0 : 9.99))}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full" size="lg">
                  Proceder al Pago
                </Button>
                <Link href="/products">
                  <Button variant="outline" className="w-full">
                    Continuar Comprando
                  </Button>
                </Link>
              </div>

              {cart.subtotal < 100 && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-sm text-yellow-800">
                    Agrega {formatPrice(100 - cart.subtotal)} más para obtener envío gratuito
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
