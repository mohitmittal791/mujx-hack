<?php
include 'db.php';
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
        const quizData = [
    {
        question: "Which word is the odd one out?",
        options: ["Dog", "Cat", "Elephant", "Bird"],
        correct: 2
    },
    {
        question: '"Book is to reading, as a fork is to ______."',
        options: ["Eating", "Drinking", "Writing", "Cooking"],
        correct: 0
    },
    {
        question: "Rearrange the letters 'RACT' to form a meaningful word.",
        options: ["Cart", "Rat", "Cat", "Act"],
        correct: 0
    },
    {
        question: "Choose the correct antonym: 'Hot is to cold as up is to ______.'",
        options: ["Down", "Up", "Left", "Right"],
        correct: 0
    },
    {
        question: "Which of these sentences is grammatically correct?",
        options: ["The cat run fast", "The cat runs fast."],
        correct: 1
    },
    {
        question: "What is 15 + 8?",
        options: ["20", "21", "22", "23"],
        correct: 3
    },
    {
        question: "If you have 5 apples and give 3 away, how many apples do you have left?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "What is the next number in this sequence: 2, 4, 6, 8, ___?",
        options: ["9", "10", "11", "12"],
        correct: 1
    },
    {
        question: "John has 12 candies, and he gives 4 candies to his friend. How many candies does he have left?",
        options: ["6", "7", "8", "9"],
        correct: 2
    },
    {
        question: "If one pen costs $2, how much do 4 pens cost?",
        options: ["$6", "$7", "$8", "$9"],
        correct: 2
    },
    {
        question: "If red is the opposite of green, what is the opposite of black?",
        options: ["White", "Red", "Blue", "Yellow"],
        correct: 0
    },
    {
        question: "Sarah is taller than John, and John is taller than Peter. Who is the tallest?",
        options: ["Sarah", "John", "Peter"],
        correct: 0
    },
    {
        question: "What comes next in this pattern?",
        options: ["Circle", "Square", "Circle", "Square"],
        correct: 1
    },
    {
        question: "If all cows are animals and some animals are pets, are all cows pets?",
        options: ["Yes", "No"],
        correct: 1
    },
    {
        question: "A train leaves the station at 2:00 PM and arrives at its destination at 4:30 PM. How long was the train trip?",
        options: ["2 hours", "2 hours and 30 minutes", "3 hours", "3 hours and 30 minutes"],
        correct: 1
    },
    {
        question: "Which shape comes next in this pattern?",
        options: ["▲", "■", "▲", "■"],
        correct: 1
    },
    {
        question: "Look at the image of a cube unfolded. How many sides does a cube have?",
        options: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        question: "If you rotate a triangle 90 degrees clockwise, what will it look like?",
        options: ["The triangle will point to the left", "The triangle will point to the right", "The triangle will point up", "The triangle will point down"],
        correct: 1
    },
    {
        question: "Imagine a box. If you look at it from the side, which shape will you see?",
        options: ["A square", "A rectangle", "A triangle", "A circle"],
        correct: 1
    },
    {
        question: "If you fold a square piece of paper in half diagonally, what shape do you get?",
        options: ["A triangle", "A square", "A rectangle", "A circle"],
        correct: 0
    }
];

        const quizData = <?php echo json_encode($questions); ?>;
        // Current question index
let currentQuestion = 0;

// Display first question
displayQuestion();

// Function to display question
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    // Display current question
    questionElement.textContent = quizData[currentQuestion].question;

    // Display options
    const options = quizData[currentQuestion].options;
    for (let i = 0; i < options.length; i++) {
        const optionElement = optionsElement.children[i];
        optionElement.children[1].textContent = options[i];
    }
}

// Function to check answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const correctOption = quizData[currentQuestion].correct;

    // Check if answer is correct
    if (selectedOption.id === `option${correctOption + 1}`) {
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = `Incorrect! The correct answer is ${quizData[currentQuestion].options[correctOption]}.`;
    }

    // Move to next question
    currentQuestion++;

    // Check if we've reached the end of the quiz
    if (currentQuestion >= quizData.length) {
        document.getElementById("result").textContent = "Quiz complete! You scored " + getScore() + " out of " + quizData.length;
        document.getElementById("submit-btn").disabled = true;
    } else {
        displayQuestion();
    }
}

// Function to get score
function getScore() {
    let score = 0;
    for (let i = 0; i < quizData.length; i++) {
        const correctOption = quizData[i].correct;
        const selectedOption = document.querySelector(`input[name="option"][id="option${correctOption + 1}"]`);
        if (selectedOption.checked) {
            score++;
        }
    }
    return score;
}

// Add event listener to submit button
document.getElementById("submit-btn").addEventListener("click", checkAnswer);
document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const user_name = document.getElementById("user-name").value;
    const score = getScore();
    
    // Send score to server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "save_score.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("user_name=" + user_name + "&score=" + score);
});
    </script>
</body>
</html>