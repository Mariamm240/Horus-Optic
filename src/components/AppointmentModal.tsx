import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input } from './ui';
import { X, Calendar, Clock, User, FileText } from 'lucide-react';
import toast from 'react-hot-toast';

const appointmentSchema = z.object({
  firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
  service: z.string().min(1, 'Debe seleccionar un servicio'),
  date: z.string().min(1, 'Debe seleccionar una fecha'),
  time: z.string().min(1, 'Debe seleccionar una hora'),
  notes: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export function AppointmentModal({ isOpen, onClose, selectedService }: AppointmentModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      service: selectedService || '',
    },
  });

  const services = [
    'Examen Visual Completo',
    'Adaptación de Lentes de Contacto',
    'Terapia Visual',
    'Detección de Patologías Oculares',
    'Optometría Pediátrica',
    'Salud Ocular para Adultos Mayores',
    'Asesoría en Lentes Oftálmicos',
    'Control de Miopía',
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30',
  ];

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulamos el envío del email
      const emailData = {
        to: data.email,
        subject: 'Confirmación de Cita - Horus Optic',
        content: `
          Estimado/a ${data.firstName} ${data.lastName},
          
          Su cita ha sido agendada exitosamente:
          
          📅 Servicio: ${data.service}
          📅 Fecha: ${new Date(data.date).toLocaleDateString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
          🕐 Hora: ${data.time}
          📞 Teléfono: ${data.phone}
          📧 Email: ${data.email}
          ${data.notes ? `📝 Notas: ${data.notes}` : ''}
          
          Nos pondremos en contacto con usted para confirmar la disponibilidad.
          
          Gracias por confiar en Horus Optic.
          
          Atentamente,
          Equipo Horus Optic
        `,
      };

      // En un entorno real, aquí harías la llamada a tu API de email
      console.log('Datos de la cita:', data);
      console.log('Email que se enviaría:', emailData);
      
      // Simulamos un delay de envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('¡Cita agendada exitosamente! Recibirá un email de confirmación.');
      reset();
      onClose();
      
    } catch (error: unknown) {
      console.error('Error al agendar cita:', error);
      toast.error('Error al agendar la cita. Por favor, intente nuevamente.');
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
      className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/5"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.8)]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-horus-purple/10">
              <Calendar className="h-5 w-5 text-horus-purple" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Agendar Cita</h2>
              <p className="text-gray-600">Complete el formulario para agendar su cita</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-horus-purple" />
              Información Personal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Nombre"
                {...register('firstName')}
                error={errors.firstName?.message}
                placeholder="Su nombre"
              />
              <Input
                label="Apellido"
                {...register('lastName')}
                error={errors.lastName?.message}
                placeholder="Su apellido"
              />
              <Input
                label="Email"
                type="email"
                {...register('email')}
                error={errors.email?.message}
                placeholder="su@email.com"
              />
              <Input
                label="Teléfono"
                {...register('phone')}
                error={errors.phone?.message}
                placeholder="Ej: 3001234567"
              />
            </div>
          </div>

          {/* Appointment Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-horus-purple" />
              Detalles de la Cita
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio
                </label>
                <select
                  {...register('service')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Seleccione un servicio</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                )}
              </div>

              <Input
                label="Fecha Preferida"
                type="date"
                {...register('date')}
                error={errors.date?.message}
                min={new Date().toISOString().split('T')[0]}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hora Preferida
                </label>
                <select
                  {...register('time')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Seleccione una hora</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" style={{ color: '#B892D5' }} />
              Información Adicional
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notas o comentarios (opcional)
              </label>
              <textarea
                {...register('notes')}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Cualquier información adicional que considere relevante..."
              />
            </div>
          </div>

          {/* Notice */}
          <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(184, 146, 213, 0.1)', borderColor: 'rgba(184, 146, 213, 0.3)', border: '1px solid' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Clock className="h-5 w-5 mt-0.5" style={{ color: '#B892D5' }} />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium" style={{ color: '#B892D5' }}>Importante</h4>
                <p className="text-sm mt-1" style={{ color: '#8B5A9B' }}>
                  Su cita será confirmada por nuestro equipo. Recibirá un email de confirmación con los detalles finales. 
                  Las citas están sujetas a disponibilidad.
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
              className="flex-1 text-white hover:bg-purple-700"
              style={{ backgroundColor: '#B892D5' }}
              loading={isSubmitting}
            >
              {isSubmitting ? 'Agendando...' : 'Agendar Cita'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
