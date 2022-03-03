/**
 * @overview eslint
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-01-22 21:43:14
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-02-10 01:57:38
 */

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    "no-trailing-spaces": "error",
    "padded-blocks": ["error", "never"],
    "key-spacing": ["error", { afterColon: true }],
    "no-multi-spaces": ["error"],
    "quote-props": ["error", "as-needed"],
    "space-before-function-paren": [
      "error",
      { asyncArrow: "always", named: "never", anonymous: "never" }
    ],
    "space-before-blocks": ["error", "always"],
    "space-infix-ops": ["error", { int32Hint: false }],
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "no-undef": "error",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/comma-spacing": [
      "error",
      { before: false, after: true }
    ]
  }
};
