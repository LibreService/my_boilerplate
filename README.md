# My Boilerplate
![](https://img.shields.io/github/license/LibreService/my_boilerplate)

Quick start a new LibreService project. 

https://my-boilerplate.vercel.app/

This is a **STATIC** website so you **DON'T** need to own a server to host it.

All computation is performed in browser, thank to Web Assembly.

It's also a [PWA](https://web.dev/progressive-web-apps/), so you can install it like a native App and use it **OFFLINE**.

## Self host
Download latest [artifact](https://github.com/LibreService/my_rime/releases/download/latest/my-boilerplate-dist.zip) built by GitHub Actions.

## Development workflow
My Boilerplate can be built on Linux.

### Install node
You may use [nvm](https://github.com/nvm-sh/nvm) to install node.
### Install pnpm and dev dependencies
```sh
npm i -g pnpm
pnpm i
```
### Install emsdk
https://emscripten.org/docs/getting_started/downloads.html
### Build wasm
```sh
pnpm run lib
pnpm run wasm
```
### Run develop server
```sh
pnpm run dev
```
The app is accessible at http://localhost:5173
### Lint
```sh
pnpm run lint:fix
```
### Check type
```sh
pnpm run check
```
### Build
```sh
pnpm run build
```
### Test
```sh
pnpm run test
```
### Preview
```sh
pnpm run preview
```
### Deploy (maintainer only)
```sh
# set VERSION to avoid CDN and browser caching old version
export LIBRESERVICE_CDN=https://cdn.jsdelivr.net/npm/@libreservice/my-boilerplate@VERSION/dist/

vercel build --prod
npm publish
vercel deploy --prebuilt --prod
```
## License
AGPLv3+
