const questions = [
  {
    question: "Whats (2+2)/4*(2+2)/4*(1+3)/(-3+7)+(2+2)-1?",
    a: "8",
    b: "2",
    c: "6",
    d: "4",
    correct: "d",
  },
  {
    question: "Whats is the most used Programming Language?",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "Javascript",
    correct: "a",
  },
  {
    question: "Where is ICC CWC 2023 World Cup final being held?",
    a: "Kolkata",
    b: "Ahemdabad",
    c: "Mumbai",
    d: "Mohali",
    correct: "b",
  },
  {
    question: "Who is the President of India?",
    a: "Draupadi Murmu",
    b: "Ramnath Kovind",
    c: "Pratibha Patil",
    d: "Venkat Sharma",
    correct: "a",
  },
  {
    question: "Capital of Portugal ?",
    a: "Lisbon",
    b: "Vienna",
    c: "Istanbul",
    d: "Madrid",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = questions[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;

  if (currentQuiz < questions.length) {
    loadQuiz();
  } else {
    alert("Hurray You finished wait for your results!");
  }
});
