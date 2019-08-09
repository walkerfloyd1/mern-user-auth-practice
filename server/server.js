const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

const db = require('../config/keys.js').mongoURI;

mongoose.connect(db, { useNewParser: true })
.then(() => {
  console.log("MongoDB successfully connected")
}).catch(err =>
  console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server up and running")
});
