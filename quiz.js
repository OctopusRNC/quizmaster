const quizData = {
  math: [
    { q: "What is 5 + 7?", options: ["10", "12", "14", "15"], answer: 1 },
    { q: "What is 9 x 3?", options: ["27", "21", "30", "18"], answer: 0 },
    { q: "Square root of 49?", options: ["6", "7", "8", "9"], answer: 1 },
    { q: "What is 100 / 10?", options: ["5", "10", "20", "15"], answer: 1 },
    { q: "What is 2^3?", options: ["4", "6", "8", "9"], answer: 2 }
  ],
  science: [
    { q: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Saturn"], answer: 1 },
    { q: "Water freezes at?", options: ["0°C", "10°C", "32°C", "-5°C"], answer: 0 },
    { q: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
    { q: "Human heart has how many chambers?", options: ["2", "4", "3", "5"], answer: 1 },
    { q: "What vitamin is produced in sunlight?", options: ["A", "B", "C", "D"], answer: 3 }
  ],
  social: [
    { q: "Who was the first President of India?", options: ["Jawaharlal Nehru", "Rajendra Prasad", "APJ Abdul Kalam", "Mahatma Gandhi"], answer: 1 },
    { q: "Capital of India?", options: ["Mumbai", "Chennai", "New Delhi", "Kolkata"], answer: 2 },
    { q: "When did India get independence?", options: ["1945", "1950", "1947", "1962"], answer: 2 },
    { q: "Which festival is known as the festival of lights?", options: ["Eid", "Christmas", "Diwali", "Holi"], answer: 2 },
    { q: "Which is our national animal?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: 1 }
  ],
  english: [
    { q: "Opposite of 'Good'?", options: ["Best", "Bad", "Better", "None"], answer: 1 },
    { q: "Plural of 'Mouse'?", options: ["Mouses", "Mices", "Mouse", "Mice"], answer: 3 },
    { q: "Verb in the sentence: 'She runs fast.'", options: ["She", "Runs", "Fast", "None"], answer: 1 },
    { q: "'He is _ honest man.' Fill the blank.", options: ["a", "an", "the", "none"], answer: 1 },
    { q: "Which is a noun?", options: ["Run", "Quick", "Boy", "Blue"], answer: 2 }
  ],
  hindi: [
    { q: "'Surya' ka arth kya hai?", options: ["Chand", "Pani", "Sooraj", "Dharti"], answer: 2 },
    { q: "'Pustak' kis cheez ko kehte hain?", options: ["Kitab", "Kalakaar", "Vidyalay", "Khilona"], answer: 0 },
    { q: "'Bhaag' ka vilom shabd?", options: ["Daud", "Ruko", "Tham", "Aao"], answer: 1 },
    { q: "'Bharat ka rashtriya pakshi'?", options: ["Moor", "Kabootar", "Kauwa", "Maina"], answer: 0 },
    { q: "'Namaste' ka arth?", options: ["Bye", "Hello", "Goodnight", "Thank you"], answer: 1 }
  ],
  bollywood: [
    { q: "Who is known as King Khan?", options: ["Aamir Khan", "Salman Khan", "Shah Rukh Khan", "Saif Ali Khan"], answer: 2 },
    { q: "Which movie is based on cricket?", options: ["Dangal", "Lagaan", "PK", "Swades"], answer: 1 },
    { q: "Who directed '3 Idiots'?", options: ["Rajkumar Hirani", "Karan Johar", "Farah Khan", "Rohit Shetty"], answer: 0 },
    { q: "Which actress starred in 'Piku'?", options: ["Kangana Ranaut", "Deepika Padukone", "Alia Bhatt", "Kareena Kapoor"], answer: 1 },
    { q: "Famous dialogue: 'Mogambo...'?", options: ["Khush Hua", "Zinda Hai", "Kaun Hai", "Sabse Bada Rupaiya"], answer: 0 }
  ],
  gk: [
    { q: "What is the capital of France?", options: ["Rome", "Paris", "Berlin", "Madrid"], answer: 1 },
    { q: "Which is the largest ocean?", options: ["Indian", "Atlantic", "Pacific", "Arctic"], answer: 2 },
    { q: "National flower of India?", options: ["Rose", "Lily", "Lotus", "Tulip"], answer: 2 },
    { q: "Which planet has rings?", options: ["Earth", "Mars", "Saturn", "Jupiter"], answer: 2 },
    { q: "Currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: 2 }
  ],
  tech: [
    { q: "HTML stands for?", options: ["HighText Machine Language", "HyperText Markup Language", "HyperTool Multi Language", "None"], answer: 1 },
    { q: "Who founded Microsoft?", options: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], answer: 2 },
    { q: "Which is not a programming language?", options: ["Python", "Java", "HTML", "Ruby"], answer: 2 },
    { q: "Which company owns Android?", options: ["Apple", "Microsoft", "Google", "Amazon"], answer: 2 },
    { q: "Shortcut for 'Copy' on computer?", options: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"], answer: 1 }
  ],
  personality: [
    { q: "You enjoy group activities. What are you likely?", options: ["Introvert", "Extrovert", "Shy", "Nervous"], answer: 1 },
    { q: "You prefer planning over spontaneity. You are?", options: ["Careless", "Judging", "Adventurous", "Relaxed"], answer: 1 },
    { q: "You enjoy helping others. You are?", options: ["Selfish", "Rude", "Empathetic", "Lazy"], answer: 2 },
    { q: "You love solving puzzles. You are?", options: ["Creative", "Logical", "Boring", "Loud"], answer: 1 },
    { q: "You stay calm in chaos. You are?", options: ["Hot-headed", "Cool-minded", "Aggressive", "Carefree"], answer: 1 }
  ],
  gaming: [
    { q: "Which game features 'Battle Royale' mode?", options: ["FIFA", "Minecraft", "Fortnite", "GTA V"], answer: 2 },
    { q: "Which company makes PlayStation?", options: ["Sony", "Microsoft", "Nintendo", "Apple"], answer: 0 },
    { q: "Which is a sandbox game?", options: ["Call of Duty", "Valorant", "Minecraft", "PUBG"], answer: 2 },
    { q: "Who is Mario's brother?", options: ["Luigi", "Toad", "Yoshi", "Wario"], answer: 0 },
    { q: "GTA stands for?", options: ["Great Traffic Adventure", "Grand Theft Auto", "Global Travel Agency", "None"], answer: 1 }
  ]
};

const params = new URLSearchParams(window.location.search);
const subject = params.get("subject"); // This reads the 'subject' query parameter
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result");

const quizData = {
  math: [
    { q: "What is 5 + 7?", options: ["10", "12", "14", "15"], answer: 1 },
    { q: "What is 9 x 3?", options: ["27", "21", "30", "18"], answer: 0 },
    // Add other questions for math
  ],
  bollywood: [
    { q: "Who is known as King Khan?", options: ["Aamir Khan", "Salman Khan", "Shah Rukh Khan", "Saif Ali Khan"], answer: 2 },
    // Add other Bollywood questions here
  ],
  // Add more categories
};

if (!subject || !quizData[subject]) {
  quizBox.innerHTML = "<p>Invalid subject. Go back to the <a href='index.html'>home page</a>.</p>";
} else {
  let current = 0;
  let score = 0;

  function showQuestion() {
    const q = quizData[subject][current];
    let html = `<h2>Question ${current + 1} of ${quizData[subject].length}</h2><p>${q.q}</p>`;
    q.options.forEach((opt, idx) => {
      html += `<label><input type='radio' name='option' value='${idx}' /> ${opt}</label><br/>`;
    });
    html += `<button onclick='submitAnswer()'>Submit</button>`;
    quizBox.innerHTML = html;
  }

  window.submitAnswer = function () {
    const selected = document.querySelector("input[name='option']:checked");
    if (!selected) return alert("Please select an answer.");
    if (parseInt(selected.value) === quizData[subject][current].answer) score++;
    current++;
    if (current < quizData[subject].length) showQuestion();
    else showResult();
  };

  function showResult() {
    quizBox.style.display = "none";
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `<h2>Your Score: ${score} / ${quizData[subject].length}</h2><a href='index.html'>Back to Home</a>`;
  }

  showQuestion();
}


// More JavaScript logic here as discussed in earlier responses...
