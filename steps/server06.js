// Restart the server and hit the endpoint, can you see the message in the browser?

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Application Homepage');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
