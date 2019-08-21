const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const users = require("./routes/api/users.js");
const profile = require("./routes/api/profile.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//Db Config

const db = require("./config/keys.js").mongoURI;

//connect to mongodb

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

//Use Routes

app.use("/api/users", users);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running on port ${port}`));
