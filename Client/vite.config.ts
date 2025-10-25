import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    port:3000
  },//Hangi portta çalışmasını istiyorsak burada onu girebiliriz.
  plugins: [react()],
})
