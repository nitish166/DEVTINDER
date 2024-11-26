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

app.get("/user", async (req, res) => {
  try {
    const users = await User.find({ emailId: req.body.emailId });
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

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(401).send("Something went wrong");
  }
});

app.delete("/deleteUser", async (req, res) => {
  try {
    //console.log(req.body._id);
    const user = await User.findByIdAndDelete(req.body.userId);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

app.patch("/updateUser", async (req, res) => {
  const _id = req.body._id;
  const data = req.body;
   console.log(data?.skills?.length);
  // console.log("User id :", _id)

  if (!_id) {
    return res.status(400).send("User Id is required");
  }
  try {
    const ALLOWED_UPDATES = [
      "_id",
      "photoUrl",
      "about",
      "gender",
      "age",
      "skills",
    ];

    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if(data?.skills.length > 10){
      throw new Error("Skills should never be more than 10");
    }
    
    if (!isUpdateAllowed) {
      return res.status(400).send("Update not allowed");
    }

    const user = await User.findByIdAndUpdate(_id, data, {
      new: true,
    });
    

    if (!user) {
      return res.status(404).send("User not found");
    }
    //console.log(user);
    res.status(200).send("User updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
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
