const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js', // Specify the output file
  loader: { '.js': 'jsx' },
  external: [
    'react',
    'react-dom',
    '@tanstack/react-query',
    'react-router-dom',
    'class-variance-authority',
    'zod',
    '@radix-ui/react-select',
    '@radix-ui/react-label',
  ],
  plugins: [
    {
      name: 'alias',
      setup(build) {
        build.onResolve({ filter: /^@\/(.*)$/ }, args => ({
          path: path.resolve(__dirname, 'src', args.match[1])
        }));
      }
    }
  ],
}).catch(() => process.exit(1));