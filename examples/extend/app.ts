import axios from '../../src/index'

// axios({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'post 1'
//   }
// })

// axios.request({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'post 2'
//   }
// })

// axios('/extend/post', {
//   method: 'post',
//   data: {
//     msg: 'post 3'
//   }
// })

// axios.get('/extend/get')

// axios.options('/extend/options')

// axios.delete('/extend/delete')

// axios.post('/extend/post', { msg: 'post 4' })

// axios.put('/extend/put', { msg: 'put' })

// axios.patch('/extend/patch', { msg: 'patch' })


interface ResponseData<T> {
  code: number
  message: string
  result: T
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.log(err))
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.name)
  }
}

test()