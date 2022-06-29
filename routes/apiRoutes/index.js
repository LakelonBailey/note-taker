const path = require('path');
const router = require('express').Router();
const { addNewNote, deleteById } = require('../../lib/notes');

const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    let input = req.body
    const newNote = {
        id: notes.length.toString(),
        title: input.title,
        text: input.text
    }
    addNewNote(newNote, notes);
    res.sendStatus(200);
})

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    deleteById(id, notes);
    res.sendStatus(200);
})

module.exports = router;
