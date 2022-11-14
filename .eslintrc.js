// The irony that we need to disable no-undef eslint rule in the eslint file (due to `module`) is overwhelming
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "unused-imports", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "no-empty-pattern": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": [
      "off",
      {
        vars: "all",
        args: "after-used",
      },
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "unused-imports/no-unused-imports": "error",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "unused-imports/no-unused-vars": [
      "off",
      {
        vars: "all",
        args: "after-used",
      },
    ],
  },
};
