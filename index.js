const express = require("express");
const app = express();
const port = 3000;

//Routes

//Middleware


app.get("/", (req, res) => {
    res.send("Project Transverse Server");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});