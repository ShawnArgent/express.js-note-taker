const apir = require('express').Router();
const saveNote = require('../helpers/fsuuid');

// GET request
apir.get('/notes', function (req, res) {
    saveNote
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST request
apir.post('/notes', (req, res) => {
    saveNote
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// DELETE request
apir.delete('/notes/:id', function (req, res) {
    saveNote
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = apir;