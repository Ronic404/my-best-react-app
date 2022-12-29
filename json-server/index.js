const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')
const https = require('https')

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
const httpsServer = https.createServer(options.server)
httpsServer.listen(443, () => {
  console.log(`server is running on ${443} port`)
})
