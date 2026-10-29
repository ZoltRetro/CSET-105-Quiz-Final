const quiz = [
    {
        question: "What is the capital of Pennsylvania?",
        answers: ["Philadelphia", "Harrisburg", "Pittsburgh", "Erie"],
        correct: "Harrisburg"
    },
    {
        question: "What is the capital of California?",
        answers: ["Los Angeles", "Sacramento", "San Diego", "San Francisco"],
        correct: "Sacramento"
    },
    {
        question: "What is the capital of Texas?",
        answers: ["Houston", "Dallas", "Austin", "El Paso"],
        correct: "Austin"
    },
    {
        question: "What is the capital of Florida?",
        answers: ["Miami", "Orlando", "Tallahassee", "Tampa"],
        correct: "Tallahassee"
    },
    {
        question: "What is the capital of New York?",
        answers: ["Buffalo", "Albany", "Syracuse", "New York City"],
        correct: "Albany"
    },
    {
        question: "What is the capital of Ohio?",
        answers: ["Cleveland", "Columbus", "Cincinnati", "Toledo"],
        correct: "Columbus"
    },
    {
        question: "What is the capital of Illinois?",
        answers: ["Chicago", "Springfield", "Naperville", "Rockford"],
        correct: "Springfield"
    },
    {
        question: "What is the capital of Nevada?",
        answers: ["Las Vegas", "Reno", "Carson City", "Henderson"],
        correct: "Carson City"
    },
    {
        question: "What is the capital of Colorado?",
        answers: ["Denver", "Boulder", "Aspen", "Pueblo"],
        correct: "Denver"
    },
    {
        question: "What is the capital of Georgia?",
        answers: ["Savannah", "Augusta", "Atlanta", "Athens"],
        correct: "Atlanta"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    document.getElementById("question").textContent =
        quiz[currentQuestion].question;

    let answerHTML = "";

    for (let answer of quiz[currentQuestion].answers) {
        answerHTML += `
        <label>
            <input type="radio" name="answer" value="${answer}">
            ${answer}
        </label>
        <br>
        `;
    }

    document.getElementById("answers").innerHTML = answerHTML;
}

function submitAnswer() {

    const selected =
        document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (selected.value === quiz[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = "";
        document.getElementById("result").textContent =
            "Quiz Complete! Score: " + score + " / " + quiz.length;
    }
}

loadQuestion();