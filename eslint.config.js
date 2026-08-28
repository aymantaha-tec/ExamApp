import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // show the rule as a yellow warning only
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: false },
      ],

      // Enforces a blank line before comments to improve code readability and visually separate sections
      "lines-around-comment": [
        "error",
        {
          beforeBlockComment: true, // Requires a blank line before multi-line block comments (/* ... */)
          beforeLineComment: false, // Requires a blank line before single-line comments (//)
          allowBlockStart: true, // Disallows placing a comment directly at the top of a block without a blank line preceding it
        },
      ],
    },
  },
]);
