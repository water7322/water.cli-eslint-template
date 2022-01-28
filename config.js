module.exports = {
    devDependencies: {
        '@typescript-eslint/eslint-plugin': '^5.10.1',
        '@typescript-eslint/parser': '^5.10.1',
        'babel-eslint': '^10.1.0',
        eslint: '^8.5.0',
        'eslint-config-prettier': '^8.3.0',
        'eslint-plugin-prettier': '^4.0.0',
        'eslint-plugin-vue': '^8.2.0',
        husky: '^7.0.4',
        'lint-staged': '^12.3.2',
        prettier: '^2.5.1',
        typescript: '^4.5.4'
    },
    husky: {
        hooks: {
            'pre-commit': 'lint-staged'
        }
    },
    'lint-staged': {
        './**/*.{js,vue,ts,tsx}': 'eslint'
    }
};
