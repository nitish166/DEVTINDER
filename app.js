const express = require("express");

const app = express();

const PORT = 7777;

// app.use("/route", rH, [rH2, rH3], rH4, rH5);

app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling the Route User1 !");
    //res.send("Response 1");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user2 !");
    //res.send("Response 2");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user3 !");
    next();
    //res.send("Response 3");
  },
  (req, res) => {
    console.log("Handling the route user4 !");
    res.send("Response 4");
  }
);

app.listen(PORT, () => {
  console.log(`The server runing on ${PORT}`);
});
