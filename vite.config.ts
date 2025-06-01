import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Celubarato/', // 👈 ¡Esto es clave para GitHub Pages!
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
