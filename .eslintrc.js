module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 0 false(off), 1 warn, 2 error
    'react/prefer-stateless-function': 0,
    'no-unused-vars': 1,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/destructuring-assignment': [0, 'always'],
    'jsx-a11y/alt-text': 0,
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never'],
    'no-console': 'off',
    'comma-dangle': 0,
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
  },
}
