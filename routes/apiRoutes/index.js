const path = require('path');
const router = require('express').Router();
const { addNewNote, deleteById } = require('../../lib/notes');

const { notes } = require('../../db/notes');

// Handles GET request for existing notes.
router.get('/notes', (req, res) => {
    results = notes;
    res.json(results);
})

// Adds a new note using the request body provided by client side javascript's handling of user input
router.post('/notes', (req, res) => {
    let input = req.body
    const newNote = {
        id: notes.length.toString(),
        title: input.title,
        text: input.text
    }
    let note = addNewNote(newNote, notes);
    res.json(note);
})

// Deletes a note using the unique id provided in the request parameters
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    deleteById(id, notes);
    res.sendStatus(200);
})

module.exports = router;
