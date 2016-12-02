var buttons = document.querySelector('.buttonrow-1');
var message = document.querySelector('.outputbox');

var buttonSelect = function(event){
  event.target.classList.toggle('dead');
    if(event.target.classList.contains('dead')){
      message.classList.toggle("hidden");
      var deathAlert = setTimeout(function(){message.classList.toggle('hidden');
    }, 650);
  }
};

buttons.addEventListener('click',buttonSelect);
