import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        format: 'umd',
        file: 'lib/index.js',
        name: 'obsrvble'
    },
    plugins: [
        commonjs(), // prise en charge de require
        babel() // transpilation
    ]
}