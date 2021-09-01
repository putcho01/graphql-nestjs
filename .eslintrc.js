module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'backend/tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'lf',
				printWidth: 100,
				trailingComma: 'all',
				semi: true,
				singleQuote: true,
				useTabs: true,
				tabWidth: 2,
			},
		],
		'@typescript-eslint/no-unused-vars': 'off',
	},
};