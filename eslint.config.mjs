// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(

)
.overrideRules({
  'vue/html-self-closing': 0,
  'vue/no-multiple-template-root': 0,
  'vue/max-attributes-per-line': 0,
  'vue/singleline-html-element-content-newline': 0,
  'vue/multiline-html-element-content-newline': 0,
  'vue/no-v-html': 0,
})
