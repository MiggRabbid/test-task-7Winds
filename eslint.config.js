import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [
    js.configs.recommended, 
    ...tseslint.configs.recommended,
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 'latest',
    globals: globals.browser,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@typescript-eslint': tseslint,
    'import': importPlugin, 
    'prettier': prettierPlugin,
  },
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'no-console': 'warn',
    'no-extra-boolean-cast': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-case-declarations': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-shadow': ['warn'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
})
