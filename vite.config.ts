import { execSync } from 'child_process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace'
import { run } from 'vite-plugin-run'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import { appName } from './package.json'

const resources = ['boilerplate.js', 'boilerplate.wasm']

const workbox: VitePWAOptions["workbox"] = {
  maximumFileSizeToCacheInBytes: 13631488,
  globPatterns: [
    '**/*.{js,css,html}',
    'apple-touch-icon.png',
    ...resources
  ]
}

const plugins = [
  replace({
    __COMMIT__: execSync('git rev-parse HEAD').toString().trim(),
    __BUILD_DATE__: new Date().toLocaleString()
  }),
  VitePWA({
    registerType: 'autoUpdate',
    workbox,
    manifest: {
      name: appName,
      short_name: appName,
      icons: [
        {
          src: 'LibreService.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any maskable',
        }
      ]
    }
  }),
  vue()
]

if (process.env.NODE_ENV !== 'production') {
  plugins.push(run({
    input: [
      {
        name: 'Transpile worker',
        run: ['pnpm run worker'],
        condition: file => file.includes('worker.ts')
      }
    ],
    silent: false
  }))
}

export default defineConfig({
  base: '',
  plugins,
  server: {
    watch: {
      ignored: ['**/build/**', '**/dist/**', '**/scripts/**', '**/wasm/**'],
    },
  }
})