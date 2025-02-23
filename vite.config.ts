import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'], // Incluye explícitamente imágenes
  base: './', // Asegura que las rutas relativas funcionen correctamente
  build: {
    assetsDir: 'assets', // Directorio para archivos estáticos en producción
    rollupOptions: {
      output: {
        manualChunks: undefined, // Evita problemas con la división de chunks para imágenes
      },
    },
  },
  server: {
    open: true, // Abre automáticamente el navegador al iniciar
  },
});