import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        cssInjectedByJsPlugin({
            preRenderCSSCode: (cssCode) => {
                console.log(cssCode);
                return cssCode.replace(/\/assets/g, 'https://callbackvite.netlify.app/assets');
            },
        }),
    ],
    server: {
        port: 3000,
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'index.js',
                manualChunks: undefined,
            },
        },
    },
});
