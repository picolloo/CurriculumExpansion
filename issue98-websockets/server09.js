//
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/public`);

app.get('/', (req, res) => {
  res.render('login.html');
});

app.get('/room', (req, res) => {
  res.send('Chatroom Page');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
