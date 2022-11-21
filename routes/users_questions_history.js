const express = require("express");
const router = express.Router();
const db = require('../config/database');
const { QueryTypes, Sequelize } = require('sequelize');
const Users_Questions_History = require('../models/users_questions_history');

//default
router.get('/', (req, res) => {
    db.query(
        "SELECT * FROM users_questions_history;",
        { Types: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

//get every answered questions by id_user
router.get('/user/:id', (req, res) => {
    const id = router.params.id;

    db.query(
        "SELECT * FROM users_questions_history " + `WHERE id_user = ${id}`,
        { Types: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

//get every user who responded to the questions

router.get('/questions/:id', (req, res) => {

    const id = router.params.id;

    db.query(
        "SELECT * FROM users_questions_history " + `WHERE id_questions = ${id}`,
        { Types: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});


module.exports = router;