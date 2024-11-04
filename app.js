const express = require("express");
const connectDB = require("./src/config/database");
const app = express();
const User = require("./src/modules/user");
const PORT = 7777;

app.use(express.json());
app.post("/signup", async (req, res) => {
  const userObj = req.body;
  try {
    // Creating a new instance of the User model
    const user = new User(userObj);
    await user.save();
    res.send("User Added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user :", err.message);
  }
});

app.get("/user", async(req, res) => {
  try {
    const users =  await User.find({ emailId: req.body.emailId });
    if (users.length === 0) {
      //
      res.status(500).send("Email does not exits");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(401).send("Something went wrong");
  }
});

app.get("/feed", async(req, res)=>{
   try {
        const users = await User.find({});
        res.send(users);
   } catch (error) {
        res.status(401).send("Something went wrong");
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
