<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "quiz_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to get questions from database
function getQuestions($conn) {
    $sql = "SELECT * FROM questions";
    $result = $conn->query($sql);
    $questions = array();
    while ($row = $result->fetch_assoc()) {
        $questions[] = $row;
    }
    return $questions;
}

// Function to save score to database
function saveScore($conn, $user_name, $score) {
    $sql = "INSERT INTO scores (user_name, score) VALUES ('$user_name', '$score')";
    if ($conn->query($sql) === TRUE) {
        echo "Score saved successfully!";
    } else {
        echo "Error saving score: " . $conn->error;
    }
}

// Close connection
$conn->close();
?>