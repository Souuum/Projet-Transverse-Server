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
    const id = req.params.id;

    db.query(
        "SELECT * FROM users_questions_history " + `WHERE id_user = ${id}`,
        { Types: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

//count nb of questions answered by id_user
router.get('/user/:id/count', (req, res) => {
    const id = req.params.id;

    db.query(
        "SELECT COUNT(*) as n FROM users_questions_history " + `WHERE id_user = ${id}`,
        { Types: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

//get every user who responded to the question

router.get('/questions/:id', (req, res) => {

    const id = req.params.id;

    db.query(
        "SELECT * FROM users_questions_history " + `WHERE id = ${id}`,
        { Types: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

//get every questions not answered by :id user ordered by poids DESC

router.get('/user/:id/not-answered/', (req, res) => {

    const id = req.params.id;

    db.query(
        "SELECT DISTINCT id, category, description, poids FROM questions "
        + "WHERE id NOT IN ( SELECT id_question FROM users_questions_history "
        + `WHERE users_questions_history.id_user = ${id}) ORDER BY poids DESC`,
        { Types: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

//insert new row

router.post('/addrecord', (req, res) => {
    try {
        const params = req.body;
        console.log(params);

        var id_user = params.iduser;
        var id_question = params.idcard;
        var score = params.score;

        Users_Questions_History.create({
            id_user: id_user,
            id_question: id_question,
            score: score
        }).then((response) => {
            console.log("Done");
        });
    } catch (e) {
        console.warn(e);
        res.status(400).json({
            response: false,
            message: "An error occured",
        });
    }
});

module.exports = router;