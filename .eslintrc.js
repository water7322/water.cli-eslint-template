// https://eslint.org/docs/user-guide/configuring

const isDev = process.env.NODE_ENV !== 'production';
module.exports = {
    root: true,
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    env: {
        browser: true,
        commonjs: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    // required to lint *.vue files
    plugins: ['vue', '@typescript-eslint'],
    globals: {process: true, __dirname: true, wx: true},
    // add your custom rules here
    rules: {
        'vue/attributes-order': 'error',
        'vue/require-v-for-key': 'off',
        'vue/no-unused-vars': 'off',
        'vue/no-parsing-error': 'off',
        'vue/max-attributes-per-line': ['error', {singleline: Infinity, multiline: {max: Infinity, allowFirstLine: true}}],
        'no-unused-vars': ['error', {varsIgnorePattern: '^that$', args: 'none'}],
        'comma-dangle': ['error', 'never'],
        'no-regex-spaces': 'off',
        'no-useless-escape': 'off',
        'no-extra-boolean-cast': 'off',
        'no-redeclare': 'off',
        'no-empty': 'off',
        'no-irregular-whitespace': 'off',
        'generator-star-spacing': 'off',
        'prettier/prettier': 'error',
        'require-atomic-updates': 'off',
        'no-debugger': isDev ? 'off' : 'error',

        // 下面这些属性是因为插件不支持，先关闭
        'no-dupe-else-if': 'off',
        'no-import-assign': 'off',
        'no-setter-return': 'off',
        'vue/script-setup-uses-vars': 'off'
    }
};
