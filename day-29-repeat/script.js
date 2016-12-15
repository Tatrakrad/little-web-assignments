console.log('script file hooked up!');

var clickMeButton = document.querySelector('.click-me');
var clickMeTooButton = document.querySelector('.click-me-too');
var coolDiv = document.querySelector('.cool-div');

clickMeButton.addEventListener('click',function(){
  changeIt('different now');
});

clickMeTooButton.addEventListener('click',function(){
  changeIt('the other one');
});

function changeIt(message) {
  coolDiv.textContent = message;
  coolDiv.classList.toggle('on');
}
