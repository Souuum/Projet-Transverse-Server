const express = require("express");
const router = express.Router();
const db = require('../config/database');
const { QueryTypes } = require('sequelize');
const Questions = require('../models/questions');

//default
router.get("/", (req, res) => {
    res.send("Questions");
});

//get question by id

router.get('/questions/:id', (req, res) => {
    const id = req.params.id;

    db.query(
        "SELECT * FROM questions" + `WHERE id_question = ${id}`,
        { type: QueryTypes.SELECT }
    )
        .then((response) => res.send(response))
        .catch((err) => console.log(err));
});

module.exports = router;