module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    root: true,
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react-refresh', 'unused-imports'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        "import/no-unresolved": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-vars": [
            "error",
            {"vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_"}
        ],
        "unused-imports/no-unused-imports": "error",
        "import/no-useless-path-segments": "warn",
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                "groups": ["builtin", "external", "internal", ["parent", "sibling", "index", "type"]],
                "pathGroups": [
                    {
                        "pattern": "react",
                        "group": "builtin",
                        "position": "before"
                    },
                    {
                        "pattern": "@core/**",
                        "group": "internal",
                        "position": "after"
                    },
                    {
                        "pattern": "material-symbols",
                        "patternOptions": { "matchBase": true },
                        "group": "external",
                        "position": "after"
                    }
                ],
                "warnOnUnassignedImports": true,
                "pathGroupsExcludedImportTypes": ["react"],
                "alphabetize": {"order": "asc", "caseInsensitive": true}
            }
        ],
    }
};
