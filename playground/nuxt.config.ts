import { defineNuxtConfig } from 'nuxt/config'
import pocketbaseModule from '..'

export default defineNuxtConfig({
  modules: [
    pocketbaseModule
  ],
  pocketbase: {
    url: 'http://127.0.0.1:8090'
  }
})
