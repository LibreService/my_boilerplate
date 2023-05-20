import { LambdaWorker } from '@libreservice/my-worker'

const worker = new LambdaWorker('./worker.js')

const length: (s: string) => Promise<number> = worker.register('length')

export {
  length
}
