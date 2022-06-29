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

module.exports = {
    addNewNote
}