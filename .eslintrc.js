module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['@react-native-community', 'plugin:import/recommended', 'prettier', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import', 'unused-imports', 'react-native'],
  rules: {
    'prettier/prettier': 2,
    'no-console': 2,
    'comma-dangle': 0,
    semi: [2, 'never'],
    quotes: [2, 'single', 'avoid-escape'],
    'max-len': [1, 120, 2],
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 2,
    'imports-first': 0,
    'import/named': 0,
    'no-trailing-spaces': 0,
    'no-use-before-define': 0,
    'import/prefer-default-export': 'off',
    'react/sort-comp': 'off',
    'react-native/no-inline-styles': 0,
    'react/jsx-boolean-value': [2, 'never'],
    'import/order': [
      2,
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-unused-vars': 2,
    'no-extra-boolean-cast': 0,
    'unused-imports/no-unused-imports': 2,
    'react-native/no-unused-styles': 2,
    'max-lines': [2, { max: 250, skipBlankLines: true, skipComments: true }],
  },
  settings: {
    'import/ignore': 'node_modules/react-native/index.js',
  },
}
