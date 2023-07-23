// https://v3.nuxtjs.org/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,
  head: {
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: [],
    charset: 'utf-8',
    title: 'App |',
    viewport: 'width=device-width, initial-scale=1',
  },
  css: [
    // SCSS file in the project
    // '@/assets/styles/main.scss',
  ],

  vite: {},
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      'composables/**',
    ],
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  // buildModules: ['@nuxt/typescript-build'],
});
