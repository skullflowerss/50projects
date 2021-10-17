const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const quiz = document.getElementById('quiz')
const answersEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

let quizNumbr = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[quizNumbr]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answersEl.forEach(element => element.checked = false)
}

function getSelected(){
    let answer 
    answersEl.forEach(element =>{
        if(element.checked){
            answer = element.id
        }
    })
    return answer
}
submit.addEventListener('click', ()=>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[quizNumbr].correct){
            score++
        }

        quizNumbr++

        if(quizNumbr < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
                <button onclick="location.reload()">reload</button>
            `
        }
    }
})