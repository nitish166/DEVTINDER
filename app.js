const express = require('express');

const app = express();

const PORT = 7777;

app.use("/", (req, res, next)=>{
    res.send("Namste Nitish");
    next();
})

app.get("/test", (req, res)=>{
    res.send("This is test page");
})

app.get("/hello", (req, res)=>{
    res.send("This is hello page");
})

app.listen(PORT, ()=>{
    console.log(`The server runing on ${PORT}`);
})