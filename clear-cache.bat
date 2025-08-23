@echo off
echo Очистка кеша Next.js...
if exist .next rmdir /s /q .next
echo Очистка кеша npm...
npm cache clean --force
echo Кеш очищен!
pause
