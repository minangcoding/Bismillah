import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['OIP.png'], // Panggil file PNG kamu
      manifest: {
        name: "Al-Qur'an Indonesia Modern",
        short_name: 'Al-Quran',
        description: 'Aplikasi Al-Quran Digital Terlengkap',
        theme_color: '#020617',
        background_color: '#020617',
        display: 'standalone',
        icons: [
          {
            src: 'OIP.png', 
            sizes: '192x192', 
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'OIP.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      }
    })
  ]
})