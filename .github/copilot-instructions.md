# Horus Optic - Next.js 15 Ecommerce Platform

## Architecture Overview
This is a **hybrid Next.js 15 + Vite** ecommerce platform for optical equipment. The project uses **App Router** (in `/app/`) alongside legacy Vite components (in `/src/`) during migration.

### Key Technologies
- **Next.js 15.4.1** with App Router and Turbopack stable
- **Tailwind CSS v4.1** with custom Horus Optic brand colors (`#B892D5`, `#E29AEE`)
- **Supabase** for authentication and database (uses `NEXT_PUBLIC_` env vars)
- **React Hook Form + Zod** for form validation
- **React Hot Toast** for notifications (configured in `app/providers.tsx`)
- **TypeScript 5.8.3** with strict mode enabled

## Project Structure Patterns

### Dual Architecture (Migration in Progress)
- `/app/` - Next.js 15 App Router pages (NEW: auth, services, testimonials, lentes-contacto, about, products)
- `/src/` - Legacy Vite components (being gradually migrated)
- Components in `/src/components/` are imported into `/app/` pages using relative paths like `'../../src/components/layout/Layout'`

### Directory Structure
```
app/                          # Next.js App Router
├── auth/page.tsx            # Modern auth with dual forms
├── services/page.tsx        # Services showcase
├── testimonials/page.tsx    # Customer testimonials
├── lentes-contacto/page.tsx # Contact lenses page
├── about/page.tsx           # About page
├── products/page.tsx        # Product catalog
├── layout.tsx               # Root layout with metadata
├── providers.tsx            # Context providers wrapper
└── globals.css              # Global styles

src/                         # Legacy Vite structure
├── components/
│   ├── auth/               # Login/Register forms
│   ├── layout/             # Header, Footer, Layout
│   ├── sections/           # ModernHeroSection, ProductShowcase
│   ├── products/           # Product cards, filters
│   └── ui/                 # Button, Card, Input components
├── context/                # Auth & Cart contexts
├── hooks/                  # Custom React hooks
├── lib/                    # Supabase client, validations
└── types/                  # TypeScript definitions
```

### Critical File Patterns
- **Layout Chain**: `app/layout.tsx` → `app/providers.tsx` → Context providers → `src/components/layout/Layout.tsx`
- **Auth Flow**: `src/context/AuthContext.tsx` handles Supabase auth with social login (Google, Facebook)
- **Cart Persistence**: `src/context/CartContext.tsx` with localStorage sync
- **Styling**: Custom brand colors in `tailwind.config.js` with v3/v4 compatibility

## Development Workflows

### Running the Application
```bash
npm run dev          # Next.js development server (primary) - localhost:3000
npm run dev:vite     # Legacy Vite server (fallback) - localhost:5173
npm run build        # Next.js production build
npm run start        # Next.js production server
```

### Environment Setup
```bash
# Required environment variables (.env.local)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Development fallbacks in src/lib/supabase.ts
# Uses placeholder values if env vars missing in development
```

### Key Commands & Debugging
- **Clean Cache**: Remove `.next` folder if build issues occur
- **Port Conflicts**: Server auto-switches to 3001 if 3000 is occupied
- **Hot Reload**: Both Turbopack (Next.js) and Vite HMR available
- **Error Handling**: Check browser console and terminal for compilation errors

## Component Conventions

### Page Component Pattern
```tsx
'use client';  // Required for interactive components

import { Layout } from '../../src/components/layout/Layout';
import { ModernHeroSection } from '../../src/components/sections/ModernHeroSection';

export default function PageName() {
  return (
    <Layout>
      <ModernHeroSection />
      {/* Other sections */}
    </Layout>
  );
}
```

### Modern Component Naming
- **Sections**: `ModernHeroSection`, `ProductShowcaseSection`, `NewsletterSection`
- **Auth**: `ModernLoginForm`, `ModernRegisterForm` (new Tailwind v4 versions)
- **Products**: `ModernProductCard`, `ProductCatalog`, `ProductFilters`
- **UI**: Use existing `Button`, `Card`, `Input` from `src/components/ui/`

### Styling Patterns & Brand Guidelines
```tsx
// Horus Optic Brand Colors
'bg-gradient-to-r from-purple-600 to-pink-600'     // Primary gradient
'text-horus-purple'                                 // #B892D5
'bg-horus-pink'                                     // #E29AEE
'border-purple-300 focus:ring-purple-200'          // Form focus states

// Tailwind v4 Features
'rounded-2xl'                    // Consistent border radius
'shadow-lg hover:shadow-xl'      // Elevation on hover
'transition-all duration-300'    // Smooth animations
'backdrop-blur-sm'               // Glass morphism effects
'bg-white/10'                    // Alpha transparency
```

### Form Validation Patterns
```tsx
// Standard pattern across all auth components
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '../../lib/validations';

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<LoginFormData>({
  resolver: zodResolver(loginSchema),
});

// Form submission with toast feedback
const onSubmit = async (data: LoginFormData) => {
  try {
    await login(data);
    toast.success('¡Bienvenido de vuelta!');
  } catch (error) {
    toast.error(error instanceof Error ? error.message : 'Error al iniciar sesión');
  }
};
```

## Integration Points & Data Flow

### Supabase Configuration
```typescript
// src/lib/supabase.ts
- Environment: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
- Client: createClient() with development fallbacks
- Database: Typed interfaces for profiles, products, orders
- Auth: Session management, social providers (Google, Facebook, GitHub, LinkedIn)
```

### Authentication Flow
```typescript
// src/context/AuthContext.tsx
1. AuthProvider wraps app in app/providers.tsx
2. Supabase session listener auto-updates user state
3. Profile data fetched from 'profiles' table
4. Social login redirects handled automatically
5. User state persists across page refreshes
```

### Toast Notification System
```tsx
// Configured globally in app/providers.tsx
<Toaster 
  position="top-right"
  toastOptions={{
    duration: 4000,
    success: { style: { background: '#10B981' } },
    error: { style: { background: '#EF4444' } }
  }}
/>

// Usage throughout components
toast.success('Operación exitosa');
toast.error('Error al procesar');
```

### State Management Architecture
- **Auth State**: Context + Supabase real-time sessions
- **Cart State**: Context + localStorage sync (persists on refresh)
- **Form State**: React Hook Form (local component state)
- **No Redux**: Simple contexts sufficient for current scope

## Navigation & Routing

### Next.js Link Patterns
```tsx
// Always use Next.js Link with href (NOT React Router 'to')
import Link from 'next/link';

<Link href="/auth">Iniciar Sesión</Link>
<Link href="/products?category=gafas-sol">Gafas de Sol</Link>
<Link href="/services">Servicios</Link>

// Navigation in components
import { useRouter } from 'next/navigation';
const router = useRouter();
router.push('/dashboard');
```

### Route Structure
```
/                    # Homepage with hero + product showcase
/auth               # Authentication modal (login/register)
/services           # Services with pricing and features
/testimonials       # Customer testimonials and reviews
/lentes-contacto    # Contact lenses specialized page
/about              # About page with team info
/products           # Product catalog with filters
/cart               # Shopping cart (legacy Vite)
```

## Critical Dependencies & Versions

### UI & Icons
- **@headlessui/react 2.2.4**: Accessible UI primitives (modals, dropdowns)
- **lucide-react 0.525.0**: Modern icon system (preferred over react-icons for new components)
- **@heroicons/react 2.2.0**: Additional icons for specific use cases

### Forms & Validation
- **react-hook-form 7.60.0**: Form state management
- **@hookform/resolvers 5.1.1**: Zod integration
- **zod 3.25.76**: Schema validation and TypeScript inference

### Database & Auth
- **@supabase/supabase-js 2.50.2**: Database client and auth
- **next 15.4.1**: App Router and Turbopack
- **react-hot-toast 2.5.2**: Notification system

## Error Handling & Debugging Patterns

### Common Issues & Solutions
1. **ENOENT Errors**: Delete `.next` folder and restart dev server
2. **Import Path Issues**: Use relative paths for `/src/` imports from `/app/`
3. **Hydration Errors**: Ensure client components have `'use client'` directive
4. **Supabase Errors**: Check environment variables and network connectivity
5. **Port Conflicts**: Server auto-switches ports, check terminal output

### Development Best Practices
- Always test auth flow with actual Supabase connection
- Use TypeScript strict mode - fix all type errors
- Preview pages in both desktop and mobile viewports
- Test form validation with invalid inputs
- Verify toast notifications appear correctly
- Check console for any React warnings
- Use Next.js `Link` components with `href` prop (not React Router `to`)
- Routes: `/auth`, `/services`, `/testimonials`, `/lentes-contacto`, `/products`
- Header component handles navigation state and user authentication status
