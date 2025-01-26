<?php
include 'db.php';

$user_name = $_GET['user_name'];

// Fetch the user's score
$sql = "SELECT score FROM scores WHERE user_name = '$user_name' ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$score = $row['score'];

// Recommend content based on the score
$recommendation = '';
if ($score >= 80) {
    $recommendation = 'Advanced Learning Materials';
} elseif ($score >= 50) {
    $recommendation = 'Intermediate Learning Materials';
} else {
    $recommendation = 'Beginner Learning Materials';
}

echo json_encode(['recommendation' => $recommendation]);
?>