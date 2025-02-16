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
    allowedHosts: ['6293c856-c9a9-48bf-a775-220405e6ec49.lovableproject.com'], // Allow the blocked host
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Keep source maps enabled
  },
});
