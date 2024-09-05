const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define Schema
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    school: String,
    grade: String,
    parentsName: String,
    parentsPhone: String,
    disabilityType: String,
    disabilityPercentage: Number,
    disorderType: String,
    strength: String
});

// Create a model
const Student = mongoose.model('Student', studentSchema);

// Handle form submission
app.post('/register', async (req, res) => {
    try {
        const studentData = new Student(req.body);
        await studentData.save();
        res.status(201).send('Student registered successfully!');
    } catch (error) {
        res.status(400).send('Error registering student');
    }
});

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
