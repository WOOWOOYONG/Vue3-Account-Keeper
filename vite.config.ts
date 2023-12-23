import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Vue3-Account-Keeper/',
  plugins: [vue(), UnoCSS({})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
