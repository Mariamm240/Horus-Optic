import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { RegisterForm } from '../components/auth/RegisterForm';
import { HomePage } from './HomePage';

export function AuthPage() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const toggleToRegister = () => setIsActive(true);
  const toggleToLogin = () => setIsActive(false);

  const handleBackgroundClick = () => {
    navigate('/');
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Background - HomePage real */}
      <div className="fixed inset-0 z-30">
        <HomePage />
      </div>

      {/* Modal Container - Click outside to close */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={handleBackgroundClick}
      >
        {/* Modal Content */}
        <div 
          className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl min-h-[480px] transition-all duration-600 ease-in-out ${isActive ? 'active' : ''}`}
          onClick={handleModalClick}
        >
        
        {/* Sign In Form */}
        <div className={`absolute top-0 h-full w-1/2 transition-all duration-600 ease-in-out z-20 ${isActive ? 'transform translate-x-full' : 'left-0'}`}>
          <div className="bg-white flex items-center justify-center flex-col px-10 h-full">
            <div className="flex items-center justify-center mb-8">
              <img
                src="/Logo1.png?v=1"
                alt="Logo Horus Optic"
                className="h-16 w-16 object-contain"
                style={{ background: 'transparent' }}
              />
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
            <div className="flex items-center justify-center mb-8">
              <img
                src="/Logo1.png?v=1"
                alt="Logo Horus Optic"
                className="h-16 w-16 object-contain"
                style={{ background: 'transparent' }}
              />
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
          <div 
            style={{ background: 'linear-gradient(135deg, #B892D5, #E29AEE)' }}
            className={`h-full relative -left-full w-[200%] transform transition-all duration-600 ease-in-out text-white ${
              isActive ? 'translate-x-1/2' : 'translate-x-0'
            }`}
          >
            
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
                className="bg-transparent border border-white text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase cursor-pointer transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#B892D5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
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
                className="bg-transparent border border-white text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase cursor-pointer transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#B892D5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Registrarse
              </button>
            </div>

          </div>
        </div>

        </div>
      </div>
    </>
  );
}
