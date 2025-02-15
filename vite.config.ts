import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Ensure the correct alias format
    },
  },
  server: {
    port: 8080, // Use the correct port
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Keep source maps enabled
  },
});
