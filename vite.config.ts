import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: ['tests/setup.tsx'],
        coverage: {
            provider: 'v8',
            include: ['src/**'],
            exclude: ['src/main.tsx', 'src/**/*.d.ts', 'src/**/*.stories.tsx'],
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
            '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
            '@icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
            '@tests': fileURLToPath(new URL('./tests', import.meta.url)),
        },
    },
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                replaceAttrValues: {
                    // @todo svgr plugin will replace the provided value with the keyword `currentColor`.
                    // Make sure to replace the `#000000` value with the color of the icons in the project's Figma file
                    '#000000': 'currentColor',
                },
            },
            include: 'src/assets/icons/*.svg?react',
        }),
    ],
});
