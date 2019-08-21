const express = require("express");
const router = express.Router();
const { c, cpp, node, python, java } = require("compile-run");
const fs = require("fs");

const request = require("request");

router.get("/test", (req, res) => res.json({ msg: "User Works" }));

router.post("/", (req, res) => {
  // let lol = '#include <stdio.h>\nint main() { printf("xyz"); } ';
  let lol = req.body.code;

  // lol = lol.toString();

  var program = {
    script: lol,
    language: "c",
    versionIndex: "0",
    clientId: "11295542ae86a0068063c00c7eeeb923",
    clientSecret:
      "ae4ac466e377e47ab10f6a72eae6246e43fe3ea42dfb8f7b4e3e156090d65fa4"
  };
  request(
    {
      url: "https://api.jdoodle.com/v1/execute",
      method: "POST",
      json: program
    },
    function(error, response, body) {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
      res.json(body);
    }
  );
});

router.post("/2", (req, res) => {
  let a = req.body.code;
  fs.writeFile("hello.cpp", a, function(err) {
    if (err) throw err;
    console.log("Saved!");
  });

  let resultPromise = cpp.runFile("hello.cpp", { stdin: req.body.input });
  resultPromise
    .then(result => {
      console.log(result);
      res.json(result); //result object
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/BubbleSort", (req, res) => {
  let a = req.body.code;
  fs.writeFile("hello.cpp", a, function(err) {
    if (err) throw err;
    console.log("Saved!");
  });

  let resultPromise = cpp.runFile("hello.cpp", { stdin: req.body.input });
  resultPromise
    .then(result => {
      // let Array = req.body.input.split("\n");
      // // Array.splice(0, 1);
      // Array = Array[1].split(" ");
      // console.log(Array);
      // let newArray = [];

      // let k;
      // for (let q = 0; q < Array.length; q++) {
      //   for (let j = 0; j < Array.length; j++) {
      //     if (Array[j] > Array[j + 1]) {
      //       k = Array[j];
      //       Array[j] = Array[j + 1];
      //       Array[j + 1] = k;
      //       // console.log(Array);
      //       newArray.push(Array);
      //     }

      //     // if (q == Array.length - 2) {
      //     //   console.log(newArray);
      //     // }
      //   }
      // }

      // console.log(newArray);
      res.json(result); //result object
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
