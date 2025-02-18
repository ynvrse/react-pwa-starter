import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const basenameProd = '/react-pwa-starter/';

export default defineConfig(({ command }) => {
    const isProd = command === 'build';

    return {
        base: isProd ? basenameProd : '',
        plugins: [
            react(),
            VitePWA({
                registerType: 'autoUpdate',
                workbox: {
                    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                },
                manifest: {
                    name: 'react-pwa-starter',
                    short_name: 'reactpwa',
                    theme_color: '#ffffff',
                    background_color: '#ffffff',
                    display: 'standalone',
                    start_url: isProd ? `${basenameProd}` : '/',
                    icons: [
                        {
                            src: `${basenameProd}icons/icon-192x192.svg`,
                            sizes: '192x192',
                            type: 'image/svg',
                        },
                        {
                            src: `${basenameProd}icons/icon-512x512.svg`,
                            sizes: '512x512',
                            type: 'image/svg',
                        },
                    ],
                },
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        define: {
            global: {
                basename: isProd ? basenameProd : '',
            },
        },
    };
});
