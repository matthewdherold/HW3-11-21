const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

const notes = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => { res.json(notes)
    });
    app.post('/api/notes', (req, res) => {
        console.log(req.body);
        const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf-8'));
        const newNote = req.body;
        newNote.id = uniqid();
        console.log(db);
        console.log(newNote);
        db.push(newNote);
        fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(db));
        res.json(true);
    });
};