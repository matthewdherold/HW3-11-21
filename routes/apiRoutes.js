const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

const notes = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => { res.json(notes)
    });
    app.post('/api/notes', (req, res) => {
        let noteID;
        const id = noteID + 1;
        if(noteData.length){
            noteID = parseInt(Math.max(0, noteData.length));
        } else{
            noteID = 0;
        }
        let addedNote = req.body;
        addedNote.id = uniqid();
        noteData.push(addedNote);
        res.json(noteData.slice(-1));
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(noteData, '\t'));
        console.log(noteData);
      });

      app.delete('/api/notes/:id', (req, res) => {
        let currentNotesearch = req.params.id;
        var deleteNote = noteData.map(function(item) { return item.id; }).indexOf(currentNotesearch);
        noteData.splice(deleteNote, 1);
        res.json(true);
        });
    }