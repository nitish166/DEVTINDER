const express = require('express');

const app = express();

const PORT = 7777;


app.get("/user/:userId/:name/:password", (req, res)=>{
    console.log(req.params);
    res.send({firstName: "Nitish", lastName: "Patna"});
})

app.listen(PORT, ()=>{
    console.log(`The server runing on ${PORT}`);
})




