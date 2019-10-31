questions = [
    ['1. Feeling nervous,\n\t anxious or on edge'],
    ['2. Not being able to stop or control worrying'],
    ['3. Worrying too much about different things'],
    ['4. Trouble relaxing'],
    ['5. Being so restless that it is hard to sit still'],
    ['6. Becoming easily annoyed or irritable'],
    ['7. Feeling afraid as if something awful might happen'],   
]




question = 0;
score = 0;

const scoreText = document.getElementById('score');

$("#start").on("click", function () {
    starttest();
});

$("#restart").on("click", function () {
    starttest();
});

$("#r0").on("click", function () {
    event.preventDefault();

    
    question++;
    if (question >= questions.length) {
        // if (question >= 1) {

        clearInterval(myclock);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
        }, 500);


    }
    else {
        transition_hide()
        clearInterval(myclock);
        mytimer();
    }
});

$("#r1").on("click", function () {
    event.preventDefault();
    incrementScore(1);
    question++;
    if (question >= questions.length) {

        clearInterval(myclock);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
        }, 500);


    }
    else {
        transition_hide()
        clearInterval(myclock);
        mytimer();
    }

});

$("#r2").on("click", function () {
    event.preventDefault();
    incrementScore(2);
    question++;
    if (question >= questions.length) {

        clearInterval(myclock);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
        }, 500);

        /*depression_check();
        anxiety_check();
        stress_check(); */

    }
    else {
        transition_hide()
        clearInterval(myclock);
        mytimer();
    }

});
$("#r3").on("click", function () {
    event.preventDefault();
    incrementScore(3);
    question++;
    if (question >= questions.length) {
        localStorage.setItem('mostRecentScore', score);
        clearInterval(myclock);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
        }, 500);

    }
    else {
        transition_hide()
        clearInterval(myclock);
    }
});



function count() {
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


function timeConverter(t) {

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

}


function transition_hide() {
    document.getElementById("question").style.display = "none";

    $('#printquestion').text(questions[question][0]);

    setTimeout(function () {
        document.getElementById("question").style.display = "flex";
    }, 500);

}



function starttest() {
    question = 0;
    score = 0;
    event.preventDefault();


    document.getElementById("final_results").style.display = "none";
    document.getElementById("initialScreen").style.display = "none";
    $('#printquestion').text(questions[question][0]);
    setTimeout(function () {
    document.getElementById("question").style.display = "flex";
    }, 500);

    mytimer();
}

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}