//These are the Questionnaire questions
questions = [
    ['I always find new and interesting aspects in my work',],
    ['There are days when I feel tired before I arrive at work','r'],
    ['It happens more and more often that I talk about my work in a negative way','r'],
    ['After work, I tend to need more time than in the past in order to relax and feel better','r'],
    ['I can tolerate the pressure of my work very well',],
    ['Lately, I tend to think less at work and do my job almost mechanically','r'],
    ['I find my work to be a positive challenge',],
    ['During my work, I often feel emotionally drained','r'],
    ['Over time, one can become disconnected from this type of work','r'],
    ['After working, I have enough energy for my leisure activities',],
    ['Sometimes I feel sickened by my work tasks','r'],
    ['After my work, I usually feel worn out and weary','r'],
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
score = 0;
disengagement = 0;
exhaustion = 0;
reverse = [1,2,3,4,7,10,11];
dQuestions = [0,2,5,6,8,10,12,14]

//Start test
$("#startButton").on("click", function () {
    starttest();
});

$("#home").on("click", function () {
    GoToHomePage();
});

//Click on Stongly Agree
$("#r0").on("click", function () {
    //console.log(reverse.includes(question));
    if(reverse.includes(question) == true){
        if(dQuestions.includes(question) == true){
            disengagement +=4;
        }
        else{
            exhaustion +=4;
        }
        
    }
    else if(dQuestions.includes(question) == true){
        disengagement +=1;
    } else{ exhaustion +=1;}
    console.log("disengagement = " + disengagement);
    console.log("exhaustion =" + exhaustion);
    question++;

    if (question >= questions.length) {
        localStorage.setItem('mostRecentScore', score);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("quiz").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_result").style.display = "flex";
        }, 500);
        document.getElementById("disengagementScore").innerHTML = disengagement;
        document.getElementById("exhaustionScore").innerHTML = exhaustion;
    }
    
    else {
        transition_hide()
    }
});

//Click on Agree
$("#r1").on("click", function () {
    if(reverse.includes(question) == true){
        if(dQuestions.includes(question) == true){
            disengagement +=3;
        }
        else{
            exhaustion +=3;
        }
        
    }
    else if(dQuestions.includes(question) == true){
        disengagement +=2;
    } else{ exhaustion +=2;}
    console.log("disengagement = " + disengagement);
    console.log("exhaustion =" + exhaustion);
    question++;

    if (question >= questions.length) {
        localStorage.setItem('mostRecentScore', score);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("quiz").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_result").style.display = "flex";
        }, 500);
        document.getElementById("disengagementScore").innerHTML = disengagement;
        document.getElementById("exhaustionScore").innerHTML = exhaustion;
    }
    
    else {
        transition_hide()
    }
});

//Click on Disagree
$("#r2").on("click", function () {
    if(reverse.includes(question) == true){
        if(dQuestions.includes(question) == true){
            disengagement +=2;
        }
        else{
            exhaustion +=2;
        }
        
    }
    else if(dQuestions.includes(question) == true){
        disengagement +=3;
    } else{ exhaustion +=3;}
    console.log("disengagement = " + disengagement);
    console.log("exhaustion =" + exhaustion);

    question++;

    if (question >= questions.length) {
        //localStorage.setItem('mostRecentScore', score);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("quiz").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_result").style.display = "flex";
        }, 500);
        document.getElementById("disengagementScore").innerHTML = disengagement;
        document.getElementById("exhaustionScore").innerHTML = exhaustion;
    }
    
    else {
        transition_hide()
    }
});

//Click on Strongly disagree
$("#r3").on("click", function () {
    if(reverse.includes(question) == true){
        if(dQuestions.includes(question) == true){
            disengagement +=2;
        }
        else{
            exhaustion +=2;
        }
        
    }
    else if(dQuestions.includes(question) == true){
        disengagement +=3;
    } else{ exhaustion +=3;}
    console.log("disengagement = " + disengagement);
    console.log("exhasution =" + exhaustion);
    question++;

    if (question >= questions.length) {
        //localStorage.setItem('mostRecentScore', score);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("quiz").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_result").style.display = "flex";
        }, 500);
        document.getElementById("disengagementScore").innerHTML = disengagement;
        document.getElementById("exhaustionScore").innerHTML = exhaustion;
    }
    
    else {
        transition_hide()
        
    }
});

$("#restart").on("click", function () {
    disengagement = 0;
    exhaustion = 0;
    document.getElementById("final_result").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("initialScreen").style.display = "flex";
    
});


function GoToHomePage(){
    window.location = '/index.html';
}

function starttest() {
    question = 0;
    disengagement = 0;
    exhaustion = 0;
    progressText.innerText = `Question ${question+1}/${totalQuestions}`;
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

    $('#showQuestion').text(questions[question][0]);

    setTimeout(function () {
        document.getElementById("quiz").style.display = "flex";
    }, 200);
    progressBarFull.style.width = `${(question / totalQuestions) * 100}%`;
    progressText.innerText = `Question ${question+1}/${totalQuestions}`;

}
