/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#1246bc', // Example light primary color
                    dark: '#65e3df' // Example dark primary color
                },
                background: {
                    light: '#ffffff', // Light mode background
                    dark: '#292929' // Dark mode background
                },
                text: {
                    light: '#292929', // Light mode text
                    dark: '#ffffff' // Dark mode text
                }
            }
        }
    },
    plugins: [],
    darkMode: 'media'
};
