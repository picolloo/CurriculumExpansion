// As you might have notice the page itself isn't loading the style from the '.css' file
// even with the link to './login.css'
// This happens because the server tries to find the file located in
// this path from the root of the application but the style files is actually located
// at './public/login.css' (from the root)

// In order to send files by the relative path you must tell to the server that this
// file are placed in a directory of static files using the '.user(<VARIABLE:)
// from the app object 'express.static(<FULL_STATIC_FOLDER_PATH>) as argument

const express = require("express");
const app = express();
const PORT = 3000;

app.set('views', `${__dirname}/public`)

app.get("/", (req, res) => {
  res.render('login.html')
});


app.get("/room", (req, res) => {
  res.send("Chatroom Page");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
