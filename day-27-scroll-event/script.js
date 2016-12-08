console.log('script file hooked up!');

var headerBox = document.querySelector('.scrollheader');
var subheading = document.querySelector('.sub-title-text');
var mainContent = document.querySelector('#main');

var headerSwitched = false;


window.addEventListener('scroll', function(evt) {
  console.log("offsetY",window.pageYOffset);


  if (window.pageYOffset > 130 && !headerSwitched) {
    changeHeader();
    headerSwitched = true;
  } else if (window.pageYOffset < 130 && headerSwitched){
    changeHeader();
    headerSwitched = false;
  }

});

function changeHeader(){
  headerBox.classList.toggle('transparent');
  subheading.classList.toggle('hidden');

}
