import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces de red, crucial para Docker
    port: 5173,      // El puerto que estamos usando
    strictPort: true, // Falla si el puerto 5173 ya está ocupado
    hmr: {
      clientPort: 5173 // Asegura que el Hot Module Replacement (HMR) funcione correctamente
    }
  }
})
