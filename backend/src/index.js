const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333);
console.log('servidor rodando...')