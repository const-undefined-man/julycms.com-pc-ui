// https://nuxt.com/docs/api/configuration/nuxt-config
import envConfig from "./env.config"
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: 'https://demo.julycms.com',
  },
  runtimeConfig: {
    public: {
      ...envConfig
    }
  },
  sitemap: {
    excludeAppSources: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0',
      title: 'julycms demo-七月内容管理系统',
      meta: [
        {
          name: 'keywords',
          content: 'julycms,七月cmd,七月内容管理系统,nest cms,node cms'
        },
        {
          name: 'description',
          content: 'julycms是一个基于nestjs和nuxtjs的快速开发内容管理系统，旨在帮助开发者快速搭建内容管理系统。'
        },
      ],
      script: [
        { src: `//api.map.baidu.com/api?type=webgl&v=1.0&ak=${envConfig.baiduMapAK}`}
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ],
    }
  },

  devServer: {
    port: 3001,
  },

  ui: {
    // 参考地址 https://ui.nuxt.com/components/icon#usage
    icons: ['tabler'],
  },

  modules: ["@nuxt/ui", '@nuxtjs/sitemap', "@nuxt/eslint"],

  eslint: {
    checker: true,
    config:{}
  }
})
