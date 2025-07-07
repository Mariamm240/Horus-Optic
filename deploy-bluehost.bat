@echo off
echo ========================================
echo    DESPLEGANDO HORUS OPTIC A BLUEHOST
echo ========================================
echo.

echo [1/3] Compilando proyecto para produccion...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Fallo en la compilacion
    pause
    exit /b 1
)

echo [2/3] Comprimiendo archivos...
cd dist
powershell -Command "Compress-Archive -Path * -DestinationPath ../horus-optic-build.zip -Force"
cd ..

echo [3/3] Listo para subir!
echo.
echo ========================================
echo   INSTRUCCIONES PARA BLUEHOST:
echo ========================================
echo 1. Ve a tu cPanel de Bluehost
echo 2. Abre File Manager
echo 3. Navega a public_html
echo 4. Sube el archivo: horus-optic-build.zip
echo 5. Extrae el archivo en public_html
echo 6. ¡Tu sitio estara en linea!
echo.
echo El archivo esta listo en: horus-optic-build.zip
echo.
pause
