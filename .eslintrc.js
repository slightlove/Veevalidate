module.exports = {
  root: true,
  env: {
    "browser": true,
    "node": true,
    "es2020": true,
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "globals": {
    "$": "readonly",
    "defineProps": "readonly",
    "defineEmits": "readonly",
    "defineExpose": "readonly",
    "withDefaults": "readonly",
  },
  "rules": {
    '@typescript-eslint/explicit-module-boundary-types': "off",
    'semi': "off",
    "prettier/prettier": 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
