const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                heading: 'Montserrat', ...defaultTheme.fontFamily.sans,
                subheading: 'Nunito', ...defaultTheme.fontFamily.sans,
                text: 'Roboto', ...defaultTheme.fontFamily.sans
            },
            colors: {
                main: '#F8696B',
                secondary: '#FFE5E5',
                text: '#333333',
                accent: '#D90429',
                button: '#F44336',
                link: '#D90429',
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
    ],
};
