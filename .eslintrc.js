module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'comma-dangle': [2, 'always-multiline'],
    'camelcase': 'off',
    "operator-linebreak": [
      "error",
      "after",
      {
        "overrides": {
          ":": "before"
        }
      }
    ],
    "space-before-blocks": "off",
    "quotes": "off",
    "no-extra-semi": "off",
  },
};
