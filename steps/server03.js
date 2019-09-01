// Insert a callback function as the second parameter of listen that prints some message
// on the screen for you to know if the server is running correctly.
// Try to use some of the new javascript tools you just learned.

// After that you should be able to run the command 'node server.js' and see the message you wrote

const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT);
