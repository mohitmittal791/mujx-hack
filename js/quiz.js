// Quiz data
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