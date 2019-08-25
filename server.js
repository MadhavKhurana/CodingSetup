const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const pdf = require("html-pdf");

const pdfTemplate = require("./docs");

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

// app.get("/", (req, res) => res.send("Hello"));

//Use Routes

app.use("/api/users", users);
app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(), {}).toFile("result.pdf", err => {
    if (err) {
      return Promise.reject();
    }
    return Promise.resolve();
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile("${__dirname}/result.pdf");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running on port ${port}`));
