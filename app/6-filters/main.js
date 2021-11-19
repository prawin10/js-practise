/* 1: get click eventfor each a-tag
   2: findclass name for this element
   3: hideall cards
   4: show the specific card 
*/

let cardTitles = document.querySelectorAll('.card-title');

cardTitles.forEach(printme);

function printme(cardTitle) {
  //1: get click eventfor each a-tag
  cardTitle.addEventListener('click', function () {

    hidecard();
    currentElement = this;
    //2: findclass name for this element
    className = currentElement.classList[1];
    
    //4: show the specific card and if is used for all
    if(className=='all'){
      className ='.card';
    }
    else{
      className = '.' + className;
    }
    
    cardAll = document.querySelectorAll(className);
    cardAll.forEach(function (card) {
      card.style.display = 'block';
    });
  });
}
//3: hidecard
function hidecard(){
  cards= document.querySelectorAll('.card');
   cards.forEach(function(card){
   card.style.display = 'none';
  });
}
   


//  ******OTHER WAYS OF SHOW CARD
// function showcard(){
//   className= '.' + className;
//    cardAll = document.querySelectorAll(className);
//    cardAll.forEach(function(card){
//     card.style.display = 'block';
//   });
// }
//showcard();//call it in click


/* EXTRA POINTS
filters = document.getElementById('filters');
cards = filters.querySelectorAll('card')
*/