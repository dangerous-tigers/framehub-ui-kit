import image from "@rollup/plugin-image";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { visualizer } from "rollup-plugin-visualizer";
const styleRegex = /\.(css|sass|scss)/;

const plugins = [
  // для исключения peer зависимостей из сборки
  peerDepsExternal(),
  // для ts
  typescript({
    tsconfig: "./tsconfig.json",
  }),
  //для стилей
  postcss({
    extract: "index.css",
    modules: true,
    use: [
      [
        "sass",
        {
          silenceDeprecations: ["legacy-js-api"],
        },
      ],
    ],
    minimize: true,
  }),
  // для SVG
  image(),
  // для SVG - to react-component - TEST
  svgr({
    icon: true,
  }),
  // для минификации кода
  terser(),
  // для анализа размера бандла
  visualizer({
    filename: "stats.html",
    open: false,
    gzipSize: true,
  }),
];

// для иконок не нужно обрабатывать стили, так как они не используют css-модули
const pluginsIcons = plugins.filter((plugin) => plugin.name !== "postcss");

const jsBuild = [
  {
    input: "src/components/index.ts",
    output: {
      dir: "dist/components",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src/components",
      entryFileNames: "[name].esm.js",
      chunkFileNames: "chunks/[name]-[hash].esm.js",
    },
    plugins: [...plugins],
  },
  {
    input: "src/icons/index.ts",
    output: {
      dir: "dist/icons",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src/icons",
      entryFileNames: "[name].esm.js",
      chunkFileNames: "chunks/[name]-[hash].esm.js",
    },
    plugins: [...pluginsIcons],
  },
];

const dtsBuild = [
  {
    input: "src/components/index.ts",
    output: {
      dir: "dist/types/components",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src/components",
      entryFileNames: "[name].d.ts",
    },
    external: (id) => styleRegex.test(id),
    plugins: [peerDepsExternal(), dts()],
  },
  {
    input: "src/icons/index.ts",
    output: {
      dir: "dist/types/icons",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src/icons",
      entryFileNames: "[name].d.ts",
    },
    external: (id) => styleRegex.test(id),
    plugins: [dts()],
  },
];

export default [...jsBuild, ...dtsBuild];
