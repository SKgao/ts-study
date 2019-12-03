const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

const router = express.Router()

const cors = {
  'Access-Control-Allow-Origin': 'http://localhost:8080/',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type',
}

router.post('/xsrf/server2', (req, res) => {
  res.set(cors)
  res.json(req.cookies)
})

router.options('/xsrf/server2', (req, res) => {
  res.set(cors)
  res.end()
})

app.use(router)
const port = 8888
module.exports = app.listen(port)