console.log('script file hooked up!');

var clickMeButton = document.querySelector('.click-me');
var clickMeTooButton = document.querySelector('.click-me-too');

clickMeButton.addEventListener('click',function(){
  var coolDiv = document.querySelector('.cool-div');
  coolDiv.textContent = 'different now';
  coolDiv.classList.toggle('on');
});

clickMeTooButton.addEventListener('click',function(){
  var coolDiv = document.querySelector('.cool-div');
  coolDiv.textContent = 'different now';
  coolDiv.classList.toggle('on');
});
