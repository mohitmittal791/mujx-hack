const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',    // or your database host
    user: 'root',         // your database username
    password: '',         // your database password
    database: 'student_db' // name of your database
});

db.connect((err) => {
    if (err) {
        console.log('Database connection failed: ', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

// Handle form submission
app.post('/register', (req, res) => {
    const { name, email, phone, school, grade, parentsName, parentsPhone, disabilityType, disabilityPercentage, disorderType, strength } = req.body;
    
    const sql = 'INSERT INTO students (name, email, phone, school, grade, parentsName, parentsPhone, disabilityType, disabilityPercentage, disorderType, strength) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
    db.query(sql, [name, email, phone, school, grade, parentsName, parentsPhone, disabilityType, disabilityPercentage, disorderType, strength], (err, result) => {
        if (err) {
            console.error('Error inserting data: ', err);
            res.status(500).send('Database error');
            return;
        }
        res.status(200).send('Registration successful');
    });
});

// Serve static HTML and CSS files
app.use(express.static('public'));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
