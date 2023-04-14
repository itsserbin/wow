import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
    plugins: [
        DefineOptions(),
        laravel({
            input: [
                'resources/js/Pages/app.js',
                // 'resources/js/Pages/Public/app.js',
                // 'resources/js/Pages/Admin/app.js',
                'resources/scss/app.scss',
                'resources/scss/public.scss'
            ],
            ssr: 'resources/js/Pages/ssr.js',
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
