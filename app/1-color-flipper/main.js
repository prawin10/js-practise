// 1. Trigger event when user click on the event.
let myButton = document.getElementById('color-generator');
 console.log(document);
 console.log(document.getElementById);
 console.log(myButton);

myButton.addEventListener('click',function()
{
   // console.log('generateRandomColor');(just how many click function in generateRandomColor).
   let randomColor = generateRandomColor(),
     bodyTag = document.getElementById('body-tag');
    bodyTag.style.backgroundColor = randomColor;
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2. Write a function to generate random color.

function generateRandomColor(){
    let red, green, blue, style, 
    head = 'rgb(',
    seperator = ' ',
    tail = ')';

     red = getRandomInt(0, 255);
     green = getRandomInt(0, 255);
     blue = getRandomInt(0, 255);



    style = head + red + seperator + green + seperator + blue + tail;

    return style;
}