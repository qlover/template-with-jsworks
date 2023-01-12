const eslintrc = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint'],

  rules: {
    '@typescript-eslint/no-var-requires': 0
  }
}

module.exports = eslintrc
