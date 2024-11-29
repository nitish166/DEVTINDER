const express = require("express");
const { validatesSignUpData } = require("../utils/validation");
const User = require("../modules/user");
const bcrypt = require("bcrypt");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
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

authRouter.post("/login", async (req, res) => {
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

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("Logout Successful!!");
});

module.exports = authRouter;
