/**
 * @overview Babel config
 * @createdBy swpark (<swpark@lucentblock.com>)
 * @createdAt 2022-01-25 02:21:06
 * @updatedBy swpark (<swpark@lucentblock.com>)
 * @updatedAt 2022-01-25 02:21:21
 */

module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript"
  ]
};
