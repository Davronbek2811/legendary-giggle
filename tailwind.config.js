/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js}", // можно указать свои пути
    ],
    theme: {
        extend: {
            // // Здесь ты можешь добавить свои стили
            // spacing: {
            //     '200': '200px',
            // },
            // colors: {
            //     'custom-red': '#ff4444',
            // },
        },
    },
    plugins: [],
}
