import path from 'path';
import tslint from 'typescript-eslint';
import eslint from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
  baseDirectory: dirname,
});

export default [
  eslint.configs.recommended,
  ...compat.extends('airbnb-base'),
  ...compat.extends('airbnb-typescript/base'),
  ...tslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  {
    ignores: ['**/*.js', 'dist/'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  }
]
