import eslint from '@rollup/plugin-eslint'

const { resolve } = require('path')

export default {
    input: 'main.js',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                'week-1': resolve(__dirname, 'assignments/week-1/index.html'),
                'week-2': resolve(__dirname, 'assignments/week-2/index.html'),
                // "week-3": resolve(__dirname, "week-3/index.html"),
                // "week-5": resolve(__dirname, "week-5/index.html"),
                // "week-6": resolve(__dirname, "week-6/index.html"),
                // "week-7": resolve(__dirname, "week-7/index.html"),
                // "week-8": resolve(__dirname, "week-8/index.html"),
                // "week-9": resolve(__dirname, "week-9/index.html"),
                // "week-10": resolve(__dirname, "week-10/index.html"),
                // "week-11": resolve(__dirname, "week-11/index.html"),
                // "week-12": resolve(__dirname, "week-12/index.html"),
                // "week-13": resolve(__dirname, "week-13/index.html"),
            },
        },
    },
    plugins: [
        eslint({
            include: './assignments/**/*.+(js|jsx|ts|tsx|vue)',
        }),
    ],
}
