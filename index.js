const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const http = require('http');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');

//Routes
var questions = require("./routes/questions");


//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

sequelize.authenticate()
    .then(() => console.log("Database connected..."))
    .catch((err) => console.log("ERROR : " + err));


app.use("/questions", questions);

app.get("/", (req, res) => {
    res.send("Project Transverse Server");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});