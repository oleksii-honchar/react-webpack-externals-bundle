console.log('[config:eslint] config loaded');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaVersion: 2018,
    errorOnUnknownASTType: true,
    errorOnTypeScriptSyntacticAndSemanticIssues: true,
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react/react-in-jsx-scope' : 0,
    'class-methods-use-this': 'off',
    'dot-notation': ['error', { 'allowPattern': '^(code)$' }],
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'max-len': [
      'error',
      {
        code: 90,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-underscore-dangle': ['error', { 'allow': ['_id', '_headers'] }],
    'quote-props': ['error', 'consistent-as-needed'],
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    beforeEach: true,
    afterEach: true,
    describe: true,
    it: true,
    expect: true,
  },
  plugins: [
    '@typescript-eslint',
    'json',
    'react',
    'import'
  ],
  settings: {
    'react': {
      pragma: 'h',
      version: 'detect',
    },
    'import/extensions': ['.js','.jsx','.ts','.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts','.tsx']
    },
    'import/resolver': {
      'typescript': {
        directory: './configs/tsconfig.es20.json'
      }
    }
  },
};
