import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["eslint.config.mjs", "dist/", "*.json", "node_modules/"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
      },
    },
  },
  {
    rules: {
      indent: ["error", 4],
      semi: ["error", "always"],
      "no-console": "off",
      "no-unused-vars": "off",
    },
  },
]);
