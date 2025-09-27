import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',           // pasta de saída do build
    sourcemap: false,         // desativa mapas de código em produção
    minify: 'esbuild'         // garante build rápido e leve
  },
  server: {
    port: 5173,               // porta local padrão do Vite
    open: true                // abre o navegador automaticamente ao rodar o dev server
  },
  // ✅ Adicionado para facilitar importações com alias (opcional)
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // ✅ Adicionado base para garantir compatibilidade com roteamento SPA (caso necessário)
  base: '/'
});