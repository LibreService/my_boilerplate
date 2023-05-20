import { loadWasm, expose } from '@libreservice/my-worker'

const readyPromise = loadWasm('boilerplate.js', {
  url: '__LIBRESERVICE_CDN__',
  init () {
    Module.ccall('init', 'null', [], [])
  }
})

expose({
  length (s: string): number {
    return Module.ccall('length', 'number', ['string'], [s])
  }
}, readyPromise)
