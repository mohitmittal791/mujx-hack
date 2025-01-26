<?php
include 'db.php'; // Include your database connection file

// Fetch questions from the database using a custom function
$questions = getQuestions($conn);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Page</title>
    <link rel="stylesheet" href="/css/quiz.css">
</head>
<body>
    <img src="Untitled_design-removebg-preview.png" alt="">
    <div class="container">
    <h1>Quiz Time!</h1>
    <form id="user-form">
        <div class="question-container">
            <p id="question"></p>
            <ul id="options">
                <li><input type="radio" id="option1" name="option">
                    <label for="option1" id="option1-label"></label>
                </li>
                <li><input type="radio" id="option2" name="option">
                    <label for="option2" id="option2-label"></label>
                </li>
                <li><input type="radio" id="option3" name="option">
                    <label for="option3" id="option3-label"></label>
                </li>
                <li><input type="radio" id="option4" name="option">
                    <label for="option4" id="option4-label"></label>
                </li>
            </ul>
            <button id="submit-btn">Submit</button>
        </div>
    </form>
    <p id="result"></p>
    </div>

    <script>
        const quizData = <?php echo json_encode($questions); ?>; // Dynamically fetched questions

        let currentQuestion = 0; // Current question index
        let score = 0; // User score

        // Display the first question
        displayQuestion();

        function displayQuestion() {
            const questionElement = document.getElementById("question");
            const optionsElement = document.getElementById("options");

            // Display current question
            questionElement.textContent = quizData[currentQuestion].question;

            // Display options
            const options = quizData[currentQuestion].options;
            for (let i = 0; i < options.length; i++) {
                const optionElement = optionsElement.children[i];
                optionElement.children[0].value = i; // Correctly set the value
                optionElement.children[1].textContent = options[i];
            }
        }

        // Function to check the user's answer
        function checkAnswer(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            const selectedOption = document.querySelector('input[name="option"]:checked');
            if (!selectedOption) {
                alert("Please select an option!"); // Alert if no option is selected
                return;
            }

            const userAnswer = parseInt(selectedOption.value);
            const correctAnswer = quizData[currentQuestion].correct;

            if (userAnswer === correctAnswer) {
                score++;
                document.getElementById("result").textContent = "Correct!";
            } else {
                document.getElementById("result").textContent = `Incorrect! The correct answer is ${quizData[currentQuestion].options[correctAnswer]}.`;
            }

            currentQuestion++;
            if (currentQuestion >= quizData.length) {
                document.getElementById("result").textContent += ` Quiz complete! You scored ${score} out of ${quizData.length}.`;
                document.getElementById("submit-btn").disabled = true;
            } else {
                displayQuestion();
            }
        }

        document.getElementById("submit-btn").addEventListener("click", checkAnswer);

        // AJAX request to save score to the server
        function saveScore(userName, score) {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "save_score.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(`user_name=${encodeURIComponent(userName)}&score=${encodeURIComponent(score)}`);
        }
    </script>
</body>
</html>
