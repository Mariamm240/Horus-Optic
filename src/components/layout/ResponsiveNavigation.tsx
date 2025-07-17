'use client';

import { memo, useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/design-system/Button';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { cn } from '../../lib/utils';

export const ResponsiveNavigation = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { user } = useAuth();
  const { getTotalItems } = useCart();

  const itemCount = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Inicio' },
    { 
      href: '/products', 
      label: 'Productos',
      submenu: [
        { href: '/products?category=gafas-sol', label: 'Gafas de Sol' },
        { href: '/products?category=gafas-vista', label: 'Gafas de Vista' },
        { href: '/products?category=deportivas', label: 'Deportivas' },
        { href: '/products?category=infantiles', label: 'Infantiles' },
      ]
    },
    { href: '/services', label: 'Servicios' },
    { href: '/lentes-contacto', label: 'Lentes de Contacto' },
    { href: '/about', label: 'Nosotros' },
    { href: '/testimonials', label: 'Testimonios' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100'
            : 'bg-gradient-to-r from-horus-purple/90 to-horus-pink/90 backdrop-blur-sm'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-white to-purple-100 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-horus-purple font-bold text-xl">H</span>
              </motion.div>
              <span className={cn(
                "font-bold text-xl transition-colors duration-300",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                Horus Optic
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 font-medium",
                      isActive(item.href)
                        ? isScrolled 
                          ? "text-horus-purple bg-purple-50" 
                          : "text-white bg-white/20"
                        : isScrolled
                          ? "text-gray-700 hover:text-horus-purple hover:bg-purple-50"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                    onMouseEnter={() => item.submenu && setActiveDropdown(item.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        activeDropdown === item.href && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeDropdown === item.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-purple-100 overflow-hidden"
                          onMouseEnter={() => setActiveDropdown(item.href)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 text-gray-700 hover:text-horus-purple hover:bg-purple-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                className={cn(
                  isScrolled ? "text-gray-700 hover:text-horus-purple" : "text-white hover:text-white/80"
                )}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Link href="/cart" className="relative">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={cn(
                    isScrolled ? "text-gray-700 hover:text-horus-purple" : "text-white hover:text-white/80"
                  )}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 bg-horus-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-lg"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </Button>
              </Link>

              {user ? (
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={cn(
                    isScrolled ? "text-gray-700 hover:text-horus-purple" : "text-white hover:text-white/80"
                  )}
                >
                  <User className="h-5 w-5" />
                </Button>
              ) : (
                <Button 
                  variant={isScrolled ? "default" : "glass"} 
                  asChild
                >
                  <Link href="/auth">Iniciar Sesión</Link>
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "lg:hidden",
                isScrolled ? "text-gray-700" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 max-w-sm bg-white z-50 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-horus-purple to-horus-pink">
                <span className="font-bold text-xl text-white">Menú</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation */}
              <motion.nav 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex-1 py-6 overflow-y-auto"
              >
                {navItems.map((item) => (
                  <motion.div 
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-6 py-4 text-gray-700 hover:text-horus-purple hover:bg-purple-50 transition-all duration-300 border-l-4 border-transparent hover:border-horus-purple",
                        isActive(item.href) && "text-horus-purple bg-purple-50 border-horus-purple"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.label}</span>
                        {item.submenu && (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    </Link>
                    
                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className="pl-6 bg-gray-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-6 py-3 text-sm text-gray-600 hover:text-horus-purple transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.nav>

              {/* Footer */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="p-6 border-t border-purple-100 bg-gray-50 space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="icon" className="flex-1">
                    <Search className="h-5 w-5" />
                  </Button>
                  
                  <Link href="/cart" className="relative flex-1">
                    <Button variant="outline" size="icon" className="w-full">
                      <ShoppingCart className="h-5 w-5" />
                      {itemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-horus-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {itemCount}
                        </span>
                      )}
                    </Button>
                  </Link>
                </div>

                {user ? (
                  <Button variant="outline" size="lg" className="w-full">
                    <User className="h-5 w-5 mr-2" />
                    Mi Cuenta
                  </Button>
                ) : (
                  <Button variant="default" size="lg" className="w-full" asChild>
                    <Link href="/auth">Iniciar Sesión</Link>
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

ResponsiveNavigation.displayName = 'ResponsiveNavigation';
