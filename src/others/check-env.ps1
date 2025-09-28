echo '🔍 Verificando variáveis de ambiente...'
if (-not ) { Write-Host '❌ VITE_API_URL não definida' }
else { Write-Host '✅ VITE_API_URL OK' }

if (-not ) { Write-Host '❌ NODE_ENV não definida' }
else { Write-Host '✅ NODE_ENV OK' }
