'use client';

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-horus-purple to-horus-pink text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95',
        destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl',
        outline: 'border-2 border-horus-purple text-horus-purple hover:bg-horus-purple hover:text-white bg-white shadow-sm hover:shadow-md',
        secondary: 'bg-purple-100 text-horus-purple hover:bg-purple-200 border border-purple-200 hover:border-purple-300',
        ghost: 'text-horus-purple hover:bg-purple-50 hover:text-purple-700',
        link: 'text-horus-purple underline-offset-4 hover:underline p-0 h-auto',
        glass: 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30',
        gradient: 'bg-gradient-to-r from-purple-600 via-horus-purple to-horus-pink text-white shadow-2xl hover:shadow-purple-500/25',
      },
      size: {
        default: 'h-11 px-6 py-2 text-sm',
        sm: 'h-9 rounded-lg px-3 text-xs',
        lg: 'h-14 rounded-2xl px-8 text-base',
        xl: 'h-16 rounded-2xl px-12 text-lg',
        icon: 'h-11 w-11 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false,
    loadingText = 'Cargando...',
    children, 
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? loadingText : children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
