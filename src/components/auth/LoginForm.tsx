import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { loginSchema, type LoginFormData } from '../../lib/validations';
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';

interface LoginFormProps {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
      toast.success('¡Bienvenido de vuelta!');
      onSuccess?.();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error al iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
      
      {/* Social Icons */}
      <div className="flex justify-center space-x-3 mb-5">
        <a href="#" className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
          <FaGooglePlusG className="text-base" />
        </a>
        <a href="#" className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
          <FaFacebookF className="text-base" />
        </a>
        <a href="#" className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
          <FaGithub className="text-base" />
        </a>
        <a href="#" className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
          <FaLinkedinIn className="text-base" />
        </a>
      </div>
      
      <span className="text-xs text-gray-600 block text-center mb-5">o usa tu email y contraseña</span>
      <div className="mb-4">
        <input
          type="email"
          {...register('email')}
          placeholder="Email"
          className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-sm outline-none"
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
          className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-sm outline-none pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
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

      <a href="#" className="text-xs text-gray-600 hover:text-indigo-600 block mb-6">
        ¿Olvidaste tu contraseña?
      </a>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase cursor-pointer hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Iniciando...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
}
