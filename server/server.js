const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");

const users = require("./routes/apis/users");

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

app.use(passport.initialize());

require("../config/passport")(passport);

app.use("/api/users", users);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server up and running")
});
