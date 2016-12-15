(function(){

  var position = 1;

  // var allTheThings = document.querySelectorAll('.contains-things div');
  // var maxPosition = allTheThings.length;
  //can also select .contains-things and then check the length of
  //allTheThings.children.length;
  var parent = document.querySelector('.contains-things');
  var maxPosition = parent.children.length;
  console.log("maxPosition",maxPosition);

  var previousButton = document.querySelector('.button-previous');
  var nextButton = document.querySelector('.button-next');
  console.log(previousButton,nextButton);

  previousButton.addEventListener('click',function(){
    console.log("click back");
    if (position > 1){
      position--;
      showBasedOnCurrentPosition();
    }
  });

  nextButton.addEventListener('click',function(){
    console.log('click forward');
    if (position < maxPosition){
      position++;
      showBasedOnCurrentPosition();
    }
  });

  function showBasedOnCurrentPosition(){

    //dynamic build selector
    var selector = '.thing-' + position;
    console.log("selector => ",selector);

    //remove selected
    var currentlyShowing = document.querySelector('.showing');
    console.log('currentlyShowing',currentlyShowing);
    currentlyShowing.classList.remove('showing');
    //new thing
    var thing = document.querySelector(selector);
    thing.classList.add('showing');
  }

})();
