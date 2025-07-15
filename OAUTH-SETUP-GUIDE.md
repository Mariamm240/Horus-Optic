# Configuración de OAuth para Google y Facebook en Supabase

## Resumen
Esta guía te ayudará a configurar la autenticación OAuth con Google y Facebook en tu proyecto Horus Optic usando Supabase.

## Configuración en Supabase

### 1. Acceder a Supabase Dashboard
1. Ve a [Supabase Dashboard](https://supabase.com/dashboard)
2. Selecciona tu proyecto Horus Optic
3. Ve a `Authentication` > `Providers`

### 2. Configurar Google OAuth

#### En Google Cloud Console:
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Ve a `APIs & Services` > `Credentials`
4. Click en `+ CREATE CREDENTIALS` > `OAuth 2.0 Client IDs`
5. Selecciona `Web application`
6. Configura:
   - **Name**: "Horus Optic Auth"
   - **Authorized JavaScript origins**: 
     - `http://localhost:5173` (desarrollo)
     - `https://tudominio.com` (producción)
   - **Authorized redirect URIs**:
     - `https://bepozoglbsvkqjhmclvk.supabase.co/auth/v1/callback`
7. Guarda el **Client ID** y **Client Secret**

#### En Supabase:
1. Ve a `Authentication` > `Providers`
2. Encuentra "Google" y click en configurar
3. Habilita "Enable sign in with Google"
4. Ingresa:
   - **Client ID**: El Client ID de Google
   - **Client Secret**: El Client Secret de Google
5. Guarda los cambios

### 3. Configurar Facebook OAuth

#### En Facebook Developers:
1. Ve a [Facebook for Developers](https://developers.facebook.com/)
2. Crea una nueva app o selecciona una existente
3. Ve a `Add Product` > `Facebook Login` > `Set Up`
4. Ve a `Facebook Login` > `Settings`
5. Configura:
   - **Valid OAuth Redirect URIs**:
     - `https://bepozoglbsvkqjhmclvk.supabase.co/auth/v1/callback`
6. En `Settings` > `Basic`, guarda:
   - **App ID**
   - **App Secret**

#### En Supabase:
1. Ve a `Authentication` > `Providers`
2. Encuentra "Facebook" y click en configurar
3. Habilita "Enable sign in with Facebook"
4. Ingresa:
   - **Client ID**: El App ID de Facebook
   - **Client Secret**: El App Secret de Facebook
5. Guarda los cambios

## Configuración de URLs de Redirección

### En Supabase:
1. Ve a `Authentication` > `URL Configuration`
2. Configura:
   - **Site URL**: `http://localhost:5173` (desarrollo) / `https://tudominio.com` (producción)
   - **Redirect URLs**: 
     - `http://localhost:5173/auth/callback`
     - `https://tudominio.com/auth/callback`

## Configuración de Base de Datos

### Tabla profiles
Asegúrate de que la tabla `profiles` existe con esta estructura:

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## Testing

### Desarrollo Local:
1. Asegúrate de que el servidor esté corriendo en `http://localhost:5173`
2. Ve a la página de autenticación
3. Click en el botón de Google o Facebook
4. Completa el flujo OAuth
5. Deberías ser redirigido de vuelta a la aplicación autenticado

### Verificación:
1. Revisa que el usuario aparezca en `Authentication` > `Users` en Supabase
2. Verifica que se creó un perfil en la tabla `profiles`
3. Confirma que la sesión persiste al recargar la página

## Troubleshooting

### Problemas Comunes:

1. **"Invalid redirect URI"**
   - Verifica que las URLs de redirección están configuradas correctamente
   - Asegúrate de que coincidan exactamente (sin `/` al final)

2. **"Client ID not found"**
   - Verifica que el Client ID está correctamente copiado
   - Asegúrate de que la app está en modo público (Facebook)

3. **"Profile creation failed"**
   - Verifica que la tabla `profiles` existe
   - Confirma que las políticas RLS están configuradas

4. **Redirección infinita**
   - Verifica la configuración de Site URL en Supabase
   - Asegúrate de que `/auth/callback` está en las Redirect URLs

### Debug:
- Revisa la consola del navegador para errores
- Verifica los logs en Supabase Dashboard
- Confirma que las variables de entorno están cargadas

## Producción

Para desplegar en producción:

1. **Actualiza las URLs** en Google/Facebook consoles con tu dominio real
2. **Configura Site URL** en Supabase con tu dominio de producción
3. **Agrega Redirect URLs** para producción
4. **Verifica HTTPS** - OAuth requiere conexiones seguras en producción

## Seguridad

- **Nunca expongas** Client Secrets en el frontend
- **Usa HTTPS** en producción
- **Configura dominios específicos** en lugar de wildcards
- **Revisa regularmente** los usuarios y sesiones activas
