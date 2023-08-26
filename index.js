const jsonServer = require("json-server")
const server = jsonServer.create();
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001

server.use(router)
server.use(middlewares)

const cors = require("cors")
server.use(cors())

server.listen(port)

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
} else {
  const corsOptions = {
    origin: 'https://b-wordle-api.onrender.com', // Troque para o domínio do seu aplicativo de produção
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
}

// Resto do código da sua API...
