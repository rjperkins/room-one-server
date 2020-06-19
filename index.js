const express = require('express');
const cors = require('cors')();
const app = express();
const bodyParser = require('body-parser');

const router = require('./router.js');

app.use(cors)
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});