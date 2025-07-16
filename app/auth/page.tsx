'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ModernLoginForm } from '../../src/components/auth/ModernLoginForm';
import { ModernRegisterForm } from '../../src/components/auth/ModernRegisterForm';

export default function AuthPage() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const toggleToRegister = () => setIsActive(true);
  const toggleToLogin = () => setIsActive(false);

  const handleBackgroundClick = () => {
    router.push('/');
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Modal Container - Click outside to close */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={handleBackgroundClick}
      >
        {/* Modal Content */}
        <div 
          className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl min-h-[500px] transition-all duration-600 ease-in-out ${isActive ? 'active' : ''}`}
          onClick={handleModalClick}
        >
        
        {/* Sign In Form */}
        <div className={`absolute top-0 h-full w-1/2 transition-all duration-600 ease-in-out z-20 ${isActive ? 'transform translate-x-full' : 'left-0'}`}>
          <div className="bg-white flex items-center justify-center flex-col px-10 h-full">
            <div className="flex items-center justify-center mb-8">
              <img
                src="/Logo1.png"
                alt="Logo Horus Optic"
                className="h-16 w-16 object-contain"
                style={{ background: 'transparent' }}
              />
            </div>
            <ModernLoginForm />
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
                src="/Logo1.png"
                alt="Logo Horus Optic"
                className="h-16 w-16 object-contain"
                style={{ background: 'transparent' }}
              />
            </div>
            <ModernRegisterForm />
          </div>
        </div>

        {/* Toggle Container */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out z-50 ${
          isActive 
            ? 'transform -translate-x-full rounded-r-[150px] rounded-l-[100px]' 
            : 'rounded-l-[150px] rounded-r-[100px]'
        }`}>
          <div 
            className={`h-full relative -left-full w-[200%] transform transition-all duration-600 ease-in-out text-white bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 ${
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
                className="bg-transparent border border-white text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase cursor-pointer transition-all duration-300 hover:bg-white hover:text-purple-500"
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
                className="bg-transparent border border-white text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase cursor-pointer transition-all duration-300 hover:bg-white hover:text-purple-500"
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
