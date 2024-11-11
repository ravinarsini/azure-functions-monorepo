const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

console.log(project);

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "turbo",
  ],
  plugins: ["only-warn", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    ".next/",
    "out/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "none",
      },
    ],
    "import/named": "off",
    "no-console": "warn",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
