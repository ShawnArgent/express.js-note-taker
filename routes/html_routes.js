//GET /notes should return the notes.html file.

//GET * should return the index.html file.

const path = require("path");
const htmlr = require('express').Router();

    htmlr.get('/notes', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    htmlr.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    htmlr.get('*', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });

module.exports = htmlr;