import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Diana_M_Berm-dez_C/', // <-- Agrega esta línea con el nombre exacto de tu repositorio
  server: {
    port: 5173,
    host: true,
  },
});