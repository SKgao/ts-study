import axios from '../../src/index'

document.cookie = 'a=b'

axios({
  url: '/xsrf/get',
  method: 'get',
}).then(res => {
  console.log(res)
})

axios.post('http://127.0.0.1:8888/xsrf/server2', {}, {
  withCredentials: true
}).then(res => {
  console.log(res)
})

const instance = axios.create({
  xsrfCookieName: 'XSRF-TOKEN-D',
  xsrfHeaderName: 'X-XSRF-TOKEN-D'
})

instance({
  url: '/xsrf/get',
  method: 'get',
}).then(res => {
  console.log(res)
})