/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    theme: {
        fontFamily: {
            light: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
            thin: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
            xthin: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
            xxthin: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
            regular: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
            medium: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
            bold: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
            },
        },
        extend: {
            gridTemplateColumns: {
                nav: '1fr auto 1fr',
            },
            colors: {
                white: {
                    DEFAULT: 'rgb(var(--white) / <alpha-value>)',
                },
                blue: {
                    DEFAULT: 'rgb(var(--blue) / <alpha-value>)',
                    dark: 'rgb(var(--blue-dark) / <alpha-value>)',
                },
                black: {
                    DEFAULT: 'rgb(var(--black) / <alpha-value>)',
                    dark: 'rgb(var(--black-dark) / <alpha-value>)',
                    light: 'rgb(var(--black-light) / <alpha-value>)',
                },
            },
            maxWidth: {
                max: '1920px',
                mid: '1200px'
            },
            boxShadow: {
                custom: '0 8px 16px rgba(0, 0, 0, 0.16)',
            },
        },
    },
    plugins: [],
};
