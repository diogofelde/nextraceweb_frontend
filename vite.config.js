import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // pasta de saída do build
        sourcemap: false, // desativa mapas de código em produção
        minify: 'esbuild' // garante build rápido e leve
    },
    define: {
        'process.env': process.env // permite acesso a variáveis como VITE_API_URL
    },
    server: {
        port: 5173, // porta local padrão do Vite
        open: true // abre o navegador automaticamente ao rodar o dev server
    }
});