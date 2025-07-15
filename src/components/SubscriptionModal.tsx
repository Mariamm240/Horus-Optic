import { useState } from 'react';
import { X, Eye, Calendar, CreditCard, Shield, Check } from 'lucide-react';
import { Button } from './ui/Button';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: {
    id: string;
    name: string;
    price: number;
    period: string;
    description: string;
    features: string[];
  };
}

export function SubscriptionModal({ isOpen, onClose, plan }: SubscriptionModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Información personal
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Información de la prescripción
    rightEye: {
      sphere: '',
      cylinder: '',
      axis: '',
      baseCurve: '',
      diameter: ''
    },
    leftEye: {
      sphere: '',
      cylinder: '',
      axis: '',
      baseCurve: '',
      diameter: ''
    },
    brand: '',
    lensType: '',
    // Información de entrega
    address: '',
    city: '',
    postalCode: '',
    // Información de pago
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: ''
  });

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as Record<string, string>),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la suscripción
    console.log('Subscription data:', { plan, formData });
    alert('¡Suscripción creada exitosamente!');
    onClose();
  };

  if (!isOpen || !plan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Suscripción {plan.name}</h2>
            <p className="text-gray-600">${plan.price}/{plan.period}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex items-center ${stepNumber < 4 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > stepNumber ? <Check className="h-4 w-4" /> : stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > stepNumber ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Información Personal</span>
            <span>Prescripción</span>
            <span>Entrega</span>
            <span>Pago</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Eye className="mr-2 h-5 w-5 text-primary-600" />
                Información Personal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tu apellido"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Prescription */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Eye className="mr-2 h-5 w-5 text-primary-600" />
                Información de Prescripción
              </h3>
              
              {/* Right Eye */}
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Ojo Derecho (OD)</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Esfera</label>
                    <input
                      type="text"
                      value={formData.rightEye.sphere}
                      onChange={(e) => handleInputChange('rightEye.sphere', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="-2.50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cilindro</label>
                    <input
                      type="text"
                      value={formData.rightEye.cylinder}
                      onChange={(e) => handleInputChange('rightEye.cylinder', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="-0.75"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Eje</label>
                    <input
                      type="text"
                      value={formData.rightEye.axis}
                      onChange={(e) => handleInputChange('rightEye.axis', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="180"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Curva Base</label>
                    <input
                      type="text"
                      value={formData.rightEye.baseCurve}
                      onChange={(e) => handleInputChange('rightEye.baseCurve', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="8.4"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Diámetro</label>
                    <input
                      type="text"
                      value={formData.rightEye.diameter}
                      onChange={(e) => handleInputChange('rightEye.diameter', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="14.2"
                    />
                  </div>
                </div>
              </div>

              {/* Left Eye */}
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Ojo Izquierdo (OS)</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Esfera</label>
                    <input
                      type="text"
                      value={formData.leftEye.sphere}
                      onChange={(e) => handleInputChange('leftEye.sphere', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="-2.25"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cilindro</label>
                    <input
                      type="text"
                      value={formData.leftEye.cylinder}
                      onChange={(e) => handleInputChange('leftEye.cylinder', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="-0.50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Eje</label>
                    <input
                      type="text"
                      value={formData.leftEye.axis}
                      onChange={(e) => handleInputChange('leftEye.axis', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="170"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Curva Base</label>
                    <input
                      type="text"
                      value={formData.leftEye.baseCurve}
                      onChange={(e) => handleInputChange('leftEye.baseCurve', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="8.4"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Diámetro</label>
                    <input
                      type="text"
                      value={formData.leftEye.diameter}
                      onChange={(e) => handleInputChange('leftEye.diameter', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="14.2"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Marca Preferida
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { id: 'acuvue', name: 'Acuvue', image: '/Media/Lentes de contacto/34.png' },
                    { id: 'biofinity', name: 'Biofinity', image: '/Media/Lentes de contacto/35.png' },
                    { id: 'dailies', name: 'Dailies', image: '/Media/Lentes de contacto/36.png' },
                    { id: 'air-optix', name: 'Air Optix', image: '/Media/Lentes de contacto/37.png' }
                  ].map((brand) => (
                    <div
                      key={brand.id}
                      className={`relative cursor-pointer rounded-lg border-2 p-3 hover:shadow-md transition-all ${
                        formData.brand === brand.id 
                          ? 'border-primary-500 bg-primary-50' 
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => handleInputChange('brand', brand.id)}
                    >
                      <div className="text-center">
                        <img 
                          src={brand.image} 
                          alt={brand.name}
                          className="w-16 h-16 mx-auto mb-2 object-contain"
                        />
                        <span className="text-sm font-medium text-gray-900">{brand.name}</span>
                      </div>
                      {formData.brand === brand.id && (
                        <div className="absolute top-2 right-2">
                          <Check className="h-4 w-4 text-primary-600" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lens Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Tipo de Lente
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'daily', name: 'Diarios', image: '/Media/Lentes de contacto/24.png', desc: 'Uso único diario' },
                    { id: 'monthly', name: 'Mensuales', image: '/Media/Lentes de contacto/25.png', desc: 'Duración mensual' },
                    { id: 'toric', name: 'Tóricos', image: '/Media/Lentes de contacto/26.png', desc: 'Para astigmatismo' }
                  ].map((type) => (
                    <div
                      key={type.id}
                      className={`relative cursor-pointer rounded-lg border-2 p-4 hover:shadow-md transition-all ${
                        formData.lensType === type.id 
                          ? 'border-primary-500 bg-primary-50' 
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => handleInputChange('lensType', type.id)}
                    >
                      <div className="text-center">
                        <img 
                          src={type.image} 
                          alt={type.name}
                          className="w-20 h-20 mx-auto mb-3 object-contain"
                        />
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">{type.name}</h4>
                        <p className="text-xs text-gray-600">{type.desc}</p>
                      </div>
                      {formData.lensType === type.id && (
                        <div className="absolute top-2 right-2">
                          <Check className="h-4 w-4 text-primary-600" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Delivery Information */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary-600" />
                Información de Entrega
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Calle Principal 123"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Tu ciudad"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Código Postal
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment Information */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <CreditCard className="mr-2 h-5 w-5 text-primary-600" />
                Información de Pago
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de Tarjeta
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha de Vencimiento
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Titular
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cardHolder}
                      onChange={(e) => handleInputChange('cardHolder', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Nombre en la tarjeta"
                    />
                  </div>
                </div>
                
                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Resumen del Pedido</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{plan.name}</span>
                      <span className="font-medium">${plan.price}/{plan.period}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Envío</span>
                      <span className="font-medium text-green-600">Gratis</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-primary-600">${plan.price}/{plan.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => step > 1 ? setStep(step - 1) : onClose()}
              className="px-6 py-2"
            >
              {step > 1 ? 'Anterior' : 'Cancelar'}
            </Button>
            
            {step < 4 ? (
              <Button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white"
              >
                Siguiente
              </Button>
            ) : (
              <Button
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white flex items-center"
              >
                <Shield className="mr-2 h-4 w-4" />
                Completar Suscripción
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
