(function(){
//nav buttons
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var submitButton = document.getElementById('submit');

//content selectors
//array pages this way all start hidden
var formPages = document.querySelectorAll('.hidden');
var maxPosition = formPages.length - 1;

var position = 0;
var lastPos = 0;

console.dir(formPages);

console.log("num pages => ",maxPosition);

//show page 1 on load
formPages[0].classList.toggle('hidden');


prevButton.addEventListener('click',function(){
  if (position > 0){
    position--;
    switchPage();
  }
});

nextButton.addEventListener('click',function(){
  if (position < maxPosition){
    position++;
    switchPage();
  }
});


function switchPage(){

  var selectOld = formPages[lastPos];
  var selectNew = formPages[position];
  selectOld.classList.toggle('hidden');
  selectNew.classList.toggle('hidden');

  lastPos = position;
}


})();
