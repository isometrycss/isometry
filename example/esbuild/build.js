const esbuild = require("esbuild");
const isometry = require("@isometry/esbuild-plugin").default;
const fs = require("fs");

esbuild
  .build({
    entryPoints: ["src/index.tsx"],
    platform: "browser",
    target: ["es2020"],
    outfile: "dist/main.js",
    bundle: true,
    minify: true,
    minifyIdentifiers: false,
    logLevel: "info",
    external: ["esbuild"],
    plugins: [isometry()],
  })
  .then(() => {
    fs.copyFileSync("index.html", "dist/index.html");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
