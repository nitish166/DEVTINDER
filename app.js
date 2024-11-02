const express = require("express");

const app = express();

const PORT = 7777;

app.get("/getUserData", (req, res) => {
  try {
    throw new Error("This is error msg.");
    res.send("User Data sent");
  } catch (error) {
    res.status(500).send("Some Error occur, try contact to support team");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`The server runing on ${PORT}`);
});
