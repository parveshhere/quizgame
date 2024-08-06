//getting refrences
const question_bock = document.querySelector('#question');
const a_block = document.querySelector('.a');
const b_block = document.querySelector('.b');
const c_block = document.querySelector('.c');
const d_block = document.querySelector('.d');
const button = document.querySelector('#btn');
const total_ques = document.querySelector('#total_ques');
const right_ans = document.querySelector('#right_ans');
const wrong_ans = document.querySelector('#wrong_ans');
const score = document.querySelector('#score');
const replay = document.querySelector('#replay');
const main = document.querySelector('#main');
const result = document.querySelector('.result');
const right_audio = new Audio('correct.mp3');
const wrong_audio = new Audio('wrong.mp3');
var ques_no = 0;
var right = 0;
var wrong = 0;
right_audio.currentTime = 2.6;
wrong_audio.currentTime = 0;


const quiz = [
    {
        question: "Entomology is the science that studies",
        option_a: "Behavior of human beings",
        option_b: "Insects",
        option_c: "The origin and history of technical and scientific terms",
        option_d: "The formation of rocks",
        answer: "b",
    },
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        option_a: "largest railway station",
        option_b: "highest railway station",
        option_c: "longest railway station",
        option_d: "None of the above",
        answer: "a",
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        option_a: "Physics and Chemistry",
        option_b: "Physiology or Medicine",
        option_c: "Literature, Peace and Economics",
        option_d: "All of the above",
        answer: "d",
    },
    {
        question: "Friction can be reduced by changing from",
        option_a: "sliding to rolling",
        option_b: "rolling to sliding",
        option_c: "potential energy to kinetic energy",
        option_d: "dynamic to static",
        answer: "a",
    },
    {
        question: "Fire temple is the place of worship of which of the following religion?",
        option_a: "Taoism",
        option_b: "Judaism",
        option_c: "Zoroastrianism (Parsi Religion)",
        option_d: "Shintoism",
        answer: "c",
    }
]

loadQuiz();
function loadQuiz() {
    question_bock.innerHTML = quiz[ques_no].question;
    a_block.innerHTML = quiz[ques_no].option_a;
    b_block.innerHTML = quiz[ques_no].option_b;
    c_block.innerHTML = quiz[ques_no].option_c;
    d_block.innerHTML = quiz[ques_no].option_d;
}

button.addEventListener('click', () => {

    let answer = quiz[ques_no].answer;
    let is_checked = document.getElementById(answer).checked;
    if (is_checked) {
        right_audio.play();
        right_audio.currentTime = 0;

        alert('Right😎✔');
        right++;
        ques_no++;
    }
    else {
        wrong_audio.play();
        wrong_audio.currentTime = 0;
        alert(`Wrong!!👻`);
        wrong++;
    }
    console.log(ques_no);
    console.log(quiz.length);

    if (ques_no != quiz.length) {
        question_bock.innerHTML = quiz[ques_no].question;
        a_block.innerHTML = quiz[ques_no].option_a;
        b_block.innerHTML = quiz[ques_no].option_b;
        c_block.innerHTML = quiz[ques_no].option_c;
        d_block.innerHTML = quiz[ques_no].option_d;
    }

});

let clear = setInterval(() => {
    if (ques_no == quiz.length) {
        main.style.display = "none";
        result.style.display = "flex";
        total_ques.innerHTML = "Total Questions: " + quiz.length;
        right_ans.innerHTML = "Right Answers: " + (right -wrong) ;
        wrong_ans.innerHTML = "Wrong Answers: " + wrong;
        score.innerHTML = right - wrong + "/" + quiz.length;
    }
}, 100);

replay.addEventListener('click', () => {
    location.reload();
});
