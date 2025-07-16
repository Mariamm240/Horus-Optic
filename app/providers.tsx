'use client'

import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../src/context/AuthContext'
import { CartProvider } from '../src/context/CartContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              style: {
                background: '#10B981',
              },
            },
            error: {
              style: {
                background: '#EF4444',
              },
            },
          }}
        />
      </CartProvider>
    </AuthProvider>
  )
}
