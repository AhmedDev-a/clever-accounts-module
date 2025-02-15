const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: 'dist',
  loader: {
    '.js': 'jsx',
    '.tsx': 'tsx',
    '.ts': 'ts',
  },
  external: [
    'react',
    'react-dom',
    '@tanstack/react-query',
    'react-router-dom',
    'class-variance-authority',
    'zod',
    '@radix-ui/react-select',
    '@radix-ui/react-label',
    '@radix-ui/react-tabs',
  ],
  plugins: [
    {
      name: 'alias-plugin',
      setup(build) {
        build.onResolve({ filter: /^@\/(.+)/ }, (args) => {
          const targetPath = path.resolve(__dirname, 'src', args.path.replace(/^@\//, ''));
          const fixedTargetPath = targetPath.startsWith(path.resolve(__dirname, 'src')) 
            ? targetPath
            : path.resolve(__dirname, 'src', args.path.replace(/^@\//, ''));

          console.log(`Resolving alias: ${args.path} -> ${fixedTargetPath}`);
          return { path: fixedTargetPath };
        });
      }
    }
  ],
  absWorkingDir: path.resolve(__dirname),
  sourcemap: true,
  logLevel: 'info',
})
.then(() => console.log('✅ Build successful!'))
.catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});
