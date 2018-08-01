module.exports = {
    extends: [
      'eslint-config-airbnb',
      'eslint-config-prettier',
      'eslint-config-prettier/react'
    ].map(require.resolve),
  
    plugins: ['react', 'prettier'],

    globals: {
        PLATFORM: true,
        MODE: true
    },
  
    parserOptions: {
      ecmaVersion: 8,
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true
      }
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
      'linebreak-style': 'off',
      indent: 0, // eslint vs prettier. Round 1! Fight!
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'none',
          jsxBracketSameLine: false
        }
      ]
    }
  };