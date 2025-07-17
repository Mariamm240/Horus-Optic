'use client';

import { PageTransition } from '../ui/PageTransition';
import { ResponsiveNavigation } from './ResponsiveNavigation';
import { Footer } from './Footer';

interface LayoutProviderProps {
  children: React.ReactNode;
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <>
      <ResponsiveNavigation />
      <PageTransition>
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
