// Now you should be able to connect to localhost:3000/ and localhost:3000/room and se the html pages being loaded correctly

// To create the communication between the server and the client we now should implemented the scoket io signals
// This signals are messages that both sides can send to each other even if it wasn't explicit called

// In order to that you will have to extract the server from express through the http built in node module
// e.g:    const http = require('http').Server(<SERVER>)  where the SERVER variable is the on you had created from express

// After that you have to pass this brand new to the socket.io instance in order to connect to the events

const express = require('express');
const app = express();
const PORT = 3000;

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
