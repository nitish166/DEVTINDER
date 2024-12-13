const express = require("express");
const connectDB = require("./src/config/database");
const app = express();
var cookieParser = require("cookie-parser");

const PORT = 7777;

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./src/routes/auth");
const profileRouter = require("./src/routes/profile");
const requestRouter = require('./src/routes/requests');
const userRouter = require("./src/routes/user");


app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);


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
