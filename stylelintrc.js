module.exports = {
    extends: ['stylelint-prettier/recommended', 'stylelint-config-prettier'],
    plugins: ['stylelint-scss'],
    rules: {
        'prettier/prettier': [
            true,
            {
                singleQuote: true,
                tabWidth: 4,
            },
        ],

        // recommended rules
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
    },
}
