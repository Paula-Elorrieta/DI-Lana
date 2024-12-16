const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());


// MySQL datu-baserako konexioa sortu
const db = mysql.createConnection({
    port: 3307, // MySQL zerbitzariaren portua
    host: 'localhost', // MySQL zerbitzariaren helbidea
    user: 'root', // MySQL erabiltzailea
    password: '', // MySQL pasahitza
    database: 'db_adibideaAngular', // Datu-basearen izena  
});


db.connect((err) => {
    if (err) {
        console.error('Errorea datu-basera konektatzean:', err);
        return;
    }
    console.log('Datu-basera konektatuta');
});


// Endpoints CRUD
app.get('/lagunak', (req, res) => {
    const query = 'SELECT * FROM lagunak';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});


app.post('/lagunak', (req, res) => {
    const newItem = req.body;
    const query = 'INSERT INTO lagunak SET ?';
    db.query(query, newItem, (err, results) => {
        if (err) throw err;
        res.send({ id: results.insertId, ...newItem });
    });
});


app.put('/lagunak/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    const query = 'UPDATE lagunak SET ? WHERE id = ?';
    db.query(query, [updatedItem, id], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});


app.delete('/lagunak/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM lagunak WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});


// Zerbitzaria hasieratu
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Zerbitzaria http://localhost:${PORT}-n martxan dago`);
});
