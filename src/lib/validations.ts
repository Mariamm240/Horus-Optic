import { z } from 'zod';

// Auth validation schemas
export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: z.string(),
  firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

// Product validation schemas
export const productSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  price: z.number().min(0, 'El precio debe ser mayor a 0'),
  imageUrl: z.string().url('URL de imagen inválida'),
  category: z.string().min(1, 'La categoría es requerida'),
  brand: z.string().min(1, 'La marca es requerida'),
  stockQuantity: z.number().min(0, 'La cantidad debe ser mayor o igual a 0'),
});

// Address validation schema
export const addressSchema = z.object({
  firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  company: z.string().optional(),
  address1: z.string().min(5, 'La dirección debe tener al menos 5 caracteres'),
  address2: z.string().optional(),
  city: z.string().min(2, 'La ciudad debe tener al menos 2 caracteres'),
  state: z.string().min(2, 'El estado debe tener al menos 2 caracteres'),
  zipCode: z.string().min(5, 'El código postal debe tener al menos 5 caracteres'),
  country: z.string().min(2, 'El país debe tener al menos 2 caracteres'),
  phone: z.string().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ProductFormData = z.infer<typeof productSchema>;
export type AddressFormData = z.infer<typeof addressSchema>;
