const esbuild = require("esbuild");
const packagejson = require("./package.json");
const { globPlugin } = require("esbuild-plugin-glob");

esbuild
  .build({
    color: true,
    entryPoints: ["src/index.ts"],
    outdir: "dist/esm",
    loader: {
      ".tsx": "tsx",
      ".ts": "tsx",
    },
    outbase: "./src",
    bundle: true,
    sourcemap: true,
    format: "esm",
    inject: ["./react-shim.js"],
    target: ["esnext"],
    logLevel: "error",
    watch: true,
    external: [...Object.keys(packagejson.peerDependencies || {})],
    plugins: [globPlugin()],
  })
  .catch(() => process.exit(1));
