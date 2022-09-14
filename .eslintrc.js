const CURR_ENV = process.env.NODE_ENV === 'development' ? 'dev': 'prod';

module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'react-app', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'import', 'react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/destructuring-assignment': 'warn',
    'no-console': 'warn',
    'no-shadow': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.ts', '.js'] }],
    'arrow-body-style': ["error", "always"],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/function-component-definition': [
      2, 
      { 
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: `webpack.${CURR_ENV}.config.js`,
      },
    },
  },
};