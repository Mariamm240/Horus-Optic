'use client';

import { cn } from '../../lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'circular' | 'rounded' | 'text';
}

export function Skeleton({ className, variant = 'default', ...props }: SkeletonProps) {
  const variants = {
    default: 'rounded-lg',
    circular: 'rounded-full',
    rounded: 'rounded-2xl',
    text: 'rounded-md h-4',
  };

  return (
    <div
      className={cn(
        'animate-pulse bg-gradient-to-r from-purple-100 via-purple-50 to-pink-100',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

// Product Card Skeleton
export function ProductCardSkeleton() {
  return (
    <div className="space-y-4 p-4 bg-white rounded-2xl border border-purple-100">
      <Skeleton variant="rounded" className="h-64 w-full" />
      <div className="space-y-3">
        <Skeleton variant="text" className="w-1/3" />
        <Skeleton variant="text" className="w-3/4 h-5" />
        <Skeleton variant="text" className="w-1/2" />
        <div className="flex items-center gap-2">
          <Skeleton variant="text" className="w-1/4 h-6" />
          <Skeleton variant="text" className="w-1/4 h-4" />
        </div>
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-10 flex-1 rounded-xl" />
          <Skeleton className="h-10 w-10 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <div className="space-y-8 p-8">
      <div className="text-center space-y-4">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
        <Skeleton className="h-14 w-48 mx-auto rounded-2xl" />
      </div>
    </div>
  );
}

// Page Layout Skeleton
export function PageSkeleton() {
  return (
    <div className="space-y-8 p-4">
      <HeroSkeleton />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

// List Item Skeleton
export function ListItemSkeleton() {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-purple-100">
      <Skeleton variant="circular" className="h-16 w-16" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" className="w-3/4" />
        <Skeleton variant="text" className="w-1/2" />
      </div>
      <Skeleton className="h-8 w-20 rounded-lg" />
    </div>
  );
}
