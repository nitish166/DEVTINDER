const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");
const bcrypt = require("bcrypt");
const User = require("../modules/user");

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName} your profile Updated successfully!!! `,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  const userId = req.user._id;
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    return res
      .status(400)
      .send("Both oldPassword and newPassword are required !!!");
  }

  if (newPassword.length < 8) {
    return res.status(400).send("New password must be 8 character long");
  }

  try {
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).send("User not found !!!");
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if(!isMatch){
      return res.status(400).send("Old password is incorrect");
    }

    const hasPassword = await bcrypt.hash(newPassword, 10);
    user.password = hasPassword;
    await user.save();

    res.status(200).send("Password updated successfully !!!");
  } catch (err) {
    return res.status(500).send("ERROR : " + err.message);
  }
});

module.exports = profileRouter;
