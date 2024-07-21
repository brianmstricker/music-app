import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
    // publicDir: resolve('public')
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
    // publicDir: resolve('public')
  },
  renderer: {
    publicDir: resolve('public'),
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
