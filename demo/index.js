'use strict';
const express = require('express');
const cors = require('cors');
const { join } = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors()); // enable cors

app.disable('etag'); // disabled etag

app.disable('x-powered-by'); // disabled express tag

app.use(express.static(join(__dirname, 'public'))); // set public directory

app.use(express.json()); // parse json data

app.use(express.urlencoded({ extended: false })); // use query string lib for x-www-url-encoded

// ping route
app.get('/ping', (req, res) => {
  res.status(200).send(
    JSON.stringify({
      status: true,
      data: 'pong',
      path: req.path,
    })
  );
});

// create contact doc
app.post('/contact', (req, res) => {
  console.log(req.body);

  res.status(200).send(
    JSON.stringify({
      status: true,
      data: 'create contact form',
      path: req.path,
    })
  );
});

// 404
app.all('*', (req, res) => {
  res.status(404).send(
    JSON.stringify({
      status: false,
      data: 'page not found',
      path: req.path,
    })
  );
});

// listen to the port
app.listen(PORT, () => {
  console.log(`Server listing at http://localhost:${PORT}`);
});
