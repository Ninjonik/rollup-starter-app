import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

export default {
	input: 'src/main.js',
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js',
	},
	plugins: [
		svelte(),
		resolve(),
		commonjs(),
		babel({
			presets: [
				[
					'@babel/preset-env',
					{
						useBuiltIns: 'usage',
						corejs: 3,
						targets: {
							edge: 18,
						},
					},
				],
			],
			plugins: [
				"@babel/plugin-transform-optional-chaining",
				"@babel/plugin-proposal-nullish-coalescing-operator"
			],
			babelHelpers: "inline",
			exclude: [/core-js/]
		}),
		terser(),
		postcss({
			extract: "bundle.css",
			minimize: true,
		}),
		copy({
			targets: [
				{ src: "./config.js", dest: "./public/dev" }
			]
		}),
	],
	watch: {
		clearScreen: false,
	},
};
