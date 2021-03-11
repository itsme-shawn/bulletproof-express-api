module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  // 내가 쓰는 룰세팅
  rules: {
    // 0 false(off), 1 warn, 2 error
    semi: ['error', 'never'],
    'no-console': 'off',
    'comma-dangle': 0,
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }]
  }
}