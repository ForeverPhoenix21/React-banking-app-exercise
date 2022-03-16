const express = require("express");
const app = express();
const cors = require("cors");
const dal = require("./dal.js");

// used to server static files form public directory
app.use(express.static("public"));
app.use(cors());

// create User from dal/mongoDb
app.get("/account/create/:name/:email/:password", function (req, res) {
  // else create user
  dal
    .create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    });
});

//  all accounts updated
app.get("/account/all", function (req, res) {
  dal.all().then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

// // create user account (not with dal/mongodb)
// app.get("/account/create/:name/:email/:password", function (req, res) {
//   res.send({
//     name: req.params.name,
//     email: req.params.email,
//     password: req.params.password,
//   });
// });

// // login User
// app.get("/account/login/:email/:password", function (req, res) {
//   res.send({
//     email: req.params.email,
//     password: req.params.password,
//   });
// });

// // all accounts
// app.get("/account/all", function (req, res) {
//   res.send({
//     name: "peter",
//     email: "peter@mit.edu",
//     password: "secret",
//   });
// });

var port = 3000;
app.listen(port);
console.log("Running of port: " + port);
