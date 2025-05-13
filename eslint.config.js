import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
    {ignores: ["dist", "node_modules", ".vite"]},
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            globals: {...globals.browser, ...globals.node},
            parser: tseslint.parser,
            sourceType: "module",
            project: "./tsconfig.json",
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        extends: [
            tseslint.configs.recommended,
            reactHooks.configs.recommended,
            prettier,
        ],
        rules: {
            "react-refresh/only-export-components": [
                "warn",
                {allowConstantExport: true},
            ],
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/prefer-optional-chain": "warn",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "react/prop-types": "off",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    }
);