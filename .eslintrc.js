'use strict'

module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:vue-libs/recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
  }
}
