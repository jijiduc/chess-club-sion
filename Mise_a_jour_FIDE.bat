@echo off
title Mise a jour FIDE - CE Sion
color 0A

echo ========================================================
echo      Lancement de la mise a jour des donnees FIDE
echo ========================================================
echo.

cd /d "C:\Users\rouge\Documents\_CE_Sion\chess-club-sion"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File ".\update_fide_data.ps1"

echo.
echo ========================================================
echo   Mise a jour terminee. Vous pouvez fermer cette fenetre.
echo ========================================================
pause
