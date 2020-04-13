module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  extends: [
    "standard",
    "plugin:vue/recommended"
  ]
}
