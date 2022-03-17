const esbuild = require("esbuild");
const packagejson = require("./package.json");
// const { globPlugin } = require("esbuild-plugin-glob");

const sharedConfig = {
  loader: {
    ".tsx": "tsx",
    ".ts": "tsx",
  },
  outbase: "./src",
  bundle: true,
  minify: true,
  inject: ["./react-shim.js"],
  target: ["esnext"],
  logLevel: "debug",
  external: [...Object.keys(packagejson.peerDependencies || {})],
};

esbuild
  .build({
    ...sharedConfig,
    entryPoints: ["src/index.ts"],
    outdir: "dist/cjs",
    platform: "node",
    format: "cjs",
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...sharedConfig,
    entryPoints: [
      "src/index.ts",
      "src/components/Button/index.tsx",
      "src/components/Test/index.tsx",
      "src/components/Flex/index.tsx",
      "src/lib/stitches.config.ts",
    ],
    outdir: "dist/esm",
    splitting: true,
    format: "esm",
  })
  .catch(() => process.exit(1));
