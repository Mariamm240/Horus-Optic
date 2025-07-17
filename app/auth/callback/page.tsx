'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../src/lib/supabase';
import toast from 'react-hot-toast';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error during auth callback:', error);
          toast.error('Error durante la autenticación');
          router.push('/auth');
          return;
        }

        if (data.session) {
          toast.success('¡Sesión iniciada exitosamente!');
          router.push('/');
        } else {
          router.push('/auth');
        }
      } catch (error) {
        console.error('Unexpected error during auth callback:', error);
        toast.error('Error inesperado');
        router.push('/auth');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-md mx-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Completando autenticación...
        </h2>
        <p className="text-gray-600">
          Por favor espera mientras procesamos tu información.
        </p>
      </div>
    </div>
  );
}
