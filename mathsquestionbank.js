const questions = [
    {
        question: "Find the value of ∫₀^π/2 (sin x) / (1 + cos² x) dx.",
        options: ["π/4", "π/2", "1", "π/6"],
        correctAnswer: "π/4"
    },
    {
        question: "Solve the differential equation: dy/dx = (x + y) / (x - y).",
        options: ["y = cx + x²", "x = cy + y²", "y² + x² = cxy", "None of these"],
        correctAnswer: "y² + x² = cxy"
    },
    {
        question: "If aₙ = 1 / [n(n+1)], then find the sum of the series Σₙ=1^∞ aₙ.",
        options: ["1", "1/2", "2", "Infinite"],
        correctAnswer: "1"
    },
    {
        question: "Evaluate the limit: limₓ→0 [(tan x - sin x) / x³].",
        options: ["-1/2", "1/6", "0", "1/2"],
        correctAnswer: "1/6"
    },
    {
        question: "Solve the equation: 2x² - 3x + 1 = 0.",
        options: ["x = 1, 1/2", "x = -1, 2", "x = 3/2, -1", "None of these"],
        correctAnswer: "x = 1, 1/2"
    },
    {
        question: "If the roots of the quadratic equation x² - px + q = 0 are α and β, find α² + β².",
        options: ["p² - 2q", "q² - 2p", "p² + 2q", "None of these"],
        correctAnswer: "p² - 2q"
    },
    {
        question: "Find the area enclosed by the curves y = x² and y = 4 - x².",
        options: ["32/3", "4", "16/3", "8"],
        correctAnswer: "32/3"
    },
    {
        question: "Evaluate ∫ x² e^x dx.",
        options: [
            "e^x(x² - 2x + 2) + C",
            "e^x(x² + 2x + 2) + C",
            "e^x(x² - 2x - 2) + C",
            "None of these"
        ],
        correctAnswer: "e^x(x² - 2x + 2) + C"
    },
    {
        question: "If the sides of a triangle are in the ratio 3:4:5, what is the area of the triangle if the perimeter is 60 units?",
        options: ["72", "96", "108", "None of these"],
        correctAnswer: "96"
    },
    {
        question: "Find the radius of convergence of the series Σₙ=1^∞ (xⁿ / n²).",
        options: ["1", "2", "0.5", "Infinite"],
        correctAnswer: "1"
    },
    {
        question: "Find the derivative of f(x) = ln(x² + 1).",
        options: ["2x/(x² + 1)", "2x", "1/x", "None of these"],
        correctAnswer: "2x/(x² + 1)"
    },
    {
        question: "Evaluate ∫₀¹ x³ dx.",
        options: ["1/4", "1/3", "1", "1/2"],
        correctAnswer: "1/4"
    },
    {
        question: "If a matrix A is singular, then |A| is?",
        options: ["1", "0", "Infinity", "Undefined"],
        correctAnswer: "0"
    },
    {
        question: "The solution to the differential equation dy/dx + y = e^x is?",
        options: [
            "y = e^x - x",
            "y = xe^x",
            "y = Ce^(-x) + e^x",
            "None of these"
        ],
        correctAnswer: "y = Ce^(-x) + e^x"
    },
    {
        question: "Find the sum of the first 20 terms of an arithmetic progression with a₁ = 5 and d = 2.",
        options: ["290", "300", "200", "210"],
        correctAnswer: "290"
    },
    {
        question: "The probability of getting a sum of 7 when two dice are rolled is?",
        options: ["1/6", "1/36", "5/36", "1/12"],
        correctAnswer: "1/6"
    },
    {
        question: "If the function f(x) = x³ - 3x² + x + 1 has critical points, find their nature.",
        options: [
            "Maximum and Minimum",
            "Point of Inflection",
            "Saddle Point",
            "None of these"
        ],
        correctAnswer: "Maximum and Minimum"
    },
    {
        question: "Find the value of \(\int \sec²x dx\).",
        options: ["tan x + C", "-tan x + C", "sec x + C", "-sec x + C"],
        correctAnswer: "tan x + C"
    },
    {
        question: "The equation x² + y² = 25 represents a?",
        options: ["Circle", "Ellipse", "Parabola", "Hyperbola"],
        correctAnswer: "Circle"
    },
    {
        question: "The binomial coefficient C(5, 3) is?",
        options: ["10", "15", "20", "30"],
        correctAnswer: "10"
    },
    {
        question: "The value of sin(45°) is?",
        options: ["1", "1/√2", "1/2", "√3/2"],
        correctAnswer: "1/√2"
    },
    {
        question: "The determinant of the matrix [[2, 3], [1, 4]] is?",
        options: ["8", "5", "10", "7"],
        correctAnswer: "5"
    },
    {
        question: "If logₐb = 2 and logₐc = 3, then logₐ(bc) is?",
        options: ["5", "6", "2", "3"],
        correctAnswer: "5"
    },
    {
        question: "Solve for x: 2^x = 8.",
        options: ["2", "3", "4", "1"],
        correctAnswer: "3"
    },
    {
        question: "The equation of a line passing through (1, 2) and having a slope of 3 is?",
        options: [
            "y = 3x + 2",
            "y = 3x - 1",
            "y = 3x - 3",
            "y = 2x + 1"
        ],
        correctAnswer: "y = 3x - 1"
    }
];


let time = 60; // Timer duration
let timer;
let score = 0;
let selectedQuestions = []; // To store the selected random questions

document.getElementById("start-test").addEventListener("click", startTest);
document.getElementById("submit-test").addEventListener("click", submitTest);
document.getElementById("retry-test").addEventListener("click", retryTest);

function startTest() {
  document.getElementById("test-section").style.display = "block";
  document.getElementById("start-test").style.display = "none";

  // Get 3 random questions from the questions array
  selectedQuestions = getRandomQuestions(questions, 10);
  displayQuestions(selectedQuestions);

  // Start the timer
  timer = setInterval(() => {
    if (time <= 0) {
      clearInterval(timer);
      submitTest(); // Auto-submit if the time runs out
    } else {
      document.getElementById("timer").textContent = `Time Left: ${time} seconds`;
      time--;
    }
  }, 1000);
}

function getRandomQuestions(questions, count) {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displayQuestions(questions) {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = ""; // Clear previous content
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options
        .map(
          (option) =>
            `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`
        )
        .join("")}
    `;
    questionContainer.appendChild(questionDiv);
  });
  document.getElementById("submit-test").style.display = "inline-block";
}

function submitTest() {
  clearInterval(timer); // Stop the timer
  const userAnswers = [];
  const questionsDivs = document.querySelectorAll(".question");
  questionsDivs.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    userAnswers.push(selectedOption ? selectedOption.value : null);
  });

  // Calculate the score
  score = userAnswers.reduce((totalScore, answer, index) => {
    return answer === selectedQuestions[index].correctAnswer ? totalScore + 1 : totalScore;
  }, 0);

  showResult();
}

function showResult() {
  document.getElementById("test-section").style.display = "none";
  document.getElementById("result-section").style.display = "block";
  document.getElementById("score").textContent = `${score} / 10`;

  const feedback = document.getElementById("feedback");
  if (score === 10) feedback.textContent = "Excellent work!";
  else if (score === 5) feedback.textContent = "Good job, but you can do better.";
  else feedback.textContent = "Keep practicing and you'll improve!";
}

function retryTest() {
  document.getElementById("result-section").style.display = "none";
  document.getElementById("start-test").style.display = "inline-block";
  time = 60; // Reset time
  score = 0; // Reset score
  selectedQuestions = []; // Clear selected questions
  document.getElementById("timer").textContent = ""; // Clear timer display
}