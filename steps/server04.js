// Now let's try to create a endpoint for the users to communicate with the application
// Try to create the pattern that you could access using 'http://localhost:3000/'
// and send a message to verify if it's working

const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
