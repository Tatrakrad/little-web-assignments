var categories = document.querySelector('.categories');

var catSelect = function(event){
  console.log(event.target);
  if(event.target.tagName === 'LI'){
    //li detected, remove all other selected status from list-style
    var deselect = document.querySelectorAll('li');
    for(var i = 0; i<deselect.length; i++){
      if(event.target !== deselect[i]){
        deselect[i].classList.remove('selected');
      }
    }
    event.target.classList.toggle('selected');

  }
} ;

categories.addEventListener('click',catSelect);
