//These are the Questionnaire questions
questions = [
    ['Feeling nervous, anxious or on edge'],
    ['Not being able to stop or control worrying'],
    ['Worrying too much about different things'],
    ['Having trouble relaxing'],
    ['Being so restless that it is hard to sit still'],
    ['Becoming easily annoyed or irritable'],
    ['Feeling afraid as if something awful might happen'],   
]


//These are the variables for the questionnaire
const progressBarFull = document.getElementById("progressBarFull");
const progressText = document.getElementById("progressText");
totalQuestions = questions.length;
question = 0;
var score = 0;

//Start test
$("#startButton").on("click", function () {
    starttest();
});

$("#home").on("click", function () {
    GoToHomePage();
});

//Click on Stongly Agree
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

//Click on Agree
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

//Click on Disagree
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

//Click on Strongly disagree
$("#r3").on("click", function () {
    score +=3;
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