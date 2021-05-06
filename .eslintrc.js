module.exports = {
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'eslint-config-prettier'],
    plugins: ['prettier'],
    rules: {},
    overrides: [
        {
            files: '**/*.+(ts|tsx)',
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.js',
            },
            plugins: ['@typescript-eslint/eslint-plugin'],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'eslint-config-prettier/@typescript-eslint',
            ],
        },
    ],
};
