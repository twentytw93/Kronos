import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Kronos/', // <-- ADD THIS LINE (Replace with your exact GitHub repository name)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
