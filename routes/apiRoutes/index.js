const path = require('path');
const router = require('express').Router();
const { addNewNote } = require('../../lib/notes');

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

router.post('/notes/:id', (req, res) => {

})

module.exports = router;
