const express = require("express");
const router = express.Router();
const db = require('../config/database');
const { QueryTypes, Sequelize } = require('sequelize');
const Users = require('../models/users');

//default
router.get('/', (req, res) => {
    db.query(
        "SELECT * FROM users;",
        { Types: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

//get user by id
router.get('/id/:id', (req, res) => {
    const id = req.params.id;

    db.query(
        "SELECT * FROM users " + `WHERE id = ${id}`,
        { Types: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

router.get('/:id/results', (req, res) => {
    const id = req.params.id;

    db.query(
        "SELECT id_user,category, COALESCE(SUM(score),0) as results FROM users_questions_history" +
        " LEFT JOIN questions on users_questions_history.id_question = questions.id " + `WHERE id_user = ${id} `
        + "GROUP BY id_user,category;",
        { Types: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

module.exports = router;