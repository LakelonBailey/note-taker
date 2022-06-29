const fs = require('fs');
const path = require('path');

function addNewNote(newNote, notesArr) {
    const note = newNote;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    )
}

function deleteById(id, notesArr) {
    let notesArrCopy = notesArr
    notesArrCopy.forEach(note => {
        if (note.id == id) {
            notesArrCopy.splice(parseInt(id), 1)
        }
    });

    for (let i = 0; i<notesArrCopy.length; i++) {
        note = notesArrCopy[i];
        note.id = i.toString()
    }
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArrCopy }, null, 2)
    )
}

module.exports = {
    addNewNote,
    deleteById
}