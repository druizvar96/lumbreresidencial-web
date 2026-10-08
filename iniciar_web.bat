@echo off
title Servidor Local - Lumbre Residencial SL
echo ========================================================
echo   Iniciando servidor local de Lumbre Residencial...
echo ========================================================
echo.

cd /d "%~dp0"

echo Arrancando Vite y abriendo navegador en http://localhost:5173/ ...
echo.
echo Presiona Ctrl+C en esta ventana para detener el servidor cuando termines.
echo.

start "" "http://localhost:5173/"
npx vite --port 5173 --open
