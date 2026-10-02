import { build } from 'esbuild';
const min = process.argv.includes('--min');
await build({ entryPoints: ['src/engine.js'], bundle: true, format: 'iife', outfile: min ? '../engine.js' : 'dev/engine.js', minify: min, legalComments: 'none', banner: { js: '/*! Engine for My Dino. Includes three.js (https://threejs.org), Copyright 2010-2025 Three.js Authors, MIT License: https://github.com/mrdoob/three.js/blob/dev/LICENSE */' }, logLevel: 'warning', target: ['es2020', 'safari15'] });
