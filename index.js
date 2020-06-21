const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const router = require('./router.js');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join('build', 'index.html'));
  });
}

app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://room-one-client.herokuapp.com'],
  default: 'https://room-one-client.herokuapp.com',
  credentials: 'include'
}))
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});