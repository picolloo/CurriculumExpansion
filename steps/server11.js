// If you have tried to connect in the browser to see if it's working you might have notice that the connection
// callback function is never called, this happen because the client side does not have a socket connection implemented yet

// There are a few ways to connect the client side to the socket.io (e.g: CDN)
// In your project we will be using CDN that are already included in chatrrom html page, you just have to uncomment

// In order to connect the client you will have to create a io instance from socket.io passing the url to the server you want to connect
// e.g:  const socket = io("http://localhost:3000")

// That will emit the connection signal and will be caught by the server as we already implemented

const express = require('express');
const app = express();
const PORT = 3000;

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/public`);

// Socket

io.on('connection', socket => {
  console.log('user connected');
});

// Routes

app.get('/', (req, res) => {
  res.sendFile('login.html');
});

app.get('/room', (req, res) => {
  res.sendFile('Chatroom Page');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
