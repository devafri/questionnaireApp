questions = [
    ['stomach pain?'],
    ['back pain?'],
    ['pain in your arms, legs or joints (knees, hips, etc.)?'],
    ['menstrual cramps or other problems with your periods?'],
    ['headaches?'],
    ['dizziness?'],
    ['feeling your heart pound or race?'],
    ['shortness of breath?'],
    ['pain or problems during sexual intercourse?'],
    ['constipation, loose bowels or diarrhea?'],
    ['nausea, gas or indigestion?'],
    ['feeling tired or having low energy?'],
    ['by trouble sleeping?'],
    ['by chest pain?'],
    ['fainting spells?'],
   
]




//These are the variables for the questionnaire
const progressBarFull = document.getElementById("progressBarFull");
const progressText = document.getElementById("progressText");
totalQuestions = questions.length;
question = 0;
var score = 0;
fScore = score.toString();
newProgress = 1/totalQuestions;

//Start test
$("#startButton").on("click", function () {
    starttest();
});

//Click on "Not bothered"
$("#r0").on("click", function () {
    score +=0;
    console.log(score)
    question++;

    if (question >= questions.length) {
        localStorage.setItem('mostRecentScore', score);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("quiz").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_result").style.display = "flex";
        }, 500);
        document.getElementById("finalScore").innerHTML = score;
    }
    
    else {
        transition_hide()
    }
});

//Click on "Bothered a little"
$("#r1").on("click", function () {
    score +=1;
    console.log(score)
    question++;

    if (question >= questions.length) {
        localStorage.setItem('mostRecentScore', score);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("quiz").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_result").style.display = "flex";
        }, 500);
        document.getElementById("finalScore").innerHTML = score;
    }
    
    else {
        transition_hide()
       
    }
});

//Click on 'Bothered a lot'
$("#r2").on("click", function () {
    score +=2;
    console.log(score)
    question++;

    if (question >= questions.length) {
        localStorage.setItem('mostRecentScore', score);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("quiz").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_result").style.display = "flex";
        }, 500);
        document.getElementById("finalScore").innerHTML = score;
    }
    
    else {
        
        transition_hide()
    }
});


$("#restart").on("click", function () {
    document.getElementById("final_result").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("initialScreen").style.display = "flex";
});

$("#previous").on("click", function () {
    question--
    transition_hide();
});

$("#next").on("click", function () {
    question++;
    transition_hide();
});

$("#home").on("click", function () {

    GoToHomePage();
});



function GoToHomePage(){
    window.location = '/index.html';
}


function starttest() {
    question = 0;
    score = 0;
    event.preventDefault();
    document.getElementById("final_result").style.display = "none";
    document.getElementById("initialScreen").style.display = "none";
    $('#showQuestion').text(questions[question][0]);
    setTimeout(function () {
        document.getElementById("quiz").style.display = "flex";
    }, 100);
    progressText.innerText = `Question ${question+1}/${totalQuestions}`;
}

function transition_hide() {
    document.getElementById("quiz").style.display = "none";

    $('#showQuestion').text(questions[question]);

    setTimeout(function () {
        document.getElementById("quiz").style.display = "flex";
    }, 200);
    progressBarFull.style.width = `${(question / totalQuestions) * 100}%`;
    progressText.innerText = `Question ${question+1}/${totalQuestions}`;
}