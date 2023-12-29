const esbuild = require('esbuild');
const packagejson = require('./package.json');

const sharedConfig = {
  loader: {
    '.tsx': 'tsx',
    '.ts': 'tsx',
  },
  outbase: './src',
  bundle: true,
  jsxFactory: 'createElement',
  jsxFragment: 'Fragment',
  target: ['esnext'],
  logLevel: 'debug',
  external: [...Object.keys(packagejson.peerDependencies || {})],
};

esbuild
  .build({
    ...sharedConfig,
    entryPoints: ['src/index.ts'],
    outdir: 'dist/cjs',
    sourcemap: true,
    format: 'cjs',
    watch: true,
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...sharedConfig,
    entryPoints: ['src/index.ts'],
    outdir: 'dist/esm',
    sourcemap: true,
    format: 'esm',
    watch: true,
  })
  .catch(() => process.exit(1));
