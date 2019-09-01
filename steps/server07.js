// Now you should be abe to use the '.render(<FILE>)' method of the response object
// to send files to the user, try to send the 'login.html' file to the '/' route and see what happens in the browser

// *Because of the views attribute in the app you might send the file using just it's name, not the full path

const express = require("express");
const app = express();
const PORT = 3000;

app.set('views', `${__dirname}/public`)

app.get("/", (req, res) => {
  res.send("Application Homepage");
});


app.get("/room", (req, res) => {
  res.send("Chatroom Page");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
