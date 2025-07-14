import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { useAuth } from './hooks/useAuth';
import { Layout } from './components/layout';
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { CartPage } from './pages/CartPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  // Permitir acceso de invitado para navegación general, requerir auth para carrito y acciones sensibles
  const allowGuestAccess = true;

  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={user ? <Navigate to="/" replace /> : <AuthPage />}
        />
        <Route
          path="/products"
          element={
            user || allowGuestAccess ? (
              <Layout>
                <ProductsPage />
              </Layout>
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route
          path="/cart"
          element={
            user ? (
              <Layout>
                <CartPage />
              </Layout>
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route
          path="/about"
          element={
            user || allowGuestAccess ? (
              <Layout>
                <AboutPage />
              </Layout>
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route
          path="/contact"
          element={
            user || allowGuestAccess ? (
              <Layout>
                <ContactPage />
              </Layout>
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route
          path="/services"
          element={
            user || allowGuestAccess ? (
              <Layout>
                <ServicesPage />
              </Layout>
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route
          path="/testimonials"
          element={
            user || allowGuestAccess ? (
              <Layout>
                <TestimonialsPage />
              </Layout>
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route
          path="/"
          element={
            user || allowGuestAccess ? (
              <Layout>
                <HomePage />
              </Layout>
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
