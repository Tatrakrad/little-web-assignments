//multi select

var buttons = document.querySelector('.people');
console.log(buttons);

var buttonSelect = function(event){
  console.log(event.target);
  if(event.target.tagName === 'LI'){
    console.log('u clicked a circle');
    event.target.classList.toggle('selected');
  }else{
    console.log('you did not click a list item');
  }
} ;

buttons.addEventListener('click',buttonSelect);
