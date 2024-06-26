import { injectScripts, overrideConfig } from '@minko-fe/vite-config'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { publicTypescript } from 'vite-plugin-public-typescript'

function setupScripts(_mode: string) {
  const scripts: ReturnType<Parameters<typeof injectScripts>[0]> = []

  return injectScripts((manifest) => {
    scripts.push({
      injectTo: 'head-prepend',
      attrs: {
        src: manifest.flexible,
      },
    })
    return scripts
  })
}

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const { mode } = env

  return overrideConfig(env, {
    plugins: [
      react(),
      setupScripts(mode),
      publicTypescript({
        babel: true,
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 9527,
    },
  })
})
