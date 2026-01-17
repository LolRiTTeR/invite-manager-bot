const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const prettier = require('eslint-config-prettier');

const tsFiles = ['**/*.ts'];

module.exports = [
	{
		ignores: ['bin/**', 'node_modules/**', 'docs/**']
	},
	js.configs.recommended,
	...tseslint.configs['flat/recommended'],
	{
		files: tsFiles,
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: __dirname,
				sourceType: 'module'
			}
		}
	},
	{
		files: tsFiles,
		rules: {
			...prettier.rules,
			'no-console': 'off',
			'no-empty': 'off',
			'no-case-declarations': 'off',
			'no-async-promise-executor': 'off',
			'no-constant-condition': 'off',
			'no-extra-boolean-cast': 'off',
			'no-misleading-character-class': 'off',
			'no-unused-vars': 'off',
			'no-useless-escape': 'off',
			'no-var': 'off',
			'prefer-const': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-inferrable-types': 'off',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-unsafe-function-type': 'off',
			'@typescript-eslint/no-wrapper-object-types': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_'
				}
			]
		}
	}
];
