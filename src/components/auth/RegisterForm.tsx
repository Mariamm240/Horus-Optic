'use client';

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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">Crear Cuenta</h1>
        <p className="text-gray-600 text-sm">Únete a nuestra comunidad</p>
      </div>
      
      {/* Social Icons */}
      <div className="flex justify-center space-x-4">
        <button 
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="group relative p-3 bg-white border-2 border-gray-200 rounded-full hover:border-purple-300 hover:shadow-lg transition-all duration-300 disabled:opacity-50" 
        >
          <FaGooglePlusG className="text-xl text-purple-600 group-hover:scale-110 transition-transform" />
        </button>
        <button 
          type="button"
          onClick={handleFacebookSignIn}
          disabled={loading}
          className="group relative p-3 bg-white border-2 border-gray-200 rounded-full hover:border-purple-300 hover:shadow-lg transition-all duration-300 disabled:opacity-50" 
        >
          <FaFacebookF className="text-xl text-purple-600 group-hover:scale-110 transition-transform" />
        </button>
        <button 
          type="button"
          className="group relative p-3 bg-white border-2 border-gray-200 rounded-full hover:border-purple-300 hover:shadow-lg transition-all duration-300" 
        >
          <FaGithub className="text-xl text-purple-600 group-hover:scale-110 transition-transform" />
        </button>
        <button 
          type="button"
          className="group relative p-3 bg-white border-2 border-gray-200 rounded-full hover:border-purple-300 hover:shadow-lg transition-all duration-300" 
        >
          <FaLinkedinIn className="text-xl text-purple-600 group-hover:scale-110 transition-transform" />
        </button>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">o regístrate con email</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            {...register('firstName')}
            placeholder="Nombre"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none"
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <input
            {...register('lastName')}
            placeholder="Apellido"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none"
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="email"
          {...register('email')}
          placeholder="Correo electrónico"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          placeholder="Contraseña"
          className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="relative">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          {...register('confirmPassword')}
          placeholder="Confirmar contraseña"
          className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
        >
          {showConfirmPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
        {errors.confirmPassword && (
          <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-200 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Registrando...
          </div>
        ) : (
          'Crear cuenta'
        )}
      </button>
    </form>
  );
}
