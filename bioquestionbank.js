const questions = [
    {
        question: "Which phase of mitosis involves the chromosomes separating and moving to opposite poles?",
        options: ["Prophase", "Anaphase", "Telophase", "Metaphase"],
        correctAnswer: "Anaphase"
    },
    {
        question: "What is the clear watery liquid that surrounds the brain and spinal cord called?",
        options: ["Cerebrospinal Fluid", "Plasma", "Lymph", "Intercellular Fluid"],
        correctAnswer: "Cerebrospinal Fluid"
    },
    {
        question: "Which insect order includes beetles?",
        options: ["Coleoptera", "Orthoptera", "Hymenoptera", "Diptera"],
        correctAnswer: "Coleoptera"
    },
    {
        question: "What major protein component is found in connective tissues like skin and tendons?",
        options: ["Elastin", "Collagen", "Keratin", "Myosin"],
        correctAnswer: "Collagen"
    },
    {
        question: "What is the name for the single fertilized cell from which all cells of an organism originate?",
        options: ["Embryo", "Gamete", "Zygote", "Blastocyst"],
        correctAnswer: "Zygote"
    },
    {
        question: "How many contractile vacuoles are found in most Paramecium species?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "Two"
    },
    {
        question: "What ions are primarily responsible for the resting potential of a neuron?",
        options: ["Sodium and Calcium", "Calcium and Potassium", "Sodium and Potassium", "Potassium and Phosphate"],
        correctAnswer: "Sodium and Potassium"
    },
    {
        question: "What gland secretes melatonin?",
        options: ["Pineal gland", "Liver", "Pituitary gland", "Adrenal gland"],
        correctAnswer: "Pineal gland"
    },
    {
        question: "Which hormone is secreted by the corpus luteum?",
        options: ["HCG", "LH", "FSH", "Progesterone"],
        correctAnswer: "Progesterone"
    },
    {
        question: "Where does fertilization of the ovum by sperm typically occur?",
        options: ["Ovary", "Uterus", "Oviduct", "Vagina"],
        correctAnswer: "Oviduct"
    },
    {
        question: "Which tissue secretes hormones?",
        options: ["Pancreas", "Ovaries", "Gastro-intestinal tract", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the term for the layer of dead skin cells in the epidermis?",
        options: ["Subcutaneous tissue", "Dermis", "Epidermis", "No dead cells are present"],
        correctAnswer: "Epidermis"
    },
    {
        question: "What type of muscle surrounds axons of neurons?",
        options: ["Smooth", "Skeletal", "Cardiac", "Myelin sheath"],
        correctAnswer: "Myelin sheath"
    },
    {
        question: "What is the function of the loop of Henle in mammals?",
        options: ["Reabsorption of water", "Secretion of ammonia", "Reabsorption of bicarbonates", "Water secretion"],
        correctAnswer: "Reabsorption of water"
    },
    {
        question: "What process splits water molecules during photosynthesis, releasing oxygen?",
        options: ["Photolysis", "Calvin cycle", "Glycolysis", "Transpiration"],
        correctAnswer: "Photolysis"
    },
    {
        question: "What is the name of the proteins that catalyze biochemical reactions?",
        options: ["Enzymes", "Hormones", "Coenzymes", "Ribosomes"],
        correctAnswer: "Enzymes"
    },
    {
        question: "Which type of muscle is under involuntary control?",
        options: ["Skeletal", "Smooth", "Cardiac", "Striated"],
        correctAnswer: "Smooth"
    },
    {
        question: "What is the term for enzymes that are regulated by molecules binding to a site other than the active site?",
        options: ["Coenzymes", "Isoenzymes", "Allosteric enzymes", "Zymogens"],
        correctAnswer: "Allosteric enzymes"
    },
    {
        question: "What is the biological term for plant water-conducting cells?",
        options: ["Phloem", "Tracheids", "Xylem vessels", "Guard cells"],
        correctAnswer: "Tracheids"
    },
    {
        question: "The clogging of the bile duct interferes with the digestion of what food type?",
        options: ["Proteins", "Carbohydrates", "Lipids", "Minerals"],
        correctAnswer: "Lipids"
    },
    {
        question: "What is the resting potential across a neuron's membrane dependent on?",
        options: ["Sodium and Calcium", "Potassium and Calcium", "Sodium and Potassium", "Phosphate and Calcium"],
        correctAnswer: "Sodium and Potassium"
    },
    {
        question: "Which type of tissue in animals can discriminate between self and non-self antigens?",
        options: ["Connective tissue", "Immune system", "Epithelial tissue", "Endocrine system"],
        correctAnswer: "Immune system"
    },
    {
        question: "What is the term for the type of gametes formed after meiosis in females?",
        options: ["Two", "Three", "One", "Four"],
        correctAnswer: "One"
    },
    {
        question: "Which skeletal element is not part of the human axial skeleton?",
        options: ["Sternum", "Skull", "Tarsals", "Vertebral column"],
        correctAnswer: "Tarsals"
    },
    {
        question: "What molecule stores energy for cellular processes?",
        options: ["Glucose", "ATP", "NADPH", "ADP"],
        correctAnswer: "ATP"
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