import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { loginSchema, type LoginFormData } from '../../lib/validations';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input } from '../ui';
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        placeholder="tu@email.com"
      />

      <div className="relative">
        <Input
          label="Contraseña"
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          error={errors.password?.message}
          placeholder="Tu contraseña"
        />
        <button
          type="button"
          className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>

      <Button
        type="submit"
        className="w-full"
        loading={loading}
      >
        Iniciar Sesión
      </Button>
    </form>
  );
}
