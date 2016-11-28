//
var thisText = document.querySelector('.the-paragraph');

var changeText = function(evt){
  thisText.innerHTML = "I have been clicked call the police";
};

thisText.addEventListener('click',changeText);
