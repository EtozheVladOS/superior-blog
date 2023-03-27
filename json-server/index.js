const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const BD_PATH = path.resolve(__dirname, 'db.json');
const SERVER_PORT = 8080;

const server = jsonServer.create();
const router = jsonServer.router(BD_PATH);

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// server response timeout
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  next();
});

// login endpoint
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    const db = JSON.parse(fs.readFileSync(BD_PATH), 'UTF-8');
    const { users = [] } = db;

    const currnetUser = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (currnetUser) {
      return res.json(currnetUser);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
});

// auth check
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Auth error' });
  }

  next();
});

server.use(router);

// run server
server.listen(SERVER_PORT, () => {
  console.log(`server is running on ${SERVER_PORT} port`);
});
