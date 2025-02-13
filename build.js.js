import { build } from 'esbuild';
import alias from 'esbuild-plugin-alias';

build({
  entryPoints: ['./src/index.tsx'],
  bundle: true,
  outdir: 'dist',
  loader: { '.js': 'jsx' },
  external: ['react', 'react-dom', '@tanstack/react-query', 'react-router-dom'],
  plugins: [
    alias({
      '@lib': './src/lib',
      '@components': './src/components',
      '@': './src',
    })
  ]
}).catch(() => process.exit(1));
