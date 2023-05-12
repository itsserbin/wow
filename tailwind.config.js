const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        "./node_modules/vue-tailwind-datepicker/**/*.js"
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

                "vtd-primary": colors.sky, // Light mode Datepicker color
                "vtd-secondary": colors.gray, // Dark mode Datepicker color
            },
        },
    },

    plugins: [],
};
