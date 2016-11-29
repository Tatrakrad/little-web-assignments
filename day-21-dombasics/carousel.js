var rightButton = document.querySelector('#right-button');
var leftButton = document.querySelector('#left-button');
var horizontal = 0;

var box = document.querySelector('.alone-box');
var boxes = document.querySelectorAll('.box');

rightButton.addEventListener('click',function(){
  horizontal += 50;
  box.style.left = horizontal + 'px';
  if(horizontal > 900){
    horizontal = -50;
  }
});

leftButton.addEventListener('click',function(){
  horizontal -= 50;
  box.style.left = horizontal + 'px';
  if(horizontal < -50){
    horizontal = 850;
  }
});
