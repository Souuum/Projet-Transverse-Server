const express = require("express");
const router = express.Router();
const db = require('../config/database');
const { QueryTypes } = require('sequelize');
const Questions = require('../models/questions');

//default
router.get('/', (req, res) => {
    db.query(
        "SELECT * FROM questions;",
        { type: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

//get question by id
router.get('/id/:id', (req, res) => {
    const id = req.params.id;

    db.query(
        "SELECT * FROM questions " + `WHERE id_question = ${id};`,
        { type: QueryTypes.SELECT }
    )
        .then((response) => res.send(response))
        .catch((err) => console.log(err));
});

//get questions by category
router.get('/category/:cat', (req, res) => {
    const cat = req.params.cat;

    db.query(
        "SELECT * FROM questions " + `WHERE category = '${cat}';`,
        { type: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

//order by poids DESC
router.get('/poids/', (req, res) => {
    db.query(
        "SELECT * FROM questions ORDER BY `poids` DESC;",
        { type: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});

//get questions selected by poids
router.get('/poids/:poids', (req, res) => {
    const poids = req.params.poids;

    db.query(
        "SELECT * FROM questions " + `WHERE poids = ${poids};`,
        { type: QueryTypes.SELECT }
    ).then((response) => res.send(response)).catch((err) => console.log(err));
});


module.exports = router;