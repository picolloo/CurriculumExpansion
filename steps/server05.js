// You should now, after restart the server, be able to connect at http://localhost:3000
// and see in the console the message you wrote

// The callback you pass in to the get method receives 2 parameters, a request and a response objects
// These objects are used to retrieve and send data to the user respectively

// The reponse object has some methods that sends back to the user a message, it could be a text, a json or even a html file
// Use the SEND method to communicate with the user sending back a message that will be displayed in the browser

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', () => {
  console.log('Application Homepage');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
