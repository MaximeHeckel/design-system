const esbuild = require('esbuild');
const packagejson = require('./package.json');
const { globPlugin } = require('esbuild-plugin-glob');

const sharedConfig = {
  loader: {
    '.tsx': 'tsx',
    '.ts': 'tsx',
  },
  outbase: './src',
  bundle: true,
  minify: true,
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
    format: 'cjs',
    banner: {
      js: "const { createElement, Fragment } = require('react');\n",
    },
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...sharedConfig,
    entryPoints: [
      'src/index.ts',
      'src/components/**/index.tsx',
      'src/lib/stitches.config.ts',
      'src/lib/globalStyles.ts',
    ],
    outdir: 'dist/esm',
    splitting: true,
    format: 'esm',
    banner: {
      js: "import { createElement, Fragment } from 'react';\n",
    },
    plugins: [globPlugin()],
  })
  .catch(() => process.exit(1));
