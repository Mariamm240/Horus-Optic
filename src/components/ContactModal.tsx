import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input } from './ui';
import { X, Mail, Phone, MessageSquare, User, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';

const contactSchema = z.object({
  firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulamos el envío del email
      const emailData = {
        to: 'info@horusoptic.com',
        from: data.email,
        subject: `Contacto desde web: ${data.subject}`,
        content: `
          Nueva consulta desde el sitio web:
          
          👤 Nombre: ${data.firstName} ${data.lastName}
          📧 Email: ${data.email}
          📞 Teléfono: ${data.phone}
          📋 Asunto: ${data.subject}
          
          💬 Mensaje:
          ${data.message}
          
          ---
          Enviado desde el formulario de contacto de Horus Optic
        `,
      };

      // En un entorno real, aquí harías la llamada a tu API de email
      console.log('Datos del contacto:', data);
      console.log('Email que se enviaría:', emailData);
      
      // Simulamos un delay de envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
      reset();
      onClose();
      
    } catch (error: unknown) {
      console.error('Error al enviar mensaje:', error);
      toast.error('Error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4" 
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200" style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.8)'
      }}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Contáctanos</h2>
              <p className="text-gray-600">Estamos aquí para ayudarte</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Contact Info Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Phone className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">Teléfono</p>
              <p className="text-sm text-gray-600">+57 300 123 4567</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Mail className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">Email</p>
              <p className="text-sm text-gray-600">info@horusoptic.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <MapPin className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">Ubicación</p>
              <p className="text-sm text-gray-600">Bogotá, Colombia</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-blue-600" />
              Información Personal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <Input
                label="Email"
                type="email"
                {...register('email')}
                error={errors.email?.message}
                placeholder="tu@email.com"
              />
              <Input
                label="Teléfono"
                {...register('phone')}
                error={errors.phone?.message}
                placeholder="Ej: 3001234567"
              />
            </div>
          </div>

          {/* Message Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
              Tu Mensaje
            </h3>
            <div className="space-y-4">
              <Input
                label="Asunto"
                {...register('subject')}
                error={errors.subject?.message}
                placeholder="¿En qué podemos ayudarte?"
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  {...register('message')}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Escribe tu mensaje aquí. Cuéntanos qué necesitas o cualquier pregunta que tengas..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-blue-900">Te responderemos pronto</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Nuestro equipo revisará tu mensaje y te contactará en un plazo máximo de 24 horas. 
                  Para consultas urgentes, puedes llamarnos directamente.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              loading={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
