questions = [
    ['Did a parent or other adult in the household often…\nSwear at you, insult you, put you down, or humiliate you?'],
    ['Did a parent or other adult in the household often or very often… \npush, grab, slap, or throw something at you? \nor \n ever hit you so hard that you had marks or were injured?'],
    ['Did an adult or person at least five years older than you ever…touch or fondle you or have you touch their body in a sexual way? or attempt or actually have oral, anal, or vaginal intercourse with you?'],
    ['Did you often or very often feel that…no one in your family loved you or thought you were important or special? or your family didn’t look out for each other, feel close to each other, or support each other?'],
    ['Did you often or very often feel that…you didn’t have enough to eat, had to wear dirty clothes, and had no one to protect you? or your parents were too drunk or high to take care of you or take you to the doctor if you needed it?'],
    ['was a biological parent ever lost to you through divorce, abandonment, or other reason?'],
    ['was your mother or stepmother: often or very often pushed, grabbed, slapped, or had something thrown at her? or sometimes, often, or very often kicked, bitten, hit with a fist, or hit with something hard? or ever repeatedly hit over at least a few minutes or threatened with a gun or knife?'],
    ['did you live with anyone who was a problem drinker or alcoholic, or who used street drugs?'],
    ['was a household member depressed or mentally ill, or did a household member attempt suicide?'],
    ['did a household member go to prison?'],
    
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

//Start test
$("#startButton").on("click", function () {
    starttest();
});

//Click on No
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

//Click on Yes
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