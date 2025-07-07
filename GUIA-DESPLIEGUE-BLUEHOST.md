# 🚀 Guía Rápida de Despliegue en Bluehost

## Pasos para Desplegar Horus Optic

### 1. Preparación (Solo la primera vez)

1. **Actualiza tu URL de producción** en `.env`:
   ```env
   VITE_APP_URL=https://tudominio.com
   ```

2. **Configura Supabase**:
   - Ve a tu proyecto Supabase
   - Authentication → Settings → Site URL
   - Agrega: `https://tudominio.com`

### 2. Compilar y Desplegar

#### Opción A: Script Automático ⚡
```bash
deploy-bluehost.bat
```
Esto generará `horus-optic-build.zip`

#### Opción B: Manual 🔧
```bash
npm run build
```
Luego sube la carpeta `dist/` a Bluehost

### 3. Subir a Bluehost

1. **Accede a tu cPanel de Bluehost**
2. **File Manager** → `public_html`
3. **Sube** `horus-optic-build.zip` 
4. **Extrae** el archivo
5. **Copia** el archivo `.htaccess` incluido

### 4. Verificar

- Visita `https://tudominio.com`
- Prueba login/registro
- Verifica que el carrito funcione
- Confirma que la navegación sea fluida

## 🔧 Resolución de Problemas

### Problema: Página en blanco
**Solución**: Verifica que el archivo `.htaccess` esté en la raíz

### Problema: Error de rutas
**Solución**: Asegúrate de que mod_rewrite esté habilitado en Bluehost

### Problema: Error de Supabase
**Solución**: Verifica las URLs permitidas en Supabase

## 📞 Soporte

- **Bluehost**: Contacta su soporte técnico
- **Proyecto**: Abre un issue en GitHub
- **Supabase**: Consulta su documentación

¡Tu ecommerce estará en línea en minutos! 🛍️
