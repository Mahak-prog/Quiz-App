var questions = [{
    question: "1. What color does yellow and green make?",
    choices: ["Lime ", "Ocean mist ", " Maroon", "Tangerine"],
    correctAnswer: 0
    }, {
    question: "2. Ctrl, Shift and Alt are called .......... keys.",
    choices: ["modifier", "function ", "alphanumeric", "adjustment "],
    correctAnswer: 0
    }, {
    question: "3. National Income estimates in India are prepared by",
    choices: ["Planning Commission ", "Reserve Bank of India ", "Central statistical organisation ", "Indianstatistical Institute"],
    correctAnswer: 2
    }, {
    question: "4. The staple food of the Vedic Aryan was",
    choices: ["Barley and rice ", "Milk and its products ", "Rice and pulses ", "Vegetables and fruits "],
    correctAnswer: 1
    }, {
    question: "5. The tropic of cancer does not pass through which of these Indian states ?",
    choices: ["Madhya Pradesh ", "West Bengal", "Rajasthan ", "Odisha"],
    correctAnswer: 3
    },{
    question: "6. A computer cannot 'boot' if it does not have the _____",
    choices: [" Compiler ", "Loader", "Operating system", "Assembler"],
    correctAnswer: 2
    },{
    question: "7. Fathometer is used to measure",
    choices: [" Earthquakes ", "Rainfall", "Ocean depth", "Sound intensity"],
    correctAnswer: 2
    },{
    question: "8. The purest form of iron is ",
    choices: ["wrought iron", "steel", "pig iron", "nickel steel "],
    correctAnswer: 0
    },{
    question: "9. The working principle of a washing machine is",
    choices: ["reverse osmosis", "diffusion", "centrifugation", "dialysis"],
    correctAnswer: 2
    },{
    question: "10. Who is the author of the book 'Freedom Behind Bars '",
    choices: ["Kiran Bedi", "Jawaharlal Nehru", "Nelson Mandela", "Sheikh Abdullah"],
    correctAnswer: 0
    },{
    question: "11. Which river of India is called Vridha Ganga?",
    choices:["Krishna", "Godavari", "Kaveri", "Narmada"],
    correctAnswer: 1
    },
    {
    question: "12.________ is the process of dividing the disk into tracks and sectors",
    choices: [ "Tracking",
    " Formatting",
    "Crashing",
    "Allotting"],
    correctAnswer: 1
    
    
    
    },
    {
    question: "13. Which of the following sentences is correctly punctuated?",
    choices: [ "Everyone has special skills; some people use them very well. ",
    " Everyone has special skills; and, some people use them very well. ",
    "Everyone has special skills some people use them very well. ",
    "Everyone has special skills and, some people use them very well. "],
    correctAnswer: 0
    }, {
    
    question: "14. Which latitude passes through the middle of India?",
    choices: [ "Equator",
    "Arctic Circle ",
    "Tropic of Capricorn ",
    "Tropic of Cancer"],
    correctAnswer: 3
    },
    {
    question: "15.Hydrogen bomb is based on the principle of ",
    choices: [ "nuclear fission ",
    "nuclear fusion",
    "1natural radioactivity",
    "artificial radioactivity"],
    correctAnswer: 1
    },{
    question: "16. Epsom(England) is the place associated with",
    choices:[ "Snooker",
    "Shooting",
    "Polo",
    "Horse racing"],
    correctAnswer: 3
    },{
    question: "17. Union Budget is always presented first in ________",
    choices: ["The Lok Sabha",
    "The Rajya Sabha",
    "Joint session of the Parliament",
    "Meeting of the Union Cabinet"],
    correctAnswer: 0
    },{
    question: "18. Junk e-mail is also called ______",
    choices: [ "Spam",
    "Spoof",
    "Sniffer script",
    "Spool"],
    correctAnswer: 0
    },{
    question: "19. Microsoft Office is an example of a",
    choices: ["Closed source software",
    "Open source software",
    "Horizontal market software",
    "vertical market software"],
    correctAnswer: 2
    },{
    question: "20. The blue colour of the clear sky is due to",
    choices: [ "Diffraction of light",
    "Dispersion of light",
    "Reflection of light",
    

    
    "Refraction of light"],
    correctAnswer: 1
    },{
    question: "21. Fastest Shorthand Writer was",
    choices: ["Dr. G. D. Bist",
    " Key J.R.D. Tata",
    "J.M. Tagore",
    "Khudada Khan"],
    correctAnswer: 0
    },{
    question: "22. Who first imposed Jizya Tax in India?",
    choices:["Allaudin khilji",
    "Aurangzeb",
    "Mohammad Bin Qasim",
    "Qutb-ud-din Aibak"],
    correctAnswer: 3
    },{
    question: "23. Which foreign country is closest to Andaman Islands",
    choices: [ "Sri Lanka",
    "Indonesia",
    "Myanmar",
    "Pakistan"],
    correctAnswer: 2
    },
    {
    question: "24. Who proposed the Preamble before the Drafting Committee of the Constitution",
    choices: ["Jawaharlal Nehru",
    " B.R. Ambedkar",
    "B.N.Rau",
    "Mahatma Gandhi"],
    correctAnswer: 0
    },{
    question: "25.The Saka Era was founded by ",
    choices: [ "Kadphises I",
    "Kanishka",
    "Alexander",
    "Menander"],
    correctAnswer: 1
    }];
    
    var currentQuestion = 0;
    var viewingAns = 0;
    var correctAnswers = 0;
    var quizOver = false;
    var iSelectedAnswer = [];
    var c=1200;
    var t;
    $(document).ready(function ()
    {
    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".preButton").attr('disabled', 'disabled');
    timedCount();
    
    31
    $(this).find(".preButton").on("click", function ()
    {
    if (!quizOver)
    {
    if(currentQuestion == 0) { return false; }
    if(currentQuestion == 1) {
    $(".preButton").attr('disabled', 'disabled');
    }
    currentQuestion--; // Since we have already displayed the first question on DOM ready
    
    if (currentQuestion < questions.length)
    {
    displayCurrentQuestion();
    }
    } else {
    if(viewingAns == 3) { return false; }
    currentQuestion = 0; viewingAns = 3;
    viewResults();
    }
    });
    
    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function ()
    {
    if (!quizOver)
    {
    
    var val = $("input[type='radio']:checked").val();
    if (val == undefined)
    {
    
    $(document).find(".quizMessage").text("Please select an answer");
    $(document).find(".quizMessage").show();
    }
    
    else
    {
    
    // TODO: Remove any message -> not sure if this is efficient to call this each time....
    $(document).find(".quizMessage").hide();
    
    if (val == questions[currentQuestion].correctAnswer)
    {
    correctAnswers++;
    }
    iSelectedAnswer[currentQuestion] = val;
    currentQuestion++; // Since we have already displayed the first question on DOM ready
    
    if(currentQuestion >= 1) {
    $('.preButton').prop("disabled", false);
    }
    if (currentQuestion < questions.length)    
    {
    displayCurrentQuestion();
    }
    else
    {
    displayScore();
    $('#iTimeShow').html('Quiz Time Completed!');
    $('#timer').html("You scored: " + correctAnswers + " out of: " +
    
    questions.length);
    
    c=1205;
    $(document).find(".preButton").text("View Answer");
    $(document).find(".preButton").on("click", function (){
    
    $("#timer").hide();
    });
    $(document).find(".nextButton").text("Play Again?");
    c=1200;
    $(document).find(".preButton").on("click", function (){
    $("#timer").show();
    });
    quizOver = true;
    return false;
    }
    /*$(document).ready(function(){
    $(".preButton").click(function(){
    $("#timer").hide();
    });
    $(".nextButton").click(function(){
    $("#timer").show();
    });
    });*/
    }
    }
    else
    { // quiz is over and clicked the next button (which now displays 'Play Again?'
    quizOver = false; $('#iTimeShow').html('Time Remaining:'); iSelectedAnswer = [];
    $(document).find(".nextButton").text("Next Question");
    $(document).find(".preButton").text("Previous Question");
    $(".preButton").attr('disabled', 'disabled');
    resetQuiz();
    viewingAns = 1;
    displayCurrentQuestion();
    hideScore();
    }
    });
    });
    
    33
    
    function timedCount()
    {
    if(c == 1205)
    {
    return false;
    }
    var hours = parseInt( c / 3600 ) % 24;
    var minutes = parseInt( c / 60 ) % 60;
    var seconds = c % 60;
    var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes :
    
    minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    
    $('#timer').html(result);
    if(c == 0 )
    {
    
    displayScore();
    $('#iTimeShow').html('Quiz Time Completed!');
    $('#timer').html("You scored: " + correctAnswers + " out of: " +
    
    questions.length);
    
    c=1205;
    $("#timer").hide();
    $(document).find(".preButton").text("View Answer");
    $(document).find(".nextButton").text("Play Again?");
    quizOver = true;
    return false;
    
    }
    c = c - 1;
    t = setTimeout(function()
    {
    timedCount()
    },1000);
    }
    
    // This displays the current question AND the choices
    function displayCurrentQuestion()
    {
    if(c ==1205) { c =1200; timedCount(); }
    //console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    var choice;
    
    for (i = 0; i < numChoices; i++)
    
  
    
    {
    choice = questions[currentQuestion].choices[i];
    if(iSelectedAnswer[currentQuestion] == i) {
    $('<li><input type="radio" class="radio-inline" checked="checked" value=' + i + 'name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
    
    } else {
    $('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +
    
    ' ' + choice + '</li>').appendTo(choiceList);
    
    }
    }
    }
    function resetQuiz()
    {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
    }
    function displayScore()
    {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " +
    questions.length);
    $(document).find(".quizContainer > .result").show();
    }
    function hideScore()
    {
    $(document).find(".result").hide();
    }
    // This displays the current question AND the choices
    function viewResults()
    {
    if(currentQuestion == 25) { currentQuestion = 0;return false; }
    if(viewingAns == 1) { return false; }
    hideScore();
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    var choice;
    
    for (i = 0; i <= numChoices; i++)
    {
    choice = questions[currentQuestion].choices[i];
    if(iSelectedAnswer[currentQuestion] == i) {
    
    
    
    if(questions[currentQuestion].correctAnswer == i) {
    $('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked" value=' + i + ' name="dynradio" />' + ' ' + choice +
    '</li>').appendTo(choiceList);
    } else {
    $('<li style="border:2px solid red;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked" value=' + i + ' name="dynradio" />' + ' ' + choice +
    '</li>').appendTo(choiceList);
    }
    } else {
    if(questions[currentQuestion].correctAnswer == i) {
    $('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
    
    } else {
    $('<li><input type="radio" class="radio-inline" value=' + i + 'name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
    
    }
    }
    }
    currentQuestion++;
    setTimeout(function()
    {
    viewResults();
    },2000);
    
    }