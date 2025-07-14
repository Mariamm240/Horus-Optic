import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { registerSchema, type RegisterFormData } from '../../lib/validations';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input } from '../ui';
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Nombre"
          {...register('firstName')}
          error={errors.firstName?.message}
          placeholder="Tu nombre"
        />
        <Input
          label="Apellido"
          {...register('lastName')}
          error={errors.lastName?.message}
          placeholder="Tu apellido"
        />
      </div>

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
          placeholder="Mínimo 6 caracteres"
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

      <div className="relative">
        <Input
          label="Confirmar Contraseña"
          type={showConfirmPassword ? 'text' : 'password'}
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
          placeholder="Confirma tu contraseña"
        />
        <button
          type="button"
          className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? (
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
        Crear Cuenta
      </Button>
    </form>
  );
}
