import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'outline' | 'ghost' | 'elevated';
  hover?: boolean;
}

export function Card({ 
  children, 
  className, 
  padding = 'md', 
  variant = 'default',
  hover = false 
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-sm',
    outline: 'bg-white border-2 border-gray-300 shadow-none',
    ghost: 'bg-transparent border-none shadow-none',
    elevated: 'bg-white border border-gray-100 shadow-lg shadow-gray-100/50',
  };

  const hoverClasses = hover 
    ? 'transition-all duration-200 hover:shadow-md hover:shadow-gray-200/50 hover:-translate-y-1' 
    : '';

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden',
        variantClasses[variant],
        paddingClasses[padding],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'accent';
}

export function CardHeader({ children, className, variant = 'default' }: CardHeaderProps) {
  const variantClasses = {
    default: 'border-b border-gray-200 bg-gray-50/50',
    gradient: 'border-b border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50',
    accent: 'border-b border-primary-200 bg-primary-50',
  };

  return (
    <div className={cn(
      'px-6 py-4 -mx-6 -mt-6 mb-6 rounded-t-xl',
      variantClasses[variant],
      className
    )}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

export function CardContent({ children, className, spacing = 'none' }: CardContentProps) {
  const spacingClasses = {
    none: '',
    sm: 'space-y-3',
    md: 'space-y-4',
    lg: 'space-y-6',
  };

  return (
    <div className={cn(
      'text-gray-700',
      spacingClasses[spacing],
      className
    )}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'accent';
  justify?: 'start' | 'center' | 'end' | 'between';
}

export function CardFooter({ 
  children, 
  className, 
  variant = 'default',
  justify = 'start'
}: CardFooterProps) {
  const variantClasses = {
    default: 'border-t border-gray-200 bg-white',
    muted: 'border-t border-gray-200 bg-gray-50/50',
    accent: 'border-t border-primary-200 bg-primary-50/50',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  };

  return (
    <div className={cn(
      'flex items-center px-6 py-4 -mx-6 -mb-6 mt-6 rounded-b-xl',
      variantClasses[variant],
      justifyClasses[justify],
      className
    )}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function CardTitle({ children, className, size = 'md' }: CardTitleProps) {
  const sizeClasses = {
    sm: 'text-lg font-semibold',
    md: 'text-xl font-semibold', 
    lg: 'text-2xl font-bold',
    xl: 'text-3xl font-bold',
  };

  return (
    <h3 className={cn(
      'text-gray-900 leading-tight',
      sizeClasses[size],
      className
    )}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

export function CardDescription({ children, className, muted = true }: CardDescriptionProps) {
  return (
    <p className={cn(
      'text-sm leading-relaxed',
      muted ? 'text-gray-600' : 'text-gray-700',
      className
    )}>
      {children}
    </p>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
  objectFit?: 'cover' | 'contain' | 'fill';
}

export function CardImage({ 
  src, 
  alt, 
  className, 
  aspectRatio = 'video',
  objectFit = 'cover'
}: CardImageProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
  };

  const fitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  };

  return (
    <div className={cn(
      'overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-6',
      aspectClasses[aspectRatio],
      className
    )}>
      <img 
        src={src} 
        alt={alt}
        className={cn(
          'w-full h-full transition-transform duration-300 hover:scale-105',
          fitClasses[objectFit]
        )}
      />
    </div>
  );
}
