// For you to be able to send static files to the browser you will need to specify
// where these files are placed within your application
// This should be specified to the application using the '.set(<KEY>, <VALUE>)' of the app instance
// in this case the key is 'views' and the value is the full path of the directory where the html files are

// *We have created the folder called 'public' and the html files for the application  located in the root directory
// *To specify the folder's path you must use the full path, not the relative one
// in order to do that try to use the '__dirname' global variable that stores the root directory of the aplication

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Application Homepage");
});


app.get("/room", (req, res) => {
  res.send("Chatroom Page");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
