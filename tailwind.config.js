/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary-default)',
                    light: 'var(--color-primary-light)'
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary-default)',
                    light: 'var(--color-secondary-light)'
                },
                tertiary: {
                    DEFAULT: 'var(--color-tertiary-default)',
                    light: 'var(--color-tertiary-light)'
                },
                accent: {
                    DEFAULT: 'var(--color-accent-default)',
                    light: 'var(--color-accent-light)'
                },
                grey: {
                    DEFAULT: 'var(--color-grey-default)'
                },
                slate: {
                    DEFAULT: 'var(--color-slate-default)'
                },
                dark: {
                    DEFAULT: 'var(--color-dark-default)'
                },
                light: {
                    DEFAULT: 'var(--color-light-default)'
                },
                overlay: 'var(--color-overlay)',
                rentalsPrimary: '#1246bc', // Add your custom color here
                rentalsSecondary: '#efefef',
                'rentals-dark-primary': '#65e3df',
                'rentals-dark-scondary': '#292929'
            }
        }
    },
    plugins: []
};
