import axios, { AxiosError } from '../../src/index'
import { AxiosError } from '../../src/helpers/error'

axios({
  method: 'get',
  url: '/error/get1'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

axios({
  method: 'get',
  url: '/error/get'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})


axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(res => {
  console.log(res)
}).catch((err: AxiosError) => {
  console.log(err.message)
  console.log(err.config)
  console.log(err.request)
  console.log(err.isAxiosError)
})