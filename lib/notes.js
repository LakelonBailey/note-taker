const fs = require('fs');
const path = require('path');


// Adds a new note to the notes.json file and returns the note to the client.
function addNewNote(newNote, notesArr) {
    const note = newNote;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    )
    return note;
}

// 1. Finds the note matching the provided ID
// 2. Removes the note from the notes array
// 3. Resets all note IDs to match their index in the notes array
// 4. Writes the new note array to the notes.json file
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
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes: notesArrCopy }, null, 2)
    )
}

module.exports = {
    addNewNote,
    deleteById
}