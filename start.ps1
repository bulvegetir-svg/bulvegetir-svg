# Her yerden çalıştırılabilir start.ps1

# Proje klasörüne git (mutlak yol)
Set-Location "C:\Users\elmas\projeler\bulvegetir-svg"

# Build al
npm run build

# Sunucuyu başlat
npm run http-serve
