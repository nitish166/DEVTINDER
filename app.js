const express = require("express");
const connectDB = require("./src/config/database");
const app = express();
const User = require("./src/modules/user");
const { validatesSignUpData } = require("./src/utils/validation");
const bcrypt = require("bcrypt");
var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
const { userAuth } = require("./src/middlewares/auth");
const PORT = 7777;

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  try {
    // validation of data

    validatesSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    // Creating a new instance of the User model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.send("User Added successfully");
  } catch (err) {
    console.log(err);
    if (err.message) {
      res.status(400).send("ERROR : ", err.message);
    }
    res.status(500).send("Something went wrong");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password, _id } = req.body;

    const user = await User.findOne({ emailId: emailId });

    if (!user) {
      throw new Error("Invalid Credentials");
    }
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {

      var token = await user.getJWT();

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send("Login Successful!");
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  console.log("Sending a connection request");

  res.send(user.firstName + " Sent connection request");
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
      "password",
    ];

    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (data.skills && Array.isArray(data.skills) && data.skills.length > 10) {
      throw new Error("Skills should never be more than 10");
    }

    if (!isUpdateAllowed) {
      return res.status(400).send("Update not allowed");
    }

    const user = await User.findByIdAndUpdate(_id, data, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send("User not found");
    }
    //console.log(user);
    res.status(200).send("User updated successfully");
  } catch (err) {
    console.error(err);
    // if (err.message) {
    //   return res.status(400).send(err.message);
    // }
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
