import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import { sync } from 'rimraf';

const production = !process.env.ROLLUP_WATCH;

sync('public/**/*.js');

export default {
  input: 'src/main.js',
  output: {
    format: 'esm',
    file: 'public/bundle.js',
    preferConst: true,
  },
  plugins: [
    resolve({
      browser: true,
      modulesOnly: true,
    }),
    svelte({
      dev: !production,
    }),
    babel(),
  ],
  watch: {
    clearScreen: false,
  },
  treeshake: production,
};
