import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { registerSchema, type RegisterFormData } from '../../lib/validations';
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';

interface RegisterFormProps {
  onSuccess?: () => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register: registerUser, loading, signInWithGoogle, signInWithFacebook } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data);
      toast.success('¡Cuenta creada exitosamente! Revisa tu email para confirmar tu cuenta.');
      onSuccess?.();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error al crear la cuenta');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success('Registrándose con Google...');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error al registrarse con Google');
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
      toast.success('Registrándose con Facebook...');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error al registrarse con Facebook');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-4" style={{ color: '#B892D5' }}>Crear Cuenta</h1>
      
      {/* Social Icons */}
      <div className="flex justify-center space-x-3 mb-5">
        <button 
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-10 h-10 border rounded-xl flex items-center justify-center transition-colors hover:bg-gray-50 disabled:opacity-50" 
          style={{ borderColor: '#B892D5', color: '#B892D5' }}
        >
          <FaGooglePlusG className="text-base" />
        </button>
        <button 
          type="button"
          onClick={handleFacebookSignIn}
          disabled={loading}
          className="w-10 h-10 border rounded-xl flex items-center justify-center transition-colors hover:bg-gray-50 disabled:opacity-50" 
          style={{ borderColor: '#B892D5', color: '#B892D5' }}
        >
          <FaFacebookF className="text-base" />
        </button>
        <a href="#" className="w-10 h-10 border rounded-xl flex items-center justify-center transition-colors" style={{ borderColor: '#B892D5', color: '#B892D5' }}>
          <FaGithub className="text-base" />
        </a>
        <a href="#" className="w-10 h-10 border rounded-xl flex items-center justify-center transition-colors" style={{ borderColor: '#B892D5', color: '#B892D5' }}>
          <FaLinkedinIn className="text-base" />
        </a>
      </div>
      
      <span className="text-xs block text-center mb-5" style={{ color: '#9C989F' }}>o usa tu email para registrarte</span>
      <div className="flex gap-2 mb-4">
        <div className="flex-1">
          <input
            {...register('firstName')}
            placeholder="Nombre"
            className="w-full border-none rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-300"
            style={{ backgroundColor: '#f8f9fa' }}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            {...register('lastName')}
            placeholder="Apellido"
            className="w-full border-none rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-300"
            style={{ backgroundColor: '#f8f9fa' }}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <input
          type="email"
          {...register('email')}
          placeholder="Email"
          className="w-full border-none rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-300"
          style={{ backgroundColor: '#f8f9fa' }}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4 relative">
        <input
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          placeholder="Contraseña"
          className="w-full border-none rounded-lg px-4 py-3 text-sm outline-none pr-10 focus:ring-2 focus:ring-purple-300"
          style={{ backgroundColor: '#f8f9fa' }}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity"
          style={{ color: '#9C989F' }}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
        {errors.password && (
          <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div className="mb-6 relative">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          {...register('confirmPassword')}
          placeholder="Confirmar Contraseña"
          className="w-full border-none rounded-lg px-4 py-3 text-sm outline-none pr-10 focus:ring-2 focus:ring-purple-300"
          style={{ backgroundColor: '#f8f9fa' }}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity"
          style={{ color: '#9C989F' }}
        >
          {showConfirmPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
        {errors.confirmPassword && (
          <p className="mt-1 text-xs text-red-600">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: 'linear-gradient(135deg, #B892D5, #E29AEE)' }}
      >
        {loading ? 'Registrando...' : 'Registrarse'}
      </button>
    </form>
  );
}
