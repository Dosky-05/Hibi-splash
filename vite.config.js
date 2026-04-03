import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    // Allows the tunnel to access the dev server
    allowedHosts: true, 
    port: 5173,
    strictPort: true,
  }
})
