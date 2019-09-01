// For the needs of the application you have to create the following endpoints:
// remeber that these endpoints will serve html files to the browser so you have to use
// the method that gets information from the server

// '/'        -> This route will be the first page accessed by the users and for the sake of simplicity the login page too.
// '/room'    -> This route will be the page for the chatroom where all the users will be connected.

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Application Homepage");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
