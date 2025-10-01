// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    open: '/examples/', // ← 起動時に /examples/ を開く
  },
  build: {
    outDir: 'js', // JS 出力先
    emptyOutDir: false, // js/ を消さない
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'LiteEditor',
      fileName: (format) => `lite-editor-emoji-plugin.${format}.js`,
      formats: ['es', 'iife'],
    },
    minify: true,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [],
});
