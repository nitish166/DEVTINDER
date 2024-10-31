const express = require('express');

const app = express();

const PORT = 7777;


// This will only handle GET call to /user
app.get("/user", (req, res)=>{
    res.send({Name: "Nitish", City: "Patna"});
})

app.post("/user", async (req, res)=>{
    console.log(req.body);
    res.send("Data successfully saved to the database");
})

app.delete("/user", (req, res)=>{
    res.send("Deleted Successfully");
})

// This will match all the HTTP method API calls to /test

app.use("/test", (req, res)=>{
    res.send("Hello from the server");
})

app.listen(PORT, ()=>{
    console.log(`The server runing on ${PORT}`);
})




