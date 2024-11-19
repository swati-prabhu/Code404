const questions = [
    {
        question: "If the displacement (x) of a particle is related to time (t) by the equation x = at² + bt + c, then the acceleration of the particle is?",
        options: ["2a", "a", "a + b", "a + c"],
        correctAnswer: "2a"
    },
    {
        question: "A particle of mass m is moving in a circle of radius r with constant speed v. The centripetal force is?",
        options: ["mv²/r", "mv/r", "mv²r", "mvr²"],
        correctAnswer: "mv²/r"
    },
    {
        question: "What is the work done by the force of gravity on a satellite moving around the Earth in a circular orbit?",
        options: ["Positive", "Negative", "Zero", "Infinite"],
        correctAnswer: "Zero"
    },
    {
        question: "If a wave has a frequency of 60 Hz and a wavelength of 5 meters, what is the speed of the wave?",
        options: ["300 m/s", "60 m/s", "30 m/s", "5 m/s"],
        correctAnswer: "300 m/s"
    },
    {
        question: "What is the dimensional formula for Planck's constant?",
        options: ["ML²T⁻¹", "MLT⁻¹", "ML²T⁻²", "ML⁰T⁻¹"],
        correctAnswer: "ML²T⁻¹"
    },
    {
        question: "The SI unit of electric charge is?",
        options: ["Ampere", "Coulomb", "Volt", "Ohm"],
        correctAnswer: "Coulomb"
    },
    {
        question: "The first law of thermodynamics is a statement of?",
        options: ["Conservation of energy", "Conservation of momentum", "Conservation of charge", "Conservation of mass"],
        correctAnswer: "Conservation of energy"
    },
    {
        question: "Which type of lens is used to correct myopia?",
        options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
        correctAnswer: "Concave lens"
    },
    {
        question: "What is the escape velocity on Earth?",
        options: ["11.2 km/s", "9.8 m/s²", "5 km/s", "7.9 km/s"],
        correctAnswer: "11.2 km/s"
    },
    {
        question: "Which of the following has the highest refractive index?",
        options: ["Water", "Diamond", "Air", "Glass"],
        correctAnswer: "Diamond"
    },
    {
        question: "Which of the following is not a scalar quantity?",
        options: ["Speed", "Energy", "Force", "Work"],
        correctAnswer: "Force"
    },
    {
        question: "What is the unit of electric potential?",
        options: ["Ohm", "Volt", "Ampere", "Joule"],
        correctAnswer: "Volt"
    },
    {
        question: "Newton's third law states that?",
        options: [
            "For every action, there is an equal and opposite reaction",
            "Force equals mass times acceleration",
            "Energy cannot be created or destroyed",
            "The acceleration of an object is proportional to the force applied"
        ],
        correctAnswer: "For every action, there is an equal and opposite reaction"
    },
    {
        question: "What is the time period of a pendulum dependent on?",
        options: ["Length of pendulum", "Mass of bob", "Amplitude of swing", "Material of string"],
        correctAnswer: "Length of pendulum"
    },
    {
        question: "If a body is thrown vertically upwards, when will its velocity be zero?",
        options: ["At maximum height", "During descent", "After hitting the ground", "Never"],
        correctAnswer: "At maximum height"
    },
    {
        question: "The phenomenon of splitting white light into its constituent colors is called?",
        options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
        correctAnswer: "Dispersion"
    },
    {
        question: "What is the value of acceleration due to gravity on the Moon compared to Earth?",
        options: ["1/6th", "1/3rd", "1/9th", "Equal"],
        correctAnswer: "1/6th"
    },
    {
        question: "The unit of power is?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        correctAnswer: "Watt"
    },
    {
        question: "The frequency of AC in most countries is?",
        options: ["50 Hz", "60 Hz", "30 Hz", "100 Hz"],
        correctAnswer: "50 Hz"
    },
    {
        question: "What type of energy is stored in a compressed spring?",
        options: ["Kinetic energy", "Thermal energy", "Potential energy", "Electrical energy"],
        correctAnswer: "Potential energy"
    },
    {
        question: "Which of the following devices is used to measure electric current?",
        options: ["Ammeter", "Voltmeter", "Galvanometer", "Multimeter"],
        correctAnswer: "Ammeter"
    },
    {
        question: "Who discovered the neutron?",
        options: ["James Chadwick", "Ernest Rutherford", "Niels Bohr", "Marie Curie"],
        correctAnswer: "James Chadwick"
    },
    {
        question: "The speed of light in vacuum is approximately?",
        options: ["3 × 10⁸ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s", "3 × 10⁶ m/s"],
        correctAnswer: "3 × 10⁸ m/s"
    },
    {
        question: "The potential difference is measured in?",
        options: ["Joules", "Watts", "Volts", "Ohms"],
        correctAnswer: "Volts"
    },
    {
        question: "What is the heat required to raise the temperature of 1 gram of water by 1°C called?",
        options: ["Calorie", "Joule", "Watt", "Kelvin"],
        correctAnswer: "Calorie"
    },
    {
        question: "Ohm’s law is valid for?",
        options: ["Diodes", "Resistors", "Capacitors", "Batteries"],
        correctAnswer: "Resistors"
    },
    {
        question: "Which instrument is used to measure atmospheric pressure?",
        options: ["Barometer", "Thermometer", "Manometer", "Hygrometer"],
        correctAnswer: "Barometer"
    },
    {
        question: "What is the relation between power (P), voltage (V), and current (I)?",
        options: ["P = VI", "P = V/I", "P = I/V", "P = V²I"],
        correctAnswer: "P = VI"
    },
    {
        question: "A light-year measures?",
        options: ["Time", "Speed", "Distance", "Energy"],
        correctAnswer: "Distance"
    },
    {
        question: "The buoyant force acts through the?",
        options: ["Center of gravity", "Center of mass", "Center of buoyancy", "Bottom of the fluid"],
        correctAnswer: "Center of buoyancy"
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