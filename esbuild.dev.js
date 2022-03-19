const esbuild = require("esbuild");
const packagejson = require("./package.json");

const sharedConfig = {
  loader: {
    ".tsx": "tsx",
    ".ts": "tsx",
  },
  outbase: "./src",
  bundle: true,
  jsxFactory: "createElement",
  jsxFragment: "Fragment",
  target: ["esnext"],
  logLevel: "debug",
  external: [...Object.keys(packagejson.peerDependencies || {})],
};

esbuild
  .build({
    ...sharedConfig,
    entryPoints: ["src/index.ts"],
    outdir: "dist/esm",
    sourcemap: true,
    format: "esm",
    watch: true,
    banner: {
      js: "import { createElement, Fragment } from 'react';\n",
    },
  })
  .catch(() => process.exit(1));
