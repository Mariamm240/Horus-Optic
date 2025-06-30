import React, { createContext, useEffect, useState } from 'react';
import type { Cart, CartState, CartItem, AddToCartPayload, UpdateCartItemPayload } from '../types';
import { generateId } from '../lib/utils';

interface CartContextType extends CartState {
  addToCart: (payload: AddToCartPayload) => Promise<void>;
  updateCartItem: (payload: UpdateCartItemPayload) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export { CartContext };

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, setState] = useState<CartState>({
    cart: null,
    loading: false,
    error: null,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const cart = JSON.parse(savedCart) as Cart;
        setState(prev => ({ ...prev, cart }));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        localStorage.removeItem('cart');
      }
    } else {
      // Initialize empty cart
      const emptyCart: Cart = {
        id: generateId(),
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setState(prev => ({ ...prev, cart: emptyCart }));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (state.cart) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  }, [state.cart]);

  const calculateTotals = (items: CartItem[]): { subtotal: number; tax: number; total: number } => {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.08 * 100) / 100; // 8% tax
    const total = subtotal + tax;
    
    return { subtotal, tax, total };
  };

  const addToCart = async (payload: AddToCartPayload) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      // In a real app, you would fetch product details from the API
      // For now, we'll simulate this
      const mockProduct = {
        id: payload.productId,
        name: 'Sample Product',
        description: 'Sample description',
        price: 99.99,
        imageUrl: 'https://via.placeholder.com/300',
        category: 'electronics',
        brand: 'Sample Brand',
        inStock: true,
        stockQuantity: 10,
        rating: 4.5,
        reviewCount: 100,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setState(prev => {
        if (!prev.cart) return prev;

        const existingItemIndex = prev.cart.items.findIndex(
          item => item.product.id === payload.productId
        );

        let updatedItems: CartItem[];

        if (existingItemIndex >= 0) {
          // Update existing item
          updatedItems = prev.cart.items.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + payload.quantity }
              : item
          );
        } else {
          // Add new item
          const newItem: CartItem = {
            id: generateId(),
            product: mockProduct,
            quantity: payload.quantity,
            price: mockProduct.price,
          };
          updatedItems = [...prev.cart.items, newItem];
        }

        const totals = calculateTotals(updatedItems);

        return {
          ...prev,
          cart: {
            ...prev.cart,
            items: updatedItems,
            ...totals,
            updatedAt: new Date().toISOString(),
          },
          loading: false,
        };
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to add item to cart',
      }));
      throw error;
    }
  };

  const updateCartItem = async (payload: UpdateCartItemPayload) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      setState(prev => {
        if (!prev.cart) return prev;

        const updatedItems = prev.cart.items.map(item =>
          item.id === payload.itemId
            ? { ...item, quantity: payload.quantity }
            : item
        ).filter(item => item.quantity > 0); // Remove items with 0 quantity

        const totals = calculateTotals(updatedItems);

        return {
          ...prev,
          cart: {
            ...prev.cart,
            items: updatedItems,
            ...totals,
            updatedAt: new Date().toISOString(),
          },
          loading: false,
        };
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to update cart item',
      }));
      throw error;
    }
  };

  const removeFromCart = async (itemId: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      setState(prev => {
        if (!prev.cart) return prev;

        const updatedItems = prev.cart.items.filter(item => item.id !== itemId);
        const totals = calculateTotals(updatedItems);

        return {
          ...prev,
          cart: {
            ...prev.cart,
            items: updatedItems,
            ...totals,
            updatedAt: new Date().toISOString(),
          },
          loading: false,
        };
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to remove item from cart',
      }));
      throw error;
    }
  };

  const clearCart = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      setState(prev => {
        if (!prev.cart) return prev;

        return {
          ...prev,
          cart: {
            ...prev.cart,
            items: [],
            subtotal: 0,
            tax: 0,
            total: 0,
            updatedAt: new Date().toISOString(),
          },
          loading: false,
        };
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to clear cart',
      }));
      throw error;
    }
  };

  const getTotalItems = (): number => {
    return state.cart?.items.reduce((total, item) => total + item.quantity, 0) || 0;
  };

  const value: CartContextType = {
    ...state,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
