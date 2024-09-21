/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                app: {
                    primary: 'var(--app-primary)',
                    secondary: 'var(--app-secondary)',
                    tertiary: 'var(--app-tertiary)'
                },
                background: {
                    primary: 'var(--background-primary)'
                },
                label: {
                    primary: 'var(--label-primary)',
                    secondary: 'var(--label-secondary)',
                    danger: 'var(--label-danger)'
                },
                heading: {
                    primary: 'var(--heading-primary)',
                    secondary: 'var(--heading-secondary)'
                },
                btn: {
                    primary: 'var(--btn-primary)'
                }
            }
        }
    },
    plugins: [],
    darkMode: 'media'
};
