// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    vue: true,
  }),
  {
    rules: {
      'vue/first-attribute-linebreak': 'warn',
      'vue/require-default-prop': 'off',
      'vue/no-mutating-props': 'off',
      'vue/no-template-shadow': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/max-attributes-per-line': 'warn',
      'vue/html-self-closing': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'unused-imports/no-unused-vars': 'warn',
      'no-console': 'warn',
      'array-callback-return': 'off',
      'no-alert': 'off',
      'ts/consistent-type-definitions': 'off',
    },
  },
)
