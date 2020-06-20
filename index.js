const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const router = require('./router.js');

app.use(cors({
<<<<<<< HEAD
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://room-one-client.herokuapp.com'],
  default: 'https://room-one-client.herokuapp.com',
=======
  origin: 'https://room-one-server.herokuapp.com',
>>>>>>> 0ba7fa75089811beb2e48a5835faa446f2db0fa3
  credentials: 'include'
}))
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});