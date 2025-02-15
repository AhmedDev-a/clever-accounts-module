import { build } from 'esbuild';
import alias from 'esbuild-plugin-alias';

build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  plugins: [
    alias({
      '@': './src', 
    })
  ],
  // Additional esbuild options
}).catch(() => process.exit(1));
