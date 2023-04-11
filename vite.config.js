import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Перевірте, чи файл містить певний паттерн, наприклад 'node_modules'
                    if (id.includes('node_modules')) {
                        // Розділіть всі модулі з папки 'node_modules' в окрему частину коду
                        return 'vendors';
                    }
                }
            }
        }
    },
    plugins: [
        chunkSplitPlugin(),
        laravel({
            input: [
                'resources/js/Pages/Public/app.js',
                'resources/js/Pages/Admin/app.js',
                'resources/scss/app.scss',
                'resources/scss/public.scss'
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ]
});
