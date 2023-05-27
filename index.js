const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const router = jsonServer.router(path.join(__dirname, 'db.json'))
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(router)
server.use(cors())

const Port = 8080
server.listen(Port, () => {
  console.log(`JSON Server is running on ${Port}`)
})