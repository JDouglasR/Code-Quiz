// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "How many legs does the Legs of Man have?",
        choiceA : "1",
        choiceB : "2",
        choiceC : "3",
        correct : "C"
    },{
        question : "How many bones does an adult human have?",
        choiceA : "Two hundred",
        choiceB : "Two hundred and six",
        choiceC : "Too many",
        correct : "B"
    },{
        question : "What was Marilyn Monroe's natural hair colour?",
        choiceA : "Blonde",
        choiceB : "Brunette",
        choiceC : "Ginger",
        correct : "C"
    },{
        question : "What did A.E. Frick invent in 1887, which are now worn by thousands if not millions of people?",
        choiceA : "Contact Lenses",
        choiceB : "The T-shirt",
        choiceC : "Cotton socks",
        correct : "A"
    },{
        question : "What is an irrational fear of trees called?",
        choiceA : "Arborophobia",
        choiceB : "Dendrophobia",
        choiceC : "Treephobia",
        correct : "B"
    },{
        question : "What is the national flower of Wales?",
        choiceA : "Daffodil",
        choiceB : "Rose",
        choiceC : "Marijuana",
        correct : "A"
    },{
        question : "How many bones are there on a Skull & Crossbones flag?",
        choiceA : "1",
        choiceB : "2",
        choiceC : "3",
        correct : "C"
    },{
        question : "Which ocean surrounds the Maldives?",
        choiceA : "Indian",
        choiceB : "Pacific",
        choiceC : "Atlantic",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    //qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        
    }else{
        // answer is wrong
        
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}



// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    
}





















