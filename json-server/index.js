const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')
const https = require('https')
const http = require('http')

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
}

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800)
  })
  next()
})

// Эндпоинт для логина
server.post('/login', (req, res) => {
  const { username, password } = req.body
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'))

  const { users } = db
  const userFromDb = users.find((user) => user.username === username && user.password === password)

  if (userFromDb) {
    return res.json(userFromDb)
  }

  return res.status(403).json({ message: 'AUTH ERROR' })
})

// Проверям авторизован ли пользователь
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' })
  }
  next()
})

server.use(router)

// Запуск сервера
const PORT = 8443
const HTTP_PORT = 8000

const httpsServer = https.createServer(options, server)
const httpServer = http.createServer(options)

httpsServer.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`)
})

httpServer.listen(HTTP_PORT, () => {
  console.log(`server is running on ${HTTP_PORT} port`)
})
