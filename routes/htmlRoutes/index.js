const path = require('path');
const router = require('express').Router();

// Handles GET request for the index page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})


// Handles GET request for the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})



module.exports = router;