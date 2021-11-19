//1. triger the event whwn user clicks the button
//2.  select the element
//3. show an element
//4.hide an element

  //1. triger the event when user clicks the button
// select all available buttons
let buttons = document.querySelectorAll(".question-btn");
//console.log(buttons);

buttons.forEach(function(button){
  //console.log(button);

    
  button.addEventListener("click", function (){
    //4.hide the element
    let questionTexts = document.querySelectorAll(".question-text");
      questionTexts.forEach(function (questionText) {
      questionText.style.display = "none";
    });

    //2. select an element
    referenceElement = this;
    questionsection = referenceElement.parentNode.parentNode;
    questionTextSelection = questionsection.querySelector(".question-text");

    //console.log(questionText);

    //3.show an element

    questionTextSelection.style.display = "block";
  });
});