<?php
include 'db.php';
$user_name = $_POST['user_name'];
$score = $_POST['score'];
saveScore($conn, $user_name, $score);
?>