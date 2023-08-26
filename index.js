const jsonServer = require()
const server = jsonServer.create();
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001

server.use(router)
server.use(middlewares)

const cors = require("cors")
server.use(cors())

server.listen(port)