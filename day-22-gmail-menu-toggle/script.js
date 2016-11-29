var categories = document.querySelector('.categories');

var catSelect = function(event){
  console.log(event.target);
  if(event.target.tagName === 'LI'){
    event.target.classList.toggle('selected');
  }
} ;

categories.addEventListener('click',catSelect);
