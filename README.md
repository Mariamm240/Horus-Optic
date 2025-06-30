# Horus Optic - Ecommerce Platform

Una moderna plataforma de ecommerce especializada en equipos de óptica y tecnología, construida con las últimas tecnologías web.

## 🚀 Tecnologías

- **Vite** - Herramienta de build ultra rápida
- **React 18** - Framework de UI con hooks modernos
- **TypeScript** - Desarrollo type-safe
- **Tailwind CSS** - Framework CSS utility-first
- **Supabase** - Backend con base de datos y autenticación
- **React Router DOM** - Enrutamiento del lado del cliente
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **Lucide React** - Iconos modernos

## ✨ Características

- 🔐 **Autenticación completa** (registro, login, logout)
- 🛍️ **Catálogo de productos** con búsqueda y filtros
- 🛒 **Carrito de compras** con persistencia local
- 💳 **Proceso de checkout** completo
- 👤 **Gestión de perfil de usuario**
- 📱 **Diseño responsivo** para todos los dispositivos
- 🎨 **UI moderna** con Tailwind CSS
- ⚡ **Rendimiento optimizado** con Vite

## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/horus-optic.git
   cd horus-optic
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   ```bash
   cp .env.example .env
   ```
   
   Edita el archivo `.env` con tus credenciales de Supabase:
   ```env
   VITE_SUPABASE_URL=tu_url_de_supabase
   VITE_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## 🏗️ Configuración de la Base de Datos

### Supabase Setup

1. **Crea un proyecto en Supabase:**
   - Ve a [supabase.com](https://supabase.com)
   - Crea una nueva cuenta o inicia sesión
   - Crea un nuevo proyecto

2. **Configura las tablas:**
   
   Ejecuta los siguientes scripts SQL en el SQL Editor de Supabase:

   ```sql
   -- Tabla de perfiles de usuario
   CREATE TABLE profiles (
     id UUID REFERENCES auth.users(id) PRIMARY KEY,
     email TEXT NOT NULL,
     first_name TEXT NOT NULL,
     last_name TEXT NOT NULL,
     avatar_url TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
   );

   -- Tabla de productos
   CREATE TABLE products (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     description TEXT NOT NULL,
     price DECIMAL(10,2) NOT NULL,
     image_url TEXT NOT NULL,
     category TEXT NOT NULL,
     brand TEXT NOT NULL,
     in_stock BOOLEAN DEFAULT true,
     stock_quantity INTEGER DEFAULT 0,
     rating DECIMAL(3,2) DEFAULT 0,
     review_count INTEGER DEFAULT 0,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
   );

   -- RLS (Row Level Security) policies
   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
   ALTER TABLE products ENABLE ROW LEVEL SECURITY;

   -- Políticas para profiles
   CREATE POLICY "Users can view own profile" ON profiles
     FOR SELECT USING (auth.uid() = id);

   CREATE POLICY "Users can update own profile" ON profiles
     FOR UPDATE USING (auth.uid() = id);

   -- Políticas para products (público para lectura)
   CREATE POLICY "Anyone can view products" ON products
     FOR SELECT USING (true);
   ```

3. **Obtén las credenciales:**
   - Ve a Settings > API
   - Copia la `URL` y `anon key`
   - Actualiza tu archivo `.env`

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conecta tu repositorio a Vercel:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configura las variables de entorno en Vercel:**
   - Ve a tu proyecto en Vercel
   - Settings > Environment Variables
   - Agrega `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`

### Netlify

1. **Build y deploy:**
   ```bash
   npm run build
   ```
   
2. **Sube la carpeta `dist` a Netlify o conecta tu repositorio**

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

## 👥 Equipo

- **Daniel** - Desarrollador Principal

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda, puedes:

- Abrir un issue en GitHub
- Enviar un email a: support@horusoptic.com
- Visitar nuestra [documentación](https://docs.horusoptic.com)

---

⭐ **¡No olvides dar una estrella al proyecto si te gustó!**
