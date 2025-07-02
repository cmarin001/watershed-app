import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
        '/delineate': {
          changeOrigin: true,
          target: 'http://localhost:8000', // FastAPI / Flask default
        },
      },
  },
});
