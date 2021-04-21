module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'prettier/prettier': ['error'],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0
  },
  globals: {
    window: true,
    document: true
  },
  parser: 'babel-eslint'
};
