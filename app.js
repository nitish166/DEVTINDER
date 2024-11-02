const express = require("express");

const app = express();

const PORT = 7777;

const {adminAuth, userAuth} = require("./src/middlewares/utlis")

app.use("/admin", adminAuth);

app.post("/user/login", (req, res)=>{
    res.send("User login successfully");
})

app.get("/user", userAuth, (req, res)=>{
    res.send("User Data Sent");
})

app.get('/admin/getAllData', (req, res)=>{
    res.send("All data sent");
})

app.delete("/admin/deleteUser", (req, res)=>{
    res.send("Deleted a user");
})

app.listen(PORT, () => {
  console.log(`The server runing on ${PORT}`);
});
