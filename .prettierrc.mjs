/** @type {import("prettier").Config} */
export default {
	semi: true,
	tabWidth: 4,
	useTabs: true,
	printWidth: 80,
	singleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'always',
	bracketSameLine: false,
	quoteProps: 'as-needed',
	plugins: ['prettier-plugin-tailwindcss'],
};
