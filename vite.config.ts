import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.zip'],
  build: {
    minify: 'terser',
    rollupOptions: {
      treeshake: true,
    },
  },
});
