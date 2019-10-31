//These are the Questionnaire questions
questions = [
    ['I always find new and interesting aspects in my work'],
    ['There are days when I feel tired before I arrive at work'],
    ['It happens more and more often that I talk about my work in a negative way'],
    ['After work, I tend to need more time than in the past in order to relax and feel better'],
    ['I can tolerate the pressure of my work very well'],
    ['Lately, I tend to think less at work and do my job almost mechanically'],
    ['I find my work to be a positive challenge'],
    ['During my work, I often feel emotionally drained'],
    ['Over time, one can become disconnected from this type of work'],
    ['After working, I have enough energy for my leisure activities'],
    ['Sometimes I feel sickened by my work tasks'],
    ['After my work, I usually feel worn out and weary'],
    ['This is the only type of work that I can imagine myself doing'],
    ['Usually, I can manage the amount of my work well'],
    ['I feel more and more engaged in my work'],
    ['When I work, I usually feel energized'],    
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