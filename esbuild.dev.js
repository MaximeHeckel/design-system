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

async function watch() {
  const cjsContext = await esbuild.context({
    ...sharedConfig,
    entryPoints: ['src/index.ts'],
    outdir: 'dist/cjs',
    sourcemap: true,
    format: 'cjs',
  });

  const esmContext = await esbuild.context({
    ...sharedConfig,
    entryPoints: ['src/index.ts'],
    outdir: 'dist/esm',
    sourcemap: true,
    format: 'esm',
  });

  await Promise.all([cjsContext.watch(), esmContext.watch()]);

  // eslint-disable-next-line no-console
  console.log('Watching for changes...');
}

watch().catch(() => process.exit(1));
