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
  const { register: registerUser, loading } = useAuth();
  
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-4">Crear Cuenta</h1>
      
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
      
      <span className="text-xs text-gray-600 block text-center mb-5">o usa tu email para registrarte</span>
      <div className="flex gap-2 mb-4">
        <div className="flex-1">
          <input
            {...register('firstName')}
            placeholder="Nombre"
            className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-sm outline-none"
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            {...register('lastName')}
            placeholder="Apellido"
            className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-sm outline-none"
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

      <div className="mb-6 relative">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          {...register('confirmPassword')}
          placeholder="Confirmar Contraseña"
          className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-sm outline-none pr-10"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
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
        className="w-full bg-indigo-600 text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase cursor-pointer hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Registrando...' : 'Registrarse'}
      </button>
    </form>
  );
}
