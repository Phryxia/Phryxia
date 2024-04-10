import { defineConfig } from 'vite'
import Unfonts from 'unplugin-fonts/vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs',
  },
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Yeongdeok-Sea',
            local: 'Yeongdeok-Sea',
            src: './src/assets/fonts/Yeongdeok Sea.ttf',
          },
        ],
        preload: true,
        injectTo: 'head',
      },
    }),
  ],
})