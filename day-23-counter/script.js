//oh look an iife

(function(){

  var counter = 0;

  var decrementButton = document.querySelector('.decrement');
  var incrementButton = document.querySelector('.increment');
  var display = document.querySelector('.display');

  display.textContent = counter;

  decrementButton.addEventListener('click',function(){
    counter --;
    display.textContent = counter;
  });

  incrementButton.addEventListener('click',function(){
    counter ++;
    display.textContent = counter;
  });

})();
