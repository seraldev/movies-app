/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#f5f5f5',
                'primary-hover': '#ff9800',
                'primary-hover-accent': '#925905',
                'secondary': '#9e9e9e',
                'tertiary': '#202329',
                'section-main': '#f5f5f5',
                'section-primary': '#272b33',
                'section-secondary': '#3c3e44',
                'success': '#55cc44',
                'danger': '#d63d2e'
            },
            width: {
                '100': '40rem'
            },
            maxWidth: {
                '8xl': '1920px'
            },
            minHeight: {
                'main-section': 'calc(70vh)',
                'footer': 'calc(120px)'
            },
            flex: {
                '2-1': '2 1 0%',
                '3-1': '3 1 0%'
            },
            gridTemplateColumns: {
                'responsive': 'repeat(auto-fill, minmax(20rem, 1fr))'
            },
            gap: {
                '10-p': '10%'
            }
        },
    },
    plugins: [],
}