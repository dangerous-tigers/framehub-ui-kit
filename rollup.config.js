import image from "@rollup/plugin-image";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";

const externalDeps = ["react", "react-dom", "react/jsx-runtime", "clsx"];
const styleRegex = /\.(css|sass|scss)/;
const plugins = [
  // для ts
  typescript({
    tsconfig: "./tsconfig.json",
  }),
  //для стилей
  postcss({
    extract: "index.css",
    modules: true,
    use: ["sass"],
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
];

// для иконок не нужно обрабатывать стили, так как они не используют css-модули
const pluginsIcons = plugins.filter((plugin) => plugin.name !== "postcss");

const jsBuild = [
  {
    input: "src/components/index.ts",
    output: [
      { file: "dist/components/index.js", format: "cjs" },
      { file: "dist/components/index.esm.js", format: "esm" },
    ],
    external: externalDeps,
    plugins: [...plugins],
  },
  {
    input: "src/icons/index.ts",
    output: [
      { file: "dist/icons/index.js", format: "cjs" },
      { file: "dist/icons/index.esm.js", format: "esm" },
    ],
    external: externalDeps,
    plugins: [...pluginsIcons],
  },
];

const dtsBuild = [
  {
    input: "src/components/index.ts",
    output: [
      { file: "dist/types/components/index.d.ts", format: "cjs" },
      { file: "dist/types/components/index.d.ts", format: "esm" },
    ],
    external: (id) => styleRegex.test(id),
    plugins: [dts()],
  },
  {
    input: "src/icons/index.ts",
    output: [
      { file: "dist/types/icons/index.d.ts", format: "cjs" },
      { file: "dist/types/icons/index.d.ts", format: "esm" },
    ],
    external: (id) => styleRegex.test(id),
    plugins: [dts()],
  },
];

export default [...jsBuild, ...dtsBuild];
