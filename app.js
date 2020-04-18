
const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");

// const questionDivs = document.querySelector(".question-container");
const nextButton = document.querySelector("#next");

var elems = document.getElementsByClassName("question-container"); // returns a nodeList
var questionArray = jQuery.makeArray(elems);
$(questionArray).appendTo(document.body);

// console.log(questionArray);
// console.log(questionArray.length);


// Hide all the questions
$(questionArray).hide();

// Show the first question
$(questionArray[0]).show();

//Hide correct message
$(correct).hide();

//Hide incorrect message
$(incorrect).hide();

// Answer for question number 1 is 1
$(".one").click(function() {
    if($(this).val() == '1') {
        $(questionArray[0]).hide();
        $(correct).fadeIn();
    } else {
        $(incorrect).fadeIn().delay(1000).fadeOut();
    }
});

// Answer for question number 2 is 2
$(".two").click(function() {
    if($(this).val() == '2') {
        $(questionArray[1]).hide();
        $(correct).fadeIn();
    } else {
        $(incorrect).fadeIn().delay(1000).fadeOut();
    }
});

// Answer for question number 3 is 3
$(".three").click(function() {
    if($(this).val() == '3') {
        $(questionArray[2]).hide();
        $(correct).fadeIn();
    } else {
        $(incorrect).fadeIn().delay(1000).fadeOut();
    }
});

// Answer for question number 4 is 4
$(".four").click(function() {
    if($(this).val() == '4') {
        $(questionArray[3]).hide();
        $(correct).fadeIn();
    } else {
        $(incorrect).fadeIn().delay(1000).fadeOut();
    }
});

// Answer for question number 5 is 5
$(".five").click(function() {
    if($(this).val() == '5') {
        $(questionArray[4]).hide();
        $(correct).fadeIn();
    } else {
        $(incorrect).fadeIn().delay(1000).fadeOut();
    }
});

// Answer for question number 6 is 3
$(".six").click(function() {
    if($(this).val() == '3') {
        $(questionArray[5]).hide();
        $(correct).fadeIn();
    } else {
        $(incorrect).fadeIn().delay(1000).fadeOut();
    }
});

// Answer for question number 7 is 2
$(".seven").click(function() {
    if($(this).val() == '2') {
        $(questionArray[6]).hide();
        $(correct).fadeIn();
    } else {
        $(incorrect).fadeIn().delay(1000).fadeOut();
    }
});

// Answer for question number 8 is 2
$(".eight").click(function() {
    if($(this).val() == '2') {
        $(questionArray[7]).hide();
        $(correct).fadeIn();
    } else {
        $(incorrect).fadeIn().delay(1000).fadeOut();
    }
});



nextButton.addEventListener('click', function () {
    for (var i = 0; i < questionArray.length; i++) {
        $(questionArray).hide();
        $(correct).hide();
        $(questionArray[i]).show();
    }
});






