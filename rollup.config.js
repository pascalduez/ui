// import externals from 'rollup-plugin-node-externals';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

let plugins = [
  // externals(),
  babel({
    exclude: ['node_modules/**'],
    // babelHelpers: 'runtime',
  }),
  // resolve(),
  // commonjs(),
];

export default {
  plugins,
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
};
