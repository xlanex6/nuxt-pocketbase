import { fileURLToPath } from 'url'
import { resolve } from 'path'
import { defu } from 'defu'
import { defineNuxtModule, addImportsDir, useLogger, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  url: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-pocketbase',
    configKey: 'pocketbase'
  },
  defaults: {
    url: ''
  },
  setup (moduleOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const resolveRuntimeModule = (path: string) => resolveModule(path, { paths: resolve('./runtime') })

    if (!moduleOptions.url) {
      throw new Error('PocketBase URL is missing')
    }

    nuxt.options.runtimeConfig.public.pocketbase = defu(nuxt.options.runtimeConfig.public.pocketbase, {
      url: moduleOptions.url
    })

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    addImportsDir(resolve(runtimeDir, 'composables'))

    // if (options.addPlugin) {
    //   const { resolve } = createResolver(import.meta.url)
    //   const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    //   nuxt.options.build.transpile.push(runtimeDir)
    //   addPlugin(resolve(runtimeDir, 'plugin'))
    // }
  }
})
