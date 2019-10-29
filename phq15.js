questions = [
    ['Over the last week, how often have you been bothered by stomach pain?', 's'],
    ['Over the last week, how often have you been bothered by back pain?', 'a'],
    ['Over the last week, how often have you been bothered by pain in your arms, legs or joints (knees, hips, etc.)?', 'd'],
    ['Over the last week, how often have you been bothered by menstrual cramps or other problems with your periods?', 'a'],
    ['Over the last week, how often have you been bothered by headaches?', 'd'],
    ['Over the last week, how often have you been bothered by dizziness?', 's'],
    ['Over the last week, how often have you been bothered by feeling your heart pound or race?', 'a'],
    ['Over the last week, how often have you been bothered by shortness of breath?', 's'],
    ['Over the last week, how often have you been bothered by pain or problems during sexual intercourse?', 'a'],
    ['Over the last week, how often have you been bothered by constipation, loose bowels or diarrhea?', 'd'],
    ['Over the last week, how often have you been bothered by nausea, gas or indigestion?', 's'],
    ['Over the last week, how often have you been bothered by feeling tired or having low energy?', 's'],
    ['Over the last week, how often have you been bothered by trouble sleeping?', 'd'],
    ['Over the last week, how often have you been bothered by chest pain?', 's'],
    ['Over the last week, how often have you been bothered by fainting spells?', 'a'],
   
]




//These are the variables for the questionnaire
totalQuestions = questions.length;
question = 0;
var score = 0;
fScore = score.toString();

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
        move()
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
        move()
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
        move()
        transition_hide()
    }
});


$("#restart").on("click", function () {
    document.getElementById("final_result").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("initialScreen").style.display = "flex";
});



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
}

function transition_hide() {
    document.getElementById("quiz").style.display = "none";

    $('#showQuestion').text(questions[question]);

    setTimeout(function () {
        document.getElementById("quiz").style.display = "flex";
    }, 200);

}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = i/totalQuestions;
    var id = setInterval(frame, 1/totalQuestions);
    function frame() {
      if (width >= totalQuestions) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}