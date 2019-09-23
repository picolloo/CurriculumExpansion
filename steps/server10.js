// In order to get whenever a new user logged in you application you have to implement a socket that receives the
// connection signal and then attach all the others signal you need

// To do that you should use the 'on' methor from the socket.io you just created that receives the signal you want
// and a function that will be exectured when this happen
// That function receive as a parameter an socket instance representing the client's socket

// e.g:   io.on(<SIGNAL>, socket => {})

const express = require('express');
const app = express();
const PORT = 3000;

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/public`);

app.get('/', (req, res) => {
  res.sendFile('login.html');
});

app.get('/room', (req, res) => {
  res.sendFile('Chatroom Page');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
