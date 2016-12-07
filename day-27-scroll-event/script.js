console.log('script file hooked up!');

var headerBox = document.querySelector('.scrollheader');
var mainContent = document.querySelector('#main');

var headerSwitched = false;


window.addEventListener('scroll', function(evt) {
  console.log("offsetY",window.pageYOffset);


  if (window.pageYOffset > 180 && !headerSwitched) {
    console.log('change header');
    console.log("headerBox.firstElementChild",headerBox.firstElementChild);
    headerBox.firstElementChild.classList.toggle('transparent');
    headerSwitched = true;
  }

});
