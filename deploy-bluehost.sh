#!/bin/bash

echo "========================================"
echo "    DESPLEGANDO HORUS OPTIC A BLUEHOST"
echo "========================================"
echo

echo "[1/3] Compilando proyecto para producción..."
npm run build
if [ $? -ne 0 ]; then
    echo "ERROR: Falló la compilación"
    exit 1
fi

echo "[2/3] Comprimiendo archivos..."
cd dist
zip -r ../horus-optic-build.zip . > /dev/null 2>&1
cd ..

echo "[3/3] ¡Listo para subir!"
echo
echo "========================================"
echo "   INSTRUCCIONES PARA BLUEHOST:"
echo "========================================"
echo "1. Ve a tu cPanel de Bluehost"
echo "2. Abre File Manager"
echo "3. Navega a public_html"
echo "4. Sube el archivo: horus-optic-build.zip"
echo "5. Extrae el archivo en public_html"
echo "6. ¡Tu sitio estará en línea!"
echo
echo "El archivo está listo en: horus-optic-build.zip"
echo
