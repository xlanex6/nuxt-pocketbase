import PocketBase from 'pocketbase'
import { useRuntimeConfig, useNuxtApp } from '#app'

export const usePocketBaseClient = () => {
  const nuxtApp = useNuxtApp()
  const { pocketbase: { url } } = useRuntimeConfig().public

  if (!nuxtApp._pocketBase) {
    nuxtApp._pocketBase = new PocketBase(url)
  }
  
  return nuxtApp._pocketBase
}
