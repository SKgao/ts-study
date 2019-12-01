import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'bar2']
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'bar2'
//     }
//   }
// })

// const date = new Date()
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     a: 'aa',
//     b: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     a: '1234'
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get?a=aa',
//   params: {
//     b: 'bb'
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get?a=aa',
//   params: {
//     foo: '@:$[], '
//   }
// })


axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: '11',
    b: '22'
  },
  responseType: 'json'
}).then((res) => {
  console.log(res)
})

axios({
  method: 'post',
  url: '/base/buffer',
  data: new Int32Array([21, 31])
}).then((res) => {
  console.log(res)
})

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    a: '111',
    b: '222'
  }
}).then((res) => {
  console.log(res)
})

const paramsString = 'q=URLUtils&topic=qpi'
axios({
  method: 'post',
  url: '/base/post',
  data: new URLSearchParams(paramsString)
}).then((res) => {
  console.log(res)
})