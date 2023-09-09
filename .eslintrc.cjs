module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"prettier",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh", "security"],
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"security/detect-non-literal-regexp": "warn",
		"security/detect-non-literal-require": "warn",
		"react/prop-types": "off",
	},
  globals: {
    expect: "writable",
    describe: "writable",
    it: "writable",
    beforeEach: "writable",
    afterEach: "writable",
    beforeAll: "writable",
    afterAll: "writable",
    test: "writable",
    expect: "writable",
  }

};
