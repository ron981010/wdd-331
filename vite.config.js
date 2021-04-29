import eslint from '@rollup/plugin-eslint'

const { resolve } = require('path')

export default {
    input: 'main.js',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // 'week-1': resolve(__dirname, 'assignments/week-1/index.html'),
                // Add an other page entry
            },
        },
    },
    plugins: [
        eslint({
            include: './assignments/**/*.+(js|jsx|ts|tsx|vue)',
        }),
    ],
}
