import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

export function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          toast.error('Error en la autenticación');
          navigate('/auth');
          return;
        }

        if (data.session) {
          // User is authenticated, check if profile exists
          const { error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.session.user.id)
            .single();

          if (profileError && profileError.code === 'PGRST116') {
            // Profile doesn't exist, create it
            const { error: insertError } = await supabase
              .from('profiles')
              .insert({
                id: data.session.user.id,
                email: data.session.user.email || '',
                first_name: data.session.user.user_metadata?.full_name?.split(' ')[0] || 
                           data.session.user.user_metadata?.name?.split(' ')[0] || '',
                last_name: data.session.user.user_metadata?.full_name?.split(' ').slice(1).join(' ') || 
                          data.session.user.user_metadata?.name?.split(' ').slice(1).join(' ') || '',
                avatar_url: data.session.user.user_metadata?.avatar_url || 
                           data.session.user.user_metadata?.picture || null,
              });

            if (insertError) {
              console.error('Error creating profile:', insertError);
            }
          }

          toast.success('¡Autenticación exitosa!');
          navigate('/');
        } else {
          navigate('/auth');
        }
      } catch (error) {
        console.error('Unexpected error in auth callback:', error);
        toast.error('Error inesperado en la autenticación');
        navigate('/auth');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
        <h2 className="text-lg font-medium text-gray-900">Completando autenticación...</h2>
        <p className="text-gray-600">Por favor espera un momento.</p>
      </div>
    </div>
  );
}
