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
}
if(localLastPageValue !==null){
  lastPos = Number(localLastPageValue);
}

console.dir(formPages);

console.log("num pages => ",maxPosition);

formPages[position].classList.remove('hidden');


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
  }else if (position == 1){


  }else if (position == 2){
    var evalRadios = document.getElementsByName("trait");
    console.log(evalRadios,"evalRadios");
    validateRadio(evt,evalRadios);

  }

});

function switchPage(){
  console.log("position",position);
  console.log("lastPos",lastPos);
  localStorage.setItem('saved-page',position);

  var selectOld = formPages[lastPos];
  var selectNew = formPages[position];
  selectOld.classList.toggle('hidden');
  selectNew.classList.toggle('hidden');

  lastPos = position;
  localStorage.setItem('saved-last',lastPos);
}

function validateHasValue(evt, domElement){

  var alertTextBox = document.querySelector('.alert');

  if(domElement.value === ''){
    evt.preventDefault();
    domElement.classList.add('warn');
    alertTextBox.style.display = "block";
  }else{
    domElement.classList.remove('warn');
    alertTextBox.style.display = "none";
  }

}

function validateRadio(evt,domElement){
  var alertTextBox = document.querySelector('#page-3 .alert')
  console.log("page 3 alert",alertTextBox);
  if(!isRadioSelected(domElement)){
    evt.preventDefault();
    alertTextBox.style.display = "block";
  }else{
    alertTextBox.style.display = "none";
  }


}

function isRadioSelected (radios)
{
  for (i = 0; i < radios.length; i++)
  {
    if (radios[i].checked) return true;
  }
  return false;
}



})();
