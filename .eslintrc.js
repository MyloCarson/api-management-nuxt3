module.exports = {
  env: {
    node: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
  },
  rules: {
    'no-console': 'error',
    'no-undef': 'off',
    'no-useless-return': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/no-v-model-argument': 'off',
    'no-debugger': 'error',
    'vue/no-unused-vars': 'error',
    'vue/valid-v-slot': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  },
};
