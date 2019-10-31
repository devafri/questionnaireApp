questions = [
    ['I found it hard to wind down', 's'],
    ['I was aware of dryness of my mouth', 'a'],
    ['I couldn’t seem to experience any positive feeling at all', 'd'],
    ['I experienced breathing difficulty', 'a'],
    ['I found it difficult to work up the initiative to do things', 'd'],
    ['I tended to over-react to situations', 's'],
    ['I experienced trembling', 'a'],
    ['I felt that I was using a lot of nervous energy', 's'],
    ['I was worried about situations in which I might panic', 'a'],
    ['I felt that I had nothing to look forward to', 'd'],
    ['I found myself getting agitated', 's'],
    ['I found it difficult to relax', 's'],
    ['I felt down-hearted and blue', 'd'],
    ['I felt intolerant of anything that kept me from getting on with what I was doing', 's'],
    ['I felt I was close to panic', 'a'],
    ['I was unable to become enthusiastic about anything', 'd'],
    ['I felt I wasn’t worth much as a person', 'd'],
    ['I felt that I was rather touchy', 's'],
    ['I sensed my heart rate increase or miss a beat', 'a'],
    ['I felt scared without any good reason', 'a'],
    ['I felt that life was meaningless', 'd']
]




const progressBarFull = document.getElementById("progressBarFull");
const progressText = document.getElementById("progressText");
totalQuestions = questions.length;
question = 0;
anxiety = 0;
depression = 0;
stress = 0;


$("#start").on("click", function () {
    starttest();
});

$("#restart").on("click", function () {
    starttest();
});

$("#home").on("click", function () {
    GoToHomePage();
});

$("#previous").on("click", function () {
    question--
    transition_hide();
});

$("#next").on("click", function () {
    question++;
    transition_hide();
});

$("#r0").on("click", function () {
    event.preventDefault();

    // console.log("r0", depression, anxiety, stress)

    if (questions[question][1] == 'a') {
        anxiety += 0;
    }
    else if (questions[question][1] == 's') {
        stress += 0;
    }
    else if (questions[question][1] == 'd') {
        depression += 0;
    }
    question++;
    if (question >= questions.length) {
        // if (question >= 1) {

        
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
        }, 500);

        depression_check();
        anxiety_check();
        stress_check();

    }
    else {
        transition_hide()
        //clearInterval(myclock);
        //mytimer();
    }
});

$("#r1").on("click", function () {
    event.preventDefault();

    // console.log("r0", depression, anxiety, stress)

    if (questions[question][1] == 'a') {
        anxiety += 1;
    }
    else if (questions[question][1] == 's') {
        stress += 1;
    }
    else if (questions[question][1] == 'd') {
        depression += 1;
    }
    question++;
    if (question >= questions.length) {

       
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
        }, 500);

        depression_check();
        anxiety_check();
        stress_check();

    }
    else {
        transition_hide()
        //clearInterval(myclock);
        //mytimer();
    }

});

$("#r2").on("click", function () {
    event.preventDefault();

    // console.log("r0", depression, anxiety, stress)

    if (questions[question][1] == 'a') {
        anxiety += 2;
    }
    else if (questions[question][1] == 's') {
        stress += 2;
    }
    else if (questions[question][1] == 'd') {
        depression += 2;
    }
    question++;
    if (question >= questions.length) {

       
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
        }, 500);

        depression_check();
        anxiety_check();
        stress_check();

    }
    else {
        transition_hide()
        //clearInterval(myclock);
        //mytimer();
    }

});
$("#r3").on("click", function () {
    event.preventDefault();

    // console.log("r0", depression, anxiety, stress)

    if (questions[question][1] == 'a') {
        anxiety += 3;
    }
    else if (questions[question][1] == 's') {
        stress += 3;
    }
    else if (questions[question][1] == 'd') {
        depression += 3;
    }
    question++;
    if (question >= questions.length) {

        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
        }, 500);

        depression_check();
        anxiety_check();
        stress_check();

    }
    else {
        transition_hide()
        //clearInterval(myclock);
        //mytimer();
    }

});



/*function count() {
    if (time > 0) {
        time--;
        var converted = timeConverter(time);
        // console.log(converted);
        $("#timer").text(converted);
    }
    else {
        return false;
    }
}
*/

/*function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}


function mytimer() {

    time = 30;
    $("#timer").text('00:30');
    $("#timer").text(timeConverter(time));

    myclock = setInterval(function () {

        count();
        if (time == 0) {
            clearInterval(myclock);
            document.getElementById('r0').click();
        }

    }, 1000);

} */


function transition_hide() {
    document.getElementById("question").style.display = "none";

    $('#printquestion').text(questions[question][0]);

    setTimeout(function () {
        document.getElementById("question").style.display = "flex";
    }, 500);
    progressBarFull.style.width = `${(question / totalQuestions) * 100}%`;
    progressText.innerText = `Question ${question+1}/${totalQuestions}`;

}

function depression_check() {
    // depression check
    depression = depression * 2;
    if (depression >= 28) {
        document.getElementById("DExtreme").style.opacity = "1";
    }
    else if (depression >= 21) {
        document.getElementById("DSevere").style.opacity = "1";
    }
    else if (depression >= 14) {
        document.getElementById("DModerate").style.opacity = "1";
    }
    else if (depression >= 10) {
        document.getElementById("DMild").style.opacity = "1";
    }
    else {
        document.getElementById("DNormal").style.opacity = "1";
    }
}

function anxiety_check() {
    // depression check
    anxiety = anxiety * 2;
    if (anxiety >= 20) {
        document.getElementById("AExtreme").style.opacity = "1";
    }
    else if (anxiety >= 15) {
        document.getElementById("ASevere").style.opacity = "1";
    }
    else if (anxiety >= 10) {
        document.getElementById("AModerate").style.opacity = "1";
    }
    else if (anxiety >= 8) {
        document.getElementById("AMild").style.opacity = "1";
    }
    else {
        document.getElementById("ANormal").style.opacity = "1";
    }
}


function stress_check() {
    // depression check
    stress = stress * 2;
    if (stress >= 34) {
        document.getElementById("SExtreme").style.opacity = "1";
    }
    else if (stress >= 26) {
        document.getElementById("SSevere").style.opacity = "1";
    }
    else if (stress >= 19) {
        document.getElementById("SModerate").style.opacity = "1";
    }
    else if (stress >= 15) {
        document.getElementById("SMild").style.opacity = "1";
    }
    else {
        document.getElementById("SNormal").style.opacity = "1";
    }
}

function GoToHomePage(){
    window.location = '/index.html';
}

function starttest() {
    question = 0;
    anxiety = 0;
    depression = 0;
    stress = 0;
    event.preventDefault();

    document.getElementById("DExtreme").style.opacity = "0.1";
    document.getElementById("DSevere").style.opacity = "0.1";
    document.getElementById("DModerate").style.opacity = "0.1";
    document.getElementById("DMild").style.opacity = "0.1";
    document.getElementById("DNormal").style.opacity = "0.1";

    document.getElementById("AExtreme").style.opacity = "0.1";
    document.getElementById("ASevere").style.opacity = "0.1";
    document.getElementById("AModerate").style.opacity = "0.1";
    document.getElementById("AMild").style.opacity = "0.1";
    document.getElementById("ANormal").style.opacity = "0.1";

    document.getElementById("SExtreme").style.opacity = "0.1";
    document.getElementById("SSevere").style.opacity = "0.1";
    document.getElementById("SModerate").style.opacity = "0.1";
    document.getElementById("SMild").style.opacity = "0.1";
    document.getElementById("SNormal").style.opacity = "0.1";


    document.getElementById("final_results").style.display = "none";
    document.getElementById("initialScreen").style.display = "none";
    $('#printquestion').text(questions[question][0]);
    setTimeout(function () {
        document.getElementById("question").style.display = "flex";
    }, 500);

    progressText.innerText = `Question ${question+1}/${totalQuestions}`;
}