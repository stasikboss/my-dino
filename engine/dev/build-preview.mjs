import { build } from 'esbuild';
await build({ entryPoints: ['src/preview.js'], bundle: true, format: 'iife', outfile: 'dev/preview.js', minify: false, logLevel: 'warning' });
