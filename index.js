const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const router = require('./router.js');

app.use(cors({
  origin: 'http://localhost:3000',
  // origin: 'https://room-one-client.herokuapp.com',
  // default: 'https://room-one-client.herokuapp.com',
  credentials: 'include'
}))
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});