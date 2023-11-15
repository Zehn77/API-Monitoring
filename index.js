require('dotenv').config()
const express = require('express');
require('./config/db').connect()
// const middleware = require('./middleware/middleware')
const router = require('./router/router')
const cors = require('cors');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors({
    origin: 'http://localhost:4200'
  }));
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(middleware.monitorRequest)

app.use(router)

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});