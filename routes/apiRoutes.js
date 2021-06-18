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
        if(notes.length){
            noteID = parseInt(Math.max(0, notes.length));
        } else{
            noteID = 0;
        }
        let addedNote = req.body;
        addedNote.id = uniqid();
        notes.push(addedNote);
        res.json(notes.slice(-1));
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes, '\t'));
        console.log(notes);
      });

      app.delete('/api/notes/:id', (req, res) => {
        let currentNotesearch = req.params.id;
        var deleteNote = notes.map(function(item) { return item.id; }).indexOf(currentNotesearch);
        notes.splice(deleteNote, 1);
        res.json(true);
        });
    }