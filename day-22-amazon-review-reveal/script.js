// find height of first child of article, set height of article to that
//find height of last child, set post transition height there?
(function(){

var toggleButton = document.querySelector('.review-footer');
var reviewText = document.querySelector('.review');
var readMore = document.getElementById('readmore');
var readLess = document.getElementById('readless');
var hiddenText = false;
console.log(readMore);

var minHeightText = window.getComputedStyle(reviewText).height;
console.log(minHeightText);

toggleButton.addEventListener('click',function(){
  reviewText.classList.toggle('reveal');
  if (readLess){
    hiddenText = false;
  }else{
    hiddenText = true;
  }
  readMore.classList.toggle('disabled');
  readLess.classList.toggle('disabled');
});


})();
