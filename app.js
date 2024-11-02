const express = require("express");
const connectDB = require("./src/config/database");
const app = express();
const User = require("./src/modules/user");
const PORT = 7777;

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Sunil",
    lastName: "Bhakar",
    emailId: "sunil123@gmail.com",
    password: "sunil123@",
  };
  try {
    // Creating a new instance of the User model
    const user = new User(userObj);
    await user.save();
    res.send("User Added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user :", err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`The server runing on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
