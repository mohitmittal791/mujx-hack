// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const port = 3306; // Change this to an unused port number

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'root', // Replace with your MySQL password
    database: 'registrationDB'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

app.post('/register', (req, res) => {
    const { name, email, phone, school, grade, parentsName, parentsPhone, disabilityType, disabilityPercentage, disorderType, strength } = req.body;

    const query = `INSERT INTO registrations (name, email, phone, school, grade, parentsName, parentsPhone, disabilityType, disabilityPercentage, disorderType, strength)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [name, email, phone, school, grade, parentsName, parentsPhone, disabilityType, disabilityPercentage, disorderType, strength], (err, results) => {
        if (err) {
            console.error('Error inserting data into the database:', err);
            res.status(500).send('Error during registration.');
            return;
        }
        res.send('Registration successful!');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
