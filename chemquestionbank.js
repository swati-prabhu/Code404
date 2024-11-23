const questions = [
    {
        question: "Which gas is known as ‘laughing gas’?",
        options: ["Nitrogen dioxide", "Nitric oxide", "Nitrous oxide", "Ammonia"],
        correctAnswer: "Nitrous oxide"
    },
    {
        question: "What is the pH of a neutral solution at 25°C?",
        options: ["7", "1", "14", "0"],
        correctAnswer: "7"
    },
    {
        question: "Which element has the highest electronegativity?",
        options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
        correctAnswer: "Fluorine"
    },
    {
        question: "What is the IUPAC name of CH₃-CH₂-OH?",
        options: ["Ethanol", "Methanol", "Propanol", "Ethanone"],
        correctAnswer: "Ethanol"
    },
    {
        question: "Which of the following is not a greenhouse gas?",
        options: ["Carbon dioxide", "Methane", "Oxygen", "Water vapor"],
        correctAnswer: "Oxygen"
    },
    {
        question: "What is the oxidation number of sulfur in H₂SO₄?",
        options: ["+2", "+4", "+6", "+8"],
        correctAnswer: "+6"
    },
    {
        question: "Which type of bond is present in O₂ molecule?",
        options: ["Single bond", "Double bond", "Triple bond", "None of these"],
        correctAnswer: "Double bond"
    },
    {
        question: "What is the chemical formula of quicklime?",
        options: ["CaCO₃", "CaO", "Ca(OH)₂", "CaCl₂"],
        correctAnswer: "CaO"
    },
    {
        question: "Which of the following is a strong acid?",
        options: ["HCl", "CH₃COOH", "H₂CO₃", "NH₄OH"],
        correctAnswer: "HCl"
    },
    {
        question: "Which of the following processes is used to extract aluminum from bauxite?",
        options: ["Haber process", "Hall-Héroult process", "Solvay process", "Contact process"],
        correctAnswer: "Hall-Héroult process"
    },
    {
        question: "The main component of natural gas is?",
        options: ["Ethane", "Methane", "Propane", "Butane"],
        correctAnswer: "Methane"
    },
    {
        question: "Which of the following is an example of a colloidal solution?",
        options: ["Saltwater", "Milk", "Sugar solution", "Distilled water"],
        correctAnswer: "Milk"
    },
    {
        question: "What is the hybridization of carbon in ethene (C₂H₄)?",
        options: ["sp³", "sp²", "sp", "None of these"],
        correctAnswer: "sp²"
    },
    {
        question: "Which law states that equal volumes of gases contain the same number of molecules under the same conditions?",
        options: ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Ideal Gas Law"],
        correctAnswer: "Avogadro's Law"
    },
    {
        question: "Which metal is used in galvanization?",
        options: ["Copper", "Zinc", "Iron", "Aluminum"],
        correctAnswer: "Zinc"
    },
    {
        question: "Which catalyst is used in the Haber process for ammonia synthesis?",
        options: ["Iron", "Platinum", "Nickel", "Palladium"],
        correctAnswer: "Iron"
    },
    {
        question: "What is the product of the reaction between Na and H₂O?",
        options: ["NaOH and O₂", "NaOH and H₂", "Na₂O and H₂", "Na₂O₂ and O₂"],
        correctAnswer: "NaOH and H₂"
    },
    {
        question: "Which of the following is an aromatic compound?",
        options: ["Methane", "Benzene", "Ethanol", "Butane"],
        correctAnswer: "Benzene"
    },
    {
        question: "Which of the following is a non-reducing sugar?",
        options: ["Sucrose", "Maltose", "Lactose", "Fructose"],
        correctAnswer: "Sucrose"
    },
    {
        question: "Which of the following has the highest boiling point?",
        options: ["H₂O", "H₂S", "H₂Se", "H₂Te"],
        correctAnswer: "H₂O"
    },
    {
        question: "What is the molar mass of CO₂?",
        options: ["44 g/mol", "32 g/mol", "28 g/mol", "48 g/mol"],
        correctAnswer: "44 g/mol"
    },
    {
        question: "Which of the following is an amphoteric oxide?",
        options: ["SiO₂", "Al₂O₃", "CO₂", "CaO"],
        correctAnswer: "Al₂O₃"
    },
    {
        question: "What is the main ore of iron?",
        options: ["Galena", "Bauxite", "Hematite", "Magnetite"],
        correctAnswer: "Hematite"
    },
    {
        question: "Which gas is evolved when an acid reacts with a metal?",
        options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
        correctAnswer: "Hydrogen"
    },
    {
        question: "What is the pKa of a strong acid?",
        options: ["Very high", "Very low", "Equal to 7", "Equal to 14"],
        correctAnswer: "Very low"
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
