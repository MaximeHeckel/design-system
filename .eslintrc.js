module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'no-console': 'error',
  },
  settings: {
    react: {
      version: '17.0.1',
    },
  },
};
