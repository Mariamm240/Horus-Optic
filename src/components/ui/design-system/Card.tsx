'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const cardVariants = cva(
  'rounded-2xl transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white border border-purple-100 shadow-sm hover:shadow-md',
        elevated: 'bg-white border border-purple-100 shadow-lg hover:shadow-xl hover:-translate-y-1',
        glass: 'bg-white/80 backdrop-blur-sm border border-purple-200/50 shadow-lg',
        gradient: 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 shadow-md',
        outlined: 'bg-white border-2 border-horus-purple/20 hover:border-horus-purple/40',
        floating: 'bg-white shadow-2xl border-0 hover:shadow-purple-500/10',
      },
      padding: {
        none: '',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
    },
  }
);

export interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
);

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn('flex flex-col space-y-2 pb-6', className)} 
      {...props} 
    />
  )
);

CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 
      ref={ref} 
      className={cn('text-2xl font-semibold leading-none tracking-tight text-gray-900', className)} 
      {...props} 
    />
  )
);

CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p 
      ref={ref} 
      className={cn('text-sm text-gray-600 leading-relaxed', className)} 
      {...props} 
    />
  )
);

CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-4', className)} {...props} />
  )
);

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn('flex items-center justify-between pt-6 mt-6 border-t border-gray-100', className)} 
      {...props} 
    />
  )
);

CardFooter.displayName = 'CardFooter';

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent
};
