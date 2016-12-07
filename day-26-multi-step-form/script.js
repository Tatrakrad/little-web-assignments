(function(){
//nav buttons
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var submitButton = document.getElementById('submit');

//content selectors
//array pages this way all start hidden
var formPages = document.querySelectorAll('.hidden');
var maxPosition = formPages.length - 1;

var localStorageValue = localStorage.getItem('saved-page');
var localLastPageValue = localStorage.getItem('saved-last');
console.log('saved page => ', localStorageValue);
var position = 0;
var lastPos = 0;

if(localStorageValue !==null){
  position = Number(localStorageValue);
  lastPos = Number(localLastPageValue);
}

console.dir(formPages);

console.log("num pages => ",maxPosition);

//show page 1 on load
formPages[position].classList.toggle('hidden');


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

submitButton.addEventListener('click',function(evt){

  if (position === 0){
    var fieldFirstName = document.querySelector('.first-name');
    var fieldLastName = document.querySelector('.last-name');

    validateHasValue(evt,fieldFirstName);
    validateHasValue(evt,fieldLastName);
  }

});

function switchPage(){
  localStorage.setItem('saved-page',position);

  var selectOld = formPages[lastPos];
  var selectNew = formPages[position];
  selectOld.classList.toggle('hidden');
  selectNew.classList.toggle('hidden');

  lastPos = position;
  localStorage.setItem('saved-last',lastPos);
}

function validateHasValue(evt, domElement){

  if(domElement.value === ''){
    evt.preventDefault();
    domElement.classList.add('warn');
  }else{
    domElement.classList.remove('warn');
  }

}


})();
