import type { Plugin } from "esbuild";

const styleFilter = /\.style$/;
const styleNamespace = "isometry-style-ns";

export const plugin = (): Plugin => {
  return {
    name: "isometry-css",
    setup: (build) => {
      const cssCode: string[] = [];

      build.onResolve({ filter: styleFilter }, async (args) => {
        console.log(args.path);
        return {
          path: args.path,
          namespace: styleNamespace,
        };
      });

      build.onLoad(
        { filter: /.*/, namespace: styleNamespace },
        async (args) => {
          return {
            contents: "",
            loader: "js",
          };
        }
      );

      build.onEnd((result) => {
        console.log("-> cssCode", cssCode);
      });
    },
  };
};
