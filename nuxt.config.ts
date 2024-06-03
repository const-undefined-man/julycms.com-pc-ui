// https://nuxt.com/docs/api/configuration/nuxt-config
import envConfig from "./env.config"
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      ...envConfig
    }
  },
  site: {
    url: 'https://demo.julycms.com'
  },
  sitemap: {
    excludeAppSources: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0',
    },
  },
  vue: {
    propsDestructure: true
  },

  devServer: {
    port: 3001,
  },


  ui: {
    icons: ['tabler'],
  },

  modules: ["@nuxt/ui", '@nuxtjs/sitemap', '@nuxt/image', "@nuxt/eslint"],

  eslint: {
    checker: true,
    config:{}
  }
})
