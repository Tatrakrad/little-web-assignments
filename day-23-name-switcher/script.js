//oh look an iife

(function(){

  var names = ["Bob","Tim","Quincy","Gustavus Adolphus","Original Charles","Jim"];
  var counter = 0;

  var decrementButton = document.querySelector('.decrement');
  var incrementButton = document.querySelector('.increment');
  var display = document.querySelector('.display');

  display.textContent = counter;

  function updateDisplay(){
    display.textContent = "Hello, " + names[counter] + '!';
  }

  updateDisplay();

  decrementButton.addEventListener('click',function(){
    counter --;
    if(counter < 0){
      counter = names.length -1;
    }
    updateDisplay();
  });

  incrementButton.addEventListener('click',function(){
    counter ++;
    if(counter > names.length -1){
      counter = 0;
    }
    updateDisplay();
  });

})();
