import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

export default defineConfig({
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
