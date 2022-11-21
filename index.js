const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const http = require('http');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');

//Routes
var auth = require('./routes/auth');
var questions = require('./routes/questions');
var users = require('./routes/users');
var users_questions_history = require('./routes/users_questions_history');


//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

sequelize.authenticate()
    .then(() => console.log("Database connected..."))
    .catch((err) => console.log("ERROR : " + err));

app.use("/auth", auth);
app.use("/questions", questions);
app.use("/users", users);
app.use("/users_questions_history", users_questions_history);

app.get("/", (req, res) => {
    res.send("Project Transverse Server");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});