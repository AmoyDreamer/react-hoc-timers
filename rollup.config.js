import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { eslint } from "rollup-plugin-eslint";

let config = {
    input: 'src/index.js',
    output: [{
        file: './index.js',
        format: 'cjs'
    }],
    external: ['react'],
    plugins: [
        nodeResolve(),
        eslint({
            fix: true
        }),
        babel({
            "exclude": 'node_modules/**',
            "babelHelpers": 'bundled',
            "presets": ['@babel/preset-env', '@babel/preset-react'],
        }),
        commonjs()
    ]
}
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(uglify())
}
export default config;
