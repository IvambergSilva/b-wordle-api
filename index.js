const jsonServer = require("json-server")
const server = jsonServer.create();
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Define quem pode acessar (pode ser um domínio específico em vez de '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Define os métodos HTTP permitidos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Define os headers permitidos
    next();
});

server.use(middlewares)
server.use(router)

// const cors = require("cors")
// server.use(cors())

server.listen(port)