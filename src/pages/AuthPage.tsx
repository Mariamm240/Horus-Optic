import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { RegisterForm } from '../components/auth/RegisterForm';
import { ArrowLeft, Eye } from 'lucide-react';

export function AuthPage() {
  const [isActive, setIsActive] = useState(false);

  const toggleToRegister = () => setIsActive(true);
  const toggleToLogin = () => setIsActive(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #E29AEE 0%, #B892D5 100%)' }}>
      {/* Back to Home Link */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 inline-flex items-center text-sm transition-colors px-3 py-2 rounded-full shadow-sm" 
        style={{ color: '#9C989F', backgroundColor: '#FFFFFF' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#B892D5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#9C989F';
        }}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Volver al inicio
      </Link>

      {/* Main Container */}
      <div className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl min-h-[480px] transition-all duration-600 ease-in-out ${isActive ? 'active' : ''}`}>
        
        {/* Sign In Form */}
        <div className={`absolute top-0 h-full w-1/2 transition-all duration-600 ease-in-out z-20 ${isActive ? 'transform translate-x-full' : 'left-0'}`}>
          <div className="bg-white flex items-center justify-center flex-col px-10 h-full">
            <div className="flex items-center space-x-2 mb-8">
              <Eye className="h-8 w-8" style={{ color: '#B892D5' }} />
              <h1 className="text-2xl font-bold" style={{ color: '#9C989F' }}>HORUS OPTIC</h1>
            </div>
            <LoginForm />
          </div>
        </div>

        {/* Sign Up Form */}
        <div className={`absolute top-0 h-full w-1/2 transition-all duration-600 ease-in-out z-10 ${
          isActive 
            ? 'transform translate-x-full opacity-100 z-50 animate-slideIn' 
            : 'left-0 opacity-0 z-10'
        }`}>
          <div className="bg-white flex items-center justify-center flex-col px-10 h-full">
            <div className="flex items-center space-x-2 mb-8">
              <Eye className="h-8 w-8" style={{ color: '#B892D5' }} />
              <h1 className="text-2xl font-bold" style={{ color: '#9C989F' }}>HORUS OPTIC</h1>
            </div>
            <RegisterForm />
          </div>
        </div>

        {/* Toggle Container */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out z-50 ${
          isActive 
            ? 'transform -translate-x-full rounded-r-[150px] rounded-l-[100px]' 
            : 'rounded-l-[150px] rounded-r-[100px]'
        }`}>
          <div className={`bg-gradient-to-r from-indigo-500 to-indigo-700 h-full relative -left-full w-[200%] transform transition-all duration-600 ease-in-out text-white ${
            isActive ? 'translate-x-1/2' : 'translate-x-0'
          }`}>
            
            {/* Toggle Left Panel */}
            <div className={`absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transition-all duration-600 ease-in-out ${
              isActive ? 'transform translate-x-0' : 'transform -translate-x-[200%]'
            }`}>
              <h1 className="text-2xl font-bold mb-4">¡Bienvenido de vuelta!</h1>
              <p className="text-sm leading-5 tracking-wide mb-8">
                Ingresa tus datos personales para usar todas las funciones del sitio
              </p>
              <button
                onClick={toggleToLogin}
                className="bg-transparent border border-white text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase cursor-pointer hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Iniciar Sesión
              </button>
            </div>

            {/* Toggle Right Panel */}
            <div className={`absolute right-0 w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transition-all duration-600 ease-in-out ${
              isActive ? 'transform translate-x-[200%]' : 'transform translate-x-0'
            }`}>
              <h1 className="text-2xl font-bold mb-4">¡Hola, Amigo!</h1>
              <p className="text-sm leading-5 tracking-wide mb-8">
                Regístrate con tus datos personales para usar todas las funciones del sitio
              </p>
              <button
                onClick={toggleToRegister}
                className="bg-transparent border border-white text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase cursor-pointer hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Registrarse
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
